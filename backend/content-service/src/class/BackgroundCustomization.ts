import { Serializable } from "../decorator/serializable.decorator";
import { BackgroundCustomizationDTO } from "../proto/common";
import { Serializer } from "../serializer";
import { GenerationInstruction, serializeInstruction, serializeGenerationInstructions, deserializeInstruction, deserializeGenerationInstructions } from "./GenerationInstruction";

export class BackgroundCustomization {
    @Serializable()
    clazz = "BackgroundCustomization"

    @Serializable({ serialize: serializeInstruction, deserialize: deserializeInstruction })
    gender?: GenerationInstruction

    @Serializable({ serialize: serializeGenerationInstructions, deserialize: deserializeGenerationInstructions })
    faction?: GenerationInstruction[]

    @Serializable({ serialize: serializeGenerationInstructions, deserialize: deserializeGenerationInstructions })
    disease?: GenerationInstruction[]

    @Serializable({ serialize: serializeGenerationInstructions, deserialize: deserializeGenerationInstructions })
    addiction?: GenerationInstruction[]

    @Serializable({ serialize: serializeGenerationInstructions, deserialize: deserializeGenerationInstructions })
    profession?: GenerationInstruction[]

    @Serializable({ serialize: serializeGenerationInstructions, deserialize: deserializeGenerationInstructions })
    race?: GenerationInstruction[]

    @Serializable({ serialize: serializeGenerationInstructions, deserialize: deserializeGenerationInstructions })
    religion?: GenerationInstruction[]

    @Serializable({ serialize: serializeGenerationInstructions, deserialize: deserializeGenerationInstructions })
    personality?: GenerationInstruction[]

    @Serializable({ serialize: serializeGenerationInstructions, deserialize: deserializeGenerationInstructions })
    items?: GenerationInstruction[]

    @Serializable({ serialize: serializeGenerationInstructions, deserialize: deserializeGenerationInstructions })
    itemSets?: GenerationInstruction[]

    @Serializable({ serialize: serializeGenerationInstructions, deserialize: deserializeGenerationInstructions })
    pastExpChild?: GenerationInstruction[]

    @Serializable({ serialize: serializeGenerationInstructions, deserialize: deserializeGenerationInstructions })
    pastExpAdult?: GenerationInstruction[]

    @Serializable({ serialize: serializeGenerationInstructions, deserialize: deserializeGenerationInstructions })
    memoryPools?: GenerationInstruction[]

    @Serializable({ serialize: serializeGenerationInstructions, deserialize: deserializeGenerationInstructions })
    skillSets?: GenerationInstruction[]

    @Serializable({
        serialize: (val) => { return { skillAdjustments: val.skillAdjustments } },
        deserialize: (val) => val.skillAdjustments,
    })
    skillAdjustments?: { [skillBlueprintId: string]: number }

    toDTO(): BackgroundCustomizationDTO {
        return Serializer.toDTO(this)
    }
    static fromDTO(dto: BackgroundCustomizationDTO): BackgroundCustomization {
        return Serializer.fromDTO(dto, new BackgroundCustomization())
    }
}