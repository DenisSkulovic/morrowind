import { ContentBase } from "../class/ContentBase";
import { serializeInstruction, deserializeInstruction, serializeGenerationInstructions, deserializeGenerationInstructions } from "../class/GenerationInstruction";
import type { GenerationInstruction } from "../class/GenerationInstruction"
import { serializeSkillAdjustment, deserializeSkillAdjustment, SkillAdjustment } from "../class/SkillAdjustment";
import { BackgroundDTO } from "../proto/common";
import { Serializable } from "../decorator/serializable.decorator";
import { Serializer } from "../serialize/serializer";

export class Background extends ContentBase {
    @Serializable()
    name!: string; // Name of the background (e.g., "Highland Town Guard")

    @Serializable({ serialize: serializeInstruction, deserialize: i => i ? deserializeInstruction(i) : null })
    gender?: GenerationInstruction

    @Serializable({ serialize: serializeGenerationInstructions, deserialize: i => i ? deserializeGenerationInstructions(i) : null })
    faction?: GenerationInstruction[];

    @Serializable({ serialize: serializeGenerationInstructions, deserialize: i => i ? deserializeGenerationInstructions(i) : null })
    disease?: GenerationInstruction[];

    @Serializable({ serialize: serializeGenerationInstructions, deserialize: i => i ? deserializeGenerationInstructions(i) : null })
    addiction?: GenerationInstruction[];

    @Serializable({ serialize: serializeGenerationInstructions, deserialize: i => i ? deserializeGenerationInstructions(i) : null })
    profession?: GenerationInstruction[];

    @Serializable({ serialize: serializeGenerationInstructions, deserialize: i => i ? deserializeGenerationInstructions(i) : null })
    race?: GenerationInstruction[];

    @Serializable({ serialize: serializeGenerationInstructions, deserialize: i => i ? deserializeGenerationInstructions(i) : null })
    religion?: GenerationInstruction[];

    @Serializable({ serialize: serializeGenerationInstructions, deserialize: i => i ? deserializeGenerationInstructions(i) : null })
    personality?: GenerationInstruction[];

    @Serializable({ serialize: serializeGenerationInstructions, deserialize: i => i ? deserializeGenerationInstructions(i) : null })
    items?: GenerationInstruction[];

    @Serializable({ serialize: serializeGenerationInstructions, deserialize: i => i ? deserializeGenerationInstructions(i) : null })
    itemSets?: GenerationInstruction[];

    @Serializable({ serialize: serializeGenerationInstructions, deserialize: i => i ? deserializeGenerationInstructions(i) : null })
    pastExpChild?: GenerationInstruction[]

    @Serializable({ serialize: serializeGenerationInstructions, deserialize: i => i ? deserializeGenerationInstructions(i) : null })
    pastExpAdult?: GenerationInstruction[]

    @Serializable({ serialize: serializeGenerationInstructions, deserialize: i => i ? deserializeGenerationInstructions(i) : null })
    memoryPools?: GenerationInstruction[]

    @Serializable({ serialize: serializeGenerationInstructions, deserialize: i => i ? deserializeGenerationInstructions(i) : null })
    skillSets?: GenerationInstruction[]

    @Serializable({ serialize: serializeSkillAdjustment, deserialize: i => i ? deserializeSkillAdjustment(i) : null })
    skillAdjustments?: SkillAdjustment

    public toDTO(): BackgroundDTO {
        return Serializer.toDTO(this);
    }

    public static fromDTO(dto: BackgroundDTO): Background {
        const pastExperience = new Background();
        return Serializer.fromDTO(dto, pastExperience);
    }
}