import { Injectable } from "@nestjs/common";
import { BlueprintGenInstruction_Gaussian, BlueprintSetCombinator, GenerationInstruction, IdAndQuant, ProbObject_Simple } from "../../../class/GenerationInstruction";
import { ConditionEnum } from "../../../common/enum/ConditionEnum";
import { BlueprintGenInstruction_Simple } from "../../../types";

export interface IInstructionProcessorService {
    processInstruction(instruction: GenerationInstruction): IdAndQuant[]

}

@Injectable()
export class InstructionProcessorService implements IInstructionProcessorService {

    constructor(

    ) { }

    /**
     * Process and unify instruction formats into IdAndQuant
     */
    public processInstruction(instruction: GenerationInstruction): IdAndQuant[] {
        console.log(`[processInstruction] instruction`, instruction)
        if (typeof instruction === "string") {
            console.log(`[processInstruction] case string`)
            return [new IdAndQuant(instruction, 1)]
        } else if (instruction.clazz === "IdAndQuant") {
            console.log(`[processInstruction] case IdAndQuant`)
            return [IdAndQuant.build(instruction)]
        } else if (instruction.clazz === "ProbObject_Simple") {
            console.log(`[processInstruction] case ProbObject_Simple`)
            return this._processProbSimple(ProbObject_Simple.build(instruction))
        } else if (instruction.clazz === "BlueprintGenInstruction_Gaussian") {
            console.log(`[processInstruction] case BlueprintGenInstruction_Gaussian`)
            const idAndQuant: IdAndQuant | null = this._processProbGaussian(BlueprintGenInstruction_Gaussian.build(instruction))
            const arr: IdAndQuant[] = []
            if (idAndQuant) arr.push(idAndQuant)
            return arr
        } else if (instruction.clazz === "BlueprintSetCombinator") {
            console.log(`[processInstruction] case BlueprintSetCombinator`)
            return this._processCombinator(BlueprintSetCombinator.build(instruction))
        } else {
            console.log(`error instruction: `, instruction)
            throw new Error("got into 'else' of 'generateMany', and that should not be possible")
        }
    }




    private _processProbOr(instruction: BlueprintGenInstruction_Simple): string | undefined {
        const totalProb = Object.values(instruction).reduce((sum, prob) => sum + prob, 0);
        let randomValue = Math.random() * totalProb;

        for (const [key, prob] of Object.entries(instruction)) {
            randomValue -= prob;
            if (randomValue <= 0) {
                return key
            };
        }
    }

    private _processProbAny(instruction: BlueprintGenInstruction_Simple) {
        const resArr = []
        for (const [blueprintId, prob] of Object.entries(instruction)) {
            if (Math.random() <= prob) {
                resArr.push(blueprintId)
            }
        }
        return resArr
    }



    private _getSkewedRandom(stDev: number, skew: number): number {
        if (stDev === 0) return 0 // exit before any unnecessary computations
        const u = Math.random();
        const v = Math.random();
        const z = Math.sqrt(-2.0 * Math.log(u)) * Math.cos(2.0 * Math.PI * v);
        return z * stDev + skew;
    }



    public _processAny(items: GenerationInstruction[]): GenerationInstruction[] {
        console.log(`[_processAny] items`, items)
        const instructions: GenerationInstruction[] = [];
        const wrappedInstructions = items.map(inst => {
            if (inst instanceof BlueprintSetCombinator || inst instanceof BlueprintGenInstruction_Gaussian) {
                return { inst, prob: inst.prob || 1 }
            } else {
                return { inst, prob: 1 }
            }
        })
        for (const subItem of wrappedInstructions) {
            if (Math.random() <= (subItem.prob || 1)) {
                if (subItem instanceof BlueprintSetCombinator) instructions.push(...this._processCombinator(subItem))
                else if (subItem) instructions.push(subItem.inst)
            }
        }
        return instructions;
    }


    public _chooseRandom(items: GenerationInstruction[]): GenerationInstruction | null {
        const wrappedItems = items.map(item => {
            if (item instanceof BlueprintSetCombinator || item instanceof BlueprintGenInstruction_Gaussian) {
                return { item, prob: item.prob || 1 }
            }
            else {
                return { item, prob: 1 }
            }
        })
        const totalProb = wrappedItems.reduce((sum, wrappedItem) => sum + (wrappedItem.prob || 1), 0);
        let randomValue = Math.random() * totalProb;

        for (const wrappedItem of wrappedItems) {
            randomValue -= wrappedItem.prob || 1;
            if (randomValue <= 0) {
                return wrappedItem.item;
            }
        }

        return null;
    }

    private _processProbSimple(
        instruction: ProbObject_Simple,
    ): IdAndQuant[] {
        const res: IdAndQuant[] = [];

        switch (instruction.cond) {
            case (ConditionEnum.CONDITION_OR): {
                const blueprintId: string | undefined = this._processProbOr(instruction.prob)
                if (blueprintId) res.push(IdAndQuant.build({ blueprintId }))
                break;
            }
            case (ConditionEnum.CONDITION_AND): // not sure if there is any difference between AND and ANY, will keep both for now
            case (ConditionEnum.CONDITION_ANY): {
                const blueprintIds: string[] = this._processProbAny(instruction.prob)
                blueprintIds.forEach((blueprintId) => {
                    res.push(IdAndQuant.build({ blueprintId }))
                })
                break;
            }
        }

        return res;
    }

    private _processProbGaussian(
        instruction: BlueprintGenInstruction_Gaussian
    ): IdAndQuant | null {
        // IMPORTANT gaussian has a field for probability, but I decided to use it for Combinator, so if you process a Gaussian separately, its prob field is ignored. I mean, if you want to generate a Gaussian item with a prob, use a combinator with condition ANY, and set 1 nested child with prob set to 0.3. The prob will be handled by the combinator
        console.log(`[InstructionProcessor - _processProbGaussian] instruction`, instruction)
        const avg = instruction.avg_quan || 1;
        const stDev = instruction.st_dev || 0;
        const skew = instruction.skew || 0;

        const randomValue = this._getSkewedRandom(stDev, skew);
        const quantity = Math.max(1, Math.round(avg + randomValue));
        console.log(`[InstructionProcessor - _processProbGaussian] quantity`, quantity)
        return IdAndQuant.build({ blueprintId: instruction.blueprintId, quantity })
    }

    private _processCombinator(combinator: BlueprintSetCombinator): IdAndQuant[] {
        const instructions: IdAndQuant[] = [];

        for (const item of combinator.items) {
            if (item instanceof BlueprintSetCombinator) {
                if (Math.random() > (item.prob || 1)) continue;  // Skip items that fail the probability check
                switch (item.cond) {
                    case (ConditionEnum.CONDITION_OR): {
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
                    case (ConditionEnum.CONDITION_ANY): {
                        const arr: GenerationInstruction[] = this._processAny(item.items)
                        arr.forEach(inst => {
                            this.processInstruction(inst).forEach(idAndQuant => {
                                instructions.push(idAndQuant)
                            })
                        })
                        break;
                    }
                    case (ConditionEnum.CONDITION_AND): {
                        const arr: IdAndQuant[] = this._processCombinator(item)
                        arr.forEach((idAndQuant) => instructions.push(idAndQuant))
                        break;
                    }
                    default:
                        throw new Error(`Unsupported condition: ${item.cond}`);
                }
            } else {
                this.processInstruction(item).forEach((res) => {
                    instructions.push(res)
                })
            }
        }

        return instructions;
    }

}