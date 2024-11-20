import { ItemSetCombinator, ItemGenInstruction, ItemSetInstruction } from "../../layer_1/types";
import { ItemGenerator } from "./ItemGenerator";
import { Item } from "../../entities/Content/Item/Item";

export class ItemSetGenerator {

    public static generateItemsFromSet(itemSetInstruction: ItemSetInstruction): Item[] {
        if (!itemSetInstruction || !itemSetInstruction.set || !Array.isArray(itemSetInstruction.set.items)) return [];

        return this._processCombinator(itemSetInstruction.set);
    }

    private static _processCombinator(combinator: ItemSetCombinator): Item[] {
        const generatedItems: Item[] = [];

        for (const item of combinator.items) {
            if (Math.random() > (item.prob || 1)) continue;  // Skip items that fail the probability check
            const instruction: ItemGenInstruction | null = ("item_blueprint_id" in item) ? item : null
            const nextCombinator: ItemSetCombinator | null = ("items" in item) ? item : null

            if (instruction) {
                const generatedItem: Item = ItemGenerator.generateItem(instruction);
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
                        const instruction: ItemGenInstruction | null = "item_blueprint_id" in chosenItem ? chosenItem : null
                        const nextCombinator: ItemSetCombinator | null = "items" in chosenItem ? chosenItem : null
                        if (nextCombinator) generatedItems.push(...this._processCombinator(nextCombinator))
                        else if (instruction) generatedItems.push(ItemGenerator.generateItem(instruction))
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

    private static _processAny(items: (ItemSetCombinator | ItemGenInstruction)[]): Item[] {
        const generatedItems: Item[] = [];
        for (const subItem of items) {
            if (Math.random() <= (subItem.prob || 1)) {
                const instruction: ItemGenInstruction | null = "item_blueprint_id" in subItem ? subItem : null
                const nextCombinator: ItemSetCombinator | null = "items" in subItem ? subItem : null

                if (nextCombinator) generatedItems.push(...this._processCombinator(nextCombinator))
                else if (instruction) generatedItems.push(ItemGenerator.generateItem(instruction))
            }
        }
        return generatedItems;
    }


    private static _chooseRandom(items: (ItemSetCombinator | ItemGenInstruction)[]): (ItemGenInstruction | ItemSetCombinator) | null {
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
