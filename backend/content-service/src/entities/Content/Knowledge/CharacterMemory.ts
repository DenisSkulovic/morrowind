import { TableInheritance, Entity, Column, ManyToOne, ManyToMany, PrimaryColumn } from "typeorm";
import { Memory } from "./Memory"
import { Character } from "../Character"
import { TaggableContentBase } from "../../../TaggableContentBase";
import { Tag } from "../Tag";
import { Campaign } from "../../Campaign";
import { User } from "../../User";
import { World } from "../../World";
import { CharacterMemoryDTO, FactStatusDTO, FactStatusEnumDTO } from "../../../proto/common";
import { deserializeEnum, FactStatusEnum, serializeEnum } from "../../../enum/entityEnums";

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

    public toDTO(): CharacterMemoryDTO {
        return {
            id: this.id,
            blueprintId: this.blueprint_id,
            name: this.name,
            character: this.character?.toDTO(),
            memory: this.memory?.toDTO(),
            factStatus: this.factStatus
            ? this.factStatus.map((entry) => ({
                factId: entry.factId,
                status: serializeEnum(FactStatusEnumDTO, entry.status),
            }))
            : [],
            importance: this.importance,
            resistance: this.resistance,
            accumulator: this.accumulator,
            acquiredAt: this.acquiredAt,
            lastUpdatedAt: this.lastUpdatedAt,
            tags: this.tags ? { tags: this.tags.map((tag) => tag.toDTO()) } : undefined,
            user: this.user?.toDTO(),
            campaign: this.campaign?.toDTO(),
            world: this.world?.toDTO(),
            targetEntity: this.targetEntity,
        };
    }
    
    public static fromDTO(
        dto: CharacterMemoryDTO,
        user: User,
        world: World,
        campaign?: Campaign
    ): CharacterMemory {
        if (!dto.character) throw new Error("character on CharacterMemoryDTO cannot be undefined");
        if (!dto.memory) throw new Error("memory on CharacterMemoryDTO cannot be undefined");
    
        const characterMemory = new CharacterMemory();
        characterMemory.id = dto.id;
        characterMemory.character = Character.fromDTO(dto.character, user, world, campaign);
        characterMemory.memory = Memory.fromDTO(dto.memory, user, world, campaign);
        characterMemory.factStatus = dto.factStatus?.map((entry) => ({
            factId: entry.factId,
            status: deserializeEnum(FactStatusEnumDTO, entry.status) as FactStatusEnum,
        })) || [];
        characterMemory.importance = dto.importance;
        characterMemory.resistance = dto.resistance;
        characterMemory.accumulator = dto.accumulator;
        characterMemory.acquiredAt = dto.acquiredAt;
        characterMemory.lastUpdatedAt = dto.lastUpdatedAt;
        characterMemory.tags = dto.tags?.tags?.map((tag) => Tag.fromDTO(tag, user, world, campaign)) || [];
        characterMemory.user = user;
        characterMemory.campaign = campaign;
        characterMemory.world = world;
        characterMemory.targetEntity = dto.targetEntity;
        return characterMemory;
    }
}