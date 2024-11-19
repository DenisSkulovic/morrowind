import { TableInheritance, Entity, Column, ManyToOne, JoinTable, ManyToMany, PrimaryGeneratedColumn } from "typeorm";
import { Memory } from "./Memory"
import { Character } from "../Character"
import { ContentBase } from "../../../ContentBase";
import { Tag } from "../Tag";
import { Campaign } from "../../Campaign";
import { User } from "../../User";
import { World } from "../../World";

@Entity()
export class CharacterMemory extends ContentBase {
    @PrimaryGeneratedColumn("uuid")
    id!: string;

    id_prefix = "CHARACTER_MEMORY"

    @ManyToOne(() => Character, character => character.characterMemories)
    character!: Character;

    @ManyToOne(() => Memory, memory => memory.id)
    memory!: Memory;

    @Column("jsonb", { default: null, nullable: true })
    factStatus?: {
        [id: string]: {
            status: "accessible" | "inaccessible",
        }
    } | null

    @Column({ default: 1 })
    importance!: number; // How significant this memory is (affects reinforcement)

    @Column({ default: 0 })
    resistance!: number; // Higher resistance = slower clarity decay

    @Column({ default: 0 })
    accumulator!: number; // from 0 to

    @Column({ type: "timestamp", default: () => "CURRENT_TIMESTAMP" })
    acquiredAt?: Date; // Date memory was gained

    @Column({ type: "timestamp", default: () => "CURRENT_TIMESTAMP" })
    lastUpdatedAt?: Date; // Last time the memory was reinforced/pruned

    
    @ManyToMany(() => Tag, (tag) => tag.characterMemories)
    tags?: Tag[];

    @ManyToOne(() => User, { nullable: true })
    user?: User;

    @ManyToOne(() => Campaign, { nullable: true })
    campaign?: Campaign;

    @ManyToOne(() => World, { nullable: true })
    world?: World;
}