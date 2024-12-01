import { Entity, Column, ManyToMany, ManyToOne, PrimaryGeneratedColumn, BeforeInsert, PrimaryColumn } from "typeorm";
import { Tag } from "./Tag";
import { TaggableContentBase } from "../../TaggableContentBase";
import { Campaign } from "../Campaign";
import { User } from "../User";
import { World } from "../World";
import { Memory } from "./Knowledge/Memory";
import { randomUUID } from "crypto";
import { FactDTO } from "../../proto/common";
import { Context } from "../../types";

@Entity()
export class Fact extends TaggableContentBase {
    @PrimaryColumn()
    id!: string;

    id_prefix = "FACT"

    @Column()
    name!: string

    @Column({ type: "text" })
    description!: string

    @Column()
    weight!: number // 1 to 20; How "objectively" important the fact is. For example Red Mountain eruption is 20, because its a global event, but to a farmer in Leyawiin it may be a 2 of personal importance of the memory as a whole. The larger the weight, the more you need to accumulate "decay" to forget it. Lower weight facts are forgotten quicker.

    @ManyToMany(() => Memory, memory => memory.facts, {})
    memories!: Memory[]

    @ManyToMany(() => Tag, (tag) => tag.facts, {})
    tags?: Tag[];

    @ManyToOne(() => User, { nullable: true, })
    user!: User;

    @ManyToOne(() => Campaign, { nullable: true, })
    campaign?: Campaign;

    @ManyToOne(() => World, { nullable: true, })
    world!: World;

    public static toDTO(fact: Fact): FactDTO {
        return {
            id: fact.id,
            name: fact.name,
            blueprintId: fact.blueprint_id,
            description: fact.description,
            weight: fact.weight,
            memories: Fact.serializeEntityArray(fact.memories, i => Memory.toDTO(i)),
            tags: Fact.serializeEntityArray(fact.tags, i => Tag.toDTO(i)),
            user: Fact.serializeEntity(fact.user, i => User.toDTO(i)),
            campaign: Fact.serializeEntity(fact.campaign, i => Campaign.toDTO(i)),
            world: Fact.serializeEntity(fact.world, i => World.toDTO(i)),
            targetEntity: fact.targetEntity
        };
    }

    public static fromDTO(dto: FactDTO, context: Context): Fact {
        const fact = new Fact();
        fact.id = dto.id;
        fact.description = dto.description;
        fact.weight = dto.weight;
        fact.memories = Fact.deserializeEntityArray(dto.memories, i => Memory.fromDTO(i, context));
        fact.tags = Fact.deserializeEntityArray(dto.tags, i => Tag.fromDTO(i, context));
        fact.user = context.user;
        fact.campaign = context.campaign;
        fact.world = context.world;
        fact.targetEntity = dto.targetEntity
        return fact;
    }
}