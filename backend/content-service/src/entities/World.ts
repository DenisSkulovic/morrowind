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
import { Background } from "./Content/Background";

@Entity()
@TableInheritance({ column: { type: "varchar", name: "type" } })
export class World extends BaseEntity {
    @PrimaryGeneratedColumn("uuid")
    id!: string;

    @ManyToOne(() => User)
    user!: User; // User who created this campaign.

    @Column({ type: "varchar", length: 255 })
    name!: string; // Name of the world, e.g., "Morrowind", "Middle-earth".

    @Column({ type: "text", nullable: true })
    description?: string; // Optional description or lore of the world.

    @Column({ type: "json", nullable: true })
    settings?: any; // Custom world settings (e.g., starting conditions, mechanics).

    @Column({ default: false })
    frozen!: boolean;

    @OneToMany(() => Campaign, (campaign) => campaign.world)
    campaigns!: Campaign[]; // Associated campaigns created from this world.

    @OneToMany(() => Item, item => item.world, { onDelete: "CASCADE" })
    items!: Item[]

    @OneToMany(() => PastExperience, pastExperience => pastExperience.world, { onDelete: "CASCADE" })
    pastExperiences!: PastExperience[]

    @OneToMany(() => CharacterMemory, characterMemory => characterMemory.world, { onDelete: "CASCADE" })
    characterMemories!: CharacterMemory[]

    @OneToMany(() => Memory, memory => memory.world, { onDelete: "CASCADE" })
    memories!: Memory[]

    @OneToMany(() => MemoryPool, memoryPool => memoryPool.world, { onDelete: "CASCADE" })
    memoryPools!: MemoryPool[]

    @OneToMany(() => MemoryPoolEntry, memoryPoolEntry => memoryPoolEntry.world, { onDelete: "CASCADE" })
    memoryPoolEntries!: MemoryPoolEntry[]

    @OneToMany(() => Skill, skill => skill.world, { onDelete: "CASCADE" })
    skills!: Skill[]

    @OneToMany(() => Trait, trait => trait.world, { onDelete: "CASCADE" })
    traits!: Trait[]

    @OneToMany(() => Addiction, addiction => addiction.world, { onDelete: "CASCADE" })
    addictions!: Addiction[]

    @OneToMany(() => Birthsign, birthsign => birthsign.world, { onDelete: "CASCADE" })
    birthsigns!: Birthsign[]

    @OneToMany(() => Character, character => character.world, { onDelete: "CASCADE" })
    characters!: Character[]

    @OneToMany(() => CharacterProfession, characterProfession => characterProfession.world, { onDelete: "CASCADE" })
    characterProfessions!: CharacterProfession[]

    @OneToMany(() => Disease, disease => disease.world, { onDelete: "CASCADE" })
    diseases!: Disease[]

    @OneToMany(() => Effect, effect => effect.world, { onDelete: "CASCADE" })
    effects!: Effect[]

    @OneToMany(() => Fact, fact => fact.world, { onDelete: "CASCADE" })
    facts!: Fact[]

    @OneToMany(() => Faction, faction => faction.world, { onDelete: "CASCADE" })
    factions!: Faction[]

    @OneToMany(() => Inventory, inventory => inventory.world, { onDelete: "CASCADE" })
    inventories!: Inventory[]
    
    @OneToMany(() => ItemSet, itemSet => itemSet.world, { onDelete: "CASCADE" })
    itemSets!: ItemSet[]

    @OneToMany(() => Mood, mood => mood.world, { onDelete: "CASCADE" })
    moods!: Mood[]

    @OneToMany(() => Need, need => need.world, { onDelete: "CASCADE" })
    needs!: Need[]

    @OneToMany(() => PersonalityProfile, personalityProfile => personalityProfile.world, { onDelete: "CASCADE" })
    personalityProfiles!: PersonalityProfile[]

    @OneToMany(() => Race, race => race.world, { onDelete: "CASCADE" })
    races!: Race[]

    @OneToMany(() => Religion, religion => religion.world, { onDelete: "CASCADE" })
    religions!: Religion[]

    @OneToMany(() => Resistance, resistance => resistance.world, { onDelete: "CASCADE" })
    resistances!: Resistance[]

    @OneToMany(() => Status, status => status.world, { onDelete: "CASCADE" })
    statuses!: Status[]

    @OneToMany(() => Tag, tag => tag.world, { onDelete: "CASCADE" })
    tags!: Tag[]
        
    @OneToMany(() => Background, background => background.world, { onDelete: "CASCADE" })
    backgrounds!: Background[]
}
