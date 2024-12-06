import { ContentBase } from "../class/ContentBase";
import { EffectTypeEnum } from "../enum/entityEnums";
import { serializeEnum, deserializeEnum } from "../enum/util";
import { EffectTypeEnumDTO, ResistanceDTO } from "../proto/common";
import { Serializable } from "../decorator/serializable.decorator";
import { Serializer } from "../serialize/serializer";

export class Resistance extends ContentBase {
    @Serializable()
    name!: string;

    @Serializable({
        serialize: (i) => serializeEnum(EffectTypeEnum, EffectTypeEnumDTO, i),
        deserialize: (i) => deserializeEnum(EffectTypeEnumDTO, EffectTypeEnum, i)
    })
    effectType!: string; // Matches Effect.type

    @Serializable()
    targetEffect?: string; // "fire", "poison", "disease".

    public toDTO(): ResistanceDTO {
        return Serializer.toDTO(this);
    }

    public static fromDTO(dto: ResistanceDTO): Resistance {
        const resistance = new Resistance();
        return Serializer.fromDTO(dto, resistance);
    }
}
