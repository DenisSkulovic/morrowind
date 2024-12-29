import { DisplayField } from "../../../../../decorator/display-field.decorator";
import { FilterOption, FilterOptionTypeEnum } from "../../../../../decorator/filter-option.decorator";
import { FormField } from "../../../../../decorator/form-field.decorator";
import { Serializable } from "../../../../../decorator/serializable.decorator";
import { FieldComponentEnum } from "../../../../../enum/FieldComponentEnum";
import { ItemConsumable } from "./ItemConsumable";

export class ItemArrow extends ItemConsumable {
    @FilterOption({ type: FilterOptionTypeEnum.NUMBER_RANGE, min: 0 })
    @DisplayField({ displayName: 'Damage Pierce' })
    @FormField({ component: FieldComponentEnum.NUMBER_FIELD, label: 'Damage Pierce', placeholder: 'Enter damage pierce', required: true })
    @Serializable()
    damagePierce!: number;

}