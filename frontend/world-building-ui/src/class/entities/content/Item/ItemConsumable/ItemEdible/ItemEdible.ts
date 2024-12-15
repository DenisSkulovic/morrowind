import { FormField } from "../../../../../../decorator/form-field.decorator";
import { Serializable } from "../../../../../../decorator/serializable.decorator";
import { FieldComponentEnum } from "../../../../../../enum/FieldComponentEnum";
import { ItemConsumable } from "../ItemConsumable";

export class ItemEdible extends ItemConsumable {
    @FormField({ component: FieldComponentEnum.CHECKBOX_FIELD, label: 'Edible', required: true })
    @Serializable()
    edible!: boolean;
}
