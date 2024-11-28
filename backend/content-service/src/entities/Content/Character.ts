import { JoinTable, Entity, TableInheritance, Column, OneToMany, ManyToMany, ManyToOne, PrimaryGeneratedColumn, OneToOne, BeforeInsert, PrimaryColumn } from "typeorm";
import { CharacterMemory } from "./Knowledge/CharacterMemory";
import { MemoryPool } from "./Knowledge/MemoryPool";
import { Trait } from "./Trait/Trait";
import { CharacterProfession } from "./CharacterProfession";
import { Skill } from "./Skill/Skill";
import { Birthsign } from "./Birthsign";
import { Race } from "./Race";
import { Tag } from "./Tag";
import { TaggableContentBase } from "../../TaggableContentBase";
import { Campaign } from "../Campaign";
import { User } from "../User";
import { World } from "../World";
import { randomUUID } from "crypto";
import { Faction } from "./Faction";
import { Disease } from "./Disease";
import { Addiction } from "./Addiction";
import { EquipmentSlot } from "./Slot/EquipmentSlot";
import { CharacterDTO } from "../../proto/common";


// lazy loading means when I need to access traits of a character, it will perform 2 queries. 
// One to fetch the character, and a second one to fetch inventories, but only when I access that field.
// If I know from the start that I will need the inventories, I can use eager loading:
// const character = await characterRepository.findOne({
//     where: { id: 1 },
//     relations: ['inventories'], // Load inventories in the same query
// });


@Entity()
export class Character extends TaggableContentBase {
    @PrimaryColumn()
    id!: string;

    id_prefix = "CHARACTER"

    @Column({ type: "varchar", length: 255 })
    first_name!: string;

    @Column({ type: "varchar", length: 255 })
    last_name!: string;

    @ManyToOne(() => Race, {lazy: true})
    race!: Race;

    @Column({ type: "enum", enum: ["MALE", "FEMALE"] })
    gender!: string;

    @ManyToOne(() => Birthsign, {lazy: true})
    birthsign?: Birthsign;

    @Column({ default: null, nullable: true })
    birthYear?: number;

    @Column({ default: null, nullable: true })
    birthMonth?: number;

    @Column({ default: null, nullable: true })
    birthDay?: number;

    @Column("jsonb", { default: {} })
    skills!: { [skill: string]: number };

    @OneToMany(() => EquipmentSlot, eqiupmentSlot => eqiupmentSlot.character, {lazy: true})
    @JoinTable()
    equipmentSlots!: EquipmentSlot[];

    @ManyToMany(() => CharacterProfession, profession => profession.characters, { lazy: true })
    professions!: CharacterProfession[]; // Tracks current and past professions

    @ManyToMany(() => MemoryPool, { lazy: true })
    @JoinTable()
    memoryPools!: MemoryPool[]; // Assigned during generation, or as the person expands their knowledge as their personality develops

    @OneToMany(() => CharacterMemory, charMemory => charMemory.character, { lazy: true })
    characterMemories!: CharacterMemory[];

    @Column({ type: "varchar", length: 3 })
    enneagramType!: string;

    @ManyToMany(() => Trait, { lazy: true })
    @JoinTable()
    traits!: Trait[];

    @ManyToMany(() => Disease, { lazy: true })
    @JoinTable()
    diseases?: Disease[];

    @ManyToMany(() => Addiction, { lazy: true })
    @JoinTable()
    addictions?: Addiction[];


    @ManyToMany(() => Faction, (faction) => faction.characters, { lazy: true })
    @JoinTable()
    factions?: Faction[];


    @ManyToMany(() => Tag, (tag) => tag.characters, { lazy: true })
    @JoinTable()
    tags?: Tag[];

    @ManyToOne(() => User, { nullable: true, lazy: true })
    user!: User;

    @ManyToOne(() => World, { nullable: true, lazy: true })
    world!: World;

    @ManyToOne(() => Campaign, { nullable: true, lazy: true })
    campaign?: Campaign;

    public toDTO(): CharacterDTO {
        return {
            id: this.id,
            first_name: this.first_name,
            last_name: this.last_name,
            race: this.race?.toDTO(),
            gender: this.gender,
            birthsign: this.birthsign?.toDTO(),
            birthYear: this.birthYear,
            birthMonth: this.birthMonth,
            birthDay: this.birthDay,
            skills: this.skills,
            equipmentSlots: this.equipmentSlots ? { equipmentSlots: this.equipmentSlots.map(slot => slot.toDTO()) } : undefined,
            professions: this.professions ? { professions: this.professions.map(profession => profession.toDTO()) } : undefined,
            memoryPools: this.memoryPools ? { memoryPools: this.memoryPools.map(pool => pool.toDTO()) } : undefined,
            characterMemories: this.characterMemories ? { characterMemories: this.characterMemories.map(mem => mem.toDTO()) } : undefined,
            enneagramType: this.enneagramType,
            traits: this.traits ? { traits: this.traits.map(trait => trait.toDTO()) } : undefined,
            diseases: this.diseases ? { diseases: this.diseases.map(disease => disease.toDTO()) } : undefined,
            addictions: this.addictions ? { addictions: this.addictions.map(addiction => addiction.toDTO()) } : undefined,
            factions: this.factions ? { factions: this.factions.map(faction => faction.toDTO()) } : undefined,
            tags: this.tags ? { tags: this.tags.map(tag => tag.toDTO()) } : undefined,
            user: this.user?.toDTO(),
            campaign: this.campaign?.toDTO(),
            world: this.world?.toDTO(),
            targetEntity: this.targetEntity
        };
    }
    
    public static fromDTO(dto: CharacterDTO, user: User, world: World, campaign?: Campaign): Character {
        if (!dto.race) throw new Error("character race cannot be undefined")
        const character = new Character();
        character.id = dto.id;
        character.first_name = dto.firstName;
        character.last_name = dto.lastName;
        character.race = Race.fromDTO(dto.race, user, world, campaign);
        character.gender = dto.gender;
        character.birthsign = dto.birthsign ? Birthsign.fromDTO(dto.birthsign, user, world, campaign) : undefined;
        character.birthYear = dto.birthYear;
        character.birthMonth = dto.birthMonth;
        character.birthDay = dto.birthDay;
        character.skills = dto.skills;
        character.equipmentSlots = dto.equipmentSlots?.equipmentSlots?.map(i=> EquipmentSlot.fromDTO(i, user, world, campaign)) || [];
        character.professions = dto.professions?.professions?.map(i=> CharacterProfession.fromDTO(i, user, world, campaign)) || [];
        character.memoryPools = dto.memoryPools?.memoryPools?.map(i=> MemoryPool.fromDTO(i, user, world, campaign)) || [];
        character.characterMemories = dto.characterMemories?.characterMemories?.map(i=> CharacterMemory.fromDTO(i, user, world, campaign)) || [];
        character.enneagramType = dto.enneagramType;
        character.traits = dto.traits?.traits?.map(i=>Trait.fromDTO(i, user, world, campaign)) || [];
        character.diseases = dto.diseases?.diseases?.map(i=>Disease.fromDTO(i, user, world, campaign)) || [];
        character.addictions = dto.addictions?.addictions?.map(i=>Addiction.fromDTO(i, user, world, campaign)) || [];
        character.factions = dto.factions?.factions?.map(faction => Faction.fromDTO(faction, user, world, campaign)) || [];
        character.tags = dto.tags?.tags?.map(tag => Tag.fromDTO(tag, user, world, campaign)) || [];
        character.user = user;
        character.campaign = campaign;
        character.world = world;
        character.targetEntity = dto.targetEntity
        return character;
    }
}
