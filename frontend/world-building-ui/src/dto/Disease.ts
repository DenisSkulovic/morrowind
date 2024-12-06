import { TaggableContentBase } from "../class/TaggableContentBase";
import { DiseaseSeverityEnum } from "../enum/entityEnums";
import { serializeEnum, deserializeEnum } from "../enum/util";
import { DiseaseSeverityEnumDTO, DiseaseDTO } from "../proto/common";
import { Serializable } from "../decorator/serializable.decorator";
import { Serializer } from "../serialize/serializer";

export class Disease extends TaggableContentBase {
    @Serializable()
    name!: string;

    @Serializable()
    description!: string;

    @Serializable({
        serialize: type => serializeEnum(DiseaseSeverityEnum, DiseaseSeverityEnumDTO, type),
        deserialize: type => deserializeEnum(DiseaseSeverityEnumDTO, DiseaseSeverityEnum, type),
    })
    severity!: DiseaseSeverityEnum;

    public toDTO(): DiseaseDTO {
        return Serializer.toDTO(this);
    }

    public static fromDTO(dto: DiseaseDTO): Disease {
        const disease = new Disease();
        return Serializer.fromDTO(dto, disease);
    }
}
