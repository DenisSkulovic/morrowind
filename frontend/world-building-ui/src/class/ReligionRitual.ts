import { ReligionRitualDTO, ReligionRitualsDTO } from "../proto/common";

export class ReligionRitual {
    clazz = "ReligionRitual"
    constructor(
        public name: string,
        public description: string,
    ) { }
    toDTO(): ReligionRitualDTO {
        return serializeReligionRitual(this)
    }
    static fromDTO(dto: ReligionRitualDTO): ReligionRitual {
        return deserializeReligionRitual(dto)
    }
}

export function serializeReligionRitual(rit: ReligionRitual): ReligionRitualDTO {
    return rit
}
export function deserializeReligionRitual(ritDTO: ReligionRitualDTO): ReligionRitual {
    return new ReligionRitual(
        ritDTO.name,
        ritDTO.description,
    )
}

export function serializeReligionRituals(rits: ReligionRituals): ReligionRitualsDTO {
    return { arr: rits.map((rit) => serializeReligionRitual(rit)) }
}
export function deserializeReligionRituals(ritDTO: ReligionRitualsDTO): ReligionRituals {
    return ritDTO.arr.map((rit) => deserializeReligionRitual(rit))
}