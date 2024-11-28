import { TableInheritance, Entity, Column, PrimaryGeneratedColumn, OneToMany, BaseEntity, OneToOne, BeforeInsert, PrimaryColumn } from "typeorm";
import { Campaign } from "./Campaign";
import { World } from "./World";
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
import { Account } from "./Account";
import { Background } from "./Content/Background";
import { EquipmentSlot } from "./Content/Slot/EquipmentSlot";
import { StorageSlot } from "./Content/Slot/StorageSlot";
import { randomUUID } from "crypto";
import { UserDTO } from "../proto/common";

@Entity()
@TableInheritance({ column: { type: "varchar", name: "type" } })
export class User extends BaseEntity {


    @PrimaryColumn()
    id!: string;

    @BeforeInsert()
    generateId() {
        this.id = `${this.id_prefix}_${randomUUID().replace(/-/g, "")}`;
    }
    id_prefix = "USER";

    @OneToOne(() => Account, (account) => account.user, { lazy: true })
    account!: Account

    @OneToMany(() => World, (world) => world.user, { onDelete: "CASCADE", lazy: true })
    worlds?: World[]; // Worlds created by this user.

    @OneToMany(() => Campaign, (campaign) => campaign.user, { onDelete: "CASCADE", lazy: true })
    campaigns?: Campaign[]; // Campaigns created or managed by this user.

    @OneToMany(() => Item, item => item.user, { onDelete: "CASCADE", lazy: true })
    items?: Item[]

    @OneToMany(() => PastExperience, pastExperience => pastExperience.user, { onDelete: "CASCADE", lazy: true })
    pastExperiences?: PastExperience[]

    @OneToMany(() => CharacterMemory, characterMemory => characterMemory.user, { onDelete: "CASCADE", lazy: true })
    characterMemories?: CharacterMemory[]

    @OneToMany(() => Memory, memory => memory.user, { onDelete: "CASCADE", lazy: true })
    memories?: Memory[]

    @OneToMany(() => MemoryPool, memoryPool => memoryPool.user, { onDelete: "CASCADE", lazy: true })
    memoryPools?: MemoryPool[]

    @OneToMany(() => MemoryPoolEntry, memoryPoolEntry => memoryPoolEntry.user, { onDelete: "CASCADE", lazy: true })
    memoryPoolEntries?: MemoryPoolEntry[]

    @OneToMany(() => Skill, skill => skill.user, { onDelete: "CASCADE", lazy: true })
    skills?: Skill[]

    @OneToMany(() => Trait, trait => trait.user, { onDelete: "CASCADE", lazy: true })
    traits?: Trait[]

    @OneToMany(() => Addiction, addiction => addiction.user, { onDelete: "CASCADE", lazy: true })
    addictions?: Addiction[]

    @OneToMany(() => Birthsign, birthsign => birthsign.user, { onDelete: "CASCADE", lazy: true })
    birthsigns?: Birthsign[]

    @OneToMany(() => Character, character => character.user, { onDelete: "CASCADE", lazy: true })
    characters?: Character[]

    @OneToMany(() => CharacterProfession, characterProfession => characterProfession.user, { onDelete: "CASCADE", lazy: true })
    characterProfessions?: CharacterProfession[]

    @OneToMany(() => Disease, disease => disease.user, { onDelete: "CASCADE", lazy: true })
    diseases?: Disease[]

    @OneToMany(() => Effect, effect => effect.user, { onDelete: "CASCADE", lazy: true })
    effects?: Effect[]

    @OneToMany(() => Fact, fact => fact.user, { onDelete: "CASCADE", lazy: true })
    facts?: Fact[]

    @OneToMany(() => Faction, faction => faction.user, { onDelete: "CASCADE", lazy: true })
    factions?: Faction[]

    @OneToMany(() => StorageSlot, storageSlot => storageSlot.user, { onDelete: "CASCADE", lazy: true })
    storageSlots!: StorageSlot[]

    @OneToMany(() => EquipmentSlot, equipmentSlot => equipmentSlot.user, { onDelete: "CASCADE", lazy: true })
    equipmentSlots!: EquipmentSlot[]

    @OneToMany(() => ItemSet, itemSet => itemSet.user, { onDelete: "CASCADE", lazy: true })
    itemSets?: ItemSet[]

    @OneToMany(() => Mood, mood => mood.user, { onDelete: "CASCADE", lazy: true })
    moods?: Mood[]

    @OneToMany(() => Need, need => need.user, { onDelete: "CASCADE", lazy: true })
    needs?: Need[]

    @OneToMany(() => PersonalityProfile, personalityProfile => personalityProfile.user, { onDelete: "CASCADE", lazy: true })
    personalityProfiles?: PersonalityProfile[]

    @OneToMany(() => Race, race => race.user, { onDelete: "CASCADE", lazy: true })
    races?: Race[]

    @OneToMany(() => Religion, religion => religion.user, { onDelete: "CASCADE", lazy: true })
    religions?: Religion[]

    @OneToMany(() => Resistance, resistance => resistance.user, { onDelete: "CASCADE", lazy: true })
    resistances?: Resistance[]

    @OneToMany(() => Status, status => status.user, { onDelete: "CASCADE", lazy: true })
    statuses?: Status[]

    @OneToMany(() => Tag, tag => tag.user, { onDelete: "CASCADE", lazy: true })
    tags?: Tag[]

    @OneToMany(() => Background, background => background.user, { onDelete: "CASCADE", lazy: true })
    backgrounds!: Background[]

    public toDTO(): UserDTO {
        return {
            id: this.id,
            worlds: this.worlds ? { worlds: this.worlds.map(world => world.toDTO()) } : undefined,
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

    public static fromDTO(dto: UserDTO, world: World, campaign?: Campaign): User {
        const user = new User();
        user.id = dto.id;
        user.worlds = dto.worlds?.worlds?.map(i => World.fromDTO(i, user, world, campaign)) || [];
        user.campaigns = dto.campaigns?.campaigns?.map(i => Campaign.fromDTO(i, user, world, campaign)) || [];
        user.items = dto.items?.items?.map(i => Item.fromDTO(i, user, world, campaign)) || [];
        user.pastExperiences = dto.pastExperiences?.pastExperiences?.map(i => PastExperience.fromDTO(i, user, world, campaign)) || [];
        user.characterMemories = dto.characterMemories?.characterMemories?.map(i => CharacterMemory.fromDTO(i, user, world, campaign)) || [];
        user.memories = dto.memories?.memories?.map(i => Memory.fromDTO(i, user, world, campaign)) || [];
        user.memoryPools = dto.memoryPools?.memoryPools?.map(i => MemoryPool.fromDTO(i, user, world, campaign)) || [];
        user.memoryPoolEntries = dto.memoryPoolEntries?.memoryPoolEntries?.map(i => MemoryPoolEntry.fromDTO(i, user, world, campaign)) || [];
        user.skills = dto.skills?.skills?.map(i => Skill.fromDTO(i, user, world, campaign)) || [];
        user.traits = dto.traits?.traits?.map(i => Trait.fromDTO(i, user, world, campaign)) || [];
        user.addictions = dto.addictions?.addictions?.map(i => Addiction.fromDTO(i, user, world, campaign)) || [];
        user.birthsigns = dto.birthsigns?.birthSigns?.map(i => Birthsign.fromDTO(i, user, world, campaign)) || [];
        user.characters = dto.characters?.characters?.map(i => Character.fromDTO(i, user, world, campaign)) || [];
        user.characterProfessions = dto.characterProfessions?.professions?.map(i => CharacterProfession.fromDTO(i, user, world, campaign)) || [];
        user.diseases = dto.diseases?.diseases?.map(i => Disease.fromDTO(i, user, world, campaign)) || [];
        user.effects = dto.effects?.effects?.map(i => Effect.fromDTO(i, user, world, campaign)) || [];
        user.facts = dto.facts?.facts?.map(i => Fact.fromDTO(i, user, world, campaign)) || [];
        user.factions = dto.factions?.factions?.map(i => Faction.fromDTO(i, user, world, campaign)) || [];
        user.storageSlots = dto.storageSlots?.storageSlots?.map(i => StorageSlot.fromDTO(i, user, world, campaign)) || [];
        user.equipmentSlots = dto.equipmentSlots?.equipmentSlots?.map(i => EquipmentSlot.fromDTO(i, user, world, campaign)) || [];
        user.itemSets = dto.itemSets?.itemSets?.map(i => ItemSet.fromDTO(i, user, world, campaign)) || [];
        user.moods = dto.moods?.moods?.map(i => Mood.fromDTO(i, user, world, campaign)) || [];
        user.needs = dto.needs?.needs?.map(i => Need.fromDTO(i, user, world, campaign)) || [];
        user.personalityProfiles = dto.personalityProfiles?.personalityProfiles?.map(i => PersonalityProfile.fromDTO(i, user, world, campaign)) || [];
        user.races = dto.races?.races?.map(i => Race.fromDTO(i, user, world, campaign)) || [];
        user.religions = dto.religions?.moods?.map(i => Religion.fromDTO(i, user, world, campaign)) || [];
        user.resistances = dto.resistances?.resistances?.map(i => Resistance.fromDTO(i, user, world, campaign)) || [];
        user.statuses = dto.statuses?.statuses?.map(i => Status.fromDTO(i, user, world, campaign)) || [];
        user.tags = dto.tags?.tags?.map(i => Tag.fromDTO(i, user, world, campaign)) || [];
        user.backgrounds = dto.backgrounds?.backgrounds?.map(i => Background.fromDTO(i, user, world, campaign)) || [];
        return user;
    }

}
