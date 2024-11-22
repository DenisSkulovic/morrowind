import { Entity, TableInheritance, Column, ManyToOne, ManyToMany, JoinTable, PrimaryGeneratedColumn, BeforeInsert, PrimaryColumn } from "typeorm";
import { MemoryPool } from "./Knowledge/MemoryPool";
import { Character } from "./Character";
import { TaggableContentBase } from "../../TaggableContentBase";
import { Tag } from "./Tag";
import { Campaign } from "../Campaign";
import { User } from "../User";
import { World } from "../World";
import { randomUUID } from "crypto";
import { ContentBase } from "../../ContentBase";



@Entity()
export class CharacterGenInstruction extends ContentBase {
    @PrimaryColumn()
    id!: string;

    @BeforeInsert()
    generateId() {
        if (this.targetEntity) this.id = this.blueprint_id
        else this.id = `${this.id_prefix}_${randomUUID().replace(/-/g, "")}`;
    }
    id_prefix = "CHARACTER_GEN_INSTRUCTION"

    @Column()
    background_blueprint_id!: string

    @Column()
    first_name?: string

    @Column()
    last_name?: string

    @Column()
    gender?: string

    @Column()
    birthsign?: string

    @Column()
    birthEra?: string

    @Column()
    birthYear?: number

    @Column()
    birthMonth?: string

    @Column()
    birthDay?: number

    @Column("jsonb")
    factions?: string[]
    
    @Column("jsonb")
    diseases?: string[]
    
    @Column("jsonb")
    addictions?: string[]
    
    @Column("jsonb")
    professions?: string[]
    
    @Column()
    religion?: string
    
    @Column("jsonb")
    item_sets?: string[]
    
    @Column("jsonb")
    items?: { blueprint_id: string, quantity: number }[]
    
    @Column("jsonb")
    past_exp_child?: string[]
    
    @Column("jsonb")
    past_exp_adult?: string[]
    
    @Column("jsonb")
    skill_sets?: string[]
    
    @Column("jsonb")
    skill_adjustments?: { [skill_blueprint_id: string]: number }
    
    @Column()
    personality?: string



    @ManyToOne(() => User, { nullable: true })
    user!: User;

    @ManyToOne(() => Campaign, { nullable: true })
    campaign?: Campaign;

    @ManyToOne(() => World, { nullable: true })
    world!: World;
}

// example: Fisherman (Beginner). Beginner here would be represented by a tag, and specific memory pools will be connected. On generation, certain memories will be created, but after generation memories begin a free float.

// Fisherman (Beginner)
// Fisherman (Novice)
// Fisherman (Expert)
// Fisherman (Master)

// These would be 4 different professions with different memory pools.
// So lets say when a character changes profession from Fisherman (Beginner) to Fisherman (Novice), they gain access to a different memory pool set and dont immediately learn everything there, but instead start gaining the knowledge as ticks go by, simulating progress in mastery.
// And lets say a character gains a profession, Fisherman (Beginner). They start to slowly go from 0 knowledge to an equilibrium.
// And if its the player character, they would have to either gain direct experience, talk to someone, read a book, etc., to progress with the knowledge in the memory pools.
// Progressing to the next step happens when required memories become very ingrained and resistant. That shows a level of mastery and ability to progress to next mastery level in the profession.
// Profession means both knowledge and skills?...