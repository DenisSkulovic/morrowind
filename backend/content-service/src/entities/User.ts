import { TableInheritance, Entity, Column, PrimaryGeneratedColumn, OneToMany, BaseEntity } from "typeorm";
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
import { Inventory } from "./Content/Inventory";
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

@Entity()
@TableInheritance({ column: { type: "varchar", name: "type" } })
export class User extends BaseEntity {
    @PrimaryGeneratedColumn("uuid")
    id!: string;

    @Column({ unique: true })
    username!: string; // Unique username.

    @Column({ type: "varchar", length: 255 })
    password_hash!: string; // Hashed password for authentication.

    @Column({ type: "varchar", length: 255, nullable: true })
    email?: string; // Optional email for communication and recovery.

    @OneToMany(() => World, (world) => world.user)
    worlds!: World[]; // Worlds created by this user.

    @OneToMany(() => Campaign, (campaign) => campaign.user)
    campaigns!: Campaign[]; // Campaigns created or managed by this user.

    @Column({ type: "varchar", length: 255, default: "player" })
    role!: string; // Role of the user: "player", "admin", etc.

    @Column({ type: "json", nullable: true })
    preferences?: any; // User-specific preferences/settings.

    @OneToMany(() => Item, item => item.user)
    items!: Item[]

    @OneToMany(() => PastExperience, pastExperience => pastExperience.user)
    pastExperiences!: PastExperience[]

    @OneToMany(() => CharacterMemory, characterMemory => characterMemory.user)
    characterMemories!: CharacterMemory[]

    @OneToMany(() => Memory, memory => memory.user)
    memories!: Memory[]

    @OneToMany(() => MemoryPool, memoryPool => memoryPool.user)
    memoryPools!: MemoryPool[]

    @OneToMany(() => MemoryPoolEntry, memoryPoolEntry => memoryPoolEntry.user)
    memoryPoolEntries!: MemoryPoolEntry[]

    @OneToMany(() => Skill, skill => skill.user)
    skills!: Skill[]

    @OneToMany(() => Trait, trait => trait.user)
    traits!: Trait[]

    @OneToMany(() => Addiction, addiction => addiction.user)
    addictions!: Addiction[]

    @OneToMany(() => Birthsign, birthsign => birthsign.user)
    birthsigns!: Birthsign[]

    @OneToMany(() => Character, character => character.user)
    characters!: Character[]

    @OneToMany(() => CharacterProfession, characterProfession => characterProfession.user)
    characterProfessions!: CharacterProfession[]

    @OneToMany(() => Disease, disease => disease.user)
    diseases!: Disease[]

    @OneToMany(() => Effect, effect => effect.user)
    effects!: Effect[]

    @OneToMany(() => Fact, fact => fact.user)
    facts!: Fact[]

    @OneToMany(() => Faction, faction => faction.user)
    factions!: Faction[]

    @OneToMany(() => Inventory, inventory => inventory.user)
    inventories!: Inventory[]
    
    @OneToMany(() => ItemSet, itemSet => itemSet.user)
    itemSets!: ItemSet[]

    @OneToMany(() => Mood, mood => mood.user)
    moods!: Mood[]

    @OneToMany(() => Need, need => need.user)
    needs!: Need[]

    @OneToMany(() => PersonalityProfile, personalityProfile => personalityProfile.user)
    personalityProfiles!: PersonalityProfile[]

    @OneToMany(() => Race, race => race.user)
    races!: Race[]

    @OneToMany(() => Religion, religion => religion.user)
    religions!: Religion[]

    @OneToMany(() => Resistance, resistance => resistance.user)
    resistances!: Resistance[]

    @OneToMany(() => Status, status => status.user)
    statuses!: Status[]

    @OneToMany(() => Tag, tag => tag.user)
    tags!: Tag[]
}
