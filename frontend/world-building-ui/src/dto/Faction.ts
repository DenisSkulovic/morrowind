import { TaggableContentBase } from "../class/TaggableContentBase";
import { FactionDTO } from "../proto/common";
import { Serializable } from "../decorator/serializable.decorator";
import { Serializer } from "../serialize/serializer";
import { Tag } from "./Tag";

export class Faction extends TaggableContentBase {
    @Serializable()
    name!: string

    public toDTO(): FactionDTO {
        return Serializer.toDTO(this);
    }

    public static fromDTO(dto: FactionDTO): Faction {
        const faction = new Faction();
        return Serializer.fromDTO(dto, faction);
    }

}