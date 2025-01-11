import { FactStatus } from "../../../class/FactStatus";
import { TaggableContentBase } from "../../../class/TaggableContentBase";
import { Serializable } from "../../../decorator/serializable.decorator";
import { FormField } from "../../../decorator/form-field.decorator";
import { FieldComponentEnum } from "../../../enum/FieldComponentEnum";
import { DisplayField } from "../../../decorator/display-field.decorator";
import { EntityDisplay } from "../../../decorator/entity-display.decorator";
import { FilterOption, FilterOptionTypeEnum } from "../../../decorator/filter-option.decorator";
import { CharacterDTO, FactStatusDTO, FactStatusesDTO, MemoryDTO } from "../../../proto/entities_pb";
import { Character } from "./Character";
import { Memory } from "./Memory";
import { SerializeStrategyEnum } from "../../../serialize/serializer";

@EntityDisplay({
    title: 'Character Memories',
    defaultSort: 'name'
})
export class CharacterMemory extends TaggableContentBase {
    @DisplayField()
    @FilterOption({ type: FilterOptionTypeEnum.TEXT })
    @FormField({ component: FieldComponentEnum.TEXT_FIELD, label: 'Name', placeholder: 'Enter name', required: true })
    @Serializable()
    name!: string;

    @DisplayField()
    @FilterOption({ type: FilterOptionTypeEnum.TEXT })
    @FormField({ component: FieldComponentEnum.TEXT_FIELD, label: 'Character', placeholder: 'Enter character', required: true })
    @Serializable()
    character!: string;

    @DisplayField({ displayName: 'Memory' })
    @FilterOption({ type: FilterOptionTypeEnum.TEXT })
    @FormField({ component: FieldComponentEnum.TEXTAREA_FIELD, label: 'Memory', placeholder: 'Enter memory', required: true })
    @Serializable()
    memory!: string;

    @DisplayField({
        displayName: 'Fact Status',
        getValue: (entity: CharacterMemory) => entity.factStatus?.map((factStatus: FactStatus) => `${factStatus.factId}: ${factStatus.status}`).join(', ')
    })
    @FormField({ component: FieldComponentEnum.NESTED_FORM, label: 'Fact Status', required: false })
    @Serializable({ strategy: SerializeStrategyEnum.FULL, internalClass: FactStatus, dtoClass: FactStatusDTO, dtoArrClass: FactStatusesDTO })
    factStatus?: FactStatus[];

    @DisplayField({ displayName: 'Importance' })
    @FilterOption({ type: FilterOptionTypeEnum.NUMBER_RANGE })
    @FormField({ component: FieldComponentEnum.NUMBER_FIELD, label: 'Importance', placeholder: 'Enter importance', required: true })
    @Serializable()
    importance!: number; // How significant this memory is (affects reinforcement)

    @DisplayField({ displayName: 'Resistance' })
    @FilterOption({ type: FilterOptionTypeEnum.NUMBER_RANGE })
    @FormField({ component: FieldComponentEnum.NUMBER_FIELD, label: 'Resistance', placeholder: 'Enter resistance', required: true })
    @Serializable()
    resistance!: number; // Higher resistance = slower clarity decay

    @DisplayField({ displayName: 'Accumulator' })
    @FilterOption({ type: FilterOptionTypeEnum.NUMBER_RANGE })
    @FormField({ component: FieldComponentEnum.NUMBER_FIELD, label: 'Accumulator', placeholder: 'Enter accumulator', required: true })
    @Serializable()
    accumulator!: number; // from 0 to

    @DisplayField({ displayName: 'Acquired At' })
    @FilterOption({ type: FilterOptionTypeEnum.DATE })
    @FormField({ component: FieldComponentEnum.DATE_FIELD, label: 'Acquired At', placeholder: 'Enter acquired timestamp', required: false })
    @Serializable({ strategy: SerializeStrategyEnum.DATE })
    acquiredAt?: Date; // Date memory was gained

    @DisplayField({ displayName: 'Last Updated At' })
    @FilterOption({ type: FilterOptionTypeEnum.DATE })
    @FormField({ component: FieldComponentEnum.DATE_FIELD, label: 'Last Updated At', placeholder: 'Enter last updated timestamp', required: false })
    @Serializable({ strategy: SerializeStrategyEnum.DATE })
    lastUpdatedAt?: Date; // Last time the memory was reinforced/pruned

}
