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

    id_prefix = "EFFECT";

    @Column({ default: "PLACEHOLDER" })
    @Serializable()
    name!: string;

    @Column({ type: "enum", enum: EffectTypeEnum })
    @Serializable({
        serialize: type => serializeEnum(EffectTypeEnumDTO, type),
        deserialize: type => deserializeEnum(EffectTypeEnum, type),
    })
    type!: EffectTypeEnum; // "damage", "healing", "buff", "debuff", "resistance", etc.

    @Column({ type: "enum", enum: EffectTargetEnum })
    @Serializable({
        serialize: target => serializeEnum(EffectTargetEnumDTO, target),
        deserialize: target => deserializeEnum(EffectTargetEnum, target),
    })
    target!: EffectTargetEnum; // "health", "stamina", "magic", etc.

    @Column({ type: "enum", enum: EffectModeEnum })
    @Serializable({
        serialize: mode => serializeEnum(EffectModeEnumDTO, mode),
        deserialize: mode => deserializeEnum(EffectModeEnum, mode),
    })
    mode!: EffectModeEnum; // "instant", "gradual", "persistent"

    @Column({ type: "enum", enum: EffectElementEnum, nullable: true })
    @Serializable({
        serialize: element => serializeEnum(EffectElementEnumDTO, element),
        deserialize: element => deserializeEnum(EffectElementEnum, element),
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
