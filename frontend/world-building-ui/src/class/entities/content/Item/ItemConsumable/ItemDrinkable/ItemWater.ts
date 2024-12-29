import { DisplayField } from "../../../../../../decorator/display-field.decorator";
import { FilterOption, FilterOptionTypeEnum } from "../../../../../../decorator/filter-option.decorator";
import { FormField } from "../../../../../../decorator/form-field.decorator";
import { Serializable } from "../../../../../../decorator/serializable.decorator";
import { FieldComponentEnum } from "../../../../../../enum/FieldComponentEnum";
import { ItemDrinkable } from "./ItemDrinkable";

export class ItemWater extends ItemDrinkable {
    @FilterOption({ type: FilterOptionTypeEnum.NUMBER_RANGE, min: 0 })
    @DisplayField({ displayName: 'Thirst Quenched' })
    @FormField({ component: FieldComponentEnum.NUMBER_FIELD, label: 'Thirst Quenched', placeholder: 'Enter thirst quenched', required: true })
    @Serializable()
    thirstQuenched!: number; // Amount of thirst satisfied.
}
