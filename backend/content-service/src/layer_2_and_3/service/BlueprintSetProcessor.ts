import { BlueprintSetCombinator, BlueprintGenInstruction_Gaussian, BlueprintSetInstruction } from "../../layer_1/types";

export class BlueprintSetProcessor {
    // ###########################
    // PUBLIC
    // ###########################

    public static getInstructionsFromSet(BlueprintSetInstruction: BlueprintSetInstruction): BlueprintGenInstruction_Gaussian[] {
        if (!BlueprintSetInstruction || !BlueprintSetInstruction.set || !Array.isArray(BlueprintSetInstruction.set.items)) return [];

        return this._processCombinator(BlueprintSetInstruction.set);
    }

    // ###########################
    // PRIVATE
    // ###########################

    private static _processCombinator(combinator: BlueprintSetCombinator): BlueprintGenInstruction_Gaussian[] {
        const instructions: BlueprintGenInstruction_Gaussian[] = [];

        for (const item of combinator.items) {
            if (Math.random() > (item.prob || 1)) continue;  // Skip items that fail the probability check
            const instruction: BlueprintGenInstruction_Gaussian | null = ("blueprint_id" in item) ? item : null
            const nextCombinator: BlueprintSetCombinator | null = ("items" in item) ? item : null

            if (instruction) {
                instructions.push(instruction);
            } else if (nextCombinator) {
                switch (nextCombinator.cond) {
                    case ("AND"): {
                        instructions.push(...this._processCombinator(nextCombinator));
                        break;
                    }
                    case ("OR"): {
                        const chosenItem: BlueprintGenInstruction_Gaussian | BlueprintSetCombinator | null = this._chooseRandom(nextCombinator.items);
                        if (!chosenItem) break
                        const instruction: BlueprintGenInstruction_Gaussian | null = "blueprint_id" in chosenItem ? chosenItem : null
                        const nextCombinator: BlueprintSetCombinator | null = "items" in chosenItem ? chosenItem : null
                        if (nextCombinator) instructions.push(...this._processCombinator(nextCombinator))
                        else if (instruction) instructions.push(instruction)
                        break;
                    }
                    case ("ANY"): {
                        instructions.push(...this._processAny(nextCombinator.items));
                        break;
                    }
                    default:
                        throw new Error(`Unsupported condition: ${nextCombinator.cond}`);
                }
            }
        }

        return instructions;
    }

    private static _processAny(items: (BlueprintSetCombinator | BlueprintGenInstruction_Gaussian)[]): BlueprintGenInstruction_Gaussian[] {
        const instructions: BlueprintGenInstruction_Gaussian[] = [];
        for (const subItem of items) {
            if (Math.random() <= (subItem.prob || 1)) {
                const instruction: BlueprintGenInstruction_Gaussian | null = "blueprint_id" in subItem ? subItem : null
                const nextCombinator: BlueprintSetCombinator | null = "items" in subItem ? subItem : null

                if (nextCombinator) instructions.push(...this._processCombinator(nextCombinator))
                else if (instruction) instructions.push(instruction)
            }
        }
        return instructions;
    }


    private static _chooseRandom(items: (BlueprintSetCombinator | BlueprintGenInstruction_Gaussian)[]): (BlueprintGenInstruction_Gaussian | BlueprintSetCombinator) | null {
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
