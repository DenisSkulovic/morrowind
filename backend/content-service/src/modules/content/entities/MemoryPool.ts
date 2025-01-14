import { Entity, Column, OneToMany, JoinTable, ManyToMany, ManyToOne, PrimaryColumn } from "typeorm";
import { MemoryPoolEntry } from "./MemoryPoolEntry"
import { TaggableContentBase } from "../../../TaggableContentBase";
import { Tag } from "./Tag";
import { CharacterProfession } from "./CharacterProfession";
import { MemoryPoolDTO } from "../../../proto/entities";
import { Campaign } from "../../campaign/entities/Campaign";
import { User } from "../../user/entities/User";
import { World } from "../../world/entities/World";
import { Serializable } from "../../../decorator/serializable.decorator";
import { Serializer, SerializeStrategyEnum } from "../../../serializer";
import {
    Field as GQLField,
    ID as GQLID,
    ObjectType as GQLObjectType,
} from '@nestjs/graphql';

@Entity()
@GQLObjectType({ implements: TaggableContentBase })
export class MemoryPool extends TaggableContentBase {
    @PrimaryColumn()
    @Serializable()
    @GQLField(() => GQLID)
    id!: string;

    idPrefix = "MEMORY_POOL"

    @Column({ default: "PLACEHOLDER" })
    @Serializable()
    @GQLField()
    name!: string; // E.g., "Seida Neen Knowledge - Extensive" IMPORTANT - Extensive should be in the tags, not just text; tag like extensive_knowledge

    @Column("text", { nullable: true })
    @Serializable()
    @GQLField({ nullable: true })
    description?: string; // Optional explanation of the pool

    @OneToMany(() => MemoryPoolEntry, (memoryPoolEntry) => memoryPoolEntry.memory)
    @Serializable({ strategy: SerializeStrategyEnum.ID })
    @GQLField(() => [MemoryPoolEntry])
    memoryPoolEntries!: MemoryPoolEntry[];

    @ManyToMany(() => CharacterProfession)
    @GQLField(() => [CharacterProfession])
    characterProfessions?: CharacterProfession[]

    @ManyToMany(() => Tag, (tag) => tag.memoryPools)
    @GQLField(() => [Tag])
    @Serializable({ strategy: SerializeStrategyEnum.ID })
    tags?: Tag[];

    @ManyToOne(() => User, { nullable: true })
    @GQLField(() => User, { nullable: true })
    @Serializable({ strategy: SerializeStrategyEnum.ID })
    user!: User;

    @ManyToOne(() => Campaign, { nullable: true })
    @GQLField(() => Campaign, { nullable: true })
    @Serializable({ strategy: SerializeStrategyEnum.ID })
    campaign?: Campaign;

    @ManyToOne(() => World, { nullable: true })
    @GQLField(() => World, { nullable: true })
    @Serializable({ strategy: SerializeStrategyEnum.ID })
    world!: World;

    public toDTO(): MemoryPoolDTO {
        return Serializer.toDTO(this);
    }

    public static fromDTO(dto: MemoryPoolDTO): MemoryPool {
        return Serializer.fromDTO(dto, new MemoryPool());
    }

}

// memory pools are collections of memory entries, memory pool entries contain a memory and some expected values for generation, and memories are collections of facts. Memory pools can be any groupings by region, topic, etc.
// Reason for MemoryPoolEntry: same memory can have different significance for different groups of people, and different levels of claarity and detail based on something like professional expertise.
// examples: "Seida Neen (local)", "Seida Neen (passerby)", "Bitter Coast (local)", "Bitter Coast (rudimentary)", "Fishing (Expert)", "Dwemer Architecture (Expert)", "Almsivi (devout)"