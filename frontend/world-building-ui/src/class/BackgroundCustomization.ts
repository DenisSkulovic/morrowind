import { serializeInstruction, serializeGenerationInstructions, deserializeInstruction, deserializeGenerationInstructions } from "./GenerationInstruction";
import type { GenerationInstruction } from "./GenerationInstruction";;
import { FormField } from "../decorator/form-field.decorator";
import { FieldComponentEnum } from "../enum/FieldComponentEnum";
import { Serializable } from "../decorator/serializable.decorator";
import { SkillAdjustment } from "./SkillAdjustment";
import { SkillAdjustmentDTO } from "../proto/entities_pb";
import { SerializeStrategyEnum } from "../serialize/serializer";

export class BackgroundCustomization {
    @Serializable()
    clazz = "BackgroundCustomization"

    @FormField({ component: FieldComponentEnum.GENERATION_INSTRUCTION_FIELD, label: 'Gender' })
    @Serializable({
        serialize: serializeInstruction,
        deserialize: deserializeInstruction
    })
    public gender?: GenerationInstruction

    @FormField({ component: FieldComponentEnum.GENERATION_INSTRUCTION_FIELD, label: 'Factions' })
    @Serializable({ serialize: serializeGenerationInstructions, deserialize: deserializeGenerationInstructions })
    public faction?: GenerationInstruction[]

    @FormField({ component: FieldComponentEnum.GENERATION_INSTRUCTION_FIELD, label: 'Diseases' })
    @Serializable({ serialize: serializeGenerationInstructions, deserialize: deserializeGenerationInstructions })
    public disease?: GenerationInstruction[]

    @FormField({ component: FieldComponentEnum.GENERATION_INSTRUCTION_FIELD, label: 'Addictions' })
    @Serializable({ serialize: serializeGenerationInstructions, deserialize: deserializeGenerationInstructions })
    public addiction?: GenerationInstruction[]

    @FormField({ component: FieldComponentEnum.GENERATION_INSTRUCTION_FIELD, label: 'Professions' })
    @Serializable({ serialize: serializeGenerationInstructions, deserialize: deserializeGenerationInstructions })
    public profession?: GenerationInstruction[]

    @FormField({ component: FieldComponentEnum.GENERATION_INSTRUCTION_FIELD, label: 'Race' })
    @Serializable({ serialize: serializeGenerationInstructions, deserialize: deserializeGenerationInstructions })
    public race?: GenerationInstruction[]

    @FormField({ component: FieldComponentEnum.GENERATION_INSTRUCTION_FIELD, label: 'Religion' })
    @Serializable({ serialize: serializeGenerationInstructions, deserialize: deserializeGenerationInstructions })
    public religion?: GenerationInstruction[]

    @FormField({ component: FieldComponentEnum.GENERATION_INSTRUCTION_FIELD, label: 'Personality' })
    @Serializable({ serialize: serializeGenerationInstructions, deserialize: deserializeGenerationInstructions })
    public personality?: GenerationInstruction[]

    @FormField({ component: FieldComponentEnum.GENERATION_INSTRUCTION_FIELD, label: 'Items' })
    @Serializable({ serialize: serializeGenerationInstructions, deserialize: deserializeGenerationInstructions })
    public items?: GenerationInstruction[]

    @FormField({ component: FieldComponentEnum.GENERATION_INSTRUCTION_FIELD, label: 'Childhood Past Experiences' })
    @Serializable({ serialize: serializeGenerationInstructions, deserialize: deserializeGenerationInstructions })
    public pastExpChild?: GenerationInstruction[]

    @FormField({ component: FieldComponentEnum.GENERATION_INSTRUCTION_FIELD, label: 'Adult Past Experiences' })
    @Serializable({ serialize: serializeGenerationInstructions, deserialize: deserializeGenerationInstructions })
    public pastExpAdult?: GenerationInstruction[]

    @FormField({ component: FieldComponentEnum.GENERATION_INSTRUCTION_FIELD, label: 'Memory Pools' })
    @Serializable({ serialize: serializeGenerationInstructions, deserialize: deserializeGenerationInstructions })
    public memoryPools?: GenerationInstruction[]

    @FormField({ component: FieldComponentEnum.GENERATION_INSTRUCTION_FIELD, label: 'Skill Sets' })
    @Serializable({ serialize: serializeGenerationInstructions, deserialize: deserializeGenerationInstructions })
    public skillSets?: GenerationInstruction[]

    @FormField({ component: FieldComponentEnum.OBJECT_FIELD, label: 'Skill Adjustments' })
    @Serializable({ strategy: SerializeStrategyEnum.FULL, internalClass: SkillAdjustment, dtoClass: SkillAdjustmentDTO })
    public skillAdjustments?: SkillAdjustment

}


