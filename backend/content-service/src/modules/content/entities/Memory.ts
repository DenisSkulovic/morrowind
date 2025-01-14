import { Entity, ManyToMany, Column, JoinTable, ManyToOne, PrimaryColumn } from "typeorm";
import { Fact } from "./Fact";
import { Tag } from "./Tag";
import { TaggableContentBase } from "../../../TaggableContentBase";
import { MemoryDTO, MemoryTypeEnumDTO } from "../../../proto/entities";
import { MemoryTypeEnum } from "../../../common/enum/entityEnums";
import { serializeEnum, deserializeEnum } from "../../../common/enum/util";
import { Campaign } from "../../campaign/entities/Campaign";
import { User } from "../../user/entities/User";
import { World } from "../../world/entities/World";
import { Serializer, SerializeStrategyEnum } from "../../../serializer";
import { Serializable } from "../../../decorator/serializable.decorator";
import {
    Field as GQLField,
    ID as GQLID,
    ObjectType as GQLObjectType,
} from '@nestjs/graphql';

@Entity()
@GQLObjectType({ implements: TaggableContentBase })
export class Memory extends TaggableContentBase {
    @PrimaryColumn()
    @Serializable()
    @GQLField(() => GQLID)
    id!: string;

    idPrefix = "MEMORY"

    @Column()
    @Serializable()
    @GQLField()
    name!: string;

    @Column({ nullable: true, default: null })
    @Serializable()
    @GQLField()
    description!: string

    @Column({ type: "enum", enum: Object.values(MemoryTypeEnum) }) // bad to have this default, but I dont have a better idea yet, need to come back to the types later
    @Serializable({ strategy: SerializeStrategyEnum.ENUM, internalEnum: MemoryTypeEnum, protoEnum: MemoryTypeEnumDTO })
    @GQLField(() => MemoryTypeEnum)
    type!: MemoryTypeEnum // TODO need to properly conceptualize types of memories and what that means. Maybe better to do it with tags?

    @ManyToMany(() => Fact, fact => fact.memories)
    @JoinTable()
    @Serializable({ strategy: SerializeStrategyEnum.FULL, asDtoArray: true, internalClass: Fact })
    @GQLField(() => [Fact])
    facts!: Fact[]

    @ManyToMany(() => Tag, (tag) => tag.memories)
    @GQLField(() => [Tag])
    @Serializable({ strategy: SerializeStrategyEnum.ID })
    tags?: Tag[];

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

    public toDTO(): MemoryDTO {
        return Serializer.toDTO(this);
    }

    public static fromDTO(dto: MemoryDTO): Memory {
        return Serializer.fromDTO(dto, new Memory());
    }
}