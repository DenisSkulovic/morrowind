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

@Entity()
@TableInheritance({ column: { type: "varchar", name: "type" } })
export class World extends BaseEntity {
    // @PrimaryGeneratedColumn("uuid")
    // id!: string;

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
}
