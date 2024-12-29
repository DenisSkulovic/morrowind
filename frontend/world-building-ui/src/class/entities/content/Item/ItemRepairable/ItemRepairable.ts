import { DisplayField } from "../../../../../decorator/display-field.decorator";
import { FilterOption, FilterOptionTypeEnum } from "../../../../../decorator/filter-option.decorator";
import { FormField } from "../../../../../decorator/form-field.decorator";
import { Serializable } from "../../../../../decorator/serializable.decorator";
import { FieldComponentEnum } from "../../../../../enum/FieldComponentEnum";
import { Item } from "../Item";

export class ItemRepairable extends Item {
    @DisplayField({ displayName: 'Repairable' })
    @FilterOption({ type: FilterOptionTypeEnum.BOOLEAN })
    @FormField({ component: FieldComponentEnum.CHECKBOX_FIELD, label: 'Repairable', required: true })
    @Serializable()
    repairable!: boolean;

    @DisplayField({ displayName: 'Durability' })
    @FilterOption({ type: FilterOptionTypeEnum.NUMBER_RANGE, min: 0 })
    @FormField({ component: FieldComponentEnum.NUMBER_FIELD, label: 'Durability', placeholder: 'Enter durability', required: true })
    @Serializable()
    durability!: number;

    @DisplayField({ displayName: 'Max Durability' })
    @FilterOption({ type: FilterOptionTypeEnum.NUMBER_RANGE, min: 0 })
    @FormField({ component: FieldComponentEnum.NUMBER_FIELD, label: 'Max Durability', placeholder: 'Enter maximum durability', required: true })
    @Serializable()
    maxDurability!: number;
}
