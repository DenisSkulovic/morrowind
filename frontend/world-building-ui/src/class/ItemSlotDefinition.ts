import { FormField } from "../decorator/form-field.decorator";
import { FieldComponentEnum } from "../enum/FieldComponentEnum";
import { FormSelectOption } from "./FormSelectOption";
import { AllowedEntityEnum } from "../enum/AllowedEntityEnum";

export class EquipmentSlotDefinition {
    clazz = "EquipmentSlotDefinition"

    @FormField({ component: FieldComponentEnum.TEXT_FIELD, label: 'Name', placeholder: 'Enter slot name', required: true })
    name!: string;

    @FormField({
        component: FieldComponentEnum.MULTI_SELECT_FIELD,
        label: 'Allowed Entities',
        search: async (): Promise<FormSelectOption[]> => {
            return Object.values(AllowedEntityEnum).map(value => {
                return { id: value, label: value }
            })
        },
    })
    allowedEntities!: string[];
}