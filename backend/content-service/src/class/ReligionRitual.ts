import { Serializable } from "../decorator/serializable.decorator";
import { ReligionRitualDTO } from "../proto/common";
import { Serializer } from "../serializer";

export class ReligionRitual {
    @Serializable()
    clazz = "ReligionRitual"

    @Serializable()
    name!: string

    @Serializable()
    description!: string

    toDTO(): ReligionRitualDTO {
        return Serializer.toDTO(this)
    }
    static fromDTO(dto: ReligionRitualDTO): ReligionRitual {
        return Serializer.fromDTO(dto, new ReligionRitual())
    }
}
