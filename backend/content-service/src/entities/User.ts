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
import { Base } from "../Base";
import { Context } from "../types";


@Entity()
@TableInheritance({ column: { type: "varchar", name: "type" } })
export class User extends Base {


    @PrimaryColumn()
    id!: string;

    @BeforeInsert()
    generateId() {
        this.id = `${this.id_prefix}_${randomUUID().replace(/-/g, "")}`;
    }
    id_prefix = "USER";

    @OneToOne(() => Account, (account) => account.user, {})
    account!: Account

    @OneToMany(() => World, (world) => world.user, { onDelete: "CASCADE", })
    worlds?: World[];

    @OneToMany(() => Campaign, (campaign) => campaign.user, { onDelete: "CASCADE", })
    campaigns?: Campaign[];

    @OneToMany(() => Item, item => item.user, { onDelete: "CASCADE", })
    items?: Item[]

    @OneToMany(() => PastExperience, pastExperience => pastExperience.user, { onDelete: "CASCADE", })
    pastExperiences?: PastExperience[]

    @OneToMany(() => CharacterMemory, characterMemory => characterMemory.user, { onDelete: "CASCADE", })
    characterMemories?: CharacterMemory[]

    @OneToMany(() => Memory, memory => memory.user, { onDelete: "CASCADE", })
    memories?: Memory[]

    @OneToMany(() => MemoryPool, memoryPool => memoryPool.user, { onDelete: "CASCADE", })
    memoryPools?: MemoryPool[]

    @OneToMany(() => MemoryPoolEntry, memoryPoolEntry => memoryPoolEntry.user, { onDelete: "CASCADE", })
    memoryPoolEntries?: MemoryPoolEntry[]

    @OneToMany(() => Skill, skill => skill.user, { onDelete: "CASCADE", })
    skills?: Skill[]

    @OneToMany(() => Trait, trait => trait.user, { onDelete: "CASCADE", })
    traits?: Trait[]

    @OneToMany(() => Addiction, addiction => addiction.user, { onDelete: "CASCADE", })
    addictions?: Addiction[]

    @OneToMany(() => Birthsign, birthsign => birthsign.user, { onDelete: "CASCADE", })
    birthsigns?: Birthsign[]

    @OneToMany(() => Character, character => character.user, { onDelete: "CASCADE", })
    characters?: Character[]

    @OneToMany(() => CharacterProfession, characterProfession => characterProfession.user, { onDelete: "CASCADE", })
    characterProfessions?: CharacterProfession[]

    @OneToMany(() => Disease, disease => disease.user, { onDelete: "CASCADE", })
    diseases?: Disease[]

    @OneToMany(() => Effect, effect => effect.user, { onDelete: "CASCADE", })
    effects?: Effect[]

    @OneToMany(() => Fact, fact => fact.user, { onDelete: "CASCADE", })
    facts?: Fact[]

    @OneToMany(() => Faction, faction => faction.user, { onDelete: "CASCADE", })
    factions?: Faction[]

    @OneToMany(() => StorageSlot, storageSlot => storageSlot.user, { onDelete: "CASCADE", })
    storageSlots!: StorageSlot[]

    @OneToMany(() => EquipmentSlot, equipmentSlot => equipmentSlot.user, { onDelete: "CASCADE", })
    equipmentSlots!: EquipmentSlot[]

    @OneToMany(() => ItemSet, itemSet => itemSet.user, { onDelete: "CASCADE", })
    itemSets?: ItemSet[]

    @OneToMany(() => Mood, mood => mood.user, { onDelete: "CASCADE", })
    moods?: Mood[]

    @OneToMany(() => Need, need => need.user, { onDelete: "CASCADE", })
    needs?: Need[]

    @OneToMany(() => PersonalityProfile, personalityProfile => personalityProfile.user, { onDelete: "CASCADE", })
    personalityProfiles?: PersonalityProfile[]

    @OneToMany(() => Race, race => race.user, { onDelete: "CASCADE", })
    races?: Race[]

    @OneToMany(() => Religion, religion => religion.user, { onDelete: "CASCADE", })
    religions?: Religion[]

    @OneToMany(() => Resistance, resistance => resistance.user, { onDelete: "CASCADE", })
    resistances?: Resistance[]

    @OneToMany(() => Status, status => status.user, { onDelete: "CASCADE", })
    statuses?: Status[]

    @OneToMany(() => Tag, tag => tag.user, { onDelete: "CASCADE", })
    tags?: Tag[]

    @OneToMany(() => Background, background => background.user, { onDelete: "CASCADE", })
    backgrounds!: Background[]

    public static toDTO(user: User): UserDTO {
        return {
            id: user.id,
            worlds: User.serializeEntityArray(user.worlds, i => World.toDTO(i)),
            campaigns: User.serializeEntityArray(user.campaigns, i => Campaign.toDTO(i)),
            items: User.serializeEntityArray(user.items, i => Item.toDTO(i)),
            pastExperiences: User.serializeEntityArray(user.pastExperiences, i => PastExperience.toDTO(i)),
            characterMemories: User.serializeEntityArray(user.characterMemories, i => CharacterMemory.toDTO(i)),
            memories: User.serializeEntityArray(user.memories, i => Memory.toDTO(i)),
            memoryPools: User.serializeEntityArray(user.memoryPools, i => MemoryPool.toDTO(i)),
            memoryPoolEntries: User.serializeEntityArray(user.memoryPoolEntries, i => MemoryPoolEntry.toDTO(i)),
            skills: User.serializeEntityArray(user.skills, i => Skill.toDTO(i)),
            traits: User.serializeEntityArray(user.traits, i => Trait.toDTO(i)),
            addictions: User.serializeEntityArray(user.addictions, i => Addiction.toDTO(i)),
            birthsigns: User.serializeEntityArray(user.birthsigns, i => Birthsign.toDTO(i)),
            characters: User.serializeEntityArray(user.characters, i => Character.toDTO(i)),
            characterProfessions: User.serializeEntityArray(user.characterProfessions, i => CharacterProfession.toDTO(i)),
            diseases: User.serializeEntityArray(user.diseases, i => Disease.toDTO(i)),
            effects: User.serializeEntityArray(user.effects, i => Effect.toDTO(i)),
            facts: User.serializeEntityArray(user.facts, i => Fact.toDTO(i)),
            factions: User.serializeEntityArray(user.factions, i => Faction.toDTO(i)),
            storageSlots: User.serializeEntityArray(user.storageSlots, i => StorageSlot.toDTO(i)),
            equipmentSlots: User.serializeEntityArray(user.equipmentSlots, i => EquipmentSlot.toDTO(i)),
            itemSets: User.serializeEntityArray(user.itemSets, i => ItemSet.toDTO(i)),
            moods: User.serializeEntityArray(user.moods, i => Mood.toDTO(i)),
            needs: User.serializeEntityArray(user.needs, i => Need.toDTO(i)),
            personalityProfiles: User.serializeEntityArray(user.personalityProfiles, i => PersonalityProfile.toDTO(i)),
            races: User.serializeEntityArray(user.races, i => Race.toDTO(i)),
            religions: User.serializeEntityArray(user.religions, i => Religion.toDTO(i)),
            resistances: User.serializeEntityArray(user.resistances, i => Resistance.toDTO(i)),
            statuses: User.serializeEntityArray(user.statuses, i => Status.toDTO(i)),
            tags: User.serializeEntityArray(user.tags, i => Tag.toDTO(i)),
            backgrounds: User.serializeEntityArray(user.backgrounds, i => Background.toDTO(i)),
        };
    }


    public static fromDTO(dto: UserDTO, context: Context): User {
        const user = new User();
        context.user = user
        user.id = dto.id;
        user.worlds = User.deserializeEntityArray(dto.worlds, (i) => World.fromDTO(i, context));
        user.campaigns = User.deserializeEntityArray(dto.campaigns, (i) => Campaign.fromDTO(i, context));
        user.items = User.deserializeEntityArray(dto.items, (i) => Item.fromDTO(i, context));
        user.pastExperiences = User.deserializeEntityArray(dto.pastExperiences, (i) => PastExperience.fromDTO(i, context));
        user.characterMemories = User.deserializeEntityArray(dto.characterMemories, (i) => CharacterMemory.fromDTO(i, context));
        user.memories = User.deserializeEntityArray(dto.memories, (i) => Memory.fromDTO(i, context));
        user.memoryPools = User.deserializeEntityArray(dto.memoryPools, (i) => MemoryPool.fromDTO(i, context));
        user.memoryPoolEntries = User.deserializeEntityArray(dto.memoryPoolEntries, (i) => MemoryPoolEntry.fromDTO(i, context));
        user.skills = User.deserializeEntityArray(dto.skills, (i) => Skill.fromDTO(i, context));
        user.traits = User.deserializeEntityArray(dto.traits, (i) => Trait.fromDTO(i, context));
        user.addictions = User.deserializeEntityArray(dto.addictions, (i) => Addiction.fromDTO(i, context));
        user.birthsigns = User.deserializeEntityArray(dto.birthsigns, (i) => Birthsign.fromDTO(i, context));
        user.characters = User.deserializeEntityArray(dto.characters, (i) => Character.fromDTO(i, context));
        user.characterProfessions = User.deserializeEntityArray(dto.characterProfessions, (i) => CharacterProfession.fromDTO(i, context));
        user.diseases = User.deserializeEntityArray(dto.diseases, (i) => Disease.fromDTO(i, context));
        user.effects = User.deserializeEntityArray(dto.effects, (i) => Effect.fromDTO(i, context));
        user.facts = User.deserializeEntityArray(dto.facts, (i) => Fact.fromDTO(i, context));
        user.factions = User.deserializeEntityArray(dto.factions, (i) => Faction.fromDTO(i, context));
        user.storageSlots = User.deserializeEntityArray(dto.storageSlots, (i) => StorageSlot.fromDTO(i, context));
        user.equipmentSlots = User.deserializeEntityArray(dto.equipmentSlots, (i) => EquipmentSlot.fromDTO(i, context));
        user.itemSets = User.deserializeEntityArray(dto.itemSets, (i) => ItemSet.fromDTO(i, context));
        user.moods = User.deserializeEntityArray(dto.moods, (i) => Mood.fromDTO(i, context));
        user.needs = User.deserializeEntityArray(dto.needs, (i) => Need.fromDTO(i, context));
        user.personalityProfiles = User.deserializeEntityArray(dto.personalityProfiles, (i) => PersonalityProfile.fromDTO(i, context));
        user.races = User.deserializeEntityArray(dto.races, (i) => Race.fromDTO(i, context));
        user.religions = User.deserializeEntityArray(dto.religions, (i) => Religion.fromDTO(i, context));
        user.resistances = User.deserializeEntityArray(dto.resistances, (i) => Resistance.fromDTO(i, context));
        user.statuses = User.deserializeEntityArray(dto.statuses, (i) => Status.fromDTO(i, context));
        user.tags = User.deserializeEntityArray(dto.tags, (i) => Tag.fromDTO(i, context));
        user.backgrounds = User.deserializeEntityArray(dto.backgrounds, (i) => Background.fromDTO(i, context));
        return user;
    }

}
