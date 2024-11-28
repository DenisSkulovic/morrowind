import { Entity, Column, ManyToOne, PrimaryColumn } from "typeorm";
import {Memory} from "./Memory"
import {MemoryPool} from "./MemoryPool"
import { ContentBase } from "../../../ContentBase";
import { User } from "../../User";
import { Campaign } from "../../Campaign";
import { World } from "../../World";
import { MemoryPoolEntryDTO } from "../../../proto/common";

@Entity()
export class MemoryPoolEntry extends ContentBase {
    @PrimaryColumn()
    id!: string;
    
    id_prefix = "MEMORY_POOL_ENTRY"

    @Column()
    name!: string

    @ManyToOne(() => MemoryPool, memoryPool => memoryPool.memoryPoolEntries, {lazy: true})
    memoryPool!: MemoryPool;

    @ManyToOne(() => Memory, memory => memory.id)
    memory!: Memory;

    @Column("float", { default: 1.0 })
    probability!: number; // 0 to 1 probability of being included

    @Column({ default: 1 })
    defaultClarity!: number; // Clarity level for this pool

    @Column({ default: 1 })
    defaultImportance!: number; // Importance level for this pool

    @ManyToOne(() => User, { nullable: true , lazy: true})
    user!: User;

    @ManyToOne(() => Campaign, { nullable: true , lazy: true})
    campaign?: Campaign;

    @ManyToOne(() => World, { nullable: true , lazy: true})
    world!: World;

    public toDTO(): MemoryPoolEntryDTO {
        return {
            id: this.id,
            blueprintId: this.blueprint_id,
            name: this.name,
            memoryPool: this.memoryPool?.toDTO(),
            memory: this.memory?.toDTO(),
            probability: this.probability,
            defaultClarity: this.defaultClarity,
            defaultImportance: this.defaultImportance,
            user: this.user?.toDTO(),
            campaign: this.campaign?.toDTO(),
            world: this.world?.toDTO(),
            targetEntity: this.targetEntity
        };
    }
    
    public static fromDTO(dto: MemoryPoolEntryDTO, user: User, world: World, campaign?: Campaign): MemoryPoolEntry {
        if (!dto.memoryPool) throw new Error("memoryPool on MemoryPoolEntryDTO cannot be undefined")
        if (!dto.memory) throw new Error("memory on MemoryPoolEntryDTO cannot be undefined")
        const memoryPoolEntry = new MemoryPoolEntry();
        memoryPoolEntry.id = dto.id;
        memoryPoolEntry.memoryPool = MemoryPool.fromDTO(dto.memoryPool, user, world);
        memoryPoolEntry.memory = Memory.fromDTO(dto.memory, user, world);
        memoryPoolEntry.probability = dto.probability;
        memoryPoolEntry.defaultClarity = dto.defaultClarity;
        memoryPoolEntry.defaultImportance = dto.defaultImportance;
        memoryPoolEntry.user = user;
        memoryPoolEntry.campaign = campaign;
        memoryPoolEntry.world = world;
        memoryPoolEntry.targetEntity = dto.targetEntity
        return memoryPoolEntry;
    }
}
