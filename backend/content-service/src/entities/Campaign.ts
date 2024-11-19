import { TableInheritance, Entity, Column, PrimaryGeneratedColumn, ManyToOne, BaseEntity, OneToMany } from "typeorm";
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
export class Campaign extends BaseEntity {
    @PrimaryGeneratedColumn("uuid")
    id!: string;

    @Column({ type: "varchar", length: 255 })
    name!: string; // Name of the campaign, e.g., "Hero's Journey".

    @Column({ type: "text", nullable: true })
    description?: string; // Optional description of the campaign.

    @Column({ type: "json", nullable: true })
    dynamic_state?: any; // JSON to store campaign-specific dynamic data (e.g., NPC states, events).

    @ManyToOne(() => World, (world) => world.campaigns)
    world!: World; // Reference to the originating world.

    @Column({ type: "timestamp", default: () => "CURRENT_TIMESTAMP" })
    created_at!: Date; // Timestamp of when the campaign was created.

    @ManyToOne(() => User, user => user.campaigns)
    user!: User; // User who created this campaign.

    @OneToMany(() => Item, item => item.campaign)
    items!: Item[]

    @OneToMany(() => PastExperience, pastExperience => pastExperience.campaign)
    pastExperiences!: PastExperience[]

    @OneToMany(() => CharacterMemory, characterMemory => characterMemory.campaign)
    characterMemories!: CharacterMemory[]

    @OneToMany(() => Memory, memory => memory.campaign)
    memories!: Memory[]

    @OneToMany(() => MemoryPool, memoryPool => memoryPool.campaign)
    memoryPools!: MemoryPool[]

    @OneToMany(() => MemoryPoolEntry, memoryPoolEntry => memoryPoolEntry.campaign)
    memoryPoolEntries!: MemoryPoolEntry[]

    @OneToMany(() => Skill, skill => skill.campaign)
    skills!: Skill[]

    @OneToMany(() => Trait, trait => trait.campaign)
    traits!: Trait[]

    @OneToMany(() => Addiction, addiction => addiction.campaign)
    addictions!: Addiction[]

    @OneToMany(() => Birthsign, birthsign => birthsign.campaign)
    birthsigns!: Birthsign[]

    @OneToMany(() => Character, character => character.campaign)
    characters!: Character[]

    @OneToMany(() => CharacterProfession, characterProfession => characterProfession.campaign)
    characterProfessions!: CharacterProfession[]

    @OneToMany(() => Disease, disease => disease.campaign)
    diseases!: Disease[]

    @OneToMany(() => Effect, effect => effect.campaign)
    effects!: Effect[]

    @OneToMany(() => Fact, fact => fact.campaign)
    facts!: Fact[]

    @OneToMany(() => Faction, faction => faction.campaign)
    factions!: Faction[]

    @OneToMany(() => Inventory, inventory => inventory.campaign)
    inventories!: Inventory[]
    
    @OneToMany(() => ItemSet, itemSet => itemSet.campaign)
    itemSets!: ItemSet[]

    @OneToMany(() => Mood, mood => mood.campaign)
    moods!: Mood[]

    @OneToMany(() => Need, need => need.campaign)
    needs!: Need[]

    @OneToMany(() => PersonalityProfile, personalityProfile => personalityProfile.campaign)
    personalityProfiles!: PersonalityProfile[]

    @OneToMany(() => Race, race => race.campaign)
    races!: Race[]

    @OneToMany(() => Religion, religion => religion.campaign)
    religions!: Religion[]

    @OneToMany(() => Resistance, resistance => resistance.campaign)
    resistances!: Resistance[]

    @OneToMany(() => Status, status => status.campaign)
    statuses!: Status[]

    @OneToMany(() => Tag, tag => tag.campaign)
    tags!: Tag[]
}
