import { Entity, Column, ManyToOne, PrimaryColumn } from "typeorm";
import { Memory } from "./Memory"
import { MemoryPool } from "./MemoryPool"
import { ContentBase } from "../../../ContentBase";
import { MemoryPoolEntryDTO } from "../../../proto/entities";
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
@GQLObjectType({ implements: ContentBase })
export class MemoryPoolEntry extends ContentBase {
    @PrimaryColumn()
    @GQLField(() => GQLID)
    @Serializable()
    id!: string;

    idPrefix = "MEMORY_POOL_ENTRY";

    @Column()
    @GQLField()
    @Serializable()
    name!: string;

    @ManyToOne(() => MemoryPool, (memoryPool) => memoryPool.memoryPoolEntries)
    @GQLField(() => MemoryPool)
    @Serializable({ strategy: SerializeStrategyEnum.ID })
    memoryPool!: MemoryPool;

    @ManyToOne(() => Memory, (memory) => memory.id)
    @GQLField(() => Memory)
    @Serializable({ strategy: SerializeStrategyEnum.ID })
    memory!: Memory;

    @Column("float", { default: 1.0 })
    @GQLField()
    @Serializable()
    probability!: number;

    @Column({ default: 1 })
    @GQLField()
    @Serializable()
    defaultClarity!: number;

    @Column({ default: 1 })
    @GQLField()
    @Serializable()
    defaultImportance!: number;

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

    public toDTO(): MemoryPoolEntryDTO {
        return Serializer.toDTO(this);
    }

    public static fromDTO(dto: MemoryPoolEntryDTO): MemoryPoolEntry {
        return Serializer.fromDTO(dto, new MemoryPoolEntry());
    }
}