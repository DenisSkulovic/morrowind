import { common } from "../proto/common";
import { FormField } from "../decorator/form-field.decorator";
import { FieldComponentEnum } from "../enum/FieldComponentEnum";
import { Serializer } from "../serialize/serializer";
import { FactStatusEnum } from "../enum/entityEnums";
import { deserializeEnum, serializeEnum } from "../enum/util";
import { FormSelectOption } from "./FormSelectOption";
import { Serializable } from "../decorator/serializable.decorator";

export class FactStatus {
    @Serializable()
    @FormField({ component: FieldComponentEnum.TEXT_FIELD, label: 'Fact ID', placeholder: 'Enter fact ID', required: true })
    factId: string;

    @Serializable({
        serialize: status => serializeEnum(FactStatusEnum, common.FactStatusEnumDTO, status),
        deserialize: status => deserializeEnum(common.FactStatusEnumDTO, FactStatusEnum, status),
    })
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

    public toDTO(): common.FactStatusDTO {
        return Serializer.toDTO(this);
    }

    public static fromDTO(dto: common.FactStatusDTO): FactStatus {
        const factStatus = new FactStatus(
            dto.factId,
            deserializeEnum(common.FactStatusEnumDTO, FactStatusEnum, dto.status)
        );
        return Serializer.fromDTO(dto, factStatus);
    }
}

export function serializeFactStatuses(statuses: FactStatus[]): common.FactStatusesDTO {
    const message = new common.FactStatusesDTO({});
    message.arr = statuses.map(status => status.toDTO());
    return message;
}

export function deserializeFactStatuses(statusesDTO: common.FactStatusesDTO): FactStatus[] {
    return statusesDTO.arr.map(statusDTO => FactStatus.fromDTO(statusDTO));
}