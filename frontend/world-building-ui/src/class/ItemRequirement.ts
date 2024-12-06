import { ItemRequirementDTO, ItemRequirementsDTO } from "../proto/common";
import { FormField } from "../decorator/form-field.decorator";
import { FieldComponentEnum } from "../enum/FieldComponentEnum";
import { Serializer } from "../serialize/serializer";
import { ItemRequirementTypeEnum } from "../enum/ItemRequirementTypeEnum";
import { FormSelectOption } from "./FormSelectOption";

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
    type: string;

    @FormField({ component: FieldComponentEnum.TEXT_FIELD, label: 'Name', placeholder: 'Enter requirement name', required: true })
    name: string;

    @FormField({
        component: FieldComponentEnum.NUMBER_FIELD,
        label: 'Value',
        placeholder: 'Enter requirement value',
        required: true
    })
    value: number | boolean;

    constructor(type: string, name: string, value: number | boolean) {
        this.type = type;
        this.name = name;
        this.value = value;
    }

    toDTO(): ItemRequirementDTO {
        return Serializer.toDTO(this);
    }

    static fromDTO(dto: ItemRequirementDTO): ItemRequirement {
        const req = new ItemRequirement(
            dto.type,
            dto.name,
            dto.number !== undefined ? dto.number : dto.flag || false
        );
        return Serializer.fromDTO(dto, req);
    }
}

export type ItemRequirements = ItemRequirement[]

export function serializeRequirements(reqs: ItemRequirement[]): ItemRequirementsDTO {
    return { arr: reqs.map(req => req.toDTO()) }
}

export function deserializeRequirements(dtoInstructions: ItemRequirementsDTO): ItemRequirement[] {
    return dtoInstructions.arr.map(dto => ItemRequirement.fromDTO(dto))
}



