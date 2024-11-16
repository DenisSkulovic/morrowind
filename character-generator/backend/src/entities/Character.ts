import { Entity, PrimaryGeneratedColumn, Column, OneToMany, ManyToMany } from "typeorm";
import { CharacterMemory } from "./CharacterMemory";
import { MemoryPool } from "./MemoryPool";
import { Attribute } from "./Attribute";
import { CharacterProfession } from "./CharacterProfession";

@Entity()
export class Character {
    @PrimaryGeneratedColumn("uuid")
    id: string;

    @Column()
    name: string;

    @Column()
    raceId: string; // FK to Race entity

    @Column()
    gender: string;

    @Column()
    birthsignId: string; // FK to Birthsign entity

    @Column({ nullable: true })
    educationId: string; // FK to Education entity

    @Column()
    birthYear: number;

    @Column()
    birthMonth: string;

    @Column()
    birthDay: number;

    @Column("jsonb")
    skills: Record<string, number>; // Skill IDs with levels

    @Column("jsonb")
    inventory: Inventory; // Hybrid: some attributes can be computed (e.g., weight)

    @OneToMany(() => CharacterProfession, profession => profession.character)
    professions: CharacterProfession[]; // Tracks current and past professions

    @ManyToMany(() => MemoryPool)
    @JoinTable()
    memoryPools: Promise<MemoryPool[]>; // Assigned during generation, or as the person expands their knowledge as their personality develops

    @OneToMany(() => CharacterMemory, charMemory => charMemory.character, { lazy: true })
    characterMemories!: Promise<CharacterMemory[]>; // Lazy-loaded for performance

    @Column("jsonb")
    personalityTraits: Record<string, number>; // Stored base values, modifiers computed

    @ManyToMany()
    attributes: Attribute[]; // Traits like "Brave", "Greedy", etc.
}
