import { TableInheritance, Entity, Column, ManyToOne, ManyToMany, PrimaryColumn } from "typeorm";
import { Memory } from "./Memory"
import { Character } from "./Character"
import { TaggableContentBase } from "../../../TaggableContentBase";
import { Tag } from "./Tag";
import { CharacterMemoryDTO } from "../../../proto/entities";
import { Campaign } from "../../campaign/entities/Campaign";
import { User } from "../../user/entities/User";
import { World } from "../../world/entities/World";
import { Serializer, SerializeStrategyEnum } from "../../../serializer";
import { Serializable } from "../../../decorator/serializable.decorator";
import { FactStatus } from "../../../class/FactStatus";
import {
    Field as GQLField,
    ID as GQLID,
    ObjectType as GQLObjectType,
} from '@nestjs/graphql';

@Entity()
@GQLObjectType({ implements: TaggableContentBase })
@TableInheritance({ column: { type: "varchar", name: "type" } })
export class CharacterMemory extends TaggableContentBase {
    @PrimaryColumn()
    @GQLField(() => GQLID)
    @Serializable()
    id!: string;

    idPrefix = "CHARACTER_MEMORY"

    @Column()
    @GQLField()
    @Serializable()
    name!: string;

    @ManyToOne(() => Character, character => character.characterMemories)
    @GQLField(() => Character)
    @Serializable({ strategy: SerializeStrategyEnum.ID })
    character!: Character;

    @ManyToOne(() => Memory, memory => memory.id)
    @GQLField(() => Memory)
    @Serializable({ strategy: SerializeStrategyEnum.ID })
    memory!: Memory;

    @Column("jsonb", { default: null, nullable: true })
    @GQLField(() => [FactStatus])
    @Serializable({ strategy: SerializeStrategyEnum.FULL, asDtoArray: true, internalClass: FactStatus })
    factStatus?: FactStatus[];

    @Column({ default: 1 })
    @GQLField()
    @Serializable()
    importance!: number; // How significant this memory is (affects reinforcement)

    @Column({ default: 0 })
    @GQLField()
    @Serializable()
    resistance!: number; // Higher resistance = slower clarity decay

    @Column({ default: 0 })
    @GQLField()
    @Serializable()
    accumulator!: number; // from 0 to

    @Column({ type: "timestamp", default: () => "CURRENT_TIMESTAMP" })
    @GQLField()
    @Serializable()
    acquiredAt?: number; // Date memory was gained

    @Column({ type: "timestamp", default: () => "CURRENT_TIMESTAMP" })
    @GQLField()
    @Serializable()
    lastUpdatedAt?: number; // Last time the memory was reinforced/pruned

    @ManyToMany(() => Tag, (tag) => tag.characterMemories)
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

    public toDTO(): CharacterMemoryDTO {
        return Serializer.toDTO(this);
    }

    public static fromDTO(dto: CharacterMemoryDTO): CharacterMemory {
        const characterMemory = new CharacterMemory();
        return Serializer.fromDTO(dto, characterMemory);
    }
}