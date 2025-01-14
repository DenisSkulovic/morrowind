import { Column, Entity, ManyToOne, PrimaryColumn } from "typeorm";
import { ContentBase } from "../../../ContentBase";
import { EffectTypeEnumDTO, StatusDTO } from "../../../proto/entities";
import { EffectTypeEnum } from "../../../common/enum/entityEnums";
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

@Entity()
@GQLObjectType({ implements: ContentBase })
export class Status extends ContentBase {

    @PrimaryColumn()
    @GQLField(() => GQLID)
    @Serializable()
    id!: string;

    idPrefix = "STATUS";

    @Column({ type: "varchar", length: 255 })
    @GQLField()
    @Serializable()
    name!: string;

    @Column({ type: "text" })
    @GQLField()
    @Serializable()
    description!: string;

    @Column({ type: "enum", enum: Object.values(EffectTypeEnum) })
    @GQLField(() => EffectTypeEnum)
    @Serializable({ strategy: SerializeStrategyEnum.ENUM, internalEnum: EffectTypeEnum, protoEnum: EffectTypeEnumDTO })
    type!: EffectTypeEnum;

    @Column("simple-array", { nullable: true })
    @GQLField(() => [String])
    @Serializable()
    effects!: string[]; // Links to associated Effect IDs.

    @Column({ nullable: true })
    @GQLField()
    @Serializable()
    duration!: number; // Duration in ticks (0 for permanent).

    @ManyToOne(() => User, { nullable: true })
    @GQLField(() => User, { nullable: true })
    @Serializable({ strategy: SerializeStrategyEnum.ID })
    user!: User;

    @ManyToOne(() => Campaign, { nullable: true })
    @GQLField(() => Campaign, { nullable: true })
    @Serializable({ strategy: SerializeStrategyEnum.ID })
    campaign?: Campaign;

    @ManyToOne(() => World, { nullable: true })
    @GQLField(() => World, { nullable: true })
    @Serializable({ strategy: SerializeStrategyEnum.ID })
    world!: World;

    public toDTO(): StatusDTO {
        return Serializer.toDTO(this);
    }

    public static fromDTO(dto: StatusDTO): Status {
        return Serializer.fromDTO(dto, new Status());
    }
}
