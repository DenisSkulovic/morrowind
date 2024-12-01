import { Entity, Column, ManyToMany, ManyToOne, JoinTable, PrimaryColumn } from "typeorm";
import { ContentBase } from "../../ContentBase";
import { Item } from "./Item/Item";
import { PastExperience } from "./Knowledge/PastExperience/PastExperience";
import { CharacterMemory } from "./Knowledge/CharacterMemory";
import { Memory } from "./Knowledge/Memory";
import { MemoryPool } from "./Knowledge/MemoryPool";
import { Skill } from "./Skill/Skill";
import { Trait } from "./Trait/Trait";
import { Character } from "./Character";
import { CharacterProfession } from "./CharacterProfession";
import { Disease } from "./Disease";
import { Effect } from "./Effect";
import { Fact } from "./Fact";
import { Faction } from "./Faction";
import { Campaign } from "../Campaign";
import { User } from "../User";
import { World } from "../World";
import { TagDTO, TagSubtypeEnumDTO } from "../../proto/common";
import { TagSubtypeEnum } from "../../enum/entityEnums";
import { deserializeEnum, serializeEnum } from "../../enum/util";
import { Context } from "../../types";


@Entity()
export class Tag extends ContentBase {
    @PrimaryColumn()
    id!: string;

    id_prefix = "TAG"

    @Column({ type: "varchar", length: 30, unique: true })
    label!: string; // The tag's name (e.g., "dunmeri", "rare")

    @Column({ type: "enum", enum: Object.values(TagSubtypeEnum) })
    subtype!: string;

    @ManyToMany(() => Item, (i) => i.tags, {})
    @JoinTable()
    items?: Item[];

    @ManyToMany(() => PastExperience, (i) => i.tags, {})
    @JoinTable()
    pastExperiences?: PastExperience[];

    @ManyToMany(() => CharacterMemory, (i) => i.tags, {})
    @JoinTable()
    characterMemories?: CharacterMemory[];

    @ManyToMany(() => Memory, (i) => i.tags, {})
    @JoinTable()
    memories?: Memory[];

    @ManyToMany(() => MemoryPool, (i) => i.tags, {})
    @JoinTable()
    memoryPools?: MemoryPool[];

    @ManyToMany(() => Skill, (i) => i.tags, {})
    @JoinTable()
    skills?: Skill[];

    @ManyToMany(() => Trait, (i) => i.tags, {})
    @JoinTable()
    traits?: Trait[];

    @ManyToMany(() => Character, (i) => i.tags, {})
    @JoinTable()
    characters?: Character[];

    @ManyToMany(() => CharacterProfession, (i) => i.tags, {})
    @JoinTable()
    characterProfessions?: CharacterProfession[];

    @ManyToMany(() => Disease, (i) => i.tags, {})
    @JoinTable()
    diseases?: Disease[];

    @ManyToMany(() => Effect, (i) => i.tags, {})
    @JoinTable()
    effects?: Effect[];

    @ManyToMany(() => Fact, (i) => i.tags, {})
    @JoinTable()
    facts?: Fact[];

    @ManyToMany(() => Faction, (i) => i.tags, {})
    @JoinTable()
    factions?: Faction[];

    @ManyToOne(() => User, { nullable: true, })
    user!: User;

    @ManyToOne(() => Campaign, { nullable: true, })
    campaign?: Campaign;

    @ManyToOne(() => World, { nullable: true, })
    world!: World;


    public static toDTO(tag: Tag): TagDTO {
        return {
            id: tag.id,
            blueprintId: tag.blueprint_id,
            label: tag.label,
            subtype: serializeEnum(TagSubtypeEnum, tag.subtype),
            items: Tag.serializeEntityArray(tag.items, i => Item.toDTO(i)),
            pastExperiences: Tag.serializeEntityArray(tag.pastExperiences, i => PastExperience.toDTO(i)),
            characterMemories: Tag.serializeEntityArray(tag.characterMemories, i => CharacterMemory.toDTO(i)),
            memories: Tag.serializeEntityArray(tag.memories, i => Memory.toDTO(i)),
            memoryPools: Tag.serializeEntityArray(tag.memoryPools, i => MemoryPool.toDTO(i)),
            skills: Tag.serializeEntityArray(tag.skills, i => Skill.toDTO(i)),
            traits: Tag.serializeEntityArray(tag.traits, i => Trait.toDTO(i)),
            characters: Tag.serializeEntityArray(tag.characters, i => Character.toDTO(i)),
            characterProfessions: Tag.serializeEntityArray(tag.characterProfessions, i => CharacterProfession.toDTO(i)),
            diseases: Tag.serializeEntityArray(tag.diseases, i => Disease.toDTO(i)),
            effects: Tag.serializeEntityArray(tag.effects, i => Effect.toDTO(i)),
            facts: Tag.serializeEntityArray(tag.facts, i => Fact.toDTO(i)),
            factions: Tag.serializeEntityArray(tag.factions, i => Faction.toDTO(i)),
            user: Tag.serializeEntity(tag.user, i => User.toDTO(i)),
            campaign: Tag.serializeEntity(tag.campaign, i => Campaign.toDTO(i)),
            world: Tag.serializeEntity(tag.world, i => World.toDTO(i)),
            targetEntity: tag.targetEntity,
        };
    }


    public static fromDTO(dto: TagDTO, context: Context): Tag {
        const tag = new Tag();
        tag.id = dto.id;
        tag.label = dto.label;
        tag.subtype = deserializeEnum(TagSubtypeEnumDTO, dto.subtype);
        tag.items = Tag.deserializeEntityArray(dto.items, (i) => Item.fromDTO(i, context));
        tag.pastExperiences = Tag.deserializeEntityArray(dto.pastExperiences, (i) => PastExperience.fromDTO(i, context));
        tag.characterMemories = Tag.deserializeEntityArray(dto.characterMemories, (i) => CharacterMemory.fromDTO(i, context));
        tag.memories = Tag.deserializeEntityArray(dto.memories, (i) => Memory.fromDTO(i, context));
        tag.memoryPools = Tag.deserializeEntityArray(dto.memoryPools, (i) => MemoryPool.fromDTO(i, context));
        tag.skills = Tag.deserializeEntityArray(dto.skills, (i) => Skill.fromDTO(i, context));
        tag.traits = Tag.deserializeEntityArray(dto.traits, (i) => Trait.fromDTO(i, context));
        tag.characters = Tag.deserializeEntityArray(dto.characters, (i) => Character.fromDTO(i, context));
        tag.characterProfessions = Tag.deserializeEntityArray(dto.characterProfessions, (i) => CharacterProfession.fromDTO(i, context));
        tag.diseases = Tag.deserializeEntityArray(dto.diseases, (i) => Disease.fromDTO(i, context));
        tag.effects = Tag.deserializeEntityArray(dto.effects, (i) => Effect.fromDTO(i, context));
        tag.facts = Tag.deserializeEntityArray(dto.facts, (i) => Fact.fromDTO(i, context));
        tag.factions = Tag.deserializeEntityArray(dto.factions, (i) => Faction.fromDTO(i, context));
        tag.user = context.user;
        tag.campaign = context.campaign;
        tag.world = context.world;
        tag.targetEntity = dto.targetEntity
        return tag;
    }
}