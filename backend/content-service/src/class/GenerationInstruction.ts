import { ConditionEnum } from "../common/enum/ConditionEnum"
import { deserializeEnum, serializeEnum } from "../common/enum/util"
import { ConditionEnumDTO, GenerationInstructionDTO, GenerationInstructionsDTO } from "../proto/entities"
import { BlueprintGenInstruction_Simple, Probability_0_to_1 } from "../types"
import {
    createUnionType,
    Field as GQLField,
    ID as GQLID,
    ObjectType as GQLObjectType,
} from "@nestjs/graphql";


export const GenerationInstructionGQLUnion = createUnionType({
    name: "GenerationInstructionUnion",
    types: () => [IdAndQuant, ProbObject_Simple, BlueprintGenInstruction_Gaussian, BlueprintSetCombinator],
    resolveType: (value) => {
        if (value instanceof IdAndQuant) return IdAndQuant
        if (value instanceof ProbObject_Simple) return ProbObject_Simple
        if (value instanceof BlueprintGenInstruction_Gaussian) return BlueprintGenInstruction_Gaussian
        if (value instanceof BlueprintSetCombinator) return BlueprintSetCombinator
        return null
    }
})

export type GenerationInstruction = string | IdAndQuant | ProbObject_Simple | BlueprintGenInstruction_Gaussian | BlueprintSetCombinator

@GQLObjectType()
export class IdAndQuant {
    @GQLField()
    blueprintId: string
    @GQLField()
    quantity?: number
    @GQLField()
    clazz = "IdAndQuant"
    constructor(blueprintId: string, quantity?: number) {
        this.blueprintId = blueprintId
        this.quantity = quantity
    }
    public static build(obj: any): IdAndQuant {
        return new IdAndQuant(obj.blueprintId, obj.quantity)
    }
}

@GQLObjectType()
export class ProbObject_Simple {
    @GQLField(() => ConditionEnum)
    cond: ConditionEnum
    @GQLField(() => GenerationInstructionGQLUnion)
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

@GQLObjectType()
export class BlueprintGenInstruction_Gaussian {
    @GQLField()
    blueprintId: string
    @GQLField()
    prob?: Probability_0_to_1 // 0-1, default 1
    @GQLField()
    avg_quan?: number // positive integer, default 1
    @GQLField()
    st_dev?: number // positive float, default 0
    @GQLField()
    skew?: number // positive float, default 0
    @GQLField(() => GenerationInstructionGQLUnion)
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

@GQLObjectType()
export class BlueprintSetCombinator {
    @GQLField()
    name?: string
    @GQLField()
    prob?: Probability_0_to_1 // 0-1, default 1
    @GQLField(() => ConditionEnum)
    cond: ConditionEnum
    @GQLField(() => [GenerationInstructionGQLUnion])
    items: GenerationInstruction[]
    @GQLField()
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


export function serializeInstruction(instruction?: GenerationInstruction): GenerationInstructionDTO | undefined {
    if (!instruction) return undefined
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
        const instructions = []
        for (const item of instruction.items) {
            const serializedItem: GenerationInstructionDTO | undefined = serializeInstruction(item)
            if (serializedItem) instructions.push(serializedItem)
        }
        return {
            combinator: {
                name: instruction.name || "",
                prob: instruction.prob || 1,
                cond: serializeEnum(ConditionEnum, ConditionEnumDTO, instruction.cond),
                instructions,
                clazz: "BlueprintSetCombinator"
            },
        };
    }
    throw new Error("Unknown GenerationInstruction type");
}

export function deserializeInstruction(dto?: GenerationInstructionDTO): GenerationInstruction | undefined {
    if (!dto) return undefined
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
        const items: GenerationInstruction[] = []
        for (const item of instructions) {
            const deserializedItem: GenerationInstruction | undefined = deserializeInstruction(item)
            if (deserializedItem) items.push(deserializedItem)
        }
        return new BlueprintSetCombinator(
            name,
            prob,
            deserializeEnum(ConditionEnumDTO, ConditionEnum, cond),
            items,
        );
    }
    throw new Error("Unknown GenerationInstructionDTO type");
}

export const serializeGenerationInstructions = (instructions: GenerationInstruction[]): GenerationInstructionsDTO => {
    const serializedInstructions: GenerationInstructionDTO[] = []
    for (const item of instructions) {
        const serializedItem: GenerationInstructionDTO | undefined = serializeInstruction(item)
        if (serializedItem) serializedInstructions.push(serializedItem)
    }
    return { arr: serializedInstructions }
};
export const deserializeGenerationInstructions = (dtoInstructions: GenerationInstructionsDTO): GenerationInstruction[] => {
    const items: GenerationInstruction[] = []
    for (const item of dtoInstructions.arr) {
        const deserializedItem: GenerationInstruction | undefined = deserializeInstruction(item)
        if (deserializedItem) items.push(deserializedItem)
    }
    return items
};