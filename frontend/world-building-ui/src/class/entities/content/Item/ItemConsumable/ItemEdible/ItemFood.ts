import { DisplayField } from "../../../../../../decorator/display-field.decorator";
import { FilterOption, FilterOptionTypeEnum } from "../../../../../../decorator/filter-option.decorator";
import { FormField } from "../../../../../../decorator/form-field.decorator";
import { Serializable } from "../../../../../../decorator/serializable.decorator";
import { FieldComponentEnum } from "../../../../../../enum/FieldComponentEnum";
import { ItemConsumable } from "../ItemConsumable";

export class ItemFood extends ItemConsumable {
    @FilterOption({ type: FilterOptionTypeEnum.NUMBER_RANGE, min: 0 })
    @DisplayField({ displayName: 'Nutrition' })
    @FormField({ component: FieldComponentEnum.NUMBER_FIELD, label: 'Nutrition', placeholder: 'Enter nutrition', required: true })
    @Serializable()
    nutrition!: number; // Amount of hunger satisfied.

    @FilterOption({ type: FilterOptionTypeEnum.NUMBER_RANGE, min: 0 })
    @DisplayField({ displayName: 'Spoilage' })
    @FormField({ component: FieldComponentEnum.NUMBER_FIELD, label: 'Spoilage', placeholder: 'Enter spoilage', required: true })
    @Serializable()
    spoilage!: number; // Time in hours before the item spoils.
}
