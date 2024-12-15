import { ConditionEnum } from "../common/enum/ConditionEnum"
import { deserializeEnum, serializeEnum } from "../common/enum/util"
import { ConditionEnumDTO, GenerationInstructionDTO, GenerationInstructionsDTO } from "../proto/common"
import { BlueprintGenInstruction_Simple, Probability_0_to_1 } from "../types"


export type GenerationInstruction = string | IdAndQuant | ProbObject_Simple | BlueprintGenInstruction_Gaussian | BlueprintSetCombinator


export class IdAndQuant {
    blueprintId: string
    quantity?: number
    clazz = "IdAndQuant"
    constructor(blueprintId: string, quantity?: number) {
        this.blueprintId = blueprintId
        this.quantity = quantity
    }
    public static build(obj: any): IdAndQuant {
        return new IdAndQuant(obj.blueprintId, obj.quantity)
    }
}

export class ProbObject_Simple {
    cond: ConditionEnum
    prob: BlueprintGenInstruction_Simple
    clazz = "ProbObject_Simple"
    constructor(cond: ConditionEnum, prob: BlueprintGenInstruction_Simple) {
        this.cond = cond
        this.prob = prob
    }
    public static build(obj: any): ProbObject_Simple {
        return new ProbObject_Simple(obj.cond, obj.prob)
    }
}

export class BlueprintGenInstruction_Gaussian {
    blueprintId: string
    prob?: Probability_0_to_1 // 0-1, default 1
    avg_quan?: number // positive integer, default 1
    st_dev?: number // positive float, default 0
    skew?: number // positive float, default 0
    clazz = "BlueprintGenInstruction_Gaussian"
    constructor(blueprintId: string, prob?: Probability_0_to_1, avg_quan?: number, st_dev?: number, skew?: number) {
        this.blueprintId = blueprintId
        this.prob = prob
        this.avg_quan = avg_quan
        this.st_dev = st_dev
        this.skew = skew
    }
    public static build(obj: any): BlueprintGenInstruction_Gaussian {
        return new BlueprintGenInstruction_Gaussian(obj.blueprintId, obj.prob, obj.avg_quan, obj.st_dev, obj.skew)
    }
}

export class BlueprintSetCombinator {
    name?: string
    prob?: Probability_0_to_1 // 0-1, default 1
    cond: ConditionEnum
    items: GenerationInstruction[]
    clazz = "BlueprintSetCombinator"
    constructor(name: string | undefined, prob: Probability_0_to_1 | undefined, cond: ConditionEnum, items: GenerationInstruction[]) {
        this.name = name
        this.prob = prob
        this.cond = cond
        this.items = items
    }
    public static build(obj: any): BlueprintSetCombinator {
        return new BlueprintSetCombinator(obj.name, obj.prob, obj.cond, obj.items)
    }
}


export function serializeInstruction(instruction: GenerationInstruction): GenerationInstructionDTO {
    if (instruction instanceof IdAndQuant) {
        return {
            idAndQuant: {
                blueprintId: instruction.blueprintId,
                quantity: instruction.quantity || 1
            }
        };
    }
    if (instruction instanceof BlueprintGenInstruction_Gaussian) {
        return {
            gaussianProb: {
                blueprintId: instruction.blueprintId,
                prob: instruction.prob || 1,
                avgQuan: instruction.avg_quan || 1,
                stDev: instruction.st_dev || 0,
                skew: instruction.skew || 0,
                clazz: "BlueprintGenInstruction_Gaussian"
            },
        };
    }
    if (instruction instanceof BlueprintSetCombinator) {
        return {
            combinator: {
                name: instruction.name || "",
                prob: instruction.prob || 1,
                cond: serializeEnum(ConditionEnum, ConditionEnumDTO, instruction.cond),
                instructions: instruction.items.map(serializeInstruction),
                clazz: "BlueprintSetCombinator"
            },
        };
    }
    throw new Error("Unknown GenerationInstruction type");
}

export function deserializeInstruction(dto: GenerationInstructionDTO): GenerationInstruction {
    console.log(`[deserializeInstruction] instruction: `, dto)
    if (dto.blueprintId) {
        return dto.blueprintId
    }
    if (dto.idAndQuant) {
        return new IdAndQuant(dto.idAndQuant.blueprintId, dto.idAndQuant.quantity);
    }
    if (dto.simpleProb) {
        return new ProbObject_Simple(
            deserializeEnum(ConditionEnumDTO, ConditionEnum, dto.simpleProb.cond),
            dto.simpleProb.prob
        )
    }
    if (dto.gaussianProb) {
        return new BlueprintGenInstruction_Gaussian(
            dto.gaussianProb.blueprintId,
            dto.gaussianProb.prob,
            dto.gaussianProb.avgQuan,
            dto.gaussianProb.stDev,
            dto.gaussianProb.skew
        );
    }
    if (dto.combinator) {
        const { name, prob, cond, instructions } = dto.combinator;
        return new BlueprintSetCombinator(
            name,
            prob,
            deserializeEnum(ConditionEnumDTO, ConditionEnum, cond),
            instructions.map(deserializeInstruction),
        );
    }
    throw new Error("Unknown GenerationInstructionDTO type");
}

export const serializeGenerationInstructions = (instructions: GenerationInstruction[]): GenerationInstructionsDTO => {
    return { arr: instructions.map(serializeInstruction) }
};
export const deserializeGenerationInstructions = (dtoInstructions: GenerationInstructionsDTO): GenerationInstruction[] => {
    return dtoInstructions.arr.map(deserializeInstruction)
};