import { Entity, Column, ManyToOne, PrimaryColumn } from "typeorm";
import { Memory } from "./Memory"
import { MemoryPool } from "./MemoryPool"
import { ContentBase } from "../../../ContentBase";
import { MemoryPoolEntryDTO } from "../../../proto/common";
import { Campaign } from "../../campaign/entities/Campaign";
import { User } from "../../user/entities/User";
import { World } from "../../world/entities/World";
import { Serializable } from "../../../decorator/serializable.decorator";
import { Serializer } from "../../../serializer";

@Entity()
export class MemoryPoolEntry extends ContentBase {
    @PrimaryColumn()
    @Serializable()
    id!: string;

    id_prefix = "MEMORY_POOL_ENTRY";

    @Column()
    @Serializable()
    name!: string;

    @ManyToOne(() => MemoryPool, (memoryPool) => memoryPool.memoryPoolEntries)
    @Serializable({ strategy: 'id' })
    memoryPool!: MemoryPool;

    @ManyToOne(() => Memory, (memory) => memory.id)
    @Serializable({ strategy: 'id' })
    memory!: Memory;

    @Column("float", { default: 1.0 })
    @Serializable()
    probability!: number;

    @Column({ default: 1 })
    @Serializable()
    defaultClarity!: number;

    @Column({ default: 1 })
    @Serializable()
    defaultImportance!: number;

    @ManyToOne(() => User, { nullable: true })
    @Serializable({ strategy: 'id' })
    user!: User;

    @ManyToOne(() => Campaign, { nullable: true })
    @Serializable({ strategy: 'id' })
    campaign?: Campaign;

    @ManyToOne(() => World, { nullable: true })
    @Serializable({ strategy: 'id' })
    world!: World;

    public toDTO(): MemoryPoolEntryDTO {
        return Serializer.toDTO(this);
    }

    public static fromDTO(dto: MemoryPoolEntryDTO): MemoryPoolEntry {
        const memoryPoolEntry = new MemoryPoolEntry();
        return Serializer.fromDTO(dto, memoryPoolEntry);
    }
}