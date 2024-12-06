import { ContentBase } from "../class/ContentBase";
import { EffectTypeEnum } from "../enum/entityEnums";
import { serializeEnum, deserializeEnum } from "../enum/util";
import { EffectTypeEnumDTO, StatusDTO } from "../proto/common";
import { Serializable } from "../decorator/serializable.decorator";
import { Serializer } from "../serialize/serializer";

export class Status extends ContentBase {
    @Serializable()
    name!: string;

    @Serializable()
    description!: string;

    @Serializable({
        serialize: (i) => serializeEnum(EffectTypeEnum, EffectTypeEnumDTO, i),
        deserialize: (i) => deserializeEnum(EffectTypeEnumDTO, EffectTypeEnum, i)
    })
    type!: EffectTypeEnum;

    @Serializable()
    effects!: string[]; // Links to associated Effect IDs.

    @Serializable()
    duration!: number; // Duration in ticks (0 for permanent).

    public toDTO(): StatusDTO {
        return Serializer.toDTO(this);
    }

    public static fromDTO(dto: StatusDTO): Status {
        const status = new Status();
        return Serializer.fromDTO(dto, status);
    }
}
