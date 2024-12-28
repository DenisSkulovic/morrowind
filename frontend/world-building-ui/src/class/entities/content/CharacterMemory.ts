import { FactStatus } from "../../../class/FactStatus";
import { TaggableContentBase } from "../../../class/TaggableContentBase";
import { Serializable } from "../../../decorator/serializable.decorator";
import { FormField } from "../../../decorator/form-field.decorator";
import { FieldComponentEnum } from "../../../enum/FieldComponentEnum";
import { DisplayField } from "../../../decorator/display-field.decorator";
import { EntityDisplay } from "../../../decorator/entity-display.decorator";
import { FilterOption } from "../../../decorator/filter-option.decorator";
import { CharacterDTO, FactStatusDTO, FactStatusesDTO, MemoryDTO } from "../../../proto/common_pb";
import { Character } from "./Character";
import { Memory } from "./Memory";
import { SerializeStrategyEnum } from "../../../serialize/serializer";

@EntityDisplay({
    title: 'Character Memories',
    defaultSort: 'name'
})
export class CharacterMemory extends TaggableContentBase {
    @DisplayField()
    @FilterOption()
    @FormField({ component: FieldComponentEnum.TEXT_FIELD, label: 'Name', placeholder: 'Enter name', required: true })
    @Serializable()
    name!: string;

    @DisplayField()
    @FilterOption()
    @FormField({ component: FieldComponentEnum.TEXT_FIELD, label: 'Character', placeholder: 'Enter character', required: true })
    @Serializable({ strategy: SerializeStrategyEnum.ID, dtoClass: CharacterDTO })
    character!: Character;

    @FormField({ component: FieldComponentEnum.TEXTAREA_FIELD, label: 'Memory', placeholder: 'Enter memory', required: true })
    @Serializable({ strategy: SerializeStrategyEnum.FULL, dtoClass: MemoryDTO })
    memory!: Memory;

    @FormField({ component: FieldComponentEnum.NESTED_FORM, label: 'Fact Status', required: false })
    @Serializable({ strategy: SerializeStrategyEnum.FULL, dtoClass: FactStatusDTO, dtoArrClass: FactStatusesDTO })
    factStatus?: FactStatus[];

    @DisplayField()
    @FilterOption()
    @FormField({ component: FieldComponentEnum.NUMBER_FIELD, label: 'Importance', placeholder: 'Enter importance', required: true })
    @Serializable()
    importance!: number; // How significant this memory is (affects reinforcement)

    @FormField({ component: FieldComponentEnum.NUMBER_FIELD, label: 'Resistance', placeholder: 'Enter resistance', required: true })
    @Serializable()
    resistance!: number; // Higher resistance = slower clarity decay

    @FormField({ component: FieldComponentEnum.NUMBER_FIELD, label: 'Accumulator', placeholder: 'Enter accumulator', required: true })
    @Serializable()
    accumulator!: number; // from 0 to

    @FormField({ component: FieldComponentEnum.NUMBER_FIELD, label: 'Acquired At', placeholder: 'Enter acquired timestamp', required: false })
    @Serializable()
    acquiredAt?: number; // Date memory was gained

    @FormField({ component: FieldComponentEnum.NUMBER_FIELD, label: 'Last Updated At', placeholder: 'Enter last updated timestamp', required: false })
    @Serializable()
    lastUpdatedAt?: number; // Last time the memory was reinforced/pruned

}
