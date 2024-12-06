import { FactStatusDTO, FactStatusEnumDTO, FactStatusesDTO } from "../proto/common";
import { FormField } from "../decorator/form-field.decorator";
import { FieldComponentEnum } from "../enum/FieldComponentEnum";
import { Serializer } from "../serialize/serializer";
import { FactStatusEnum } from "../enum/entityEnums";
import { deserializeEnum } from "../enum/util";
import { FormSelectOption } from "./FormSelectOption";

export class FactStatus {
    clazz = "FactStatus"

    @FormField({ component: FieldComponentEnum.TEXT_FIELD, label: 'Fact ID', placeholder: 'Enter fact ID', required: true })
    factId: string;

    @FormField({
        component: FieldComponentEnum.SELECT_FIELD,
        label: 'Status',
        search: async (): Promise<FormSelectOption[]> => {
            return Object.values(FactStatusEnum).map(([key, value]) => {
                return { id: value, label: value }
            })
        },
    })
    status: FactStatusEnum;

    constructor(factId: string, status: FactStatusEnum) {
        this.factId = factId;
        this.status = status;
    }

    toDTO(): FactStatusDTO {
        return Serializer.toDTO(this);
    }

    static fromDTO(dto: FactStatusDTO): FactStatus {
        const factStatus = new FactStatus(dto.factId, deserializeEnum(FactStatusEnumDTO, FactStatusEnum, dto.status));
        return Serializer.fromDTO(dto, factStatus);
    }
}

export function serializeFactStatuses(statuses: FactStatus[]): FactStatusesDTO {
    return { arr: statuses.map(status => status.toDTO()) }
}

export function deserializeFactStatuses(statusesDTO: FactStatusesDTO): FactStatus[] {
    return statusesDTO.arr.map(statusDTO => FactStatus.fromDTO(statusDTO))
}