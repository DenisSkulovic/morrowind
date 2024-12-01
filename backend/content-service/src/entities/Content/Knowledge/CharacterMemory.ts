import { TableInheritance, Entity, Column, ManyToOne, ManyToMany, PrimaryColumn } from "typeorm";
import { Memory } from "./Memory"
import { Character } from "../Character"
import { TaggableContentBase } from "../../../TaggableContentBase";
import { Tag } from "../Tag";
import { Campaign } from "../../Campaign";
import { User } from "../../User";
import { World } from "../../World";
import { CharacterMemoryDTO, FactStatusDTO, FactStatusEnumDTO } from "../../../proto/common";
import { FactStatusEnum } from "../../../enum/entityEnums";
import { serializeEnum, deserializeEnum } from "../../../enum/util";
import { Context } from "../../../types";

@Entity()
@TableInheritance({ column: { type: "varchar", name: "type" } })
export class CharacterMemory extends TaggableContentBase {
    @PrimaryColumn()
    id!: string;

    id_prefix = "CHARACTER_MEMORY"

    @Column()
    name!: string;

    @ManyToOne(() => Character, character => character.characterMemories)
    character!: Character;

    @ManyToOne(() => Memory, memory => memory.id)
    memory!: Memory;

    @Column("jsonb", { default: null, nullable: true })
    factStatus?: {
        factId: string;
        status: FactStatusEnum;
    }[];

    @Column({ default: 1 })
    importance!: number; // How significant this memory is (affects reinforcement)

    @Column({ default: 0 })
    resistance!: number; // Higher resistance = slower clarity decay

    @Column({ default: 0 })
    accumulator!: number; // from 0 to

    @Column({ type: "timestamp", default: () => "CURRENT_TIMESTAMP" })
    acquiredAt?: number; // Date memory was gained

    @Column({ type: "timestamp", default: () => "CURRENT_TIMESTAMP" })
    lastUpdatedAt?: number; // Last time the memory was reinforced/pruned

    @ManyToMany(() => Tag, (tag) => tag.characterMemories)
    tags?: Tag[];

    @ManyToOne(() => User, { nullable: true })
    user!: User;

    @ManyToOne(() => Campaign, { nullable: true })
    campaign?: Campaign;

    @ManyToOne(() => World, { nullable: true })
    world!: World;

    public static toDTO(charMem: CharacterMemory): CharacterMemoryDTO {
        return {
            id: charMem.id,
            blueprintId: charMem.blueprint_id,
            name: charMem.name,
            character: CharacterMemory.serializeEntity(charMem.character, i => Character.toDTO(i)),
            memory: CharacterMemory.serializeEntity(charMem.memory, i => Memory.toDTO(i)),
            factStatus: charMem.factStatus
                ? charMem.factStatus.map((entry) => ({
                    factId: entry.factId,
                    status: serializeEnum(FactStatusEnumDTO, entry.status),
                }))
                : [],
            importance: charMem.importance,
            resistance: charMem.resistance,
            accumulator: charMem.accumulator,
            acquiredAt: charMem.acquiredAt,
            lastUpdatedAt: charMem.lastUpdatedAt,
            tags: CharacterMemory.serializeEntityArray(charMem.tags, i => Tag.toDTO(i)),
            user: CharacterMemory.serializeEntity(charMem.user, i => User.toDTO(i)),
            campaign: CharacterMemory.serializeEntity(charMem.campaign, i => Campaign.toDTO(i)),
            world: CharacterMemory.serializeEntity(charMem.world, i => World.toDTO(i)),
            targetEntity: charMem.targetEntity,
        };
    }

    public static fromDTO(
        dto: CharacterMemoryDTO,
        context: Context
    ): CharacterMemory {
        if (!dto.character) throw new Error("character on CharacterMemoryDTO cannot be undefined");
        if (!dto.memory) throw new Error("memory on CharacterMemoryDTO cannot be undefined");

        const characterMemory = new CharacterMemory();
        characterMemory.id = dto.id;
        characterMemory.character = Character.fromDTO(dto.character, context);
        characterMemory.memory = Memory.fromDTO(dto.memory, context);
        characterMemory.factStatus = dto.factStatus?.map((entry) => ({
            factId: entry.factId,
            status: deserializeEnum(FactStatusEnumDTO, entry.status) as FactStatusEnum,
        })) || [];
        characterMemory.importance = dto.importance;
        characterMemory.resistance = dto.resistance;
        characterMemory.accumulator = dto.accumulator;
        characterMemory.acquiredAt = dto.acquiredAt;
        characterMemory.lastUpdatedAt = dto.lastUpdatedAt;
        characterMemory.tags = CharacterMemory.deserializeEntityArray(dto.tags, i => Tag.fromDTO(i, context)) || [];
        characterMemory.user = context.user;
        characterMemory.campaign = context.campaign;
        characterMemory.world = context.world;
        characterMemory.targetEntity = dto.targetEntity;
        return characterMemory;
    }
}