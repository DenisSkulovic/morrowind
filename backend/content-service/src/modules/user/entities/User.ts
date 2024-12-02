import { TableInheritance, Entity, Column, PrimaryGeneratedColumn, OneToMany, BaseEntity, OneToOne, BeforeInsert, PrimaryColumn } from "typeorm";
import { Campaign } from "../../campaign/entities/Campaign";
import { World } from "../../world/entities/World";

import { randomUUID } from "crypto";
import { UserDTO } from "../../../proto/common";
import { Base } from "../../../Base";
import { Context } from "../../../types";
import { Account } from "../../account/entities/Account";
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
import { Serializable } from "../../../decorator/serializable.decorator";
import { Status } from "../../content/entities/Status";
import { Serializer } from "../../../serializer";


@Entity()
@TableInheritance({ column: { type: "varchar", name: "type" } })
export class User extends Base {


    @PrimaryColumn()
    @Serializable()
    id!: string;

    @BeforeInsert()
    generateId() {
        this.id = `${this.id_prefix}_${randomUUID().replace(/-/g, "")}`;
    }
    id_prefix = "USER";

    @OneToOne(() => Account, (account) => account.user, {})
    @Serializable({ strategy: 'id' })
    account!: Account

    @OneToMany(() => World, (world) => world.user, { onDelete: "CASCADE", })
    @Serializable({ strategy: 'id' })
    worlds?: World[];

    @OneToMany(() => Campaign, (campaign) => campaign.user, { onDelete: "CASCADE", })
    @Serializable({ strategy: 'id' })
    campaigns?: Campaign[];

    @OneToMany(() => Item, item => item.user, { onDelete: "CASCADE", })
    @Serializable({ strategy: 'id' })
    items?: Item[]

    @OneToMany(() => PastExperience, pastExperience => pastExperience.user, { onDelete: "CASCADE", })
    @Serializable({ strategy: 'id' })
    pastExperiences?: PastExperience[]

    @OneToMany(() => CharacterMemory, characterMemory => characterMemory.user, { onDelete: "CASCADE", })
    @Serializable({ strategy: 'id' })
    characterMemories?: CharacterMemory[]

    @OneToMany(() => Memory, memory => memory.user, { onDelete: "CASCADE", })
    @Serializable({ strategy: 'id' })
    memories?: Memory[]

    @OneToMany(() => MemoryPool, memoryPool => memoryPool.user, { onDelete: "CASCADE", })
    @Serializable({ strategy: 'id' })
    memoryPools?: MemoryPool[]

    @OneToMany(() => MemoryPoolEntry, memoryPoolEntry => memoryPoolEntry.user, { onDelete: "CASCADE", })
    @Serializable({ strategy: 'id' })
    memoryPoolEntries?: MemoryPoolEntry[]

    @OneToMany(() => Skill, skill => skill.user, { onDelete: "CASCADE", })
    @Serializable({ strategy: 'id' })
    skills?: Skill[]

    @OneToMany(() => Trait, trait => trait.user, { onDelete: "CASCADE", })
    @Serializable({ strategy: 'id' })
    traits?: Trait[]

    @OneToMany(() => Addiction, addiction => addiction.user, { onDelete: "CASCADE", })
    @Serializable({ strategy: 'id' })
    addictions?: Addiction[]

    @OneToMany(() => Birthsign, birthsign => birthsign.user, { onDelete: "CASCADE", })
    @Serializable({ strategy: 'id' })
    birthsigns?: Birthsign[]

    @OneToMany(() => Character, character => character.user, { onDelete: "CASCADE", })
    @Serializable({ strategy: 'id' })
    characters?: Character[]

    @OneToMany(() => CharacterProfession, characterProfession => characterProfession.user, { onDelete: "CASCADE", })
    @Serializable({ strategy: 'id' })
    characterProfessions?: CharacterProfession[]

    @OneToMany(() => Disease, disease => disease.user, { onDelete: "CASCADE", })
    @Serializable({ strategy: 'id' })
    diseases?: Disease[]

    @OneToMany(() => Effect, effect => effect.user, { onDelete: "CASCADE", })
    @Serializable({ strategy: 'id' })
    effects?: Effect[]

    @OneToMany(() => Fact, fact => fact.user, { onDelete: "CASCADE", })
    @Serializable({ strategy: 'id' })
    facts?: Fact[]

    @OneToMany(() => Faction, faction => faction.user, { onDelete: "CASCADE", })
    @Serializable({ strategy: 'id' })
    factions?: Faction[]

    @OneToMany(() => StorageSlot, storageSlot => storageSlot.user, { onDelete: "CASCADE", })
    @Serializable({ strategy: 'id' })
    storageSlots!: StorageSlot[]

    @OneToMany(() => EquipmentSlot, equipmentSlot => equipmentSlot.user, { onDelete: "CASCADE", })
    @Serializable({ strategy: 'id' })
    equipmentSlots!: EquipmentSlot[]

    @OneToMany(() => ItemSet, itemSet => itemSet.user, { onDelete: "CASCADE", })
    @Serializable({ strategy: 'id' })
    itemSets?: ItemSet[]

    @OneToMany(() => Mood, mood => mood.user, { onDelete: "CASCADE", })
    @Serializable({ strategy: 'id' })
    moods?: Mood[]

    @OneToMany(() => Need, need => need.user, { onDelete: "CASCADE", })
    @Serializable({ strategy: 'id' })
    needs?: Need[]

    @OneToMany(() => PersonalityProfile, personalityProfile => personalityProfile.user, { onDelete: "CASCADE", })
    @Serializable({ strategy: 'id' })
    personalityProfiles?: PersonalityProfile[]

    @OneToMany(() => Race, race => race.user, { onDelete: "CASCADE", })
    @Serializable({ strategy: 'id' })
    races?: Race[]

    @OneToMany(() => Religion, religion => religion.user, { onDelete: "CASCADE", })
    @Serializable({ strategy: 'id' })
    religions?: Religion[]

    @OneToMany(() => Resistance, resistance => resistance.user, { onDelete: "CASCADE", })
    @Serializable({ strategy: 'id' })
    resistances?: Resistance[]

    @OneToMany(() => Status, status => status.user, { onDelete: "CASCADE", })
    @Serializable({ strategy: 'id' })
    statuses?: Status[]

    @OneToMany(() => Tag, tag => tag.user, { onDelete: "CASCADE", })
    @Serializable({ strategy: 'id' })
    tags?: Tag[]

    @OneToMany(() => Background, background => background.user, { onDelete: "CASCADE", })
    @Serializable({ strategy: 'id' })
    backgrounds!: Background[]

    public toDTO(): UserDTO {
        return Serializer.toDTO(this);
    }

    public static fromDTO(dto: UserDTO): User {
        const user = new User();
        return Serializer.fromDTO(dto, user);
    }

}
