import { TableInheritance, Entity, Column, PrimaryGeneratedColumn, OneToMany, BaseEntity, ManyToOne, BeforeInsert, PrimaryColumn } from "typeorm";
import { Campaign } from "./Campaign";
import { User } from "./User";
import { Item } from "./Content/Item/Item";
import { PastExperience } from "./Content/Knowledge/PastExperience/PastExperience";
import { CharacterMemory } from "./Content/Knowledge/CharacterMemory";
import { Memory } from "./Content/Knowledge/Memory";
import { MemoryPool } from "./Content/Knowledge/MemoryPool";
import { MemoryPoolEntry } from "./Content/Knowledge/MemoryPoolEntry";
import { Skill } from "./Content/Skill/Skill";
import { Trait } from "./Content/Trait/Trait";
import { Addiction } from "./Content/Addiction";
import { Birthsign } from "./Content/Birthsign";
import { Character } from "./Content/Character";
import { Faction } from "./Content/Faction";
import { ItemSet } from "./Content/ItemSet";
import { CharacterProfession } from "./Content/CharacterProfession";
import { Disease } from "./Content/Disease";
import { Effect } from "./Content/Effect";
import { Fact } from "./Content/Fact";
import { Mood } from "./Content/Mood";
import { Need } from "./Content/Need";
import { PersonalityProfile } from "./Content/PersonalityProfile";
import { Race } from "./Content/Race";
import { Religion } from "./Content/Religion";
import { Resistance } from "./Content/Resistance";
import { Status } from "./Content/Status";
import { Tag } from "./Content/Tag";
import { Background } from "./Content/Background";
import { EquipmentSlot } from "./Content/Slot/EquipmentSlot";
import { StorageSlot } from "./Content/Slot/StorageSlot";
import { randomUUID } from "crypto";
import { WorldDTO } from "../proto/common";

@Entity()
@TableInheritance({ column: { type: "varchar", name: "type" } })
export class World extends BaseEntity {


    @PrimaryColumn()
    id!: string;

    @BeforeInsert()
    generateId() {
        this.id = `${this.id_prefix}_${randomUUID().replace(/-/g, "")}`;
    }
    id_prefix = "WORLD";

    @ManyToOne(() => User, { lazy: true })
    user!: User; // User who created this campaign.

    @Column({ type: "varchar", length: 255 })
    name!: string; // Name of the world, e.g., "Morrowind", "Middle-earth".

    @Column({ type: "text", nullable: true })
    description?: string; // Optional description or lore of the world.

    @Column({ type: "json", nullable: true })
    settings?: any; // Custom world settings (e.g., starting conditions, mechanics).

    @Column({ default: false })
    frozen!: boolean;

    @OneToMany(() => Campaign, (campaign) => campaign.world, { lazy: true })
    campaigns!: Campaign[]; // Associated campaigns created from this world.

    @OneToMany(() => Item, item => item.world, { onDelete: "CASCADE", lazy: true })
    items!: Item[]

    @OneToMany(() => PastExperience, pastExperience => pastExperience.world, { onDelete: "CASCADE", lazy: true })
    pastExperiences!: PastExperience[]

    @OneToMany(() => CharacterMemory, characterMemory => characterMemory.world, { onDelete: "CASCADE", lazy: true })
    characterMemories!: CharacterMemory[]

    @OneToMany(() => Memory, memory => memory.world, { onDelete: "CASCADE", lazy: true })
    memories!: Memory[]

    @OneToMany(() => MemoryPool, memoryPool => memoryPool.world, { onDelete: "CASCADE", lazy: true })
    memoryPools!: MemoryPool[]

    @OneToMany(() => MemoryPoolEntry, memoryPoolEntry => memoryPoolEntry.world, { onDelete: "CASCADE", lazy: true })
    memoryPoolEntries!: MemoryPoolEntry[]

    @OneToMany(() => Skill, skill => skill.world, { onDelete: "CASCADE", lazy: true })
    skills!: Skill[]

    @OneToMany(() => Trait, trait => trait.world, { onDelete: "CASCADE", lazy: true })
    traits!: Trait[]

    @OneToMany(() => Addiction, addiction => addiction.world, { onDelete: "CASCADE", lazy: true })
    addictions!: Addiction[]

    @OneToMany(() => Birthsign, birthsign => birthsign.world, { onDelete: "CASCADE", lazy: true })
    birthsigns!: Birthsign[]

    @OneToMany(() => Character, character => character.world, { onDelete: "CASCADE", lazy: true })
    characters!: Character[]

    @OneToMany(() => CharacterProfession, characterProfession => characterProfession.world, { onDelete: "CASCADE", lazy: true })
    characterProfessions!: CharacterProfession[]

    @OneToMany(() => Disease, disease => disease.world, { onDelete: "CASCADE", lazy: true })
    diseases!: Disease[]

    @OneToMany(() => Effect, effect => effect.world, { onDelete: "CASCADE", lazy: true })
    effects!: Effect[]

    @OneToMany(() => Fact, fact => fact.world, { onDelete: "CASCADE", lazy: true })
    facts!: Fact[]

    @OneToMany(() => Faction, faction => faction.world, { onDelete: "CASCADE", lazy: true })
    factions!: Faction[]

    @OneToMany(() => StorageSlot, storageSlot => storageSlot.world, { onDelete: "CASCADE", lazy: true })
    storageSlots!: StorageSlot[]

    @OneToMany(() => EquipmentSlot, equipmentSlot => equipmentSlot.world, { onDelete: "CASCADE", lazy: true })
    equipmentSlots!: EquipmentSlot[]

    @OneToMany(() => ItemSet, itemSet => itemSet.world, { onDelete: "CASCADE", lazy: true })
    itemSets!: ItemSet[]

    @OneToMany(() => Mood, mood => mood.world, { onDelete: "CASCADE", lazy: true })
    moods!: Mood[]

    @OneToMany(() => Need, need => need.world, { onDelete: "CASCADE", lazy: true })
    needs!: Need[]

    @OneToMany(() => PersonalityProfile, personalityProfile => personalityProfile.world, { onDelete: "CASCADE", lazy: true })
    personalityProfiles!: PersonalityProfile[]

    @OneToMany(() => Race, race => race.world, { onDelete: "CASCADE", lazy: true })
    races!: Race[]

    @OneToMany(() => Religion, religion => religion.world, { onDelete: "CASCADE", lazy: true })
    religions!: Religion[]

    @OneToMany(() => Resistance, resistance => resistance.world, { onDelete: "CASCADE", lazy: true })
    resistances!: Resistance[]

    @OneToMany(() => Status, status => status.world, { onDelete: "CASCADE", lazy: true })
    statuses!: Status[]

    @OneToMany(() => Tag, tag => tag.world, { onDelete: "CASCADE", lazy: true })
    tags!: Tag[]

    @OneToMany(() => Background, background => background.world, { onDelete: "CASCADE", lazy: true })
    backgrounds!: Background[]

    public toDTO(): WorldDTO {
        return {
            id: this.id,
            name: this.name,
            description: this.description,
            settings: this.settings,
            frozen: this.frozen,
            user: this.user?.toDTO(),
            campaigns: this.campaigns ? { campaigns: this.campaigns.map(campaign => campaign.toDTO()) } : undefined,
            items: this.items ? { items: this.items.map(item => item.toDTO()) } : undefined,
            pastExperiences: this.pastExperiences ? { pastExperiences: this.pastExperiences.map(exp => exp.toDTO()) } : undefined,
            characterMemories: this.characterMemories ? { characterMemories: this.characterMemories.map(mem => mem.toDTO()) } : undefined,
            memories: this.memories ? { memories: this.memories.map(mem => mem.toDTO()) } : undefined,
            memoryPools: this.memoryPools ? { memoryPools: this.memoryPools.map(pool => pool.toDTO()) } : undefined,
            memoryPoolEntries: this.memoryPoolEntries ? { memoryPoolEntries: this.memoryPoolEntries.map(entry => entry.toDTO()) } : undefined,
            skills: this.skills ? { skills: this.skills.map(skill => skill.toDTO()) } : undefined,
            traits: this.traits ? { traits: this.traits.map(trait => trait.toDTO()) } : undefined,
            addictions: this.addictions ? { addictions: this.addictions.map(addiction => addiction.toDTO()) } : undefined,
            birthsigns: this.birthsigns ? { birthSigns: this.birthsigns.map(birthsign => birthsign.toDTO()) } : undefined,
            characters: this.characters ? { characters: this.characters.map(character => character.toDTO()) } : undefined,
            characterProfessions: this.characterProfessions ? { professions: this.characterProfessions.map(profession => profession.toDTO()) } : undefined,
            diseases: this.diseases ? { diseases: this.diseases.map(disease => disease.toDTO()) } : undefined,
            effects: this.effects ? { effects: this.effects.map(effect => effect.toDTO()) } : undefined,
            facts: this.facts ? { facts: this.facts.map(fact => fact.toDTO()) } : undefined,
            factions: this.factions ? { factions: this.factions.map(faction => faction.toDTO()) } : undefined,
            storageSlots: this.storageSlots ? { storageSlots: this.storageSlots.map(slot => slot.toDTO()) } : undefined,
            equipmentSlots: this.equipmentSlots ? { equipmentSlots: this.equipmentSlots.map(slot => slot.toDTO()) } : undefined,
            itemSets: this.itemSets ? { itemSets: this.itemSets.map(set => set.toDTO()) } : undefined,
            moods: this.moods ? { moods: this.moods.map(mood => mood.toDTO()) } : undefined,
            needs: this.needs ? { needs: this.needs.map(need => need.toDTO()) } : undefined,
            personalityProfiles: this.personalityProfiles ? { personalityProfiles: this.personalityProfiles.map(profile => profile.toDTO()) } : undefined,
            races: this.races ? { races: this.races.map(race => race.toDTO()) } : undefined,
            religions: this.religions ? { moods: this.religions.map(religion => religion.toDTO()) } : undefined,
            resistances: this.resistances ? { resistances: this.resistances.map(resistance => resistance.toDTO()) } : undefined,
            statuses: this.statuses ? { statuses: this.statuses.map(status => status.toDTO()) } : undefined,
            tags: this.tags ? { tags: this.tags.map(tag => tag.toDTO()) } : undefined,
            backgrounds: this.backgrounds ? { backgrounds: this.backgrounds.map(background => background.toDTO()) } : undefined,
        };
    }
    
    public static fromDTO(dto: WorldDTO, user: User, campaign?: Campaign): World {
        const world = new World();
        world.id = dto.id;
        world.name = dto.name;
        world.description = dto.description;
        world.settings = dto.settings;
        world.frozen = dto.frozen;
        world.user = user;
        world.campaigns = dto.campaigns?.campaigns?.map(i => Campaign.fromDTO(i, user, world)) || [];
        world.items = dto.items?.items?.map(i => Item.fromDTO(i, user, world, campaign)) || [];
        world.pastExperiences = dto.pastExperiences?.pastExperiences?.map(i=>PastExperience.fromDTO(i, user, world, campaign)) || [];
        world.characterMemories = dto.characterMemories?.characterMemories?.map(i=>CharacterMemory.fromDTO(i, user, world, campaign)) || [];
        world.memories = dto.memories?.memories?.map(i=>Memory.fromDTO(i, user, world, campaign)) || [];
        world.memoryPools = dto.memoryPools?.memoryPools?.map(i=>MemoryPool.fromDTO(i, user, world, campaign)) || [];
        world.memoryPoolEntries = dto.memoryPoolEntries?.memoryPoolEntries?.map(i=>MemoryPoolEntry.fromDTO(i, user, world, campaign)) || [];
        world.skills = dto.skills?.skills?.map(i=>Skill.fromDTO(i, user, world, campaign)) || [];
        world.traits = dto.traits?.traits?.map(i=>Trait.fromDTO(i, user, world, campaign)) || [];
        world.addictions = dto.addictions?.addictions?.map(i=>Addiction.fromDTO(i, user, world, campaign)) || [];
        world.birthsigns = dto.birthsigns?.birthSigns?.map(i=>Birthsign.fromDTO(i, user, world, campaign)) || [];
        world.characters = dto.characters?.characters?.map(i=>Character.fromDTO(i, user, world, campaign)) || [];
        world.characterProfessions = dto.characterProfessions?.professions?.map(i=>CharacterProfession.fromDTO(i, user, world, campaign)) || [];
        world.diseases = dto.diseases?.diseases?.map(i=>Disease.fromDTO(i, user, world, campaign)) || [];
        world.effects = dto.effects?.effects?.map(i=>Effect.fromDTO(i, user, world, campaign)) || [];
        world.facts = dto.facts?.facts?.map(i=>Fact.fromDTO(i, user, world, campaign)) || [];
        world.factions = dto.factions?.factions?.map(i=>Faction.fromDTO(i, user, world, campaign)) || [];
        world.storageSlots = dto.storageSlots?.storageSlots?.map(i=>StorageSlot.fromDTO(i, user, world, campaign)) || [];
        world.equipmentSlots = dto.equipmentSlots?.equipmentSlots?.map(i=>EquipmentSlot.fromDTO(i, user, world, campaign)) || [];
        world.itemSets = dto.itemSets?.itemSets?.map(i=>ItemSet.fromDTO(i, user, world, campaign)) || [];
        world.moods = dto.moods?.moods?.map(i=>Mood.fromDTO(i, user, world, campaign)) || [];
        world.needs = dto.needs?.needs?.map(i=>Need.fromDTO(i, user, world, campaign)) || [];
        world.personalityProfiles = dto.personalityProfiles?.personalityProfiles?.map(i=>PersonalityProfile.fromDTO(i, user, world, campaign)) || [];
        world.races = dto.races?.races?.map(i=>Race.fromDTO(i, user, world, campaign)) || [];
        world.religions = dto.religions?.moods?.map(i=>Religion.fromDTO(i, user, world, campaign)) || [];
        world.resistances = dto.resistances?.resistances?.map(i=>Resistance.fromDTO(i, user, world, campaign)) || [];
        world.statuses = dto.statuses?.statuses?.map(i=>Status.fromDTO(i, user, world, campaign)) || [];
        world.tags = dto.tags?.tags?.map(i=>Tag.fromDTO(i, user, world, campaign)) || [];
        world.backgrounds = dto.backgrounds?.backgrounds?.map(i=>Background.fromDTO(i, user, world, campaign)) || [];
        return world;
    }
}
