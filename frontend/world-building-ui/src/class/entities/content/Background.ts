import { ContentBase } from "../../../class/ContentBase";
import {
    serializeInstruction, deserializeInstruction,
    serializeGenerationInstructions, deserializeGenerationInstructions
} from "../../../class/GenerationInstruction";
import type { GenerationInstruction } from "../../../class/GenerationInstruction"
import { Serializable } from "../../../decorator/serializable.decorator";
import { FormField } from "../../../decorator/form-field.decorator";
import { FieldComponentEnum } from "../../../enum/FieldComponentEnum";
import { EntityDisplay } from "../../../decorator/entity-display.decorator";
import { FilterOption, FilterOptionTypeEnum } from "../../../decorator/filter-option.decorator";
import { DisplayField } from "../../../decorator/display-field.decorator";
import { SkillAdjustment } from "../../../class/SkillAdjustment";
import { SkillAdjustmentDTO } from "../../../proto/common_pb";
import { SerializeStrategyEnum } from "../../../serialize/serializer";

@EntityDisplay({
    title: 'Backgrounds',
    defaultSort: 'name'
})
export class Background extends ContentBase {
    @DisplayField()
    @FilterOption({ type: FilterOptionTypeEnum.TEXT })
    @FormField({ component: FieldComponentEnum.TEXT_FIELD, label: 'Name', placeholder: 'Enter background name', required: true })
    @Serializable()
    name!: string; // Name of the background (e.g., "Highland Town Guard")

    @DisplayField({ displayName: 'Has Gender Instruction', getValue: (entity: Background) => entity.gender ? true : false })
    @FormField({ component: FieldComponentEnum.GENERATION_INSTRUCTION_FIELD, label: 'Gender', required: false })
    @Serializable({ serialize: serializeInstruction, deserialize: i => i ? deserializeInstruction(i) : null })
    gender?: GenerationInstruction

    @DisplayField({ displayName: 'No. of Faction Instruction', getValue: (entity: Background) => entity.faction ? entity.faction.length : 0 })
    @FormField({ component: FieldComponentEnum.GENERATION_INSTRUCTION_FIELD, label: 'Factions', required: false })
    @Serializable({ serialize: serializeGenerationInstructions, deserialize: deserializeGenerationInstructions })
    faction?: GenerationInstruction[];

    @DisplayField({ displayName: 'No. of Disease Instruction', getValue: (entity: Background) => entity.disease ? entity.disease.length : 0 })
    @FormField({ component: FieldComponentEnum.GENERATION_INSTRUCTION_FIELD, label: 'Diseases', required: false })
    @Serializable({ serialize: serializeGenerationInstructions, deserialize: deserializeGenerationInstructions })
    disease?: GenerationInstruction[];

    @DisplayField({ displayName: 'No. of Addiction Instruction', getValue: (entity: Background) => entity.addiction ? entity.addiction.length : 0 })
    @FormField({ component: FieldComponentEnum.GENERATION_INSTRUCTION_FIELD, label: 'Addictions', required: false })
    @Serializable({ serialize: serializeGenerationInstructions, deserialize: deserializeGenerationInstructions })
    addiction?: GenerationInstruction[];

    @DisplayField({ displayName: 'No. of Profession Instruction', getValue: (entity: Background) => entity.profession ? entity.profession.length : 0 })
    @FormField({ component: FieldComponentEnum.GENERATION_INSTRUCTION_FIELD, label: 'Professions', required: false })
    @Serializable({ serialize: serializeGenerationInstructions, deserialize: deserializeGenerationInstructions })
    profession?: GenerationInstruction[];

    @DisplayField({ displayName: 'No. of Race Instruction', getValue: (entity: Background) => entity.race ? entity.race.length : 0 })
    @FormField({ component: FieldComponentEnum.GENERATION_INSTRUCTION_FIELD, label: 'Race', required: false })
    @Serializable({ serialize: serializeGenerationInstructions, deserialize: deserializeGenerationInstructions })
    race?: GenerationInstruction[];

    @DisplayField({ displayName: 'No. of Religion Instruction', getValue: (entity: Background) => entity.religion ? entity.religion.length : 0 })
    @FormField({ component: FieldComponentEnum.GENERATION_INSTRUCTION_FIELD, label: 'Religion', required: false })
    @Serializable({ serialize: serializeGenerationInstructions, deserialize: deserializeGenerationInstructions })
    religion?: GenerationInstruction[];

    @DisplayField({ displayName: 'No. of Personality Instruction', getValue: (entity: Background) => entity.personality ? entity.personality.length : 0 })
    @FormField({ component: FieldComponentEnum.GENERATION_INSTRUCTION_FIELD, label: 'Personality', required: false })
    @Serializable({ serialize: serializeGenerationInstructions, deserialize: deserializeGenerationInstructions })
    personality?: GenerationInstruction[];

    @DisplayField({ displayName: 'No. of Items Instruction', getValue: (entity: Background) => entity.items ? entity.items.length : 0 })
    @FormField({ component: FieldComponentEnum.GENERATION_INSTRUCTION_FIELD, label: 'Items', required: false })
    @Serializable({ serialize: serializeGenerationInstructions, deserialize: deserializeGenerationInstructions })
    items?: GenerationInstruction[];

    @DisplayField({ displayName: 'No. of Item Sets Instruction', getValue: (entity: Background) => entity.itemSets ? entity.itemSets.length : 0 })
    @FormField({ component: FieldComponentEnum.GENERATION_INSTRUCTION_FIELD, label: 'Item Sets', required: false })
    @Serializable({ serialize: serializeGenerationInstructions, deserialize: deserializeGenerationInstructions })
    itemSets?: GenerationInstruction[];

    @DisplayField({ displayName: 'No. of Childhood Past Experiences Instruction', getValue: (entity: Background) => entity.pastExpChild ? entity.pastExpChild.length : 0 })
    @FormField({ component: FieldComponentEnum.GENERATION_INSTRUCTION_FIELD, label: 'Childhood Past Experiences', required: false })
    @Serializable({ serialize: serializeGenerationInstructions, deserialize: deserializeGenerationInstructions })
    pastExpChild?: GenerationInstruction[]

    @DisplayField({ displayName: 'No. of Adult Past Experiences Instruction', getValue: (entity: Background) => entity.pastExpAdult ? entity.pastExpAdult.length : 0 })
    @FormField({ component: FieldComponentEnum.GENERATION_INSTRUCTION_FIELD, label: 'Adult Past Experiences', required: false })
    @Serializable({ serialize: serializeGenerationInstructions, deserialize: deserializeGenerationInstructions })
    pastExpAdult?: GenerationInstruction[]

    @DisplayField({ displayName: 'No. of Memory Pools Instruction', getValue: (entity: Background) => entity.memoryPools ? entity.memoryPools.length : 0 })
    @FormField({ component: FieldComponentEnum.GENERATION_INSTRUCTION_FIELD, label: 'Memory Pools', required: false })
    @Serializable({ serialize: serializeGenerationInstructions, deserialize: deserializeGenerationInstructions })
    memoryPools?: GenerationInstruction[]

    @DisplayField({ displayName: 'No. of Skill Sets Instruction', getValue: (entity: Background) => entity.skillSets ? entity.skillSets.length : 0 })
    @FormField({ component: FieldComponentEnum.GENERATION_INSTRUCTION_FIELD, label: 'Skill Sets', required: false })
    @Serializable({ serialize: serializeGenerationInstructions, deserialize: deserializeGenerationInstructions })
    skillSets?: GenerationInstruction[]

    @DisplayField({ displayName: 'Skill Adjustments', getValue: (entity: Background) => entity.skillAdjustments ? Object.keys(entity.skillAdjustments).length : 0 })
    @FormField({ component: FieldComponentEnum.GENERATION_INSTRUCTION_FIELD, label: 'Skill Adjustments', required: false })
    @Serializable({ strategy: SerializeStrategyEnum.FULL, internalClass: SkillAdjustment, dtoClass: SkillAdjustmentDTO })
    skillAdjustments?: SkillAdjustment

}