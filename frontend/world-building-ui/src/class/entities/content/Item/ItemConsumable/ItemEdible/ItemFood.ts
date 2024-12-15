import { FormField } from "../../../../../../decorator/form-field.decorator";
import { Serializable } from "../../../../../../decorator/serializable.decorator";
import { FieldComponentEnum } from "../../../../../../enum/FieldComponentEnum";
import { ItemConsumable } from "../ItemConsumable";

export class ItemFood extends ItemConsumable {
    @FormField({ component: FieldComponentEnum.NUMBER_FIELD, label: 'Nutrition', placeholder: 'Enter nutrition', required: true })
    @Serializable()
    nutrition!: number; // Amount of hunger satisfied.

    @FormField({ component: FieldComponentEnum.NUMBER_FIELD, label: 'Spoilage', placeholder: 'Enter spoilage', required: true })
    @Serializable()
    spoilage!: number; // Time in hours before the item spoils.
}
