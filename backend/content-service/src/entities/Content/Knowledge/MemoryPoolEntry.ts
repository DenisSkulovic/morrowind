import { TableInheritance, Entity, Column, ManyToOne, PrimaryGeneratedColumn, BeforeInsert, PrimaryColumn } from "typeorm";
import {Memory} from "./Memory"
import {MemoryPool} from "./MemoryPool"
import { ContentBase } from "../../../ContentBase";
import { User } from "../../User";
import { Campaign } from "../../Campaign";
import { World } from "../../World";
import { randomUUID } from "crypto";

@Entity()
export class MemoryPoolEntry extends ContentBase {
    @PrimaryColumn()
    id!: string;
    
    @BeforeInsert()
    generateId() {
        if (this.targetEntity) this.id = this.blueprint_id
        else this.id = `${this.id_prefix}_${randomUUID().replace(/-/g, "")}`;
    }
    id_prefix = "MEMORY_POOL_ENTRY"

    @ManyToOne(() => MemoryPool, memoryPool => memoryPool.memoryPoolEntries)
    memoryPool!: MemoryPool;

    @ManyToOne(() => Memory, memory => memory.id)
    memory!: Memory;

    @Column("float", { default: 1.0 })
    probability!: number; // 0 to 1 probability of being included

    @Column({ default: 1 })
    defaultClarity!: number; // Clarity level for this pool

    @Column({ default: 1 })
    defaultImportance!: number; // Importance level for this pool

    @ManyToOne(() => User, { nullable: true })
    user!: User;

    @ManyToOne(() => Campaign, { nullable: true })
    campaign?: Campaign;

    @ManyToOne(() => World, { nullable: true })
    world!: World;
}
