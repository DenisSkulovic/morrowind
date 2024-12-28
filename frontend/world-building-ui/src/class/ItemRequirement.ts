import { FormField } from "../decorator/form-field.decorator";
import { FieldComponentEnum } from "../enum/FieldComponentEnum";
import { ItemRequirementTypeEnum } from "../enum/ItemRequirementTypeEnum";
import { FormSelectOption } from "./FormSelectOption";
import { Serializable } from "../decorator/serializable.decorator";

export class ItemRequirement {
    clazz = "ItemRequirement"

    @FormField({
        component: FieldComponentEnum.SELECT_FIELD, label: 'Type', placeholder: 'Select requirement type', required: true,
        search: async (): Promise<FormSelectOption[]> => {
            return Object.values(ItemRequirementTypeEnum).map(([key, value]) => {
                return { id: value, label: value }
            })
        },
    })
    @Serializable()
    type!: string;

    @FormField({ component: FieldComponentEnum.TEXT_FIELD, label: 'Name', placeholder: 'Enter requirement name', required: true })
    @Serializable()
    name!: string;

    @FormField({
        component: FieldComponentEnum.NUMBER_FIELD,
        label: 'Value',
        placeholder: 'Enter requirement value',
        required: true
    })
    @Serializable()
    value!: number | boolean;

}

export type ItemRequirements = ItemRequirement[]