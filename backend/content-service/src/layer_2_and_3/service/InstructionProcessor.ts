import { BlueprintGenInstruction_Gaussian, BlueprintSetCombinator, IdAndQuant, ProbObject_Simple } from "../../class/blueprint_id_and_prob";
import { BlueprintGenInstruction_Simple, BlueprintSetInstruction, GenerationInstruction } from "../../types";

export class InstructionProcessor {

    /**
     * Process and unify instruction formats into IdAndQuant
     */
    public static processInstruction(instruction: GenerationInstruction): IdAndQuant[] {
        if (typeof instruction === "string") {
            return [IdAndQuant.build({ blueprint_id: instruction, quantity: 1 })]
        } else if (instruction instanceof IdAndQuant) {
            return [instruction]
        } else if (instruction instanceof ProbObject_Simple) {
            return this._processProbSimple(instruction)
        } else if (instruction instanceof BlueprintGenInstruction_Gaussian) {
            return [this._processProbGaussian(instruction)]
        } else if (instruction instanceof BlueprintSetCombinator) {
            return this._processCombinator(instruction)
        } else throw new Error("got into 'else' of 'generateMany', and that should not be possible")
    }




    private static _processProbOr(instruction: BlueprintGenInstruction_Simple): string | undefined {
        const totalProb = Object.values(instruction.prob).reduce((sum, prob) => sum + prob, 0);
        let randomValue = Math.random() * totalProb;

        for (const [key, prob] of Object.entries(instruction.prob)) {
            randomValue -= prob;
            if (randomValue <= 0) {
                return key
            };
        }
    }

    private static _processProbAny(instruction: BlueprintGenInstruction_Simple) {
        const resArr = []
        for (const [blueprintId, prob] of Object.entries(instruction.prob)) {
            if (Math.random() <= prob) {
                resArr.push(blueprintId)
            }
        }
        return resArr
    }



    private static _getSkewedRandom(stDev: number, skew: number): number {
        if (stDev === 0) return 0 // exit before any unnecessary computations
        const u = Math.random();
        const v = Math.random();
        const z = Math.sqrt(-2.0 * Math.log(u)) * Math.cos(2.0 * Math.PI * v);
        return z * stDev + skew;
    }



    public static _processAny(items: (BlueprintSetCombinator | BlueprintGenInstruction_Gaussian)[]): GenerationInstruction[] {
        const instructions: BlueprintGenInstruction_Gaussian[] = [];
        for (const subItem of items) {
            if (Math.random() <= (subItem.prob || 1)) {
                if (subItem instanceof BlueprintSetCombinator) instructions.push(...this._processCombinator(subItem))
                else if (subItem) instructions.push(subItem)
            }
        }
        return instructions;
    }


    public static _chooseRandom(items: (BlueprintSetCombinator | BlueprintGenInstruction_Gaussian)[]): GenerationInstruction | null {
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

    private static _processProbSimple(
        instruction: ProbObject_Simple,
    ): IdAndQuant[] {
        const res: IdAndQuant[] = [];

        switch (instruction.cond) {
            case "OR": {
                const blueprint_id: string | undefined = this._processProbOr(instruction.prob)
                if (blueprint_id) res.push(IdAndQuant.build({ blueprint_id }))
                break;
            }
            case "AND": // not sure if there is any difference between AND and ANY, will keep both for now
            case "ANY": {
                const blueprintIds: string[] = this._processProbAny(instruction.prob)
                blueprintIds.forEach((blueprint_id) => {
                    res.push(IdAndQuant.build({ blueprint_id }))
                })
                break;
            }
        }

        return res;
    }

    private static _processProbGaussian(
        instruction: BlueprintGenInstruction_Gaussian
    ): IdAndQuant {
        const avg = instruction.avg_quan || 1;
        const stDev = instruction.st_dev || 0;
        const skew = instruction.skew || 0;

        const randomValue = this._getSkewedRandom(stDev, skew);
        const quantity = Math.max(1, Math.round(avg + randomValue));
        return IdAndQuant.build({ blueprint_id: instruction.blueprint_id, quantity })
    }

    private static _processCombinator(combinator: BlueprintSetCombinator): IdAndQuant[] {
        const instructions: IdAndQuant[] = [];

        for (const item of combinator.items) {
            if (item instanceof BlueprintSetCombinator) {
                if (Math.random() > (item.prob || 1)) continue;  // Skip items that fail the probability check
                switch (item.cond) {
                    case ("AND"): {
                        instructions.push(...this._processCombinator(item));
                        break;
                    }
                    case ("OR"): {
                        const chosenItem: GenerationInstruction | null = this._chooseRandom(item.items);
                        if (!chosenItem) break
                        if (chosenItem instanceof BlueprintSetCombinator) instructions.push(...this._processCombinator(chosenItem))
                        else if (chosenItem) {
                            this.processInstruction(chosenItem).forEach((res) => {
                                instructions.push(res)
                            })
                        }
                        break;
                    }
                    case ("ANY"): {
                        instructions.push(...this._processAny(item.items));
                        break;
                    }
                    default:
                        throw new Error(`Unsupported condition: ${item.cond}`);
                }
            } else {
                instructions.push(item);
            }
        }

        return instructions;
    }

}