import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, ManyToMany } from "typeorm";
import { MemoryPool } from "./Knowledge/MemoryPool";
import { Character } from "./Character";
import { Tag } from "./Tag";
import { ContentBase } from "./ContentBase";

@Entity()
export class CharacterProfession extends ContentBase {
    id_prefix = "CHARACTER_PROFESSION"

    @ManyToOne(() => Character, character => character.professions)
    character: Character;

    @ManyToMany(())
    memoryPools: MemoryPool[]

    @Column()
    name: string; // E.g., "Fisherman", "Kwama Egg Miner", "Imperial Soldier"

    @Column()
    startYear: number;

    @Column({ nullable: true })
    endYear: number; // Null if currently active
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