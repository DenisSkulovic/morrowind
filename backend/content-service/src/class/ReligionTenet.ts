import { ReligionTenetDTO, ReligionTenetsDTO } from "../proto/common";

export class ReligionTenet {
    clazz = "ReligionTenet"
    constructor(
        public name: string,
        public description: string,
    ) { }
    toDTO(): ReligionTenetDTO {
        return serializeReligionTenet(this)
    }
    static fromDTO(dto: ReligionTenetDTO): ReligionTenet {
        return deserializeReligionTenet(dto)
    }
}
export type ReligionTenets = ReligionTenet[]

export function serializeReligionTenet(tenet: ReligionTenet): ReligionTenetDTO {
    return tenet
}
export function deserializeReligionTenet(tenetDTO: ReligionTenetDTO): ReligionTenet {
    return new ReligionTenet(
        tenetDTO.name,
        tenetDTO.description,
    )
}

export function serializeReligionTenets(tenets: ReligionTenets): ReligionTenetsDTO {
    return { arr: tenets.map((tenet) => serializeReligionTenet(tenet)) }
}
export function deserializeReligionTenets(tenetDTO: ReligionTenetsDTO): ReligionTenets {
    return tenetDTO.arr.map((tenet) => deserializeReligionTenet(tenet))
}