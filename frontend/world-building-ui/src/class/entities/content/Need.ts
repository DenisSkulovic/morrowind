import { ContentBase } from "../../../class/ContentBase";
import { NeedTypeEnum, NeedLayerEnum } from "../../../enum/entityEnums";
import { serializeEnum, deserializeEnum } from "../../../enum/util";
import { Serializable } from "../../../decorator/serializable.decorator";
import { FormField } from "../../../decorator/form-field.decorator";
import { FieldComponentEnum } from "../../../enum/FieldComponentEnum";
import { FormSelectOption } from "../../../class/FormSelectOption";
import { DisplayField } from '../../../decorator/display-field.decorator';
import { EntityDisplay } from '../../../decorator/entity-display.decorator';
import { FilterOption } from '../../../decorator/filter-option.decorator';
import { NeedTypeEnumDTO, NeedLayerEnumDTO } from '../../../proto/common_pb';

@EntityDisplay({
    title: 'Needs',
    defaultSort: 'name'
})
export class Need extends ContentBase {
    @DisplayField({ order: 1 })
    @FilterOption()
    @Serializable()
    @FormField({ component: FieldComponentEnum.TEXT_FIELD, label: 'Name', placeholder: 'Enter need name', required: true })
    name!: string;

    @DisplayField({ order: 2 })
    @Serializable()
    @FormField({ component: FieldComponentEnum.TEXTAREA_FIELD, label: 'Description', placeholder: 'Enter need description', required: true })
    description!: string;

    @DisplayField({ order: 3 })
    @FilterOption()
    @FormField({
        component: FieldComponentEnum.SELECT_FIELD,
        label: 'Need Type',
        search: async (): Promise<FormSelectOption[]> => {
            return Object.values(NeedTypeEnum).map(([key, value]) => {
                return { id: value, label: value }
            })
        },
    })
    @Serializable({
        serialize: type => serializeEnum(NeedTypeEnum, NeedTypeEnumDTO, type),
        deserialize: type => deserializeEnum(NeedTypeEnumDTO, NeedTypeEnum, type),
    })
    type!: NeedTypeEnum; // "dynamic", "threshold", "external".

    @DisplayField({ order: 4 })
    @FilterOption()
    @FormField({
        component: FieldComponentEnum.SELECT_FIELD,
        label: 'Need Layer',
        search: async (): Promise<FormSelectOption[]> => {
            return Object.values(NeedLayerEnum).map(([key, value]) => {
                return { id: value, label: value }
            })
        },
    })
    @Serializable({
        serialize: layer => serializeEnum(NeedLayerEnum, NeedLayerEnumDTO, layer),
        deserialize: layer => deserializeEnum(NeedLayerEnumDTO, NeedLayerEnum, layer),
    })
    layer!: NeedLayerEnum

}
