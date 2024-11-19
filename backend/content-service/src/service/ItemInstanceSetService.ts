import { DataSource, Repository } from "typeorm";
import * as entC from "../entities/Content";
import { ItemSetCombinator, ItemGenInstruction } from "../layer_1/types";
import { ItemInstanceService } from "./ItemInstanceService";

export class ItemInstanceSetService {
    dataSource: DataSource
    itemRepository: Repository<entC.Item>
    itemInstanceService: ItemInstanceService

    constructor(dataSource: DataSource) {
        this.dataSource = dataSource
        this.itemRepository = dataSource.getRepository(entC.Item);
        this.itemInstanceService = new ItemInstanceService(dataSource)
    }

    /**
     * Generates an array of items based on an item set.
     */
    public generateItemsFromSet(itemSet: entC.ItemSet): entC.Item[] {
        if (!itemSet || !itemSet.set || !Array.isArray(itemSet.set.items)) return [];

        return this._processCombinator(itemSet.set);
    }

    /**
     * Recursively processes an item set definition.
     */
    private _processCombinator(combinator: ItemSetCombinator): entC.Item[] {
        const generatedItems: entC.Item[] = [];

        for (const item of combinator.items) {
            if (Math.random() > (item.prob || 1)) continue;  // Skip items that fail the probability check
            const endObj: ItemGenInstruction | null = ("item_id" in item) ? item : null
            const nextCombinator: ItemSetCombinator | null = ("items" in item) ? item : null

            if (endObj) {
                const generatedItem: entC.Item = this.itemInstanceService.generateItem(endObj, this._calcQuant(endObj));
                generatedItems.push(generatedItem);
            } else if (nextCombinator) {
                switch (nextCombinator.condition) {
                    case ("AND"): {
                        generatedItems.push(...this._processCombinator(nextCombinator));
                        break;
                    }
                    case ("OR"): {
                        const chosenItem: ItemGenInstruction | ItemSetCombinator | null = this._chooseRandom(nextCombinator.items);
                        if (!chosenItem) break
                        const endObj: ItemGenInstruction | null = "item_id" in chosenItem ? chosenItem : null
                        const nextCombinator: ItemSetCombinator | null = "items" in chosenItem ? chosenItem : null
                        if (nextCombinator) generatedItems.push(...this._processCombinator(nextCombinator))
                        else if (endObj) generatedItems.push(this.itemInstanceService.generateItem(endObj, this._calcQuant(endObj)))
                        break;
                    }
                    case ("ANY"): {
                        generatedItems.push(...this._processAny(nextCombinator.items));
                        break;
                    }
                    default:
                        throw new Error(`Unsupported condition: ${nextCombinator.condition}`);
                }
            }
        }

        return generatedItems;
    }

    /**
     * Processes "ANY" condition for item sets.
     */
    private _processAny(items: (ItemSetCombinator | ItemGenInstruction)[]): entC.Item[] {
        const generatedItems: entC.Item[] = [];
        for (const subItem of items) {
            if (Math.random() <= (subItem.prob || 1)) {
                const endObj: ItemGenInstruction | null = "item_id" in subItem ? subItem : null
                const nextCombinator: ItemSetCombinator | null = "items" in subItem ? subItem : null

                if (nextCombinator) generatedItems.push(...this._processCombinator(nextCombinator))
                else if (endObj) generatedItems.push(this.itemInstanceService.generateItem(endObj, this._calcQuant(endObj)))
            }
        }
        return generatedItems;
    }

    /**
     * Calculates the quantity of an item based on its statistical properties.
     */
    private _calcQuant(item: ItemGenInstruction): number {
        const avg = item.avg_quan || 1;
        const stDev = item.st_dev || 0;
        const skew = item.skew || 0;

        const randomValue = this._skewedRandom(stDev, skew);
        return Math.max(1, Math.round(avg + randomValue));
    }

    /**
     * Generates a random number with optional skew and standard deviation.
     */
    private _skewedRandom(stDev: number, skew: number): number {
        if (stDev === 0) return 0 // exit before any unnecessary computations
        const u = Math.random();
        const v = Math.random();
        const z = Math.sqrt(-2.0 * Math.log(u)) * Math.cos(2.0 * Math.PI * v);
        return z * stDev + skew;
    }

    /**
     * Randomly selects an item based on probability weights.
     */
    private _chooseRandom(items: (ItemSetCombinator | ItemGenInstruction)[]): (ItemGenInstruction | ItemSetCombinator) | null {
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
