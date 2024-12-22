import { TableInheritance, Entity, Column, PrimaryGeneratedColumn, OneToMany, BaseEntity, ManyToOne, BeforeInsert, PrimaryColumn } from "typeorm";
import { Campaign } from "../../campaign/entities/Campaign";
import { User } from "../../user/entities/User";

import { randomUUID } from "crypto";
import { WorldDTO } from "../../../proto/common";
import { Addiction } from "../../content/entities/Addiction";
import { Background } from "../../content/entities/Background";
import { Birthsign } from "../../content/entities/Birthsign";
import { Character } from "../../content/entities/Character";
import { CharacterProfession } from "../../content/entities/CharacterProfession";
import { Disease } from "../../content/entities/Disease";
import { Effect } from "../../content/entities/Effect";
import { Fact } from "../../content/entities/Fact";
import { Faction } from "../../content/entities/Faction";
import { Item } from "../../content/entities/Item/Item";
import { ItemSet } from "../../content/entities/ItemSet";
import { CharacterMemory } from "../../content/entities/CharacterMemory";
import { Memory } from "../../content/entities/Memory";
import { MemoryPool } from "../../content/entities/MemoryPool";
import { MemoryPoolEntry } from "../../content/entities/MemoryPoolEntry";
import { PastExperience } from "../../content/entities/PastExperience";
import { Mood } from "../../content/entities/Mood";
import { Need } from "../../content/entities/Need";
import { PersonalityProfile } from "../../content/entities/PersonalityProfile";
import { Race } from "../../content/entities/Race";
import { Religion } from "../../content/entities/Religion";
import { Resistance } from "../../content/entities/Resistance";
import { Skill } from "../../content/entities/Skill/Skill";
import { EquipmentSlot } from "../../content/entities/Slot/EquipmentSlot";
import { StorageSlot } from "../../content/entities/Slot/StorageSlot";
import { Tag } from "../../content/entities/Tag";
import { Trait } from "../../content/entities/Trait";
import { Status } from "../../content/entities/Status";
import { Serializable } from "../../../decorator/serializable.decorator";
import { Serializer } from "../../../serializer";
import { ActivityRecord } from "../../activity/entities/ActivityRecord";



@Entity()
@TableInheritance({ column: { type: "varchar", name: "type" } })
export class World extends BaseEntity {


    @PrimaryColumn()
    @Serializable()
    id!: string;

    @BeforeInsert()
    generateId() {
        this.id = `${this.idPrefix}_${randomUUID().replace(/-/g, "")}`;
    }
    idPrefix = "WORLD";

    @ManyToOne(() => User)
    @Serializable({ strategy: 'id' })
    user!: User;

    @Column({ type: "varchar", length: 255 })
    @Serializable()
    name!: string; // Name of the world, e.g., "Morrowind", "Middle-earth".

    @Column({ type: "text", nullable: true })
    @Serializable()
    description?: string; // Optional description or lore of the world.

    @Column({ type: "json", nullable: true })
    @Serializable()
    settings?: any; // Custom world settings (e.g., starting conditions, mechanics).

    @Column({ default: false })
    @Serializable()
    frozen!: boolean;

    @OneToMany(() => Campaign, (campaign) => campaign.world, {})
    @Serializable({ strategy: 'id' })
    campaigns!: Campaign[]

    @OneToMany(() => Item, item => item.world, { onDelete: "CASCADE", })
    items!: Item[]

    @OneToMany(() => PastExperience, pastExperience => pastExperience.world, { onDelete: "CASCADE", })
    pastExperiences!: PastExperience[]

    @OneToMany(() => CharacterMemory, characterMemory => characterMemory.world, { onDelete: "CASCADE", })
    characterMemories!: CharacterMemory[]

    @OneToMany(() => Memory, memory => memory.world, { onDelete: "CASCADE", })
    memories!: Memory[]

    @OneToMany(() => MemoryPool, memoryPool => memoryPool.world, { onDelete: "CASCADE", })
    memoryPools!: MemoryPool[]

    @OneToMany(() => MemoryPoolEntry, memoryPoolEntry => memoryPoolEntry.world, { onDelete: "CASCADE", })
    memoryPoolEntries!: MemoryPoolEntry[]

    @OneToMany(() => Skill, skill => skill.world, { onDelete: "CASCADE", })
    skills!: Skill[]

    @OneToMany(() => Trait, trait => trait.world, { onDelete: "CASCADE", })
    traits!: Trait[]

    @OneToMany(() => Addiction, addiction => addiction.world, { onDelete: "CASCADE", })
    addictions!: Addiction[]

    @OneToMany(() => Birthsign, birthsign => birthsign.world, { onDelete: "CASCADE", })
    birthsigns!: Birthsign[]

    @OneToMany(() => Character, character => character.world, { onDelete: "CASCADE", })
    characters!: Character[]

    @OneToMany(() => CharacterProfession, characterProfession => characterProfession.world, { onDelete: "CASCADE", })
    characterProfessions!: CharacterProfession[]

    @OneToMany(() => Disease, disease => disease.world, { onDelete: "CASCADE", })
    diseases!: Disease[]

    @OneToMany(() => Effect, effect => effect.world, { onDelete: "CASCADE", })
    effects!: Effect[]

    @OneToMany(() => Fact, fact => fact.world, { onDelete: "CASCADE", })
    facts!: Fact[]

    @OneToMany(() => Faction, faction => faction.world, { onDelete: "CASCADE", })
    factions!: Faction[]

    @OneToMany(() => StorageSlot, storageSlot => storageSlot.world, { onDelete: "CASCADE", })
    storageSlots!: StorageSlot[]

    @OneToMany(() => EquipmentSlot, equipmentSlot => equipmentSlot.world, { onDelete: "CASCADE", })
    equipmentSlots!: EquipmentSlot[]

    @OneToMany(() => ItemSet, itemSet => itemSet.world, { onDelete: "CASCADE", })
    itemSets!: ItemSet[]

    @OneToMany(() => Mood, mood => mood.world, { onDelete: "CASCADE", })
    moods!: Mood[]

    @OneToMany(() => Need, need => need.world, { onDelete: "CASCADE", })
    needs!: Need[]

    @OneToMany(() => PersonalityProfile, personalityProfile => personalityProfile.world, { onDelete: "CASCADE", })
    personalityProfiles!: PersonalityProfile[]

    @OneToMany(() => Race, race => race.world, { onDelete: "CASCADE", })
    races!: Race[]

    @OneToMany(() => Religion, religion => religion.world, { onDelete: "CASCADE", })
    religions!: Religion[]

    @OneToMany(() => Resistance, resistance => resistance.world, { onDelete: "CASCADE", })
    resistances!: Resistance[]

    @OneToMany(() => Status, status => status.world, { onDelete: "CASCADE", })
    statuses!: Status[]

    @OneToMany(() => Tag, tag => tag.world, { onDelete: "CASCADE", })
    tags!: Tag[]

    @OneToMany(() => Background, background => background.world, { onDelete: "CASCADE", })
    backgrounds!: Background[]

    @OneToMany(() => ActivityRecord, activityRecord => activityRecord.world, { onDelete: "CASCADE", })
    activityRecords!: ActivityRecord[]

    public toDTO(): WorldDTO {
        return Serializer.toDTO(this);
    }

    public static fromDTO(dto: WorldDTO): World {
        const world = new World();
        return Serializer.fromDTO(dto, world);
    }
}
