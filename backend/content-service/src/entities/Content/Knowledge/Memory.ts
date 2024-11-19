import { Entity, TableInheritance, OneToMany, ManyToMany, Column, JoinTable, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Fact } from "../Fact";
import { Tag } from "../Tag";
import { ContentBase } from "../../../ContentBase";
import { Character } from "../Character";
import { Campaign } from "../../Campaign";
import { User } from "../../User";
import { World } from "../../World";

@Entity()
export class Memory extends ContentBase {
    @PrimaryGeneratedColumn("uuid")
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
    @JoinTable()
    tags?: Tag[];

    @ManyToOne(() => User, { nullable: true })
    user?: User;

    @ManyToOne(() => Campaign, { nullable: true })
    campaign?: Campaign;

    @ManyToOne(() => World, { nullable: true })
    world?: World;
}