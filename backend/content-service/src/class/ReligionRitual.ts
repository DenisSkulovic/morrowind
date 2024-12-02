import { ReligionRitualDTO, ReligionRitualsDTO } from "../proto/common";

export class ReligionRitual {
    constructor(
        public name: string,
        public description: string,
    ) { }
}
export type ReligionRituals = ReligionRitual[]

export function serializeReligionRitual(rit: ReligionRitual): ReligionRitualDTO {
    return rit
}
export function deserializeReligionRitual(ritDTO: ReligionRitualDTO): ReligionRitual {
    return ritDTO
}

export function serializeReligionRituals(rits: ReligionRituals): ReligionRitualsDTO {
    return { arr: rits.map((rit) => serializeReligionRitual(rit)) }
}
export function deserializeReligionRituals(ritDTO: ReligionRitualsDTO): ReligionRituals {
    return ritDTO.arr.map((rit) => deserializeReligionRitual(rit))
}