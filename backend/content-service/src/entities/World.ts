import { TableInheritance, Entity, Column, PrimaryGeneratedColumn, OneToMany, BaseEntity, ManyToOne } from "typeorm";
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
import { Inventory } from "./Content/Inventory";
import { Mood } from "./Content/Mood";
import { Need } from "./Content/Need";
import { PersonalityProfile } from "./Content/PersonalityProfile";
import { Race } from "./Content/Race";
import { Religion } from "./Content/Religion";
import { Resistance } from "./Content/Resistance";
import { Status } from "./Content/Status";
import { Tag } from "./Content/Tag";

@Entity()
@TableInheritance({ column: { type: "varchar", name: "type" } })
export class World extends BaseEntity {
    @PrimaryGeneratedColumn("uuid")
    id!: string;

    @Column({ type: "varchar", length: 255 })
    name!: string; // Name of the world, e.g., "Morrowind", "Middle-earth".

    @Column({ type: "text", nullable: true })
    description?: string; // Optional description or lore of the world.

    @Column({ type: "json", nullable: true })
    settings?: any; // Custom world settings (e.g., starting conditions, mechanics).

    @OneToMany(() => Campaign, (campaign) => campaign.world)
    campaigns!: Campaign[]; // Associated campaigns created from this world.

    @Column({ default: false })
    frozen!: boolean;

    @ManyToOne(() => User)
    user!: User; // User who created this campaign.

    @OneToMany(() => Item, item => item.world)
    items!: Item[]

    @OneToMany(() => PastExperience, pastExperience => pastExperience.world)
    pastExperiences!: PastExperience[]

    @OneToMany(() => CharacterMemory, characterMemory => characterMemory.world)
    characterMemories!: CharacterMemory[]

    @OneToMany(() => Memory, memory => memory.world)
    memories!: Memory[]

    @OneToMany(() => MemoryPool, memoryPool => memoryPool.world)
    memoryPools!: MemoryPool[]

    @OneToMany(() => MemoryPoolEntry, memoryPoolEntry => memoryPoolEntry.world)
    memoryPoolEntries!: MemoryPoolEntry[]

    @OneToMany(() => Skill, skill => skill.world)
    skills!: Skill[]

    @OneToMany(() => Trait, trait => trait.world)
    traits!: Trait[]

    @OneToMany(() => Addiction, addiction => addiction.world)
    addictions!: Addiction[]

    @OneToMany(() => Birthsign, birthsign => birthsign.world)
    birthsigns!: Birthsign[]

    @OneToMany(() => Character, character => character.world)
    characters!: Character[]

    @OneToMany(() => CharacterProfession, characterProfession => characterProfession.world)
    characterProfessions!: CharacterProfession[]

    @OneToMany(() => Disease, disease => disease.world)
    diseases!: Disease[]

    @OneToMany(() => Effect, effect => effect.world)
    effects!: Effect[]

    @OneToMany(() => Fact, fact => fact.world)
    facts!: Fact[]

    @OneToMany(() => Faction, faction => faction.world)
    factions!: Faction[]

    @OneToMany(() => Inventory, inventory => inventory.world)
    inventories!: Inventory[]
    
    @OneToMany(() => ItemSet, itemSet => itemSet.world)
    itemSets!: ItemSet[]

    @OneToMany(() => Mood, mood => mood.world)
    moods!: Mood[]

    @OneToMany(() => Need, need => need.world)
    needs!: Need[]

    @OneToMany(() => PersonalityProfile, personalityProfile => personalityProfile.world)
    personalityProfiles!: PersonalityProfile[]

    @OneToMany(() => Race, race => race.world)
    races!: Race[]

    @OneToMany(() => Religion, religion => religion.world)
    religions!: Religion[]

    @OneToMany(() => Resistance, resistance => resistance.world)
    resistances!: Resistance[]

    @OneToMany(() => Status, status => status.world)
    statuses!: Status[]

    @OneToMany(() => Tag, tag => tag.world)
    tags!: Tag[]
}
