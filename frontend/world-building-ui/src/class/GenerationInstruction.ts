import { ConditionEnum } from "../enum/ConditionEnum"
import { serializeEnum, deserializeEnum } from "../enum/util"
import { common } from "../proto/common";
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


export function serializeInstruction(instruction: GenerationInstruction): common.GenerationInstructionDTO {
    const genDTO = new common.GenerationInstructionDTO();
    if (instruction instanceof IdAndQuant) {
        const dto = new common.IdAndQuantDTO();
        dto.blueprintId = instruction.blueprintId;
        dto.quantity = instruction.quantity || 1;
        genDTO.idAndQuant = dto;
        return genDTO
    }
    if (instruction instanceof ProbObject_Simple) {
        const dto = new common.SimpleProbDTO();
        dto.cond = serializeEnum(ConditionEnum, common.ConditionEnumDTO, instruction.cond);
        const probMap = new Map<string, number>();
        probMap.set(instruction.prob.blueprintId, instruction.prob.probability);
        dto.prob = probMap;
        genDTO.simpleProb = dto;
        return genDTO;
    }
    if (instruction instanceof BlueprintGenInstruction_Gaussian) {
        const dto = new common.GaussianProbDTO();
        dto.blueprintId = instruction.blueprintId;
        dto.prob = instruction.prob || 1;
        dto.avgQuan = instruction.avg_quan || 1;
        dto.stDev = instruction.st_dev || 0;
        dto.skew = instruction.skew || 0;
        genDTO.gaussianProb = dto;
        return genDTO;
    }
    if (instruction instanceof BlueprintSetCombinator) {
        const dto = new common.CombinatorDTO();
        dto.name = instruction.name || "";
        dto.prob = instruction.prob || 1;
        dto.cond = serializeEnum(ConditionEnum, common.ConditionEnumDTO, instruction.cond);
        dto.instructions = instruction.items.map(serializeInstruction);
        genDTO.combinator = dto;
        return genDTO;
    }
    throw new Error("Unknown GenerationInstruction type");
}

export function deserializeInstruction(dto: common.GenerationInstructionDTO): GenerationInstruction {
    console.log(`[deserializeInstruction] instruction: `, dto)
    if (dto.blueprintId) {
        return dto.blueprintId
    }
    if (dto.idAndQuant) {
        const idAndQuant = dto.idAndQuant;
        return new IdAndQuant(idAndQuant.blueprintId, idAndQuant.quantity);
    }
    if (dto.simpleProb) {
        const simpleProb = dto.simpleProb;
        return new ProbObject_Simple(
            deserializeEnum(common.ConditionEnumDTO, ConditionEnum, simpleProb.cond),
            simpleProb.prob
        )
    }
    if (dto.gaussianProb) {
        const gaussianProb = dto.gaussianProb;
        return new BlueprintGenInstruction_Gaussian(
            gaussianProb.blueprintId,
            gaussianProb.prob,
            gaussianProb.avgQuan,
            gaussianProb.stDev,
            gaussianProb.skew
        );
    }
    if (dto.combinator) {
        const combinator = dto.combinator;
        return new BlueprintSetCombinator(
            combinator.name,
            combinator.prob,
            deserializeEnum(common.ConditionEnumDTO, ConditionEnum, combinator.cond),
            combinator.instructions.map(deserializeInstruction),
        );
    }
    throw new Error("Unknown GenerationInstructionDTO type");
}

export const serializeGenerationInstructions = (instructions: GenerationInstruction[]): common.GenerationInstructionsDTO => {
    const dto = new common.GenerationInstructionsDTO({});
    dto.arr = instructions.map(serializeInstruction);
    return dto;
};

export const deserializeGenerationInstructions = (dtoInstructions: common.GenerationInstructionsDTO): GenerationInstruction[] => {
    return dtoInstructions.arr.map(deserializeInstruction)
};