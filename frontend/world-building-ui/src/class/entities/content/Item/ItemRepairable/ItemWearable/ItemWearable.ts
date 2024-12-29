import { FilterOption, FilterOptionTypeEnum } from "../../../../../../decorator/filter-option.decorator";
import { DisplayField } from "../../../../../../decorator/display-field.decorator";
import { FormField } from "../../../../../../decorator/form-field.decorator";
import { Serializable } from "../../../../../../decorator/serializable.decorator";
import { FieldComponentEnum } from "../../../../../../enum/FieldComponentEnum";
import { ItemRepairable } from "../ItemRepairable";

export class ItemWearable extends ItemRepairable {
    @DisplayField({ displayName: 'Armor Class' })
    @FilterOption({ type: FilterOptionTypeEnum.NUMBER_RANGE, min: 0 })
    @FormField({ component: FieldComponentEnum.NUMBER_FIELD, label: 'Armor Class', placeholder: 'Enter armor class', required: true })
    @Serializable()
    armorClass!: number;

    @FormField({ component: FieldComponentEnum.CHECKBOX_FIELD, label: 'Stealth Disadvantage', required: false })
    @FilterOption({ type: FilterOptionTypeEnum.BOOLEAN })
    @DisplayField({ displayName: 'Stealth Disadvantage' })
    @Serializable()
    stealthDisadvantage?: boolean;

}
