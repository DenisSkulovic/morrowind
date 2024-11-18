import { ContentBase } from "../../entities/ContentBase";
import { WorldDataSource } from "../../data-source";
import { World } from "../../entities/World";
import { ItemSetCombinator, ItemSetEndObj } from "../../layer_1/item_sets/loader/types__item_sets"
import { Item } from "../../entities/Item/Item";

export class ItemSetService {

    private static _itemRepository = WorldDataSource.getRepository(Item);

    /**
     * Recursively generates items for an item set based on probabilities and conditions.
     * @param itemSet The item set definition
     * @returns Generated items
     */
    public static generateItemsFromSet(itemSet: any): Item[] {
        const generatedItems: Item[] = [];

        if (!itemSet || !itemSet.items || !Array.isArray(itemSet.items)) {
            return generatedItems;
        }

        for (const item of itemSet.items) {
            if (Math.random() <= (item.prob || 1)) {
                if (item.item_id) {
                    const generatedItem = this._generateItem(item);
                    if (generatedItem) {
                        generatedItems.push(generatedItem);
                    }
                } else if (item.items) {
                    if (item.condition === "AND") {
                        generatedItems.push(...this.generateItemsFromSet(item));
                    } else if (item.condition === "OR") {
                        const chosenItem = this._chooseRandom(item.items);
                        if (chosenItem) {
                            generatedItems.push(...this.generateItemsFromSet({ items: [chosenItem] }));
                        }
                    } else if (item.condition === "ANY") {
                        for (const subItem of item.items) {
                            if (Math.random() <= (subItem.prob || 1)) {
                                generatedItems.push(...this.generateItemsFromSet({ items: [subItem] }));
                            }
                        }
                    }
                }
            }
        }

        return generatedItems;
    }

    private static _generateItem(item: any): Item | null {
        const entity = this._itemRepository.create({ id: item.item_id });
        entity.quantity = this._calculateQuantity(item);
        return entity;
    }

    private static _calculateQuantity(item: any): number {
        const avg = item.avg_quan || 1;
        const stDev = item.st_dev || 0;
        const skew = item.skew || 0;

        const randomValue = this._skewedRandom(stDev, skew);
        return Math.max(1, Math.round(avg + randomValue));
    }

    private static _skewedRandom(stDev: number, skew: number): number {
        const u = Math.random();
        const v = Math.random();
        const z = Math.sqrt(-2.0 * Math.log(u)) * Math.cos(2.0 * Math.PI * v);
        return z * stDev + skew;
    }

    private static _chooseRandom(items: any[]): any | null {
        const totalProb = items.reduce((sum, item) => sum + (item.prob || 1), 0);
        let randomValue = Math.random() * totalProb;

        for (const item of items) {
            randomValue -= item.prob || 1;
            if (randomValue <= 0) {
                return item;
            }
        }

        return null;
    }
}
