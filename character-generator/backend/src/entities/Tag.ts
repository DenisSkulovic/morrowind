import { Entity, PrimaryGeneratedColumn, Column, ManyToMany } from "typeorm";
import { Fact } from "./Fact";
import { Memory } from "./Memory";
import { MemoryPool } from "./MemoryPool";
import { Item } from "./Item";
import { Effect } from "./Effect";
import { MemoryPoolEntry } from "./MemoryPoolEntry";

@Entity()
export class Tag {
    @PrimaryGeneratedColumn("uuid")
    id: string;

    @Column({ unique: true })
    name: string; // Tag name (e.g., "volcano", "eruption")

    @ManyToMany(() => MemoryPoolEntry, (memoryPoolEntry) => memoryPoolEntry.tags)
    memoryPoolEntries: MemoryPoolEntry[]

    @ManyToMany(() => MemoryPool, (memoryPool) => memoryPool.tags)
    memoryPools: MemoryPool[]

    @ManyToMany(() => Memory, (memory) => memory.tags)
    memories: Memory[];

    @ManyToMany(() => Fact, (fact) => fact.tags)
    facts: Fact[];

    @ManyToMany(() => Item, (item) => item.tags)
    items: Item[];

    @ManyToMany(() => Effect, (effect) => effect.tags)
    effects: Effect[];
}