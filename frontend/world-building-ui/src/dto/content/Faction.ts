import { TaggableContentBase } from "../../class/TaggableContentBase";
import { FactionDTO } from "../../proto/common";
import { Serializable } from "../../decorator/serializable.decorator";
import { Serializer } from "../../serialize/serializer";
import { Tag } from "./Tag";
import { FormField } from "../../decorator/form-field.decorator";
import { FieldComponentEnum } from "../../enum/FieldComponentEnum";

export class Faction extends TaggableContentBase {
    @Serializable()
    @FormField({ component: FieldComponentEnum.TEXT_FIELD, label: 'Name', placeholder: 'Enter faction name', required: true })
    name!: string;

    public toDTO(): FactionDTO {
        return Serializer.toDTO(this);
    }

    public static fromDTO(dto: FactionDTO): Faction {
        const faction = new Faction();
        return Serializer.fromDTO(dto, faction);
    }

    public static async search(filter?: any): Promise<Faction[]> {
        // perform request to backend using the filter
        // return array of options 
        return []
    }
}