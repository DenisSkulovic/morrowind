import { Entity, Column, ManyToMany, ManyToOne, TableInheritance, PrimaryColumn } from "typeorm";
import { TaggableContentBase } from "../../../TaggableContentBase";
import { Tag } from "./Tag";
import { TraitDTO, TraitTypeEnumDTO } from "../../../proto/entities";
import { Campaign } from "../../campaign/entities/Campaign";
import { User } from "../../user/entities/User";
import { World } from "../../world/entities/World";
import { Serializer, SerializeStrategyEnum } from "../../../serializer";
import { Serializable } from "../../../decorator/serializable.decorator";
import { TraitTypeEnum } from "../../../common/enum/TraitTypeEnum";
import {
    Field as GQLField,
    ID as GQLID,
    ObjectType as GQLObjectType,
} from '@nestjs/graphql';

@Entity()
@GQLObjectType({ implements: TaggableContentBase })
export class Trait extends TaggableContentBase {
    @PrimaryColumn()
    @GQLField(() => GQLID)
    @Serializable()
    id!: string;

    idPrefix = "TRAIT";

    @Column({ default: "PLACEHOLDER" })
    @GQLField()
    @Serializable()
    name!: string;

    @Column({ type: "enum", enum: Object.values(TraitTypeEnum) })
    @GQLField(() => TraitTypeEnum)
    @Serializable({ strategy: SerializeStrategyEnum.ENUM, internalEnum: TraitTypeEnum, protoEnum: TraitTypeEnumDTO })
    traitType!: TraitTypeEnum

    @ManyToMany(() => Tag, (tag) => tag.traits, {})
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

    public toDTO(): TraitDTO {
        return Serializer.toDTO(this);
    }

    public static fromDTO(dto: TraitDTO): Trait {
        return Serializer.fromDTO(dto, new Trait());
    }
}
