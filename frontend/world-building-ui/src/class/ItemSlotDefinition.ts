import { common } from "../proto/common";
import { FormField } from "../decorator/form-field.decorator";
import { FieldComponentEnum } from "../enum/FieldComponentEnum";
import { Serializer } from "../serialize/serializer";
import { FormSelectOption } from "./FormSelectOption";
import { AllowedEntityEnum } from "../enum/AllowedEntityEnum";

export class EquipmentSlotDefinition {
    clazz = "EquipmentSlotDefinition"

    @FormField({ component: FieldComponentEnum.TEXT_FIELD, label: 'Name', placeholder: 'Enter slot name', required: true })
    name: string;

    @FormField({
        component: FieldComponentEnum.MULTI_SELECT_FIELD,
        label: 'Allowed Entities',
        search: async (): Promise<FormSelectOption[]> => {
            return Object.values(AllowedEntityEnum).map(value => {
                return { id: value, label: value }
            })
        },
    })
    allowedEntities: string[];

    constructor(name: string, allowedEntities: string[]) {
        this.name = name;
        this.allowedEntities = allowedEntities;
    }

    toObject() {
        return {
            name: this.name,
            allowedEntities: this.allowedEntities
        };
    }

    static fromObject(data: {
        name: string;
        allowedEntities: string[];
    }): EquipmentSlotDefinition {
        return new EquipmentSlotDefinition(data.name, data.allowedEntities);
    }

    toDTO(): common.EquipmentSlotDefinitionDTO {
        return Serializer.toDTO(this);
    }

    static fromDTO(dto: common.EquipmentSlotDefinitionDTO): EquipmentSlotDefinition {
        const def = new EquipmentSlotDefinition(
            dto.name,
            dto.allowedEntities
        );
        return Serializer.fromDTO(dto, def);
    }
}

export function serializeEquipmentSlotDefinitions(defs: EquipmentSlotDefinition[]): common.EquipmentSlotDefinitionsDTO {
    const message = new common.EquipmentSlotDefinitionsDTO({});
    message.arr = defs.map(def => def.toDTO());
    return message;
}

export function deserializeEquipmentSlotDefinitions(defsDTO: common.EquipmentSlotDefinitionsDTO): EquipmentSlotDefinition[] {
    return defsDTO.arr.map(defDTO => EquipmentSlotDefinition.fromDTO(defDTO));
}
