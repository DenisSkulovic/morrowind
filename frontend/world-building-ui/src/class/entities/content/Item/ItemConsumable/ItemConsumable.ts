import { DisplayField } from "../../../../../decorator/display-field.decorator";
import { FilterOption, FilterOptionTypeEnum } from "../../../../../decorator/filter-option.decorator";
import { FormField } from "../../../../../decorator/form-field.decorator";
import { Serializable } from "../../../../../decorator/serializable.decorator";
import { FieldComponentEnum } from "../../../../../enum/FieldComponentEnum";
import { Item } from "../Item";

export class ItemConsumable extends Item {
    @FilterOption({ type: FilterOptionTypeEnum.BOOLEAN })
    @DisplayField({ displayName: 'Consumable' })
    @FormField({ component: FieldComponentEnum.CHECKBOX_FIELD, label: 'Consumable', required: true })
    @Serializable()
    consumable!: boolean;

}
