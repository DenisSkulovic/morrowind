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
import { WorldDTO } from "../proto/common";
import { Base } from "../Base";
import { Context } from "../types";



@Entity()
@TableInheritance({ column: { type: "varchar", name: "type" } })
export class World extends Base {


    @PrimaryColumn()
    id!: string;

    @BeforeInsert()
    generateId() {
        this.id = `${this.id_prefix}_${randomUUID().replace(/-/g, "")}`;
    }
    id_prefix = "WORLD";

    @ManyToOne(() => User)
    user!: User;

    @Column({ type: "varchar", length: 255 })
    name!: string; // Name of the world, e.g., "Morrowind", "Middle-earth".

    @Column({ type: "text", nullable: true })
    description?: string; // Optional description or lore of the world.

    @Column({ type: "json", nullable: true })
    settings?: any; // Custom world settings (e.g., starting conditions, mechanics).

    @Column({ default: false })
    frozen!: boolean;

    @OneToMany(() => Campaign, (campaign) => campaign.world, {})
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

    public static toDTO(world: World): WorldDTO {
        return {
            id: world.id,
            name: world.name,
            description: world.description,
            settings: world.settings,
            frozen: world.frozen,
            user: World.serializeEntity(world.user, i => User.toDTO(i)),
            campaigns: World.serializeEntityArray(world.campaigns, i => Campaign.toDTO(i)),
            items: World.serializeEntityArray(world.items, i => Item.toDTO(i)),
            pastExperiences: World.serializeEntityArray(world.pastExperiences, i => PastExperience.toDTO(i)),
            characterMemories: World.serializeEntityArray(world.characterMemories, i => CharacterMemory.toDTO(i)),
            memories: World.serializeEntityArray(world.memories, i => Memory.toDTO(i)),
            memoryPools: World.serializeEntityArray(world.memoryPools, i => MemoryPool.toDTO(i)),
            memoryPoolEntries: World.serializeEntityArray(world.memoryPoolEntries, i => MemoryPoolEntry.toDTO(i)),
            skills: World.serializeEntityArray(world.skills, i => Skill.toDTO(i)),
            traits: World.serializeEntityArray(world.traits, i => Trait.toDTO(i)),
            addictions: World.serializeEntityArray(world.addictions, i => Addiction.toDTO(i)),
            birthsigns: World.serializeEntityArray(world.birthsigns, i => Birthsign.toDTO(i)),
            characters: World.serializeEntityArray(world.characters, i => Character.toDTO(i)),
            characterProfessions: World.serializeEntityArray(world.characterProfessions, i => CharacterProfession.toDTO(i)),
            diseases: World.serializeEntityArray(world.diseases, i => Disease.toDTO(i)),
            effects: World.serializeEntityArray(world.effects, i => Effect.toDTO(i)),
            facts: World.serializeEntityArray(world.facts, i => Fact.toDTO(i)),
            factions: World.serializeEntityArray(world.factions, i => Faction.toDTO(i)),
            storageSlots: World.serializeEntityArray(world.storageSlots, i => StorageSlot.toDTO(i)),
            equipmentSlots: World.serializeEntityArray(world.equipmentSlots, i => EquipmentSlot.toDTO(i)),
            itemSets: World.serializeEntityArray(world.itemSets, i => ItemSet.toDTO(i)),
            moods: World.serializeEntityArray(world.moods, i => Mood.toDTO(i)),
            needs: World.serializeEntityArray(world.needs, i => Need.toDTO(i)),
            personalityProfiles: World.serializeEntityArray(world.personalityProfiles, i => PersonalityProfile.toDTO(i)),
            races: World.serializeEntityArray(world.races, i => Race.toDTO(i)),
            religions: World.serializeEntityArray(world.religions, i => Religion.toDTO(i)),
            resistances: World.serializeEntityArray(world.resistances, i => Resistance.toDTO(i)),
            statuses: World.serializeEntityArray(world.statuses, i => Status.toDTO(i)),
            tags: World.serializeEntityArray(world.tags, i => Tag.toDTO(i)),
            backgrounds: World.serializeEntityArray(world.backgrounds, i => Background.toDTO(i)),
        };
    }




    public static fromDTO(dto: WorldDTO, context: Context): World {
        const world = new World();
        context.world = world;

        world.id = dto.id;
        world.name = dto.name;
        world.description = dto.description;
        world.settings = dto.settings;
        world.frozen = dto.frozen;
        world.user = context.user;

        world.campaigns = this.deserializeEntityArray(dto.campaigns, (i) => Campaign.fromDTO(i, context));
        world.items = this.deserializeEntityArray(dto.items, (i) => Item.fromDTO(i, context));
        world.pastExperiences = this.deserializeEntityArray(dto.pastExperiences, (i) => PastExperience.fromDTO(i, context));
        world.characterMemories = this.deserializeEntityArray(dto.characterMemories, (i) => CharacterMemory.fromDTO(i, context));
        world.memories = this.deserializeEntityArray(dto.memories, (i) => Memory.fromDTO(i, context));
        world.memoryPools = this.deserializeEntityArray(dto.memoryPools, (i) => MemoryPool.fromDTO(i, context));
        world.memoryPoolEntries = this.deserializeEntityArray(dto.memoryPoolEntries, (i) => MemoryPoolEntry.fromDTO(i, context));
        world.skills = this.deserializeEntityArray(dto.skills, (i) => Skill.fromDTO(i, context));
        world.traits = this.deserializeEntityArray(dto.traits, (i) => Trait.fromDTO(i, context));
        world.addictions = this.deserializeEntityArray(dto.addictions, (i) => Addiction.fromDTO(i, context));
        world.birthsigns = this.deserializeEntityArray(dto.birthsigns, (i) => Birthsign.fromDTO(i, context));
        world.characters = this.deserializeEntityArray(dto.characters, (i) => Character.fromDTO(i, context));
        world.characterProfessions = this.deserializeEntityArray(dto.characterProfessions, (i) => CharacterProfession.fromDTO(i, context));
        world.diseases = this.deserializeEntityArray(dto.diseases, (i) => Disease.fromDTO(i, context));
        world.effects = this.deserializeEntityArray(dto.effects, (i) => Effect.fromDTO(i, context));
        world.facts = this.deserializeEntityArray(dto.facts, (i) => Fact.fromDTO(i, context));
        world.factions = this.deserializeEntityArray(dto.factions, (i) => Faction.fromDTO(i, context));
        world.storageSlots = this.deserializeEntityArray(dto.storageSlots, (i) => StorageSlot.fromDTO(i, context));
        world.equipmentSlots = this.deserializeEntityArray(dto.equipmentSlots, (i) => EquipmentSlot.fromDTO(i, context));
        world.itemSets = this.deserializeEntityArray(dto.itemSets, (i) => ItemSet.fromDTO(i, context));
        world.moods = this.deserializeEntityArray(dto.moods, (i) => Mood.fromDTO(i, context));
        world.needs = this.deserializeEntityArray(dto.needs, (i) => Need.fromDTO(i, context));
        world.personalityProfiles = this.deserializeEntityArray(dto.personalityProfiles, (i) => PersonalityProfile.fromDTO(i, context));
        world.races = this.deserializeEntityArray(dto.races, (i) => Race.fromDTO(i, context));
        world.religions = this.deserializeEntityArray(dto.religions, (i) => Religion.fromDTO(i, context));
        world.resistances = this.deserializeEntityArray(dto.resistances, (i) => Resistance.fromDTO(i, context));
        world.statuses = this.deserializeEntityArray(dto.statuses, (i) => Status.fromDTO(i, context));
        world.tags = this.deserializeEntityArray(dto.tags, (i) => Tag.fromDTO(i, context));
        world.backgrounds = this.deserializeEntityArray(dto.backgrounds, (i) => Background.fromDTO(i, context));

        return world;
    }
}
