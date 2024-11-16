import { Entity, PrimaryGeneratedColumn, Column, OneToMany, ManyToMany, ManyToOne } from "typeorm";
import { CharacterMemory } from "./CharacterMemory";
import { MemoryPool } from "./MemoryPool";
import { Trait } from "./Trait/Trait";
import { CharacterProfession } from "./CharacterProfession";
import { Skill } from "./Skill/Skill";
import { Birthsign } from "./Birthsign";
import { Race } from "./Race";
import { Inventory } from "./Inventory";
import { Tag } from "./Tag";

@Entity()
export class Character {
    @PrimaryGeneratedColumn("uuid")
    id!: string;

    @Column()
    name!: string;

    @ManyToOne(() => Race)
    race!: Race;

    @Column()
    gender!: "Male" | "Female";

    @ManyToOne(() => Birthsign)
    birthsign!: Birthsign;

    @Column()
    birthYear!: number;

    @Column()
    birthMonth!: string;

    @Column()
    birthDay!: number;

    @OneToMany(() => Skill)
    skills!: Record<string, number>;

    @Column("jsonb")
    inventory!: Inventory;

    @OneToMany(() => CharacterProfession, profession => profession.character)
    professions!: CharacterProfession[]; // Tracks current and past professions

    @ManyToMany(() => MemoryPool)
    @JoinTable()
    memoryPools!: Promise<MemoryPool[]>; // Assigned during generation, or as the person expands their knowledge as their personality develops

    @OneToMany(() => CharacterMemory, charMemory => charMemory.character, { lazy: true })
    characterMemories!: Promise<CharacterMemory[]>; // Lazy-loaded for performance

    @ManyToMany()
    traits!: Trait[]; // Traits like "Brave", "Greedy", etc.

    @ManyToMany(() => Tag, (tag) => tag.character)
    tags: Tag[];
}
