import { GenerationInstructionDTO, GenerationInstructionsDTO } from "../proto/common"
import { BlueprintGenInstruction_Simple, CombinatorCondition, GenerationInstruction, Probability_0_to_1 } from "../types"

export class IdAndQuant {
    blueprint_id: string
    quantity?: number
    clazz = "IdAndQuant"
    constructor(blueprint_id: string, quantity?: number) {
        this.blueprint_id = blueprint_id
        this.quantity = quantity
    }
    public static build(obj: any): IdAndQuant {
        return new IdAndQuant(obj.blueprint_id, obj.quantity)
    }
}

export class ProbObject_Simple {
    cond: CombinatorCondition
    prob: BlueprintGenInstruction_Simple
    clazz = "ProbObject_Simple"
    constructor(cond: CombinatorCondition, prob: BlueprintGenInstruction_Simple) {
        this.cond = cond
        this.prob = prob
    }
    public static build(obj: any): ProbObject_Simple {
        return new ProbObject_Simple(obj.cond, obj.prob)
    }
}

export class BlueprintGenInstruction_Gaussian {
    blueprint_id: string
    prob?: Probability_0_to_1 // 0-1, default 1
    avg_quan?: number // positive integer, default 1
    st_dev?: number // positive float, default 0
    skew?: number // positive float, default 0
    clazz = "BlueprintGenInstruction_Gaussian"
    constructor(blueprint_id: string, prob?: Probability_0_to_1, avg_quan?: number, st_dev?: number, skew?: number) {
        this.blueprint_id = blueprint_id
        this.prob = prob
        this.avg_quan = avg_quan
        this.st_dev = st_dev
        this.skew = skew
    }
    public static build(obj: any): BlueprintGenInstruction_Gaussian {
        return new BlueprintGenInstruction_Gaussian(obj.blueprint_id, obj.prob, obj.avg_quan, obj.st_dev, obj.skew)
    }
}

export class BlueprintSetCombinator {
    name: string
    prob: Probability_0_to_1 // 0-1, default 1
    cond: CombinatorCondition
    items: GenerationInstruction[]
    clazz = "BlueprintSetCombinator"
    constructor(name: string, prob: Probability_0_to_1, cond: CombinatorCondition, items: GenerationInstruction[]) {
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
        return { idsAndQuant: { idAndQuant: { [instruction.blueprint_id]: instruction.quantity || 1 } } };
    }
    if (instruction instanceof BlueprintGenInstruction_Gaussian) {
        return {
            gaussianProb: {
                blueprint_id: instruction.blueprint_id,
                prob: instruction.prob,
                avg_quan: instruction.avg_quan,
                st_dev: instruction.st_dev,
                skew: instruction.skew,
            },
        };
    }
    if (instruction instanceof BlueprintSetCombinator) {
        return {
            combinator: {
                name: instruction.name,
                prob: instruction.prob,
                cond: instruction.cond,
                instructions: instruction.items.map(serializeInstruction),
            },
        };
    }
    throw new Error("Unknown GenerationInstruction type");
}

export function deserializeInstruction(dto: GenerationInstructionDTO): GenerationInstruction {
    if (dto.idsAndQuant) {
        const [blueprint_id, quantity] = Object.entries(dto.idsAndQuant.idAndQuant)[0];
        return new IdAndQuant(blueprint_id, quantity);
    }
    if (dto.gaussianProb) {
        return BlueprintGenInstruction_Gaussian.build(dto.gaussianProb);
    }
    if (dto.combinator) {
        const { name, prob, cond, instructions } = dto.combinator;
        return BlueprintSetCombinator.build({
            name,
            prob,
            cond,
            items: instructions.map(deserializeInstruction),
        });
    }
    throw new Error("Unknown GenerationInstructionDTO type");
}

export const serializeGenerationInstructions = (instructions: GenerationInstruction[]) => { return { instructions: instructions.map(serializeInstruction) } };
export const deserializeGenerationInstructions = (dtoInstructions: GenerationInstructionsDTO) => {return dtoInstructions.instructions.map(deserializeInstruction)};