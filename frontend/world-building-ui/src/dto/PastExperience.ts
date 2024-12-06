import { TaggableContentBase } from "../class/TaggableContentBase";
import { PastExperienceTypeEnum } from "../enum/PastExperienceTypeEnum";
import { serializeEnum, deserializeEnum } from "../enum/util";
import { PastExperienceTypeEnumDTO, PastExperienceDTO } from "../proto/common";
import { Serializable } from "../decorator/serializable.decorator";
import { Serializer } from "../serialize/serializer";
import { Tag } from "./Tag";

export class PastExperience extends TaggableContentBase {
    @Serializable()
    name!: string;

    @Serializable({
        serialize: (i) => serializeEnum(PastExperienceTypeEnum, PastExperienceTypeEnumDTO, i),
        deserialize: (i) => deserializeEnum(PastExperienceTypeEnumDTO, PastExperienceTypeEnum, i)
    })
    expType!: PastExperienceTypeEnum

    public toDTO(): PastExperienceDTO {
        return Serializer.toDTO(this);
    }

    public static fromDTO(dto: PastExperienceDTO): PastExperience {
        const pastExperience = new PastExperience();
        return Serializer.fromDTO(dto, pastExperience);
    }
}