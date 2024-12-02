import { ReligionTenetDTO, ReligionTenetsDTO } from "../proto/common";

export class ReligionTenet {
    constructor(
        public name: string,
        public description: string,
    ) { }
}
export type ReligionTenets = ReligionTenet[]

export function serializeReligionTenet(tenet: ReligionTenet): ReligionTenetDTO {
    return tenet
}
export function deserializeReligionTenet(tenetDTO: ReligionTenetDTO): ReligionTenet {
    return tenetDTO
}

export function serializeReligionTenets(tenets: ReligionTenets): ReligionTenetsDTO {
    return { arr: tenets.map((tenet) => serializeReligionTenet(tenet)) }
}
export function deserializeReligionTenets(tenetDTO: ReligionTenetsDTO): ReligionTenets {
    return tenetDTO.arr.map((tenet) => deserializeReligionTenet(tenet))
}