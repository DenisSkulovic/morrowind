import { Entity, Column, ManyToOne, PrimaryColumn } from "typeorm";
import { Memory } from "./Memory"
import { MemoryPool } from "./MemoryPool"
import { ContentBase } from "../../../ContentBase";
import { User } from "../../User";
import { Campaign } from "../../Campaign";
import { World } from "../../World";
import { MemoryPoolEntryDTO } from "../../../proto/common";
import { Context } from "../../../types";

@Entity()
export class MemoryPoolEntry extends ContentBase {
    @PrimaryColumn()
    id!: string;

    id_prefix = "MEMORY_POOL_ENTRY";

    @Column()
    name!: string;

    @ManyToOne(() => MemoryPool, (memoryPool) => memoryPool.memoryPoolEntries)
    memoryPool!: MemoryPool;

    @ManyToOne(() => Memory, (memory) => memory.id)
    memory!: Memory;

    @Column("float", { default: 1.0 })
    probability!: number;

    @Column({ default: 1 })
    defaultClarity!: number;

    @Column({ default: 1 })
    defaultImportance!: number;

    @ManyToOne(() => User, { nullable: true })
    user!: User;

    @ManyToOne(() => Campaign, { nullable: true })
    campaign?: Campaign;

    @ManyToOne(() => World, { nullable: true })
    world!: World;

    public static toDTO(memPoolEntry: MemoryPoolEntry): MemoryPoolEntryDTO {
        return {
            id: memPoolEntry.id,
            blueprintId: memPoolEntry.blueprint_id,
            name: memPoolEntry.name,
            memoryPool: MemoryPoolEntry.serializeEntity(memPoolEntry.memoryPool, i => MemoryPool.toDTO(i)),
            memory: MemoryPoolEntry.serializeEntity(memPoolEntry.memory, i => Memory.toDTO(i)),
            probability: memPoolEntry.probability,
            defaultClarity: memPoolEntry.defaultClarity,
            defaultImportance: memPoolEntry.defaultImportance,
            user: MemoryPoolEntry.serializeEntity(memPoolEntry.user, i => User.toDTO(i)),
            campaign: MemoryPoolEntry.serializeEntity(memPoolEntry.campaign, i => Campaign.toDTO(i)),
            world: MemoryPoolEntry.serializeEntity(memPoolEntry.world, i => World.toDTO(i)),
            targetEntity: memPoolEntry.targetEntity,
        };
    }

    public static fromDTO(dto: MemoryPoolEntryDTO, context: Context): MemoryPoolEntry {
        if (!dto.memoryPool) throw new Error("memoryPool on MemoryPoolEntryDTO cannot be undefined")
        if (!dto.memory) throw new Error("memory on MemoryPoolEntryDTO cannot be undefined")
        const memoryPoolEntry = new MemoryPoolEntry();
        memoryPoolEntry.id = dto.id;
        memoryPoolEntry.name = dto.name;
        memoryPoolEntry.memoryPool = MemoryPool.fromDTO(dto.memoryPool, context);
        memoryPoolEntry.memory = Memory.fromDTO(dto.memory, context);
        memoryPoolEntry.probability = dto.probability;
        memoryPoolEntry.defaultClarity = dto.defaultClarity;
        memoryPoolEntry.defaultImportance = dto.defaultImportance;
        memoryPoolEntry.user = context.user;
        memoryPoolEntry.campaign = context.campaign;
        memoryPoolEntry.world = context.world;
        memoryPoolEntry.targetEntity = dto.targetEntity;
        return memoryPoolEntry;
    }
}