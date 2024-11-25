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

@Entity()
@TableInheritance({ column: { type: "varchar", name: "type" } })
export class User extends BaseEntity {
    // @PrimaryGeneratedColumn("uuid")
    // id!: string;

    @PrimaryColumn()
    id!: string;

    @BeforeInsert()
    generateId() {
        this.id = `${this.id_prefix}_${randomUUID().replace(/-/g, "")}`;
    }
    id_prefix = "USER";

    @OneToOne(() => Account, (account) => account.user)
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
}
