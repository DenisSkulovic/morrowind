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


@Entity()
export class Tag extends ContentBase {
    @PrimaryColumn()
    id!: string;
    
    id_prefix = "TAG"

    @Column({ type: "varchar", length: 30, unique: true })
    label!: string; // The tag's name (e.g., "dunmeri", "rare")

    @Column({ type: "enum", enum: Object.values(TagSubtypeEnum)})
    subtype!: string;

    @ManyToMany(() => Item, (i) => i.tags)
    @JoinTable()
    items?: Item[];

    @ManyToMany(() => PastExperience, (i) => i.tags)
    @JoinTable()
    pastExperiences?: PastExperience[];

    @ManyToMany(() => CharacterMemory, (i) => i.tags)
    @JoinTable()
    characterMemories?: CharacterMemory[];

    @ManyToMany(() => Memory, (i) => i.tags)
    @JoinTable()
    memories?: Memory[];

    @ManyToMany(() => MemoryPool, (i) => i.tags)
    @JoinTable()
    memoryPools?: MemoryPool[];

    @ManyToMany(() => Skill, (i) => i.tags)
    @JoinTable()
    skills?: Skill[];

    @ManyToMany(() => Trait, (i) => i.tags)
    @JoinTable()
    traits?: Trait[];

    @ManyToMany(() => Character, (i) => i.tags)
    @JoinTable()
    characters?: Character[];

    @ManyToMany(() => CharacterProfession, (i) => i.tags)
    @JoinTable()
    characterProfessions?: CharacterProfession[];

    @ManyToMany(() => Disease, (i) => i.tags)
    @JoinTable()
    diseases?: Disease[];

    @ManyToMany(() => Effect, (i) => i.tags)
    @JoinTable()
    effects?: Effect[];

    @ManyToMany(() => Fact, (i) => i.tags)
    @JoinTable()
    facts?: Fact[];

    @ManyToMany(() => Faction, (i) => i.tags)
    @JoinTable()
    factions?: Faction[];

    @ManyToOne(() => User, { nullable: true })
    user!: User;

    @ManyToOne(() => Campaign, { nullable: true })
    campaign?: Campaign;

    @ManyToOne(() => World, { nullable: true })
    world!: World;


    public toDTO(): TagDTO {
        return {
            id: this.id,
            blueprintId: this.blueprint_id,
            label: this.label,
            subtype: serializeEnum(TagSubtypeEnum, this.subtype),
            items: this.items ? { items: this.items.map(item => item.toDTO()) } : undefined,
            pastExperiences: this.pastExperiences ? { pastExperiences: this.pastExperiences.map(pe => pe.toDTO()) } : undefined,
            characterMemories: this.characterMemories ? { characterMemories: this.characterMemories.map(cm => cm.toDTO()) } : undefined,
            memories: this.memories ? { memories: this.memories.map(memory => memory.toDTO()) } : undefined,
            memoryPools: this.memoryPools ? { memoryPools: this.memoryPools.map(pool => pool.toDTO()) } : undefined,
            skills: this.skills ? { skills: this.skills.map(skill => skill.toDTO()) } : undefined,
            traits: this.traits ? { traits: this.traits.map(trait => trait.toDTO()) } : undefined,
            characters: this.characters ? { characters: this.characters.map(char => char.toDTO()) } : undefined,
            characterProfessions: this.characterProfessions ? { professions: this.characterProfessions.map(cp => cp.toDTO()) } : undefined,
            diseases: this.diseases ? { diseases: this.diseases.map(disease => disease.toDTO()) } : undefined,
            effects: this.effects ? { effects: this.effects.map(effect => effect.toDTO()) } : undefined,
            facts: this.facts ? { facts: this.facts.map(fact => fact.toDTO()) } : undefined,
            factions: this.factions ? { factions: this.factions.map(faction => faction.toDTO()) } : undefined,
            user: this.user?.toDTO(),
            campaign: this.campaign?.toDTO(),
            world: this.world?.toDTO(),
            targetEntity: this.targetEntity
        };
    }

    public static fromDTO(dto: TagDTO, user: User, world: World, campaign?: Campaign): Tag {
        const tag = new Tag();
        tag.id = dto.id;
        tag.label = dto.label;
        tag.subtype = deserializeEnum(TagSubtypeEnumDTO, dto.subtype);
        tag.items = dto.items?.items?.map(i => Item.fromDTO(i, user, world, campaign)) || [];
        tag.pastExperiences = dto.pastExperiences?.pastExperiences?.map(i => PastExperience.fromDTO(i, user, world, campaign)) || [];
        tag.characterMemories = dto.characterMemories?.characterMemories?.map(i => CharacterMemory.fromDTO(i, user, world, campaign)) || [];
        tag.memories = dto.memories?.memories?.map(i => Memory.fromDTO(i, user, world, campaign)) || [];
        tag.memoryPools = dto.memoryPools?.memoryPools?.map(i => MemoryPool.fromDTO(i, user, world, campaign)) || [];
        tag.skills = dto.skills?.skills?.map(i => Skill.fromDTO(i, user, world, campaign)) || [];
        tag.traits = dto.traits?.traits?.map(i => Trait.fromDTO(i, user, world, campaign)) || [];
        tag.characters = dto.characters?.characters?.map(i => Character.fromDTO(i, user, world, campaign)) || [];
        tag.characterProfessions = dto.characterProfessions?.professions.map(i => CharacterProfession.fromDTO(i, user, world, campaign)) || [];
        tag.diseases = dto.diseases?.diseases?.map(i => Disease.fromDTO(i, user, world, campaign)) || [];
        tag.effects = dto.effects?.effects?.map(i => Effect.fromDTO(i, user, world, campaign)) || [];
        tag.facts = dto.facts?.facts?.map(i => Fact.fromDTO(i, user, world, campaign)) || [];
        tag.factions = dto.factions?.factions?.map(i => Faction.fromDTO(i, user, world, campaign)) || [];
        tag.user = user;
        tag.campaign = campaign;
        tag.world = world;
        tag.targetEntity = dto.targetEntity
        return tag;
    }
}