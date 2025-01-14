import { Entity, Column, ManyToOne, PrimaryColumn } from "typeorm";
import { ContentBase } from "../../../ContentBase";
import { NeedDTO, NeedLayerEnumDTO, NeedTypeEnumDTO } from "../../../proto/entities";
import { NeedTypeEnum, NeedLayerEnum } from "../../../common/enum/entityEnums";
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
export class Need extends ContentBase {
    @PrimaryColumn()
    @GQLField(() => GQLID)
    @Serializable()
    id!: string;

    idPrefix = "NEED";

    /**
     * Name of the need (e.g., Hunger, Security, Financial Stability).
     */
    @Column({ type: "varchar", length: 255 })
    @GQLField()
    @Serializable()
    name!: string;

    /**
     * Description of the need.
     */
    @Column({ type: "text" })
    @GQLField()
    @Serializable()
    description!: string;

    /**
     * The type of need (e.g., dynamic, threshold, external).
     * Hunger is a dynamic need. Safety is an external need as it is based on the world around the NPC. 
     */
    @Column({ type: "enum", enum: Object.values(NeedTypeEnum) })
    @GQLField(() => NeedTypeEnum)
    @Serializable({ strategy: SerializeStrategyEnum.ENUM, internalEnum: NeedTypeEnum, protoEnum: NeedTypeEnumDTO })
    type!: NeedTypeEnum; // "dynamic", "threshold", "external".

    /**
     * Need layer according to Maslow pyramid
     */
    @Column({ type: "enum", enum: Object.values(NeedLayerEnum) })
    @GQLField(() => NeedLayerEnum)
    @Serializable({ strategy: SerializeStrategyEnum.ENUM, internalEnum: NeedLayerEnum, protoEnum: NeedLayerEnumDTO })
    layer!: NeedLayerEnum

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

    public toDTO(): NeedDTO {
        return Serializer.toDTO(this);
    }

    public static fromDTO(dto: NeedDTO): Need {
        return Serializer.fromDTO(dto, new Need());
    }
}
