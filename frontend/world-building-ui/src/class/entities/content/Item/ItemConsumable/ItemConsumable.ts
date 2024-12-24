import { FormField } from "../../../../../decorator/form-field.decorator";
import { Serializable } from "../../../../../decorator/serializable.decorator";
import { FieldComponentEnum } from "../../../../../enum/FieldComponentEnum";
import { Item } from "../Item";

export class ItemConsumable extends Item {

    @FormField({ component: FieldComponentEnum.CHECKBOX_FIELD, label: 'Consumable', required: true })
    @Serializable()
    consumable!: boolean;

}
