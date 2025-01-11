import { TaggableContentBase } from "../../../class/TaggableContentBase";
import { TraitTypeEnum } from "../../../enum/TraitTypeEnum";
import { Serializable } from "../../../decorator/serializable.decorator";
import { FormField } from "../../../decorator/form-field.decorator";
import { FieldComponentEnum } from "../../../enum/FieldComponentEnum";
import { FormSelectOption } from "../../../class/FormSelectOption";
import { DisplayField } from "../../../decorator/display-field.decorator";
import { EntityDisplay } from "../../../decorator/entity-display.decorator";
import { FilterOption, FilterOptionTypeEnum } from "../../../decorator/filter-option.decorator";
import { TraitTypeEnumDTO } from "../../../proto/entities_pb";
import { SerializeStrategyEnum } from "../../../serialize/serializer";

@EntityDisplay({
    title: 'Traits',
    defaultSort: 'name'
})
export class Trait extends TaggableContentBase {
    @DisplayField()
    @FilterOption({ type: FilterOptionTypeEnum.TEXT })
    @Serializable()
    @FormField({ component: FieldComponentEnum.TEXT_FIELD, label: 'Name', placeholder: 'Enter trait name', required: true })
    name!: string;

    @DisplayField()
    @FilterOption({ type: FilterOptionTypeEnum.SELECT, enum: TraitTypeEnum })
    @FormField({
        component: FieldComponentEnum.SELECT_FIELD,
        label: 'Trait Type',
        search: async (): Promise<FormSelectOption[]> => {
            return Object.values(TraitTypeEnum).map(value => {
                return { id: value, label: value }
            })
        },
        required: true
    })
    @Serializable({ strategy: SerializeStrategyEnum.ENUM, internalEnum: TraitTypeEnum, protoEnum: TraitTypeEnumDTO })
    traitType!: TraitTypeEnum

}
