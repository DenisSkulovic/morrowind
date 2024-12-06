import { ReligionRitualDTO, ReligionRitualsDTO } from "../proto/common";
import { FormField } from "../decorator/form-field.decorator";
import { FieldComponentEnum } from "../enum/FieldComponentEnum";

export class ReligionRitual {
    clazz = "ReligionRitual"

    @FormField({ component: FieldComponentEnum.TEXT_FIELD, label: 'Name', placeholder: 'Enter ritual name', required: true })
    name: string;

    @FormField({ component: FieldComponentEnum.TEXT_FIELD, label: 'Description', placeholder: 'Enter ritual description', required: true })
    description: string;

    constructor(name: string, description: string) {
        this.name = name;
        this.description = description;
    }

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

export function serializeReligionRituals(rits: ReligionRitual[]): ReligionRitualsDTO {
    return { arr: rits.map((rit) => serializeReligionRitual(rit)) }
}
export function deserializeReligionRituals(ritDTO: ReligionRitualsDTO): ReligionRitual[] {
    return ritDTO.arr.map((rit) => deserializeReligionRitual(rit))
}