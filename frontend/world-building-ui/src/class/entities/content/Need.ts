import { ContentBase } from "../../../class/ContentBase";
import { NeedTypeEnum, NeedLayerEnum } from "../../../enum/entityEnums";
import { Serializable } from "../../../decorator/serializable.decorator";
import { FormField } from "../../../decorator/form-field.decorator";
import { FieldComponentEnum } from "../../../enum/FieldComponentEnum";
import { FormSelectOption } from "../../../class/FormSelectOption";
import { DisplayField } from '../../../decorator/display-field.decorator';
import { EntityDisplay } from '../../../decorator/entity-display.decorator';
import { FilterOption, FilterOptionTypeEnum } from '../../../decorator/filter-option.decorator';
import { NeedTypeEnumDTO, NeedLayerEnumDTO } from '../../../proto/entities_pb';
import { SerializeStrategyEnum } from "../../../serialize/serializer";

@EntityDisplay({
    title: 'Needs',
    defaultSort: 'name'
})
export class Need extends ContentBase {
    @DisplayField()
    @FilterOption({ type: FilterOptionTypeEnum.TEXT })
    @Serializable()
    @FormField({ component: FieldComponentEnum.TEXT_FIELD, label: 'Name', placeholder: 'Enter need name', required: true })
    name!: string;

    @DisplayField()
    @Serializable()
    @FormField({ component: FieldComponentEnum.TEXTAREA_FIELD, label: 'Description', placeholder: 'Enter need description', required: true })
    description!: string;

    @DisplayField()
    @FilterOption({ type: FilterOptionTypeEnum.SELECT, enum: NeedTypeEnum })
    @FormField({
        component: FieldComponentEnum.SELECT_FIELD,
        label: 'Need Type',
        search: async (): Promise<FormSelectOption[]> => {
            return Object.values(NeedTypeEnum).map(([key, value]) => {
                return { id: value, label: value }
            })
        },
    })
    @Serializable({ strategy: SerializeStrategyEnum.ENUM, internalEnum: NeedTypeEnum, protoEnum: NeedTypeEnumDTO })
    type!: NeedTypeEnum; // "dynamic", "threshold", "external".

    @DisplayField()
    @FilterOption({ type: FilterOptionTypeEnum.SELECT, enum: NeedLayerEnum })
    @FormField({
        component: FieldComponentEnum.SELECT_FIELD,
        label: 'Need Layer',
        search: async (): Promise<FormSelectOption[]> => {
            return Object.values(NeedLayerEnum).map(([key, value]) => {
                return { id: value, label: value }
            })
        },
    })
    @Serializable({ strategy: SerializeStrategyEnum.ENUM, internalEnum: NeedLayerEnum, protoEnum: NeedLayerEnumDTO })
    layer!: NeedLayerEnum

}
