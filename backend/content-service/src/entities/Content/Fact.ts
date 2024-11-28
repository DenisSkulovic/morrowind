import { Entity, Column, ManyToMany, ManyToOne, PrimaryGeneratedColumn, BeforeInsert, PrimaryColumn } from "typeorm";
import { Tag } from "./Tag";
import { TaggableContentBase } from "../../TaggableContentBase";
import { Campaign } from "../Campaign";
import { User } from "../User";
import { World } from "../World";
import { Memory } from "./Knowledge/Memory";
import { randomUUID } from "crypto";
import { FactDTO } from "../../proto/common";

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

    @ManyToMany(() => Memory, memory => memory.facts)
    memories!: Memory[]

    @ManyToMany(() => Tag, (tag) => tag.facts)
    tags?: Tag[];

    @ManyToOne(() => User, { nullable: true })
    user!: User;

    @ManyToOne(() => Campaign, { nullable: true })
    campaign?: Campaign;

    @ManyToOne(() => World, { nullable: true })
    world!: World;

    public toDTO(): FactDTO {
        return {
            id: this.id,
            name: this.name, 
            blueprintId: this.blueprint_id,
            description: this.description,
            weight: this.weight,
            memories: this.memories ? { memories: this.memories.map(memory => memory.toDTO()) } : undefined,
            tags: this.tags ? { tags: this.tags.map(tag => tag.toDTO()) } : undefined,
            user: this.user?.toDTO(),
            campaign: this.campaign?.toDTO(),
            world: this.world?.toDTO(),
            targetEntity: this.targetEntity
        };
    }

    public static fromDTO(dto: FactDTO, user: User, world: World, campaign?: Campaign): Fact {
        const fact = new Fact();
        fact.id = dto.id;
        fact.description = dto.description;
        fact.weight = dto.weight;
        fact.memories = dto.memories?.memories?.map(memory => Memory.fromDTO(memory, user, world, campaign)) || [];
        fact.tags = dto.tags?.tags?.map(tag => Tag.fromDTO(tag, user, world, campaign)) || [];
        fact.user = user;
        fact.campaign = campaign;
        fact.world = world;
        fact.targetEntity = dto.targetEntity
        return fact;
    }
}