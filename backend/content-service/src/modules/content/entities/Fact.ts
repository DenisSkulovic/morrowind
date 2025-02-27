import { Entity, Column, ManyToMany, ManyToOne, PrimaryGeneratedColumn, BeforeInsert, PrimaryColumn } from "typeorm";
import { Tag } from "./Tag";
import { TaggableContentBase } from "../../../TaggableContentBase";
import { Memory } from "./Memory";
import { FactDTO } from "../../../proto/entities";
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
@GQLObjectType({ implements: TaggableContentBase })
export class Fact extends TaggableContentBase {
    @PrimaryColumn()
    @GQLField(() => GQLID)
    @Serializable()
    id!: string;

    idPrefix = "FACT"

    @Column()
    @GQLField()
    @Serializable()
    name!: string

    @Column({ type: "text" })
    @GQLField()
    @Serializable()
    description!: string

    @Column()
    @GQLField()
    @Serializable()
    weight!: number // 1 to 20; How "objectively" important the fact is. For example Red Mountain eruption is 20, because its a global event, but to a farmer in Leyawiin it may be a 2 of personal importance of the memory as a whole. The larger the weight, the more you need to accumulate "decay" to forget it. Lower weight facts are forgotten quicker.

    @ManyToMany(() => Memory, memory => memory.facts, {})
    @GQLField(() => [Memory])
    memories!: Memory[]

    @ManyToMany(() => Tag, (tag) => tag.facts, {})
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

    public toDTO(): FactDTO {
        return Serializer.toDTO(this);
    }

    public static fromDTO(dto: FactDTO): Fact {
        const fact = new Fact();
        return Serializer.fromDTO(dto, fact);
    }

}