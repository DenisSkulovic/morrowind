import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from "typeorm";
import { Memory } from "./Memory"
import { Character } from "./Character"
import { ContentBase } from "./ContentBase";

@Entity()
export class CharacterMemory extends ContentBase {

    @ManyToOne(() => Character, character => character.characterMemories)
    character: Character;

    @ManyToOne(() => Memory, memory => memory.id)
    memory: Memory;

    @Column("jsonb", { nullable: true })
    factStatus: {
        [id: string]: {
            status: "accessible" | "inaccessible",
        }
    }

    @Column({ default: 1 })
    importance: number; // How significant this memory is (affects reinforcement)

    @Column({ default: 0 })
    resistance: number; // Higher resistance = slower clarity decay

    @Column({ default: 0 })
    accumulator: number; // from 0 to

    @Column("timestamp")
    acquiredAt: Date; // Date memory was gained

    @Column("timestamp", { nullable: true })
    lastUpdatedAt: Date; // Last time the memory was reinforced/pruned
}