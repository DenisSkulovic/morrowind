import { ContentBase } from "../../../class/ContentBase";
import { serializeInstruction, deserializeInstruction, serializeGenerationInstructions, deserializeGenerationInstructions } from "../../../class/GenerationInstruction";
import type { GenerationInstruction } from "../../../class/GenerationInstruction"
import { Serializable } from "../../../decorator/serializable.decorator";
import { FormField } from "../../../decorator/form-field.decorator";
import { FieldComponentEnum } from "../../../enum/FieldComponentEnum";
import { EntityDisplay } from "../../../decorator/entity-display.decorator";
import { FilterOption } from "../../../decorator/filter-option.decorator";
import { DisplayField } from "../../../decorator/display-field.decorator";
import { SkillAdjustment } from "../../../class/SkillAdjustment";
import { SkillAdjustmentsDTO } from "../../../proto/common_pb";

@EntityDisplay({
    title: 'Backgrounds',
    defaultSort: 'name'
})
export class Background extends ContentBase {
    @DisplayField({
        order: 1
    })
    @FilterOption()
    @FormField({ component: FieldComponentEnum.TEXT_FIELD, label: 'Name', placeholder: 'Enter background name', required: true })
    @Serializable()
    name!: string; // Name of the background (e.g., "Highland Town Guard")

    @FormField({ component: FieldComponentEnum.GENERATION_INSTRUCTION_FIELD, label: 'Gender', required: false })
    @Serializable({ serialize: serializeInstruction, deserialize: i => i ? deserializeInstruction(i) : null })
    gender?: GenerationInstruction

    @FormField({ component: FieldComponentEnum.GENERATION_INSTRUCTION_FIELD, label: 'Factions', required: false })
    @Serializable({ serialize: serializeGenerationInstructions, deserialize: i => i ? deserializeGenerationInstructions(i) : null })
    faction?: GenerationInstruction[];

    @FormField({ component: FieldComponentEnum.GENERATION_INSTRUCTION_FIELD, label: 'Diseases', required: false })
    @Serializable({ serialize: serializeGenerationInstructions, deserialize: i => i ? deserializeGenerationInstructions(i) : null })
    disease?: GenerationInstruction[];

    @FormField({ component: FieldComponentEnum.GENERATION_INSTRUCTION_FIELD, label: 'Addictions', required: false })
    @Serializable({ serialize: serializeGenerationInstructions, deserialize: i => i ? deserializeGenerationInstructions(i) : null })
    addiction?: GenerationInstruction[];

    @FormField({ component: FieldComponentEnum.GENERATION_INSTRUCTION_FIELD, label: 'Professions', required: false })
    @Serializable({ serialize: serializeGenerationInstructions, deserialize: i => i ? deserializeGenerationInstructions(i) : null })
    profession?: GenerationInstruction[];

    @FormField({ component: FieldComponentEnum.GENERATION_INSTRUCTION_FIELD, label: 'Race', required: false })
    @Serializable({ serialize: serializeGenerationInstructions, deserialize: i => i ? deserializeGenerationInstructions(i) : null })
    race?: GenerationInstruction[];

    @FormField({ component: FieldComponentEnum.GENERATION_INSTRUCTION_FIELD, label: 'Religion', required: false })
    @Serializable({ serialize: serializeGenerationInstructions, deserialize: i => i ? deserializeGenerationInstructions(i) : null })
    religion?: GenerationInstruction[];

    @FormField({ component: FieldComponentEnum.GENERATION_INSTRUCTION_FIELD, label: 'Personality', required: false })
    @Serializable({ serialize: serializeGenerationInstructions, deserialize: i => i ? deserializeGenerationInstructions(i) : null })
    personality?: GenerationInstruction[];

    @FormField({ component: FieldComponentEnum.GENERATION_INSTRUCTION_FIELD, label: 'Items', required: false })
    @Serializable({ serialize: serializeGenerationInstructions, deserialize: i => i ? deserializeGenerationInstructions(i) : null })
    items?: GenerationInstruction[];

    @FormField({ component: FieldComponentEnum.GENERATION_INSTRUCTION_FIELD, label: 'Item Sets', required: false })
    @Serializable({ serialize: serializeGenerationInstructions, deserialize: i => i ? deserializeGenerationInstructions(i) : null })
    itemSets?: GenerationInstruction[];

    @FormField({ component: FieldComponentEnum.GENERATION_INSTRUCTION_FIELD, label: 'Childhood Past Experiences', required: false })
    @Serializable({ serialize: serializeGenerationInstructions, deserialize: i => i ? deserializeGenerationInstructions(i) : null })
    pastExpChild?: GenerationInstruction[]

    @FormField({ component: FieldComponentEnum.GENERATION_INSTRUCTION_FIELD, label: 'Adult Past Experiences', required: false })
    @Serializable({ serialize: serializeGenerationInstructions, deserialize: i => i ? deserializeGenerationInstructions(i) : null })
    pastExpAdult?: GenerationInstruction[]

    @FormField({ component: FieldComponentEnum.GENERATION_INSTRUCTION_FIELD, label: 'Memory Pools', required: false })
    @Serializable({ serialize: serializeGenerationInstructions, deserialize: i => i ? deserializeGenerationInstructions(i) : null })
    memoryPools?: GenerationInstruction[]

    @FormField({ component: FieldComponentEnum.GENERATION_INSTRUCTION_FIELD, label: 'Skill Sets', required: false })
    @Serializable({ serialize: serializeGenerationInstructions, deserialize: i => i ? deserializeGenerationInstructions(i) : null })
    skillSets?: GenerationInstruction[]

    @FormField({ component: FieldComponentEnum.GENERATION_INSTRUCTION_FIELD, label: 'Skill Adjustments', required: false })
    @Serializable({ strategy: 'full', getDTOInstance: () => new SkillAdjustmentsDTO() })
    skillAdjustments?: SkillAdjustment[]

}
