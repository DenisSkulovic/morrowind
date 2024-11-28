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

@Entity()
@TableInheritance({ column: { type: "varchar", name: "type" } })
export class Campaign extends BaseEntity {
    public toDTO(): CampaignDTO {
        return {
            id: this.id,
            name: this.name,
            description: this.description,
            dynamic_state: this.dynamic_state,
            created_at: this.created_at.toISOString(),
            world: this.world?.toDTO(),
            user: this.user?.toDTO(),
            items: this.items ? { items: this.items.map(item => item.toDTO()) } : undefined,
            past_experiences: this.pastExperiences ? { pastExperiences: this.pastExperiences.map(exp => exp.toDTO()) } : undefined,
            character_memories: this.characterMemories ? { characterMemories: this.characterMemories.map(mem => mem.toDTO()) } : undefined,
            memories: this.memories ? { memories: this.memories.map(mem => mem.toDTO()) } : undefined,
            memory_pools: this.memoryPools ? { memoryPools: this.memoryPools.map(pool => pool.toDTO()) } : undefined,
            memory_pool_entries: this.memoryPoolEntries ? { memoryPoolEntries: this.memoryPoolEntries.map(entry => entry.toDTO()) } : undefined,
            skills: this.skills ? { skills: this.skills.map(skill => skill.toDTO()) } : undefined,
            traits: this.traits ? { traits: this.traits.map(trait => trait.toDTO()) } : undefined,
            addictions: this.addictions ? { addictions: this.addictions.map(addiction => addiction.toDTO()) } : undefined,
            birthsigns: this.birthsigns ? { birthSigns: this.birthsigns.map(birthsign => birthsign.toDTO()) } : undefined,
            characters: this.characters ? { characters: this.characters.map(character => character.toDTO()) } : undefined,
            character_professions: this.characterProfessions ? { professions: this.characterProfessions.map(profession => profession.toDTO()) } : undefined,
            diseases: this.diseases ? { diseases: this.diseases.map(disease => disease.toDTO()) } : undefined,
            effects: this.effects ? { effects: this.effects.map(effect => effect.toDTO()) } : undefined,
            facts: this.facts ? { facts: this.facts.map(fact => fact.toDTO()) } : undefined,
            factions: this.factions ? { factions: this.factions.map(faction => faction.toDTO()) } : undefined,
            storage_slots: this.storageSlots ? { storageSlots: this.storageSlots.map(slot => slot.toDTO()) } : undefined,
            equipment_slots: this.equipmentSlots ? { equipmentSlots: this.equipmentSlots.map(slot => slot.toDTO()) } : undefined,
            item_sets: this.itemSets ? { itemSets: this.itemSets.map(set => set.toDTO()) } : undefined,
            moods: this.moods ? { moods: this.moods.map(mood => mood.toDTO()) } : undefined,
            needs: this.needs ? { needs: this.needs.map(need => need.toDTO()) } : undefined,
            personality_profiles: this.personalityProfiles ? { personalityProfiles: this.personalityProfiles.map(profile => profile.toDTO()) } : undefined,
            races: this.races ? { races: this.races.map(race => race.toDTO()) } : undefined,
            religions: this.religions ? { moods: this.religions.map(religion => religion.toDTO()) } : undefined,
            resistances: this.resistances ? { resistances: this.resistances.map(resistance => resistance.toDTO()) } : undefined,
            statuses: this.statuses ? { statuses: this.statuses.map(status => status.toDTO()) } : undefined,
            tags: this.tags ? { tags: this.tags.map(tag => tag.toDTO()) } : undefined,
            backgrounds: this.backgrounds ? { backgrounds: this.backgrounds.map(background => background.toDTO()) } : undefined,
        };
    }
    
    public static fromDTO(dto: CampaignDTO, user: User, world: World): Campaign {
        const campaign = new Campaign();
        campaign.id = dto.id;
        campaign.name = dto.name;
        campaign.description = dto.description;
        campaign.dynamic_state = dto.dynamicState;
        campaign.created_at = new Date(dto.createdAt);
        campaign.world = world;
        campaign.user = user;
        campaign.items = dto.items?.items?.map(i=>Item.fromDTO(i, user, world, campaign)) || [];
        campaign.pastExperiences = dto.pastExperiences?.pastExperiences?.map(i=>PastExperience.fromDTO(i, user, world, campaign)) || [];
        campaign.characterMemories = dto.characterMemories?.characterMemories?.map(i=>CharacterMemory.fromDTO(i, user, world, campaign)) || [];
        campaign.memories = dto.memories?.memories?.map(i=>Memory.fromDTO(i, user, world, campaign)) || [];
        campaign.memoryPools = dto.memoryPools?.memoryPools?.map(i=>MemoryPool.fromDTO(i, user, world, campaign)) || [];
        campaign.memoryPoolEntries = dto.memoryPoolEntries?.memoryPoolEntries?.map(i=>MemoryPoolEntry.fromDTO(i, user, world, campaign)) || [];
        campaign.skills = dto.skills?.skills?.map(i=>Skill.fromDTO(i, user, world, campaign)) || [];
        campaign.traits = dto.traits?.traits?.map(i=>Trait.fromDTO(i, user, world, campaign)) || [];
        campaign.addictions = dto.addictions?.addictions?.map(i=>Addiction.fromDTO(i, user, world, campaign)) || [];
        campaign.birthsigns = dto.birthsigns?.birthSigns?.map(i=>Birthsign.fromDTO(i, user, world, campaign)) || [];
        campaign.characters = dto.characters?.characters?.map(i=>Character.fromDTO(i, user, world, campaign)) || [];
        campaign.characterProfessions = dto.characterProfessions?.professions?.map(i=>CharacterProfession.fromDTO(i, user, world, campaign)) || [];
        campaign.diseases = dto.diseases?.diseases?.map(i=>Disease.fromDTO(i, user, world, campaign)) || [];
        campaign.effects = dto.effects?.effects?.map(i=>Effect.fromDTO(i, user, world, campaign)) || [];
        campaign.facts = dto.facts?.facts?.map(i=>Fact.fromDTO(i, user, world, campaign)) || [];
        campaign.factions = dto.factions?.factions?.map(i=>Faction.fromDTO(i, user, world, campaign)) || [];
        campaign.storageSlots = dto.storageSlots?.storageSlots?.map(i=>StorageSlot.fromDTO(i, user, world, campaign)) || [];
        campaign.equipmentSlots = dto.equipmentSlots?.equipmentSlots?.map(i=>EquipmentSlot.fromDTO(i, user, world, campaign)) || [];
        campaign.itemSets = dto.itemSets?.itemSets?.map(i=>ItemSet.fromDTO(i, user, world, campaign)) || [];
        campaign.moods = dto.moods?.moods?.map(i=>Mood.fromDTO(i, user, world, campaign)) || [];
        campaign.needs = dto.needs?.needs?.map(i=>Need.fromDTO(i, user, world, campaign)) || [];
        campaign.personalityProfiles = dto.personalityProfiles?.personalityProfiles?.map(i=>PersonalityProfile.fromDTO(i, user, world, campaign)) || [];
        campaign.races = dto.races?.races?.map(i=>Race.fromDTO(i, user, world, campaign)) || [];
        campaign.religions = dto.religions?.moods?.map(i=>Religion.fromDTO(i, user, world, campaign)) || [];
        campaign.resistances = dto.resistances?.resistances?.map(i=>Resistance.fromDTO(i, user, world, campaign)) || [];
        campaign.statuses = dto.statuses?.statuses?.map(i=>Status.fromDTO(i, user, world, campaign)) || [];
        campaign.tags = dto.tags?.tags?.map(i=>Tag.fromDTO(i, user, world, campaign)) || [];
        campaign.backgrounds = dto.backgrounds?.backgrounds?.map(i=>Background.fromDTO(i, user, world, campaign)) || [];
        return campaign;
    }
    

    @PrimaryColumn()
    id!: string;

    @BeforeInsert()
    generateId() {
        this.id = `${this.id_prefix}_${randomUUID().replace(/-/g, "")}`;
    }
    id_prefix = "CAMPAIGN";

    @Column({ type: "varchar", length: 255 })
    name!: string; // Name of the campaign, e.g., "Hero's Journey".

    @Column({ type: "text", nullable: true })
    description?: string; // Optional description of the campaign.

    @Column({ type: "json", nullable: true })
    dynamic_state?: any; // JSON to store campaign-specific dynamic data (e.g., NPC states, events).

    @ManyToOne(() => World, (world) => world.campaigns, {lazy: true})
    world!: World; // Reference to the originating world.

    @Column({ type: "timestamp", default: () => "CURRENT_TIMESTAMP" })
    created_at!: Date; // Timestamp of when the campaign was created.

    @ManyToOne(() => User, user => user.campaigns, {lazy: true})
    user!: User; // User who created this campaign.

    @OneToMany(() => Item, item => item.campaign, { onDelete: "CASCADE", lazy: true })
    items!: Item[]

    @OneToMany(() => PastExperience, pastExperience => pastExperience.campaign, { onDelete: "CASCADE", lazy: true })
    pastExperiences!: PastExperience[]

    @OneToMany(() => CharacterMemory, characterMemory => characterMemory.campaign, { onDelete: "CASCADE", lazy: true })
    characterMemories!: CharacterMemory[]

    @OneToMany(() => Memory, memory => memory.campaign, { onDelete: "CASCADE", lazy: true })
    memories!: Memory[]

    @OneToMany(() => MemoryPool, memoryPool => memoryPool.campaign, { onDelete: "CASCADE", lazy: true })
    memoryPools!: MemoryPool[]

    @OneToMany(() => MemoryPoolEntry, memoryPoolEntry => memoryPoolEntry.campaign, { onDelete: "CASCADE", lazy: true })
    memoryPoolEntries!: MemoryPoolEntry[]

    @OneToMany(() => Skill, skill => skill.campaign, { onDelete: "CASCADE", lazy: true })
    skills!: Skill[]

    @OneToMany(() => Trait, trait => trait.campaign, { onDelete: "CASCADE", lazy: true })
    traits!: Trait[]

    @OneToMany(() => Addiction, addiction => addiction.campaign, { onDelete: "CASCADE", lazy: true })
    addictions!: Addiction[]

    @OneToMany(() => Birthsign, birthsign => birthsign.campaign, { onDelete: "CASCADE", lazy: true })
    birthsigns!: Birthsign[]

    @OneToMany(() => Character, character => character.campaign, { onDelete: "CASCADE", lazy: true })
    characters!: Character[]

    @OneToMany(() => CharacterProfession, characterProfession => characterProfession.campaign, { onDelete: "CASCADE", lazy: true })
    characterProfessions!: CharacterProfession[]

    @OneToMany(() => Disease, disease => disease.campaign, { onDelete: "CASCADE", lazy: true })
    diseases!: Disease[]

    @OneToMany(() => Effect, effect => effect.campaign, { onDelete: "CASCADE", lazy: true })
    effects!: Effect[]

    @OneToMany(() => Fact, fact => fact.campaign, { onDelete: "CASCADE", lazy: true })
    facts!: Fact[]

    @OneToMany(() => Faction, faction => faction.campaign, { onDelete: "CASCADE", lazy: true })
    factions!: Faction[]

    @OneToMany(() => StorageSlot, storageSlot => storageSlot.campaign, { onDelete: "CASCADE", lazy: true })
    storageSlots!: StorageSlot[]

    @OneToMany(() => EquipmentSlot, equipmentSlot => equipmentSlot.campaign, { onDelete: "CASCADE", lazy: true })
    equipmentSlots!: EquipmentSlot[]
    
    @OneToMany(() => ItemSet, itemSet => itemSet.campaign, { onDelete: "CASCADE", lazy: true })
    itemSets!: ItemSet[]

    @OneToMany(() => Mood, mood => mood.campaign, { onDelete: "CASCADE", lazy: true })
    moods!: Mood[]

    @OneToMany(() => Need, need => need.campaign, { onDelete: "CASCADE", lazy: true })
    needs!: Need[]

    @OneToMany(() => PersonalityProfile, personalityProfile => personalityProfile.campaign, { onDelete: "CASCADE", lazy: true })
    personalityProfiles!: PersonalityProfile[]

    @OneToMany(() => Race, race => race.campaign, { onDelete: "CASCADE", lazy: true })
    races!: Race[]

    @OneToMany(() => Religion, religion => religion.campaign, { onDelete: "CASCADE", lazy: true })
    religions!: Religion[]

    @OneToMany(() => Resistance, resistance => resistance.campaign, { onDelete: "CASCADE", lazy: true })
    resistances!: Resistance[]

    @OneToMany(() => Status, status => status.campaign, { onDelete: "CASCADE", lazy: true })
    statuses!: Status[]

    @OneToMany(() => Tag, tag => tag.campaign, { onDelete: "CASCADE", lazy: true })
    tags!: Tag[]

    @OneToMany(() => Background, background => background.campaign, { onDelete: "CASCADE", lazy: true })
    backgrounds!: Background[]
}
