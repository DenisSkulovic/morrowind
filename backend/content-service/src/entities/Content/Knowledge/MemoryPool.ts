import { Entity, Column, OneToMany, JoinTable, ManyToMany, ManyToOne, PrimaryColumn } from "typeorm";
import { MemoryPoolEntry } from "./MemoryPoolEntry"
import { TaggableContentBase } from "../../../TaggableContentBase";
import { Tag } from "../Tag";
import { CharacterProfession } from "../CharacterProfession";
import { Campaign } from "../../Campaign";
import { User } from "../../User";
import { World } from "../../World";
import { MemoryPoolDTO } from "../../../proto/common";
import { Context } from "../../../types";

@Entity()
export class MemoryPool extends TaggableContentBase {
    @PrimaryColumn()
    id!: string;

    id_prefix = "MEMORY_POOL"

    @Column({ default: "PLACEHOLDER" })
    name!: string; // E.g., "Seida Neen Knowledge - Extensive" IMPORTANT - Extensive should be in the tags, not just text; tag like extensive_knowledge

    @Column("text", { nullable: true })
    description?: string; // Optional explanation of the pool

    @OneToMany(() => MemoryPoolEntry, (memoryPoolEntry) => memoryPoolEntry.memory)
    memoryPoolEntries!: MemoryPoolEntry[]; // Probabilities for each memory in the pool

    @ManyToMany(() => CharacterProfession)
    @JoinTable()
    characterProfessions!: CharacterProfession[]

    @ManyToMany(() => Tag, (tag) => tag.memoryPools)
    tags?: Tag[];

    @ManyToOne(() => User, { nullable: true })
    user!: User;

    @ManyToOne(() => Campaign, { nullable: true })
    campaign?: Campaign;

    @ManyToOne(() => World, { nullable: true })
    world!: World;

    public static toDTO(memPool: MemoryPool): MemoryPoolDTO {
        return {
            id: memPool.id,
            blueprintId: memPool.blueprint_id,
            name: memPool.name,
            description: memPool.description,
            memoryPoolEntries: MemoryPool.serializeEntityArray(memPool.memoryPoolEntries, i => MemoryPoolEntry.toDTO(i)),
            characterProfessions: MemoryPool.serializeEntityArray(memPool.characterProfessions, i => CharacterProfession.toDTO(i)),
            tags: MemoryPool.serializeEntityArray(memPool.tags, i => Tag.toDTO(i)),
            user: MemoryPool.serializeEntity(memPool.user, i => User.toDTO(i)),
            campaign: MemoryPool.serializeEntity(memPool.campaign, i => Campaign.toDTO(i)),
            world: MemoryPool.serializeEntity(memPool.world, i => World.toDTO(i)),
            targetEntity: memPool.targetEntity,
        };
    }

    public static fromDTO(dto: MemoryPoolDTO, context: Context): MemoryPool {
        const memoryPool = new MemoryPool();
        memoryPool.id = dto.id;
        memoryPool.name = dto.name;
        memoryPool.description = dto.description;
        memoryPool.memoryPoolEntries = MemoryPool.deserializeEntityArray(dto.memoryPoolEntries, i => MemoryPoolEntry.fromDTO(i, context));
        memoryPool.characterProfessions = MemoryPool.deserializeEntityArray(dto.characterProfessions, (i) => CharacterProfession.fromDTO(i, context));
        memoryPool.tags = MemoryPool.deserializeEntityArray(dto.tags, (i) => Tag.fromDTO(i, context));
        memoryPool.user = context.user;
        memoryPool.campaign = context.campaign;
        memoryPool.world = context.world;
        memoryPool.targetEntity = dto.targetEntity;
        return memoryPool;
    }

}

// memory pools are collections of memory entries, memory pool entries contain a memory and some expected values for generation, and memories are collections of facts. Memory pools can be any groupings by region, topic, etc.
// Reason for MemoryPoolEntry: same memory can have different significance for different groups of people, and different levels of claarity and detail based on something like professional expertise.
// examples: "Seida Neen (local)", "Seida Neen (passerby)", "Bitter Coast (local)", "Bitter Coast (rudimentary)", "Fishing (Expert)", "Dwemer Architecture (Expert)", "Almsivi (devout)"