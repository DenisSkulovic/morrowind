import { Entity, Column, OneToMany, JoinTable, ManyToMany, ManyToOne, PrimaryColumn } from "typeorm";
import { MemoryPoolEntry } from "./MemoryPoolEntry"
import { TaggableContentBase } from "../../../TaggableContentBase";
import { Tag } from "../Tag";
import { CharacterProfession } from "../CharacterProfession";
import { Campaign } from "../../Campaign";
import { User } from "../../User";
import { World } from "../../World";
import { MemoryPoolDTO } from "../../../proto/common";

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

    public toDTO(): MemoryPoolDTO {
        return {
            id: this.id,
            blueprintId: this.blueprint_id,
            name: this.name,
            description: this.description,
            memoryPoolEntries: this.memoryPoolEntries
                ? { memoryPoolEntries: this.memoryPoolEntries.map((entry) => entry.toDTO()) }
                : undefined,
            characterProfessions: this.characterProfessions
                ? { professions: this.characterProfessions.map((profession) => profession.toDTO()) }
                : undefined,
            tags: this.tags ? { tags: this.tags.map((tag) => tag.toDTO()) } : undefined,
            user: this.user?.toDTO(),
            campaign: this.campaign?.toDTO(),
            world: this.world?.toDTO(),
            targetEntity: this.targetEntity,
        };
    }

    public static fromDTO(dto: MemoryPoolDTO, user: User, world: World, campaign?: Campaign): MemoryPool {
        const memoryPool = new MemoryPool();
        memoryPool.id = dto.id;
        memoryPool.name = dto.name;
        memoryPool.description = dto.description;
        memoryPool.memoryPoolEntries =
            dto.memoryPoolEntries?.memoryPoolEntries.map(i => MemoryPoolEntry.fromDTO(i, user, world, campaign)) || [];
        memoryPool.characterProfessions =
            dto.characterProfessions?.professions.map((profession) =>
                CharacterProfession.fromDTO(profession, user, world, campaign)
            ) || [];
        memoryPool.tags = dto.tags?.tags.map((tag) => Tag.fromDTO(tag, user, world, campaign)) || [];
        memoryPool.user = user;
        memoryPool.campaign = campaign;
        memoryPool.world = world;
        memoryPool.targetEntity = dto.targetEntity;
        return memoryPool;
    }

}

// memory pools are collections of memory entries, memory pool entries contain a memory and some expected values for generation, and memories are collections of facts. Memory pools can be any groupings by region, topic, etc.
// Reason for MemoryPoolEntry: same memory can have different significance for different groups of people, and different levels of claarity and detail based on something like professional expertise.
// examples: "Seida Neen (local)", "Seida Neen (passerby)", "Bitter Coast (local)", "Bitter Coast (rudimentary)", "Fishing (Expert)", "Dwemer Architecture (Expert)", "Almsivi (devout)"