import { ConditionEnum } from "../enum/ConditionEnum"
import { serializeEnum, deserializeEnum } from "../enum/util"
import { GenerationInstructionDTO, IdAndQuantDTO, SimpleProbDTO, ConditionEnumDTO, GaussianProbDTO, CombinatorDTO, GenerationInstructionsDTO } from "../proto/common_pb"
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
    const dto = new GenerationInstructionDTO();

    if (instruction instanceof IdAndQuant) {
        const idAndQuantDTO = new IdAndQuantDTO();
        idAndQuantDTO.setBlueprintid(instruction.blueprintId);
        idAndQuantDTO.setQuantity(instruction.quantity || 1);
        dto.setIdandquant(idAndQuantDTO);
    } else if (instruction instanceof ProbObject_Simple) {
        const simpleProbDTO = new SimpleProbDTO();
        simpleProbDTO.setCond(serializeEnum(ConditionEnum, ConditionEnumDTO, instruction.cond));
        const probMap = simpleProbDTO.getProbMap();
        Object.entries(instruction.prob).forEach(([key, value]) => {
            probMap.set(key, value);
        });
        dto.setSimpleprob(simpleProbDTO);
    } else if (instruction instanceof BlueprintGenInstruction_Gaussian) {
        const gaussianProbDTO = new GaussianProbDTO();
        gaussianProbDTO.setBlueprintid(instruction.blueprintId);
        gaussianProbDTO.setProb(instruction.prob || 1);
        gaussianProbDTO.setAvgquan(instruction.avg_quan || 1);
        gaussianProbDTO.setStdev(instruction.st_dev || 0);
        gaussianProbDTO.setSkew(instruction.skew || 0);
        dto.setGaussianprob(gaussianProbDTO);
    } else if (instruction instanceof BlueprintSetCombinator) {
        const combinatorDTO = new CombinatorDTO();
        combinatorDTO.setName(instruction.name || "");
        combinatorDTO.setProb(instruction.prob || 1);
        combinatorDTO.setCond(serializeEnum(ConditionEnum, ConditionEnumDTO, instruction.cond));
        combinatorDTO.setInstructionsList(instruction.items.map(serializeInstruction));
        dto.setCombinator(combinatorDTO);
    } else {
        throw new Error("Unknown GenerationInstruction type");
    }

    return dto;
}

export function deserializeInstruction(dto: GenerationInstructionDTO): GenerationInstruction {
    console.log(`[deserializeInstruction] instruction: `, dto)
    if (dto.getBlueprintid()) {
        return dto.getBlueprintid()
    }
    if (dto.hasIdandquant()) {
        const idAndQuant = dto.getIdandquant();
        return new IdAndQuant(idAndQuant!.getBlueprintid(), idAndQuant!.getQuantity());
    }
    if (dto.hasSimpleprob()) {
        const simpleProb = dto.getSimpleprob();
        return new ProbObject_Simple(
            deserializeEnum(ConditionEnumDTO, ConditionEnum, simpleProb!.getCond()),
            Object.fromEntries(simpleProb!.getProbMap().toArray())
        )
    }
    if (dto.hasGaussianprob()) {
        const gaussianProb = dto.getGaussianprob();
        return new BlueprintGenInstruction_Gaussian(
            gaussianProb!.getBlueprintid(),
            gaussianProb!.getProb(),
            gaussianProb!.getAvgquan(),
            gaussianProb!.getStdev(),
            gaussianProb!.getSkew()
        );
    }
    if (dto.hasCombinator()) {
        const combinator = dto.getCombinator();
        return new BlueprintSetCombinator(
            combinator!.getName(),
            combinator!.getProb(),
            deserializeEnum(ConditionEnumDTO, ConditionEnum, combinator!.getCond()),
            combinator!.getInstructionsList().map(deserializeInstruction)
        );
    }
    throw new Error("Unknown GenerationInstructionDTO type");
}

export const serializeGenerationInstructions = (instructions: GenerationInstruction[]): GenerationInstructionsDTO => {
    const dto = new GenerationInstructionsDTO();
    dto.setArrList(instructions.map(serializeInstruction));
    return dto;
};

export const deserializeGenerationInstructions = (dtoInstructions: GenerationInstructionsDTO): GenerationInstruction[] => {
    return dtoInstructions.getArrList().map(deserializeInstruction)
};