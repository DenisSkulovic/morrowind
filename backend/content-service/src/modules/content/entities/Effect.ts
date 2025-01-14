import { Column, Entity, ManyToMany, ManyToOne, PrimaryColumn } from "typeorm";
import { TaggableContentBase } from "../../../TaggableContentBase";
import { Tag } from "./Tag";
import { EffectDTO, EffectElementEnumDTO, EffectModeEnumDTO, EffectTargetEnumDTO, EffectTypeEnumDTO } from "../../../proto/entities";
import { EffectTypeEnum, EffectTargetEnum, EffectModeEnum, EffectElementEnum } from "../../../common/enum/entityEnums";
import { Campaign } from "../../campaign/entities/Campaign";
import { User } from "../../user/entities/User";
import { World } from "../../world/entities/World";
import { Serializable } from "../../../decorator/serializable.decorator";
import { Serializer, SerializeStrategyEnum } from "../../../serializer";
import {
    Field as GQLField,
    ID as GQLID,
    ObjectType as GQLObjectType,
} from '@nestjs/graphql';

@GQLObjectType({ implements: TaggableContentBase })
@Entity()
export class Effect extends TaggableContentBase {
    @PrimaryColumn()
    @GQLField(() => GQLID)
    @Serializable()
    id!: string;

    idPrefix = "EFFECT";

    @Column({ default: "PLACEHOLDER" })
    @GQLField()
    @Serializable()
    name!: string;

    @Column({ type: "enum", enum: Object.values(EffectTypeEnum) })
    @GQLField()
    @Serializable({ strategy: SerializeStrategyEnum.ENUM, internalEnum: EffectTypeEnum, protoEnum: EffectTypeEnumDTO })
    type!: EffectTypeEnum; // "damage", "healing", "buff", "debuff", "resistance", etc.

    @Column({ type: "enum", enum: Object.values(EffectTargetEnum) })
    @GQLField()
    @Serializable({ strategy: SerializeStrategyEnum.ENUM, internalEnum: EffectTargetEnum, protoEnum: EffectTargetEnumDTO })
    target!: EffectTargetEnum; // "health", "stamina", "magic", etc.

    @Column({ type: "enum", enum: Object.values(EffectModeEnum) })
    @GQLField()
    @Serializable({ strategy: SerializeStrategyEnum.ENUM, internalEnum: EffectModeEnum, protoEnum: EffectModeEnumDTO })
    mode!: EffectModeEnum; // "instant", "gradual", "persistent"

    @Column({ type: "enum", enum: Object.values(EffectElementEnum), nullable: true })
    @GQLField(() => EffectElementEnum, { nullable: true })
    @Serializable({ strategy: SerializeStrategyEnum.ENUM, internalEnum: EffectElementEnum, protoEnum: EffectElementEnumDTO })
    element?: EffectElementEnum;


    @ManyToMany(() => Tag, (tag) => tag.effects, {})
    @GQLField(() => [Tag])
    @Serializable({ strategy: SerializeStrategyEnum.ID })
    tags?: Tag[];

    @ManyToOne(() => User, { nullable: true, })
    @GQLField(() => User, { nullable: true })
    @Serializable({ strategy: SerializeStrategyEnum.ID })
    user!: User;

    @ManyToOne(() => Campaign, { nullable: true, })
    @GQLField(() => Campaign, { nullable: true })
    @Serializable({ strategy: SerializeStrategyEnum.ID })
    campaign?: Campaign;

    @ManyToOne(() => World, { nullable: true, })
    @GQLField(() => World, { nullable: true })
    @Serializable({ strategy: SerializeStrategyEnum.ID })
    world!: World;

    public toDTO(): EffectDTO {
        return Serializer.toDTO(this);
    }

    public static fromDTO(dto: EffectDTO): Effect {
        return Serializer.fromDTO(dto, new Effect());
    }

}
