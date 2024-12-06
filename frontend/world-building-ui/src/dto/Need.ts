import { ContentBase } from "../class/ContentBase";
import { NeedTypeEnum, NeedLayerEnum } from "../enum/entityEnums";
import { serializeEnum, deserializeEnum } from "../enum/util";
import { NeedTypeEnumDTO, NeedLayerEnumDTO, NeedDTO } from "../proto/common";
import { Serializable } from "../decorator/serializable.decorator";
import { Serializer } from "../serialize/serializer";

export class Need extends ContentBase {
    @Serializable()
    name!: string;

    @Serializable()
    description!: string;

    @Serializable({
        serialize: (i) => serializeEnum(NeedTypeEnum, NeedTypeEnumDTO, i),
        deserialize: (i) => deserializeEnum(NeedTypeEnumDTO, NeedTypeEnum, i)
    })
    type!: NeedTypeEnum; // "dynamic", "threshold", "external".

    @Serializable({
        serialize: (i) => serializeEnum(NeedLayerEnum, NeedLayerEnumDTO, i),
        deserialize: (i) => deserializeEnum(NeedLayerEnumDTO, NeedLayerEnum, i)
    })
    layer!: NeedLayerEnum

    public toDTO(): NeedDTO {
        return Serializer.toDTO(this);
    }

    public static fromDTO(dto: NeedDTO): Need {
        const need = new Need();
        return Serializer.fromDTO(dto, need);
    }
}
