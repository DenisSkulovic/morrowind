import { FormField } from "../../../../../../decorator/form-field.decorator";
import { Serializable } from "../../../../../../decorator/serializable.decorator";
import { FieldComponentEnum } from "../../../../../../enum/FieldComponentEnum";
import { ItemRepairable } from "../ItemRepairable";

export class ItemWearable extends ItemRepairable {
    @FormField({ component: FieldComponentEnum.NUMBER_FIELD, label: 'Armor Class', placeholder: 'Enter armor class', required: true })
    @Serializable()
    armorClass!: number;

    @FormField({ component: FieldComponentEnum.CHECKBOX_FIELD, label: 'Stealth Disadvantage', required: false })
    @Serializable()
    stealthDisadvantage?: boolean;

}
