import { TableInheritance, Entity, Column, PrimaryGeneratedColumn, ManyToOne, BaseEntity, OneToMany, BeforeInsert, PrimaryColumn } from "typeorm";
import { World } from "./World";
import { User } from "./User";
import { Item } from "./Content/Item/Item";
import { Addiction } from "./Content/Addiction";
import { Birthsign } from "./Content/Birthsign";
import { Character } from "./Content/Character";
import { CharacterProfession } from "./Content/CharacterProfession";
import { Disease } from "./Content/Disease";
import { Effect } from "./Content/Effect";
import { Fact } from "./Content/Fact";
import { Faction } from "./Content/Faction";
import { ItemSet } from "./Content/ItemSet";
import { CharacterMemory } from "./Content/Knowledge/CharacterMemory";
import { Memory } from "./Content/Knowledge/Memory";
import { MemoryPool } from "./Content/Knowledge/MemoryPool";
import { MemoryPoolEntry } from "./Content/Knowledge/MemoryPoolEntry";
import { PastExperience } from "./Content/Knowledge/PastExperience/PastExperience";
import { Mood } from "./Content/Mood";
import { Need } from "./Content/Need";
import { PersonalityProfile } from "./Content/PersonalityProfile";
import { Race } from "./Content/Race";
import { Religion } from "./Content/Religion";
import { Resistance } from "./Content/Resistance";
import { Skill } from "./Content/Skill/Skill";
import { Status } from "./Content/Status";
import { Tag } from "./Content/Tag";
import { Trait } from "./Content/Trait/Trait";
import { Background } from "./Content/Background";
import { StorageSlot } from "./Content/Slot/StorageSlot";
import { EquipmentSlot } from "./Content/Slot/EquipmentSlot";
import { randomUUID } from "crypto";
import { CampaignDTO } from "../proto/common";
import { Base } from "../Base";
import { Context } from "../types";

@Entity()
@TableInheritance({ column: { type: "varchar", name: "type" } })
export class Campaign extends Base {
    @PrimaryColumn()
    id!: string;

    @BeforeInsert()
    generateId() {
        this.id = `${this.id_prefix}_${randomUUID().replace(/-/g, "")}`;
    }
    id_prefix = "CAMPAIGN";

    @Column({ type: "varchar", length: 255 })
    name!: string;

    @Column({ type: "text", nullable: true })
    description?: string;

    @Column({ type: "json", nullable: true })
    dynamic_state?: any;

    @ManyToOne(() => World, (world) => world.campaigns, {})
    world!: World;

    @Column({ type: "timestamp", default: () => "CURRENT_TIMESTAMP" })
    created_at!: Date;

    @ManyToOne(() => User, user => user.campaigns, {})
    user!: User;

    @OneToMany(() => Item, item => item.campaign, { onDelete: "CASCADE", })
    items!: Item[]

    @OneToMany(() => PastExperience, pastExperience => pastExperience.campaign, { onDelete: "CASCADE", })
    pastExperiences!: PastExperience[]

    @OneToMany(() => CharacterMemory, characterMemory => characterMemory.campaign, { onDelete: "CASCADE", })
    characterMemories!: CharacterMemory[]

    @OneToMany(() => Memory, memory => memory.campaign, { onDelete: "CASCADE", })
    memories!: Memory[]

    @OneToMany(() => MemoryPool, memoryPool => memoryPool.campaign, { onDelete: "CASCADE", })
    memoryPools!: MemoryPool[]

    @OneToMany(() => MemoryPoolEntry, memoryPoolEntry => memoryPoolEntry.campaign, { onDelete: "CASCADE", })
    memoryPoolEntries!: MemoryPoolEntry[]

    @OneToMany(() => Skill, skill => skill.campaign, { onDelete: "CASCADE", })
    skills!: Skill[]

    @OneToMany(() => Trait, trait => trait.campaign, { onDelete: "CASCADE", })
    traits!: Trait[]

    @OneToMany(() => Addiction, addiction => addiction.campaign, { onDelete: "CASCADE", })
    addictions!: Addiction[]

    @OneToMany(() => Birthsign, birthsign => birthsign.campaign, { onDelete: "CASCADE", })
    birthsigns!: Birthsign[]

    @OneToMany(() => Character, character => character.campaign, { onDelete: "CASCADE", })
    characters!: Character[]

    @OneToMany(() => CharacterProfession, characterProfession => characterProfession.campaign, { onDelete: "CASCADE", })
    characterProfessions!: CharacterProfession[]

    @OneToMany(() => Disease, disease => disease.campaign, { onDelete: "CASCADE", })
    diseases!: Disease[]

    @OneToMany(() => Effect, effect => effect.campaign, { onDelete: "CASCADE", })
    effects!: Effect[]

    @OneToMany(() => Fact, fact => fact.campaign, { onDelete: "CASCADE", })
    facts!: Fact[]

    @OneToMany(() => Faction, faction => faction.campaign, { onDelete: "CASCADE", })
    factions!: Faction[]

    @OneToMany(() => StorageSlot, storageSlot => storageSlot.campaign, { onDelete: "CASCADE", })
    storageSlots!: StorageSlot[]

    @OneToMany(() => EquipmentSlot, equipmentSlot => equipmentSlot.campaign, { onDelete: "CASCADE", })
    equipmentSlots!: EquipmentSlot[]

    @OneToMany(() => ItemSet, itemSet => itemSet.campaign, { onDelete: "CASCADE", })
    itemSets!: ItemSet[]

    @OneToMany(() => Mood, mood => mood.campaign, { onDelete: "CASCADE", })
    moods!: Mood[]

    @OneToMany(() => Need, need => need.campaign, { onDelete: "CASCADE", })
    needs!: Need[]

    @OneToMany(() => PersonalityProfile, personalityProfile => personalityProfile.campaign, { onDelete: "CASCADE", })
    personalityProfiles!: PersonalityProfile[]

    @OneToMany(() => Race, race => race.campaign, { onDelete: "CASCADE", })
    races!: Race[]

    @OneToMany(() => Religion, religion => religion.campaign, { onDelete: "CASCADE", })
    religions!: Religion[]

    @OneToMany(() => Resistance, resistance => resistance.campaign, { onDelete: "CASCADE", })
    resistances!: Resistance[]

    @OneToMany(() => Status, status => status.campaign, { onDelete: "CASCADE", })
    statuses!: Status[]

    @OneToMany(() => Tag, tag => tag.campaign, { onDelete: "CASCADE", })
    tags!: Tag[]

    @OneToMany(() => Background, background => background.campaign, { onDelete: "CASCADE", })
    backgrounds!: Background[]


    public static toDTO(campaign: Campaign): CampaignDTO {
        return {
            id: campaign.id,
            name: campaign.name,
            description: campaign.description,
            dynamicState: campaign.dynamic_state,
            createdAt: campaign.created_at.toISOString(),
            world: Campaign.serializeEntity(campaign.world, i => World.toDTO(i)),
            user: Campaign.serializeEntity(campaign.user, i => User.toDTO(i)),
            items: Campaign.serializeEntityArray(campaign.items, i => Item.toDTO(i)),
            pastExperiences: Campaign.serializeEntityArray(campaign.pastExperiences, i => PastExperience.toDTO(i)),
            characterMemories: Campaign.serializeEntityArray(campaign.characterMemories, i => CharacterMemory.toDTO(i)),
            memories: Campaign.serializeEntityArray(campaign.memories, i => Memory.toDTO(i)),
            memoryPools: Campaign.serializeEntityArray(campaign.memoryPools, i => MemoryPool.toDTO(i)),
            memoryPoolEntries: Campaign.serializeEntityArray(campaign.memoryPoolEntries, i => MemoryPoolEntry.toDTO(i)),
            skills: Campaign.serializeEntityArray(campaign.skills, i => Skill.toDTO(i)),
            traits: Campaign.serializeEntityArray(campaign.traits, i => Trait.toDTO(i)),
            addictions: Campaign.serializeEntityArray(campaign.addictions, i => Addiction.toDTO(i)),
            birthsigns: Campaign.serializeEntityArray(campaign.birthsigns, i => Birthsign.toDTO(i)),
            characters: Campaign.serializeEntityArray(campaign.characters, i => Character.toDTO(i)),
            characterProfessions: Campaign.serializeEntityArray(campaign.characterProfessions, i => CharacterProfession.toDTO(i)),
            diseases: Campaign.serializeEntityArray(campaign.diseases, i => Disease.toDTO(i)),
            effects: Campaign.serializeEntityArray(campaign.effects, i => Effect.toDTO(i)),
            facts: Campaign.serializeEntityArray(campaign.facts, i => Fact.toDTO(i)),
            factions: Campaign.serializeEntityArray(campaign.factions, i => Faction.toDTO(i)),
            storageSlots: Campaign.serializeEntityArray(campaign.storageSlots, i => StorageSlot.toDTO(i)),
            equipmentSlots: Campaign.serializeEntityArray(campaign.equipmentSlots, i => EquipmentSlot.toDTO(i)),
            itemSets: Campaign.serializeEntityArray(campaign.itemSets, i => ItemSet.toDTO(i)),
            moods: Campaign.serializeEntityArray(campaign.moods, i => Mood.toDTO(i)),
            needs: Campaign.serializeEntityArray(campaign.needs, i => Need.toDTO(i)),
            personalityProfiles: Campaign.serializeEntityArray(campaign.personalityProfiles, i => PersonalityProfile.toDTO(i)),
            races: Campaign.serializeEntityArray(campaign.races, i => Race.toDTO(i)),
            religions: Campaign.serializeEntityArray(campaign.religions, i => Religion.toDTO(i)),
            resistances: Campaign.serializeEntityArray(campaign.resistances, i => Resistance.toDTO(i)),
            statuses: Campaign.serializeEntityArray(campaign.statuses, i => Status.toDTO(i)),
            tags: Campaign.serializeEntityArray(campaign.tags, i => Tag.toDTO(i)),
            backgrounds: Campaign.serializeEntityArray(campaign.backgrounds, i => Background.toDTO(i)),
        };
    }


    public static fromDTO(dto: CampaignDTO, context: Context): Campaign {
        const campaign = new Campaign();
        context.campaign = campaign
        campaign.id = dto.id;
        campaign.name = dto.name;
        campaign.description = dto.description;
        campaign.dynamic_state = dto.dynamicState;
        campaign.created_at = new Date(dto.createdAt);
        campaign.world = context.world;
        campaign.user = context.user;
        campaign.items = Campaign.deserializeEntityArray(dto.items, (i) => Item.fromDTO(i, context));
        campaign.pastExperiences = Campaign.deserializeEntityArray(dto.pastExperiences, (i) => PastExperience.fromDTO(i, context));
        campaign.characterMemories = Campaign.deserializeEntityArray(dto.characterMemories, (i) => CharacterMemory.fromDTO(i, context));
        campaign.memories = Campaign.deserializeEntityArray(dto.memories, (i) => Memory.fromDTO(i, context));
        campaign.memoryPools = Campaign.deserializeEntityArray(dto.memoryPools, (i) => MemoryPool.fromDTO(i, context));
        campaign.memoryPoolEntries = Campaign.deserializeEntityArray(dto.memoryPoolEntries, (i) => MemoryPoolEntry.fromDTO(i, context));
        campaign.skills = Campaign.deserializeEntityArray(dto.skills, (i) => Skill.fromDTO(i, context));
        campaign.traits = Campaign.deserializeEntityArray(dto.traits, (i) => Trait.fromDTO(i, context));
        campaign.addictions = Campaign.deserializeEntityArray(dto.addictions, (i) => Addiction.fromDTO(i, context));
        campaign.birthsigns = Campaign.deserializeEntityArray(dto.birthsigns, (i) => Birthsign.fromDTO(i, context));
        campaign.characters = Campaign.deserializeEntityArray(dto.characters, (i) => Character.fromDTO(i, context));
        campaign.characterProfessions = Campaign.deserializeEntityArray(dto.characterProfessions, (i) => CharacterProfession.fromDTO(i, context));
        campaign.diseases = Campaign.deserializeEntityArray(dto.diseases, (i) => Disease.fromDTO(i, context));
        campaign.effects = Campaign.deserializeEntityArray(dto.effects, (i) => Effect.fromDTO(i, context));
        campaign.facts = Campaign.deserializeEntityArray(dto.facts, (i) => Fact.fromDTO(i, context));
        campaign.factions = Campaign.deserializeEntityArray(dto.factions, (i) => Faction.fromDTO(i, context));
        campaign.storageSlots = Campaign.deserializeEntityArray(dto.storageSlots, (i) => StorageSlot.fromDTO(i, context));
        campaign.equipmentSlots = Campaign.deserializeEntityArray(dto.equipmentSlots, (i) => EquipmentSlot.fromDTO(i, context));
        campaign.itemSets = Campaign.deserializeEntityArray(dto.itemSets, (i) => ItemSet.fromDTO(i, context));
        campaign.moods = Campaign.deserializeEntityArray(dto.moods, (i) => Mood.fromDTO(i, context));
        campaign.needs = Campaign.deserializeEntityArray(dto.needs, (i) => Need.fromDTO(i, context));
        campaign.personalityProfiles = Campaign.deserializeEntityArray(dto.personalityProfiles, (i) => PersonalityProfile.fromDTO(i, context));
        campaign.races = Campaign.deserializeEntityArray(dto.races, (i) => Race.fromDTO(i, context));
        campaign.religions = Campaign.deserializeEntityArray(dto.religions, (i) => Religion.fromDTO(i, context));
        campaign.resistances = Campaign.deserializeEntityArray(dto.resistances, (i) => Resistance.fromDTO(i, context));
        campaign.statuses = Campaign.deserializeEntityArray(dto.statuses, (i) => Status.fromDTO(i, context));
        campaign.tags = Campaign.deserializeEntityArray(dto.tags, (i) => Tag.fromDTO(i, context));
        campaign.backgrounds = Campaign.deserializeEntityArray(dto.backgrounds, (i) => Background.fromDTO(i, context));
        return campaign;
    }
}
