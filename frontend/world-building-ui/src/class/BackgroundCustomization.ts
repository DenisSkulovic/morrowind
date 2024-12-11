import { common } from "../proto/common";
import { serializeInstruction, serializeGenerationInstructions, deserializeInstruction, deserializeGenerationInstructions } from "./GenerationInstruction";
import type { GenerationInstruction } from "./GenerationInstruction";;
import { FormField } from "../decorator/form-field.decorator";
import { FieldComponentEnum } from "../enum/FieldComponentEnum";
import { Serializable } from "../decorator/serializable.decorator";
import { Serializer } from "../serialize/serializer";

export class BackgroundCustomization {
    @Serializable()
    clazz = "BackgroundCustomization"

    @FormField({ component: FieldComponentEnum.GENERATION_INSTRUCTION_FIELD, label: 'Gender' })
    @Serializable({
        serialize: instruction => instruction && serializeInstruction(instruction),
        deserialize: dto => dto && deserializeInstruction(dto)
    })
    public gender?: GenerationInstruction

    @FormField({ component: FieldComponentEnum.GENERATION_INSTRUCTION_FIELD, label: 'Factions' })
    @Serializable({
        serialize: instructions => instructions && serializeGenerationInstructions(instructions),
        deserialize: dto => dto && deserializeGenerationInstructions(dto)
    })
    public faction?: GenerationInstruction[]

    @FormField({ component: FieldComponentEnum.GENERATION_INSTRUCTION_FIELD, label: 'Diseases' })
    @Serializable({
        serialize: instructions => instructions && serializeGenerationInstructions(instructions),
        deserialize: dto => dto && deserializeGenerationInstructions(dto)
    })
    public disease?: GenerationInstruction[]

    @FormField({ component: FieldComponentEnum.GENERATION_INSTRUCTION_FIELD, label: 'Addictions' })
    @Serializable({
        serialize: instructions => instructions && serializeGenerationInstructions(instructions),
        deserialize: dto => dto && deserializeGenerationInstructions(dto)
    })
    public addiction?: GenerationInstruction[]

    @FormField({ component: FieldComponentEnum.GENERATION_INSTRUCTION_FIELD, label: 'Professions' })
    @Serializable({
        serialize: instructions => instructions && serializeGenerationInstructions(instructions),
        deserialize: dto => dto && deserializeGenerationInstructions(dto)
    })
    public profession?: GenerationInstruction[]

    @FormField({ component: FieldComponentEnum.GENERATION_INSTRUCTION_FIELD, label: 'Race' })
    @Serializable({
        serialize: instructions => instructions && serializeGenerationInstructions(instructions),
        deserialize: dto => dto && deserializeGenerationInstructions(dto)
    })
    public race?: GenerationInstruction[]

    @FormField({ component: FieldComponentEnum.GENERATION_INSTRUCTION_FIELD, label: 'Religion' })
    @Serializable({
        serialize: instructions => instructions && serializeGenerationInstructions(instructions),
        deserialize: dto => dto && deserializeGenerationInstructions(dto)
    })
    public religion?: GenerationInstruction[]

    @FormField({ component: FieldComponentEnum.GENERATION_INSTRUCTION_FIELD, label: 'Personality' })
    @Serializable({
        serialize: instructions => instructions && serializeGenerationInstructions(instructions),
        deserialize: dto => dto && deserializeGenerationInstructions(dto)
    })
    public personality?: GenerationInstruction[]

    @FormField({ component: FieldComponentEnum.GENERATION_INSTRUCTION_FIELD, label: 'Items' })
    @Serializable({
        serialize: instructions => instructions && serializeGenerationInstructions(instructions),
        deserialize: dto => dto && deserializeGenerationInstructions(dto)
    })
    public items?: GenerationInstruction[]

    @FormField({ component: FieldComponentEnum.GENERATION_INSTRUCTION_FIELD, label: 'Childhood Past Experiences' })
    @Serializable({
        serialize: instructions => instructions && serializeGenerationInstructions(instructions),
        deserialize: dto => dto && deserializeGenerationInstructions(dto)
    })
    public pastExpChild?: GenerationInstruction[]

    @FormField({ component: FieldComponentEnum.GENERATION_INSTRUCTION_FIELD, label: 'Adult Past Experiences' })
    @Serializable({
        serialize: instructions => instructions && serializeGenerationInstructions(instructions),
        deserialize: dto => dto && deserializeGenerationInstructions(dto)
    })
    public pastExpAdult?: GenerationInstruction[]

    @FormField({ component: FieldComponentEnum.GENERATION_INSTRUCTION_FIELD, label: 'Memory Pools' })
    @Serializable({
        serialize: instructions => instructions && serializeGenerationInstructions(instructions),
        deserialize: dto => dto && deserializeGenerationInstructions(dto)
    })
    public memoryPools?: GenerationInstruction[]

    @FormField({ component: FieldComponentEnum.GENERATION_INSTRUCTION_FIELD, label: 'Skill Sets' })
    @Serializable({
        serialize: instructions => instructions && serializeGenerationInstructions(instructions),
        deserialize: dto => dto && deserializeGenerationInstructions(dto)
    })
    public skillSets?: GenerationInstruction[]

    @FormField({ component: FieldComponentEnum.OBJECT_FIELD, label: 'Skill Adjustments' })
    @Serializable()
    public skillAdjustments?: { [skillBlueprintId: string]: number }

    public toDTO(): common.BackgroundCustomizationDTO {
        return Serializer.toDTO(this);
    }

    public static fromDTO(dto: common.BackgroundCustomizationDTO): BackgroundCustomization {
        const customization = new BackgroundCustomization();
        return Serializer.fromDTO(dto, customization);
    }
}
