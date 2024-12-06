import { FormField } from "../../../../decorator/form-field.decorator";
import { Serializable } from "../../../../decorator/serializable.decorator";
import { FieldComponentEnum } from "../../../../enum/FieldComponentEnum";
import { Item } from "../Item";

export class ItemRepairable extends Item {
    @FormField({ component: FieldComponentEnum.CHECKBOX_FIELD, label: 'Repairable', required: true })
    @Serializable()
    repairable!: boolean;

    @FormField({ component: FieldComponentEnum.NUMBER_FIELD, label: 'Durability', placeholder: 'Enter durability', required: true })
    @Serializable()
    durability!: number;

    @FormField({ component: FieldComponentEnum.NUMBER_FIELD, label: 'Max Durability', placeholder: 'Enter maximum durability', required: true })
    @Serializable()
    maxDurability!: number;
}
