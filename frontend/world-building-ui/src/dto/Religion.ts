import { ContentBase } from "../class/ContentBase";
import { serializeReligionRituals, deserializeReligionRituals, ReligionRitual } from "../class/ReligionRitual";
import { serializeReligionTenets, deserializeReligionTenets, ReligionTenet } from "../class/ReligionTenet";
import { ReligionDTO } from "../proto/common";
import { Serializable } from "../decorator/serializable.decorator";
import { Serializer } from "../serialize/serializer";

export class Religion extends ContentBase {
    @Serializable()
    name!: string;

    @Serializable()
    description!: string;

    @Serializable({
        serialize: serializeReligionRituals,
        deserialize: deserializeReligionRituals
    })
    rituals?: ReligionRitual[];

    @Serializable({
        serialize: serializeReligionTenets,
        deserialize: deserializeReligionTenets
    })
    tenets?: ReligionTenet[];

    public toDTO(): ReligionDTO {
        return Serializer.toDTO(this);
    }

    public static fromDTO(dto: ReligionDTO): Religion {
        const religion = new Religion();
        return Serializer.fromDTO(dto, religion);
    }
}
