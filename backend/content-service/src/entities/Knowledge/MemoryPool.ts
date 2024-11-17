import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, ManyToMany } from "typeorm";
import {Tag} from "../Tag"
import {MemoryPoolEntry} from "./MemoryPoolEntry"
import { ContentBase } from "../ContentBase";

@Entity()
export class MemoryPool extends ContentBase {
    id_prefix = "MEMORY_POOL"

    @Column()
    name: string; // E.g., "Seida Neen Knowledge - Extensive" IMPORTANT - Extensive should be in the tags, not just text; tag like extensive_knowledge

    @Column("text", { nullable: true })
    description?: string; // Optional explanation of the pool

    @OneToMany(() => MemoryPoolEntry, memory => memory.memoryPool)
    memories: MemoryPoolEntry[]; // Probabilities for each memory in the pool
}

// memory pools are collections of memory entries, memory pool entries contain a memory and some expected values for generation, and memories are collections of facts. Memory pools can be any groupings by region, topic, etc.
// Reason for MemoryPoolEntry: same memory can have different significance for different groups of people, and different levels of claarity and detail based on something like professional expertise.
// examples: "Seida Neen (local)", "Seida Neen (passerby)", "Bitter Coast (local)", "Bitter Coast (rudimentary)", "Fishing (Expert)", "Dwemer Architecture (Expert)", "Almsivi (devout)"