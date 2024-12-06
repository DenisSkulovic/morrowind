import { TaggableContentBase } from "../class/TaggableContentBase";
import { EffectTypeEnum, EffectTargetEnum, EffectModeEnum, EffectElementEnum } from "../enum/entityEnums";
import { serializeEnum, deserializeEnum } from "../enum/util";
import { EffectTypeEnumDTO, EffectTargetEnumDTO, EffectModeEnumDTO, EffectElementEnumDTO, EffectDTO } from "../proto/common";
import { Serializable } from "../decorator/serializable.decorator";
import { Serializer } from "../serialize/serializer";

export class Effect extends TaggableContentBase {
    @Serializable()
    name!: string;

    @Serializable({
        serialize: type => serializeEnum(EffectTypeEnum, EffectTypeEnumDTO, type),
        deserialize: type => deserializeEnum(EffectTypeEnumDTO, EffectTypeEnum, type),
    })
    type!: EffectTypeEnum; // "damage", "healing", "buff", "debuff", "resistance", etc.

    @Serializable({
        serialize: target => serializeEnum(EffectTargetEnum, EffectTargetEnumDTO, target),
        deserialize: target => deserializeEnum(EffectTargetEnumDTO, EffectTargetEnum, target),
    })
    target!: EffectTargetEnum; // "health", "stamina", "magic", etc.

    @Serializable({
        serialize: mode => serializeEnum(EffectModeEnum, EffectModeEnumDTO, mode),
        deserialize: mode => deserializeEnum(EffectModeEnumDTO, EffectModeEnum, mode),
    })
    mode!: EffectModeEnum; // "instant", "gradual", "persistent"

    @Serializable({
        serialize: element => serializeEnum(EffectElementEnum, EffectElementEnumDTO, element),
        deserialize: element => deserializeEnum(EffectElementEnumDTO, EffectElementEnum, element),
    })
    element?: EffectElementEnum;

    public toDTO(): EffectDTO {
        return Serializer.toDTO(this);
    }

    public static fromDTO(dto: EffectDTO): Effect {
        const effect = new Effect();
        return Serializer.fromDTO(dto, effect);
    }

}
