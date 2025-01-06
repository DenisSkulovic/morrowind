import { Column, Entity, ManyToMany, ManyToOne, PrimaryColumn } from "typeorm";
import { TaggableContentBase } from "../../../TaggableContentBase";
import { Tag } from "./Tag";
import { EffectDTO, EffectElementEnumDTO, EffectModeEnumDTO, EffectTargetEnumDTO, EffectTypeEnumDTO } from "../../../proto/entities";
import { EffectTypeEnum, EffectTargetEnum, EffectModeEnum, EffectElementEnum } from "../../../common/enum/entityEnums";
import { serializeEnum, deserializeEnum } from "../../../common/enum/util";
import { Campaign } from "../../campaign/entities/Campaign";
import { User } from "../../user/entities/User";
import { World } from "../../world/entities/World";
import { Serializable } from "../../../decorator/serializable.decorator";
import { Serializer, SerializeStrategyEnum } from "../../../serializer";

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
    @Serializable({ strategy: SerializeStrategyEnum.ENUM, internalEnum: EffectTypeEnum, protoEnum: EffectTypeEnumDTO })
    type!: EffectTypeEnum; // "damage", "healing", "buff", "debuff", "resistance", etc.

    @Column({ type: "enum", enum: Object.values(EffectTargetEnum) })
    @Serializable({ strategy: SerializeStrategyEnum.ENUM, internalEnum: EffectTargetEnum, protoEnum: EffectTargetEnumDTO })
    target!: EffectTargetEnum; // "health", "stamina", "magic", etc.

    @Column({ type: "enum", enum: Object.values(EffectModeEnum) })
    @Serializable({ strategy: SerializeStrategyEnum.ENUM, internalEnum: EffectModeEnum, protoEnum: EffectModeEnumDTO })
    mode!: EffectModeEnum; // "instant", "gradual", "persistent"

    @Column({ type: "enum", enum: Object.values(EffectElementEnum), nullable: true })
    @Serializable({ strategy: SerializeStrategyEnum.ENUM, internalEnum: EffectElementEnum, protoEnum: EffectElementEnumDTO })
    element?: EffectElementEnum;


    @ManyToMany(() => Tag, (tag) => tag.effects, {})
    @Serializable({ strategy: SerializeStrategyEnum.ID })
    tags?: Tag[];

    @ManyToOne(() => User, { nullable: true, })
    @Serializable({ strategy: SerializeStrategyEnum.ID })
    user!: User;

    @ManyToOne(() => Campaign, { nullable: true, })
    @Serializable({ strategy: SerializeStrategyEnum.ID })
    campaign?: Campaign;

    @ManyToOne(() => World, { nullable: true, })
    @Serializable({ strategy: SerializeStrategyEnum.ID })
    world!: World;

    public toDTO(): EffectDTO {
        return Serializer.toDTO(this);
    }

    public static fromDTO(dto: EffectDTO): Effect {
        return Serializer.fromDTO(dto, new Effect());
    }

}
