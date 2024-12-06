import { ReligionTenetDTO, ReligionTenetsDTO } from "../proto/common";
import { FormField } from "../decorator/form-field.decorator";
import { FieldComponentEnum } from "../enum/FieldComponentEnum";

export class ReligionTenet {
    clazz = "ReligionTenet"

    @FormField({ component: FieldComponentEnum.TEXT_FIELD, label: 'Name', placeholder: 'Enter tenet name', required: true })
    name: string;

    @FormField({ component: FieldComponentEnum.TEXT_FIELD, label: 'Description', placeholder: 'Enter tenet description', required: true })
    description: string;

    constructor(name: string, description: string) {
        this.name = name;
        this.description = description;
    }

    toDTO(): ReligionTenetDTO {
        return serializeReligionTenet(this)
    }
    static fromDTO(dto: ReligionTenetDTO): ReligionTenet {
        return deserializeReligionTenet(dto)
    }
}

export function serializeReligionTenet(tenet: ReligionTenet): ReligionTenetDTO {
    return tenet
}
export function deserializeReligionTenet(tenetDTO: ReligionTenetDTO): ReligionTenet {
    return new ReligionTenet(
        tenetDTO.name,
        tenetDTO.description,
    )
}

export function serializeReligionTenets(tenets: ReligionTenet[]): ReligionTenetsDTO {
    return { arr: tenets.map((tenet) => serializeReligionTenet(tenet)) }
}
export function deserializeReligionTenets(tenetDTO: ReligionTenetsDTO): ReligionTenet[] {
    return tenetDTO.arr.map((tenet) => deserializeReligionTenet(tenet))
}