import { FactStatusEnum } from "../common/enum/entityEnums";
import { deserializeEnum, serializeEnum } from "../common/enum/util";
import { FactStatusDTO, FactStatusEnumDTO, FactStatusesDTO } from "../proto/common";

export class FactStatus {
    constructor(
        public factId: string,
        public status: FactStatusEnum,
    ) { }
}

export function serializeFactStatus(st: FactStatus): FactStatusDTO {
    return {
        factId: st.factId,
        status: serializeEnum(FactStatusEnumDTO, st.status)
    }
}
export function deserializeFactStatus(dtoSt: FactStatusDTO): FactStatus {
    return {
        factId: dtoSt.factId,
        status: deserializeEnum(FactStatusEnum, dtoSt.status) as FactStatusEnum
    }
}

export function serializeFactStatuses(statuses: FactStatus[]): FactStatusesDTO {
    return { arr: statuses.map(status => serializeFactStatus(status)) }
}
export function deserializeFactStatuses(statusesDTO: FactStatusesDTO): FactStatus[] {
    return statusesDTO.arr.map(statusDTO => deserializeFactStatus(statusDTO))
}