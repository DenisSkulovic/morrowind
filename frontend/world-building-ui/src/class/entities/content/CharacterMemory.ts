import { FactStatus } from "../../../class/FactStatus";
import { TaggableContentBase } from "../../../class/TaggableContentBase";
import { Serializable } from "../../../decorator/serializable.decorator";
import { FormField } from "../../../decorator/form-field.decorator";
import { FieldComponentEnum } from "../../../enum/FieldComponentEnum";
import { DisplayField } from "../../../decorator/display-field.decorator";
import { EntityDisplay } from "../../../decorator/entity-display.decorator";
import { FilterOption } from "../../../decorator/filter-option.decorator";
import { FactStatusesDTO } from "../../../proto/common_pb";

@EntityDisplay({
    title: 'Character Memories',
    defaultSort: 'name'
})
export class CharacterMemory extends TaggableContentBase {
    @DisplayField({ order: 1 })
    @FilterOption()
    @FormField({ component: FieldComponentEnum.TEXT_FIELD, label: 'Name', placeholder: 'Enter name', required: true })
    @Serializable()
    name!: string;

    @DisplayField({ order: 2 })
    @FilterOption()
    @FormField({ component: FieldComponentEnum.TEXT_FIELD, label: 'Character', placeholder: 'Enter character', required: true })
    @Serializable()
    character!: string;

    @FormField({ component: FieldComponentEnum.TEXTAREA_FIELD, label: 'Memory', placeholder: 'Enter memory', required: true })
    @Serializable()
    memory!: string;

    @FormField({ component: FieldComponentEnum.NESTED_FORM, label: 'Fact Status', required: false })
    @Serializable({ strategy: 'full', getDTOInstance: () => new FactStatusesDTO() })
    factStatus?: FactStatus[];

    @DisplayField({ order: 3 })
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
