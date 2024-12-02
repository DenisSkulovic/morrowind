import { TableInheritance, Entity, Column, PrimaryGeneratedColumn, ManyToOne, BaseEntity, OneToMany, BeforeInsert, PrimaryColumn } from "typeorm";
import { World } from "../../world/entities/World";
import { User } from "../../user/entities/User";

import { randomUUID } from "crypto";
import { CampaignDTO } from "../../../proto/common";
import { Base } from "../../../Base";
import { Context } from "../../../types";
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

@Entity()
@TableInheritance({ column: { type: "varchar", name: "type" } })
export class Campaign extends Base {
    @PrimaryColumn()
    @Serializable()
    id!: string;

    @BeforeInsert()
    generateId() {
        this.id = `${this.id_prefix}_${randomUUID().replace(/-/g, "")}`;
    }
    id_prefix = "CAMPAIGN";

    @Column({ type: "varchar", length: 255 })
    @Serializable()
    name!: string;

    @Column({ type: "text", nullable: true })
    @Serializable()
    description?: string;

    @Column({ type: "json", nullable: true })
    @Serializable()
    dynamic_state?: any;

    @ManyToOne(() => World, (world) => world.campaigns, {})
    @Serializable({ strategy: 'id' })
    world!: World;

    @Column({ type: "timestamp", default: () => "CURRENT_TIMESTAMP" })
    @Serializable()
    created_at!: number;

    @ManyToOne(() => User, user => user.campaigns, {})
    @Serializable({ strategy: 'id' })
    user!: User;

    @OneToMany(() => Item, item => item.campaign, { onDelete: "CASCADE", })
    @Serializable({ strategy: 'id' })
    items!: Item[]

    @OneToMany(() => PastExperience, pastExperience => pastExperience.campaign, { onDelete: "CASCADE", })
    @Serializable({ strategy: 'id' })
    pastExperiences!: PastExperience[]

    @OneToMany(() => CharacterMemory, characterMemory => characterMemory.campaign, { onDelete: "CASCADE", })
    @Serializable({ strategy: 'id' })
    characterMemories!: CharacterMemory[]

    @OneToMany(() => Memory, memory => memory.campaign, { onDelete: "CASCADE", })
    @Serializable({ strategy: 'id' })
    memories!: Memory[]

    @OneToMany(() => MemoryPool, memoryPool => memoryPool.campaign, { onDelete: "CASCADE", })
    @Serializable({ strategy: 'id' })
    memoryPools!: MemoryPool[]

    @OneToMany(() => MemoryPoolEntry, memoryPoolEntry => memoryPoolEntry.campaign, { onDelete: "CASCADE", })
    @Serializable({ strategy: 'id' })
    memoryPoolEntries!: MemoryPoolEntry[]

    @OneToMany(() => Skill, skill => skill.campaign, { onDelete: "CASCADE", })
    @Serializable({ strategy: 'id' })
    skills!: Skill[]

    @OneToMany(() => Trait, trait => trait.campaign, { onDelete: "CASCADE", })
    @Serializable({ strategy: 'id' })
    traits!: Trait[]

    @OneToMany(() => Addiction, addiction => addiction.campaign, { onDelete: "CASCADE", })
    @Serializable({ strategy: 'id' })
    addictions!: Addiction[]

    @OneToMany(() => Birthsign, birthsign => birthsign.campaign, { onDelete: "CASCADE", })
    @Serializable({ strategy: 'id' })
    birthsigns!: Birthsign[]

    @OneToMany(() => Character, character => character.campaign, { onDelete: "CASCADE", })
    @Serializable({ strategy: 'id' })
    characters!: Character[]

    @OneToMany(() => CharacterProfession, characterProfession => characterProfession.campaign, { onDelete: "CASCADE", })
    @Serializable({ strategy: 'id' })
    characterProfessions!: CharacterProfession[]

    @OneToMany(() => Disease, disease => disease.campaign, { onDelete: "CASCADE", })
    @Serializable({ strategy: 'id' })
    diseases!: Disease[]

    @OneToMany(() => Effect, effect => effect.campaign, { onDelete: "CASCADE", })
    @Serializable({ strategy: 'id' })
    effects!: Effect[]

    @OneToMany(() => Fact, fact => fact.campaign, { onDelete: "CASCADE", })
    @Serializable({ strategy: 'id' })
    facts!: Fact[]

    @OneToMany(() => Faction, faction => faction.campaign, { onDelete: "CASCADE", })
    @Serializable({ strategy: 'id' })
    factions!: Faction[]

    @OneToMany(() => StorageSlot, storageSlot => storageSlot.campaign, { onDelete: "CASCADE", })
    @Serializable({ strategy: 'id' })
    storageSlots!: StorageSlot[]

    @OneToMany(() => EquipmentSlot, equipmentSlot => equipmentSlot.campaign, { onDelete: "CASCADE", })
    @Serializable({ strategy: 'id' })
    equipmentSlots!: EquipmentSlot[]

    @OneToMany(() => ItemSet, itemSet => itemSet.campaign, { onDelete: "CASCADE", })
    @Serializable({ strategy: 'id' })
    itemSets!: ItemSet[]

    @OneToMany(() => Mood, mood => mood.campaign, { onDelete: "CASCADE", })
    @Serializable({ strategy: 'id' })
    moods!: Mood[]

    @OneToMany(() => Need, need => need.campaign, { onDelete: "CASCADE", })
    @Serializable({ strategy: 'id' })
    needs!: Need[]

    @OneToMany(() => PersonalityProfile, personalityProfile => personalityProfile.campaign, { onDelete: "CASCADE", })
    @Serializable({ strategy: 'id' })
    personalityProfiles!: PersonalityProfile[]

    @OneToMany(() => Race, race => race.campaign, { onDelete: "CASCADE", })
    @Serializable({ strategy: 'id' })
    races!: Race[]

    @OneToMany(() => Religion, religion => religion.campaign, { onDelete: "CASCADE", })
    @Serializable({ strategy: 'id' })
    religions!: Religion[]

    @OneToMany(() => Resistance, resistance => resistance.campaign, { onDelete: "CASCADE", })
    @Serializable({ strategy: 'id' })
    resistances!: Resistance[]

    @OneToMany(() => Status, status => status.campaign, { onDelete: "CASCADE", })
    @Serializable({ strategy: 'id' })
    statuses!: Status[]

    @OneToMany(() => Tag, tag => tag.campaign, { onDelete: "CASCADE", })
    @Serializable({ strategy: 'id' })
    tags!: Tag[]

    @OneToMany(() => Background, background => background.campaign, { onDelete: "CASCADE", })
    @Serializable({ strategy: 'id' })
    backgrounds!: Background[]

    public toDTO(): CampaignDTO {
        return Serializer.toDTO(this);
    }

    public static fromDTO(dto: CampaignDTO): Campaign {
        const campaign = new Campaign();
        return Serializer.fromDTO(dto, campaign);
    }
}
