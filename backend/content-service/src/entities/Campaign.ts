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

@Entity()
@TableInheritance({ column: { type: "varchar", name: "type" } })
export class Campaign extends BaseEntity {
    // @PrimaryGeneratedColumn("uuid")
    // id!: string;

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
