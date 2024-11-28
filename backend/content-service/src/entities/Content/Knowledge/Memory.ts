import { Entity, TableInheritance, ManyToMany, Column, JoinTable, ManyToOne, PrimaryColumn } from "typeorm";
import { Fact } from "../Fact";
import { Tag } from "../Tag";
import { TaggableContentBase } from "../../../TaggableContentBase";
import { Campaign } from "../../Campaign";
import { User } from "../../User";
import { World } from "../../World";
import { MemoryDTO } from "../../../proto/common";

@Entity()
@TableInheritance({ column: { type: "varchar", name: "type" } })
export class Memory extends TaggableContentBase {
    @PrimaryColumn()
    id!: string;
    
    id_prefix = "MEMORY"

    @Column({ nullable: true, default: null })
    description!: string

    @Column({ type: "enum", enum: ["GLOBAL", "REGIONAL", "EVENT_RELATED", "HISTORIC", "PERSONAL"]}) // bad to have this default, but I dont have a better idea yet, need to come back to the types later
    type!: string // TODO need to properly conceptualize types of memories and what that means. Maybe better to do it with tags?

    @ManyToMany(() => Fact, fact => fact.memories)
    @JoinTable()
    facts!: Fact[]

        
    @ManyToMany(() => Tag, (tag) => tag.memories)
    tags?: Tag[];

    @ManyToOne(() => User, { nullable: true })
    user!: User;

    @ManyToOne(() => Campaign, { nullable: true })
    campaign?: Campaign;

    @ManyToOne(() => World, { nullable: true })
    world!: World;

    public toDTO(): MemoryDTO {
        return {
            id: this.id,
            description: this.description,
            type: this.type,
            facts: this.facts ? { facts: this.facts.map(fact => fact.toDTO()) } : undefined,
            tags: this.tags ? { tags: this.tags.map(tag => tag.toDTO()) } : undefined,
            user: this.user?.toDTO(),
            campaign: this.campaign?.toDTO(),
            world: this.world?.toDTO(),
            targetEntity: this.targetEntity
        };
    }
    
    public static fromDTO(dto: MemoryDTO, user: User, world: World, campaign?: Campaign): Memory {
        const memory = new Memory();
        memory.id = dto.id;
        memory.description = dto.description;
        memory.type = dto.type;
        memory.facts = dto.facts?.facts?.map(i => Fact.fromDTO(i, user, world, campaign)) || [];
        memory.tags = dto.tags?.tags?.map(i => Tag.fromDTO(i, user, world, campaign)) || [];
        memory.user = user;
        memory.campaign = campaign;
        memory.world = world;
        memory.targetEntity = dto.targetEntity
        return memory;
    }
}