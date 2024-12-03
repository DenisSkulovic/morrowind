import { Column, Entity, ManyToMany, ManyToOne, PrimaryColumn } from "typeorm";
import { TaggableContentBase } from "../../../TaggableContentBase";
import { Tag } from "./Tag";
import { EffectDTO, EffectElementEnumDTO, EffectModeEnumDTO, EffectTargetEnumDTO, EffectTypeEnumDTO } from "../../../proto/common";
import { Context } from "../../../types";
import { EffectTypeEnum, EffectTargetEnum, EffectModeEnum, EffectElementEnum } from "../../../common/enum/entityEnums";
import { serializeEnum, deserializeEnum } from "../../../common/enum/util";
import { Campaign } from "../../campaign/entities/Campaign";
import { User } from "../../user/entities/User";
import { World } from "../../world/entities/World";
import { Serializable } from "../../../decorator/serializable.decorator";
import { Serializer } from "../../../serializer";

@Entity()
export class Effect extends TaggableContentBase {
    @PrimaryColumn()
    @Serializable()
    id!: string;

    idPrefix = "EFFECT";

    @Column({ default: "PLACEHOLDER" })
    @Serializable()
    name!: string;

    @Column({ type: "enum", enum: Object.values(EffectTypeEnum) })
    @Serializable({
        serialize: type => serializeEnum(EffectTypeEnum, EffectTypeEnumDTO, type),
        deserialize: type => deserializeEnum(EffectTypeEnumDTO, EffectTypeEnum, type),
    })
    type!: EffectTypeEnum; // "damage", "healing", "buff", "debuff", "resistance", etc.

    @Column({ type: "enum", enum: Object.values(EffectTargetEnum) })
    @Serializable({
        serialize: target => serializeEnum(EffectTargetEnum, EffectTargetEnumDTO, target),
        deserialize: target => deserializeEnum(EffectTargetEnumDTO, EffectTargetEnum, target),
    })
    target!: EffectTargetEnum; // "health", "stamina", "magic", etc.

    @Column({ type: "enum", enum: Object.values(EffectModeEnum) })
    @Serializable({
        serialize: mode => serializeEnum(EffectModeEnum, EffectModeEnumDTO, mode),
        deserialize: mode => deserializeEnum(EffectModeEnumDTO, EffectModeEnum, mode),
    })
    mode!: EffectModeEnum; // "instant", "gradual", "persistent"

    @Column({ type: "enum", enum: Object.values(EffectElementEnum), nullable: true })
    @Serializable({
        serialize: element => serializeEnum(EffectElementEnum, EffectElementEnumDTO, element),
        deserialize: element => deserializeEnum(EffectElementEnumDTO, EffectElementEnum, element),
    })
    element?: EffectElementEnum;


    @ManyToMany(() => Tag, (tag) => tag.effects, {})
    @Serializable({ strategy: 'id' })
    tags?: Tag[];

    @ManyToOne(() => User, { nullable: true, })
    @Serializable({ strategy: 'id' })
    user!: User;

    @ManyToOne(() => Campaign, { nullable: true, })
    @Serializable({ strategy: 'id' })
    campaign?: Campaign;

    @ManyToOne(() => World, { nullable: true, })
    @Serializable({ strategy: 'id' })
    world!: World;

    public toDTO(): EffectDTO {
        return Serializer.toDTO(this);
    }

    public static fromDTO(dto: EffectDTO): Effect {
        const effect = new Effect();
        return Serializer.fromDTO(dto, effect);
    }

}
