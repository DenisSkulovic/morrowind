import { TaggableContentBase } from "../../../class/TaggableContentBase";
import { MemoryTypeEnum } from "../../../enum/entityEnums";
import { Serializable } from "../../../decorator/serializable.decorator";
import { Fact } from "./Fact";
import { FormField } from "../../../decorator/form-field.decorator";
import { FieldComponentEnum } from "../../../enum/FieldComponentEnum";
import { FormSelectOption } from "../../../class/FormSelectOption";
import { DisplayField } from '../../../decorator/display-field.decorator';
import { EntityDisplay } from '../../../decorator/entity-display.decorator';
import { FilterOption, FilterOptionTypeEnum } from '../../../decorator/filter-option.decorator';
import { FactDTO, FactsDTO, MemoryTypeEnumDTO } from '../../../proto/entities_pb';
import { SerializeStrategyEnum } from "../../../serialize/serializer";

@EntityDisplay({
    title: 'Memories',
    defaultSort: 'name'
})
export class Memory extends TaggableContentBase {
    @DisplayField({
        displayName: 'Name'
    })
    @FilterOption({ type: FilterOptionTypeEnum.TEXT })
    @Serializable()
    @FormField({ component: FieldComponentEnum.TEXT_FIELD, label: 'Name', placeholder: 'Enter memory name', required: true })
    name!: string;

    @DisplayField()
    @FilterOption({ type: FilterOptionTypeEnum.TEXT })
    @Serializable()
    @FormField({ component: FieldComponentEnum.TEXTAREA_FIELD, label: 'Description', placeholder: 'Enter memory description', required: true })
    description!: string

    @DisplayField()
    @FilterOption({ type: FilterOptionTypeEnum.SELECT, enum: MemoryTypeEnum })
    @FormField({
        component: FieldComponentEnum.SELECT_FIELD,
        label: 'Memory Type',
        search: async (): Promise<FormSelectOption[]> => {
            return Object.values(MemoryTypeEnum).map(([key, value]) => {
                return { id: value, label: value }
            })
        },
    })
    @Serializable({ strategy: SerializeStrategyEnum.ENUM, internalEnum: MemoryTypeEnum, protoEnum: MemoryTypeEnumDTO })
    type!: MemoryTypeEnum // TODO need to properly conceptualize types of memories and what that means. Maybe better to do it with tags?

    @DisplayField({
        displayName: 'No. of Facts',
        getValue: (facts) => facts?.length || 0
    })
    @FormField({ component: FieldComponentEnum.OBJECT_FIELD, label: 'Facts', placeholder: 'Enter facts', required: true })
    @Serializable({ strategy: SerializeStrategyEnum.FULL, internalClass: Fact, dtoClass: FactDTO, dtoArrClass: FactsDTO })
    facts!: Fact[]

}
