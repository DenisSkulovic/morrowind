import { FactStatusEnum } from "../common/enum/entityEnums";
import { deserializeEnum, serializeEnum } from "../common/enum/util";
import { FactStatusDTO, FactStatusEnumDTO, FactStatusesDTO } from "../proto/common";

export class FactStatus {
    clazz = "FactStatus"
    constructor(
        public factId: string,
        public status: FactStatusEnum,
    ) { }

    toDTO() {
        return serializeFactStatus(this)
    }

    static fromDTO(dto: FactStatusDTO): FactStatus {
        return deserializeFactStatus(dto)
    }
}

export function serializeFactStatus(st: FactStatus): FactStatusDTO {
    return {
        factId: st.factId,
        status: serializeEnum(FactStatusEnum, FactStatusEnumDTO, st.status),
        clazz: st.clazz
    }
}
export function deserializeFactStatus(dtoSt: FactStatusDTO): FactStatus {
    return new FactStatus(
        dtoSt.factId,
        deserializeEnum(FactStatusEnumDTO, FactStatusEnum, dtoSt.status),
    )
}

export function serializeFactStatuses(statuses: FactStatus[]): FactStatusesDTO {
    return { arr: statuses.map(status => serializeFactStatus(status)) }
}
export function deserializeFactStatuses(statusesDTO: FactStatusesDTO): FactStatus[] {
    return statusesDTO.arr.map(statusDTO => deserializeFactStatus(statusDTO))
}