import { TableInheritance, Entity, Column, ManyToOne } from "typeorm";
import {Memory} from "./Memory"
import {MemoryPool} from "./MemoryPool"
import { ContentBase } from "../ContentBase";

@Entity()
@TableInheritance({ column: { type: "varchar", name: "type" } }) // Discriminator column for inheritance
export class MemoryPoolEntry extends ContentBase {
    id_prefix = "MEMORY_POOL_ENTRY"

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
}
