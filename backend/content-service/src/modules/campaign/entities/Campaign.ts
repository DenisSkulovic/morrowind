import { TableInheritance, Entity, Column, ManyToOne, BaseEntity, OneToMany, BeforeInsert, PrimaryColumn } from "typeorm";
import { World } from "../../world/entities/World";
import { User } from "../../user/entities/User";

import { randomUUID } from "crypto";
import { CampaignDTO } from "../../../proto/common";
import { Serializer } from "../../../serializer";
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
import { ActivityRecord } from "../../activity/entities/ActivityRecord";

@Entity()
@TableInheritance({ column: { type: "varchar", name: "type" } })
export class Campaign extends BaseEntity {
    @PrimaryColumn()
    @Serializable()
    id!: string;

    @BeforeInsert()
    generateId() {
        this.id = `${this.idPrefix}_${randomUUID().replace(/-/g, "")}`;
    }
    idPrefix = "CAMPAIGN";

    @Column({ type: "varchar", length: 255 })
    @Serializable()
    name!: string;

    @Column({ type: "text", nullable: true })
    @Serializable()
    description?: string;

    @Column({ type: "json", nullable: true })
    @Serializable()
    dynamicState?: any;

    @ManyToOne(() => World, (world) => world.campaigns, {})
    @Serializable({ strategy: 'id' })
    world!: World;

    @Column({ type: "timestamp", nullable: true })
    @Serializable({
        serialize: (val: Date) => val.getTime(),
        deserialize: (val: number) => new Date(val)
    })
    createdAt?: Date;

    @ManyToOne(() => User, user => user.campaigns, {})
    @Serializable({ strategy: 'id' })
    user!: User;

    @OneToMany(() => Item, item => item.campaign, { onDelete: "CASCADE", })
    items!: Item[]

    @OneToMany(() => PastExperience, pastExperience => pastExperience.campaign, { onDelete: "CASCADE", })
    pastExperiences!: PastExperience[]

    @OneToMany(() => CharacterMemory, characterMemory => characterMemory.campaign, { onDelete: "CASCADE", })
    characterMemories!: CharacterMemory[]

    @OneToMany(() => Memory, memory => memory.campaign, { onDelete: "CASCADE", })
    memories!: Memory[]

    @OneToMany(() => MemoryPool, memoryPool => memoryPool.campaign, { onDelete: "CASCADE", })
    memoryPools!: MemoryPool[]

    @OneToMany(() => MemoryPoolEntry, memoryPoolEntry => memoryPoolEntry.campaign, { onDelete: "CASCADE", })
    memoryPoolEntries!: MemoryPoolEntry[]

    @OneToMany(() => Skill, skill => skill.campaign, { onDelete: "CASCADE", })
    skills!: Skill[]

    @OneToMany(() => Trait, trait => trait.campaign, { onDelete: "CASCADE", })
    traits!: Trait[]

    @OneToMany(() => Addiction, addiction => addiction.campaign, { onDelete: "CASCADE", })
    addictions!: Addiction[]

    @OneToMany(() => Birthsign, birthsign => birthsign.campaign, { onDelete: "CASCADE", })
    birthsigns!: Birthsign[]

    @OneToMany(() => Character, character => character.campaign, { onDelete: "CASCADE", })
    characters!: Character[]

    @OneToMany(() => CharacterProfession, characterProfession => characterProfession.campaign, { onDelete: "CASCADE", })
    characterProfessions!: CharacterProfession[]

    @OneToMany(() => Disease, disease => disease.campaign, { onDelete: "CASCADE", })
    diseases!: Disease[]

    @OneToMany(() => Effect, effect => effect.campaign, { onDelete: "CASCADE", })
    effects!: Effect[]

    @OneToMany(() => Fact, fact => fact.campaign, { onDelete: "CASCADE", })
    facts!: Fact[]

    @OneToMany(() => Faction, faction => faction.campaign, { onDelete: "CASCADE", })
    factions!: Faction[]

    @OneToMany(() => StorageSlot, storageSlot => storageSlot.campaign, { onDelete: "CASCADE", })
    storageSlots!: StorageSlot[]

    @OneToMany(() => EquipmentSlot, equipmentSlot => equipmentSlot.campaign, { onDelete: "CASCADE", })
    equipmentSlots!: EquipmentSlot[]

    @OneToMany(() => ItemSet, itemSet => itemSet.campaign, { onDelete: "CASCADE", })
    itemSets!: ItemSet[]

    @OneToMany(() => Mood, mood => mood.campaign, { onDelete: "CASCADE", })
    moods!: Mood[]

    @OneToMany(() => Need, need => need.campaign, { onDelete: "CASCADE", })
    needs!: Need[]

    @OneToMany(() => PersonalityProfile, personalityProfile => personalityProfile.campaign, { onDelete: "CASCADE", })
    personalityProfiles!: PersonalityProfile[]

    @OneToMany(() => Race, race => race.campaign, { onDelete: "CASCADE", })
    races!: Race[]

    @OneToMany(() => Religion, religion => religion.campaign, { onDelete: "CASCADE", })
    religions!: Religion[]

    @OneToMany(() => Resistance, resistance => resistance.campaign, { onDelete: "CASCADE", })
    resistances!: Resistance[]

    @OneToMany(() => Status, status => status.campaign, { onDelete: "CASCADE", })
    statuses!: Status[]

    @OneToMany(() => Tag, tag => tag.campaign, { onDelete: "CASCADE", })
    tags!: Tag[]

    @OneToMany(() => Background, background => background.campaign, { onDelete: "CASCADE", })
    backgrounds!: Background[]

    @OneToMany(() => ActivityRecord, activityRecord => activityRecord.campaign, { onDelete: "CASCADE", })
    activityRecords!: ActivityRecord[]

    public toDTO(): CampaignDTO {
        return Serializer.toDTO(this);
    }

    public static fromDTO(dto: CampaignDTO): Campaign {
        const campaign = new Campaign();
        return Serializer.fromDTO(dto, campaign);
    }
}
