import { ContentBase } from "../class/ContentBase";
import { BirthsignDTO } from "../proto/common";
import { Serializable } from "../decorator/serializable.decorator";
import { Serializer } from "../serialize/serializer";

export class Birthsign extends ContentBase {
    @Serializable()
    name!: string

    public toDTO(): BirthsignDTO {
        return Serializer.toDTO(this);
    }

    public static fromDTO(dto: BirthsignDTO): Birthsign {
        const birthsign = new Birthsign();
        return Serializer.fromDTO(dto, birthsign);
    }
}