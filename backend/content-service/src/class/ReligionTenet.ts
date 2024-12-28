import { Serializable } from "../decorator/serializable.decorator";
import { ReligionTenetDTO } from "../proto/common";
import { Serializer } from "../serializer";

export class ReligionTenet {
    @Serializable()
    clazz = "ReligionTenet"

    @Serializable()
    name!: string

    @Serializable()
    description!: string

    toDTO(): ReligionTenetDTO {
        return Serializer.toDTO(this)
    }
    static fromDTO(dto: ReligionTenetDTO): ReligionTenet {
        return Serializer.fromDTO(dto, new ReligionTenet())
    }
}