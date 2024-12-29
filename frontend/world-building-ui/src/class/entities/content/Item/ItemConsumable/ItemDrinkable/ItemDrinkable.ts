import { FilterOption, FilterOptionTypeEnum } from "../../../../../../decorator/filter-option.decorator";
import { DisplayField } from "../../../../../../decorator/display-field.decorator";
import { FormField } from "../../../../../../decorator/form-field.decorator";
import { Serializable } from "../../../../../../decorator/serializable.decorator";
import { FieldComponentEnum } from "../../../../../../enum/FieldComponentEnum";
import { ItemConsumable } from "../ItemConsumable";

export class ItemDrinkable extends ItemConsumable {

    @FilterOption({ type: FilterOptionTypeEnum.BOOLEAN })
    @DisplayField({ displayName: 'Drinkable' })
    @FormField({ component: FieldComponentEnum.CHECKBOX_FIELD, label: 'Drinkable', required: true })
    @Serializable()
    drinkable!: boolean;
}
