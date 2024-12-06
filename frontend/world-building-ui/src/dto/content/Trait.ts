import { TaggableContentBase } from "../../class/TaggableContentBase";
import { TraitTypeEnum } from "../../enum/TraitTypeEnum";
import { serializeEnum, deserializeEnum } from "../../enum/util";
import { TraitTypeEnumDTO, TraitDTO } from "../../proto/common";
import { Serializable } from "../../decorator/serializable.decorator";
import { Serializer } from "../../serialize/serializer";

export class Trait extends TaggableContentBase {
    @Serializable()
    name!: string;

    @Serializable({
        serialize: (i) => serializeEnum(TraitTypeEnum, TraitTypeEnumDTO, i),
        deserialize: (i) => deserializeEnum(TraitTypeEnumDTO, TraitTypeEnum, i)
    })
    traitType!: TraitTypeEnum

    public toDTO(): TraitDTO {
        return Serializer.toDTO(this);
    }

    public static fromDTO(dto: TraitDTO): Trait {
        const trait = new Trait();
        return Serializer.fromDTO(dto, trait);
    }

    public static async search(filter?: any): Promise<Trait[]> {
        // perform request to backend using the filter
        // return array of options
        return []
    }
}
