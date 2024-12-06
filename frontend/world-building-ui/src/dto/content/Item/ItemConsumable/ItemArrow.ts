import { FormField } from "../../../../decorator/form-field.decorator";
import { Serializable } from "../../../../decorator/serializable.decorator";
import { FieldComponentEnum } from "../../../../enum/FieldComponentEnum";
import { ItemConsumable } from "./ItemConsumable";

export class ItemArrow extends ItemConsumable {
    @FormField({ component: FieldComponentEnum.TEXT_FIELD, label: 'Damage Pierce', placeholder: 'Enter damage pierce', required: true })
    @Serializable()
    damagePierce!: string;

}