import { ContentBase } from "../../class/ContentBase";
import { BirthsignDTO } from "../../proto/common";
import { Serializable } from "../../decorator/serializable.decorator";
import { Serializer } from "../../serialize/serializer";
import { FormField } from "../../decorator/form-field.decorator";
import { FieldComponentEnum } from "../../enum/FieldComponentEnum";

export class Birthsign extends ContentBase {
    @FormField({ component: FieldComponentEnum.TEXT_FIELD, label: 'Name', placeholder: 'Enter birthsign name', required: true })
    @Serializable()
    name!: string

    public toDTO(): BirthsignDTO {
        return Serializer.toDTO(this);
    }

    public static fromDTO(dto: BirthsignDTO): Birthsign {
        const birthsign = new Birthsign();
        return Serializer.fromDTO(dto, birthsign);
    }

    public static async search(filter?: any): Promise<Birthsign[]> {
        // perform request to backend using the filter
        // return array of options
        return []
    }
}