import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, ManyToMany } from "typeorm";
import {Memory} from "./Memory"
import {MemoryPool} from "./MemoryPool"
import { Tag } from "./Tag";
import { ContentBase } from "./ContentBase";

@Entity()
export class MemoryPoolEntry extends ContentBase {

    @ManyToOne(() => MemoryPool, pool => pool.memories)
    pool: MemoryPool;

    @ManyToOne(() => Memory, memory => memory.id)
    memory: Memory;

    @Column("float", { default: 1.0 })
    probability: number; // 0 to 1 probability of being included

    @Column({ default: 1 })
    defaultClarity: number; // Clarity level for this pool

    @Column({ default: 1 })
    defaultImportance: number; // Importance level for this pool

    @ManyToMany(() => Tag, (tag) => tag.memoryPoolEntries)
    tags: Tag[];
}
