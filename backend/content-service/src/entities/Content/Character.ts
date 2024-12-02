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
import { CharacterDTO, GenderEnumDTO } from "../../proto/common";
import { GenderEnum } from "../../enum/GenderEnum";
import { Context } from "../../types";
import { deserializeEnum, serializeEnum } from "../../enum/util";
import { PastExperience } from "./Knowledge/PastExperience/PastExperience";
import { PastExperienceChild } from "./Knowledge/PastExperience/PastExperienceChild";
import { PastExperienceAdult } from "./Knowledge/PastExperience/PastExperienceAdult";


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

    @ManyToOne(() => Race)
    race!: Race;

    @Column({ type: "enum", enum: GenderEnum })
    gender!: GenderEnum;

    @ManyToOne(() => Birthsign)
    birthsign?: Birthsign;

    @Column({ default: null, nullable: true })
    birthEra?: string;

    @Column({ default: null, nullable: true })
    birthYear?: number;

    @Column({ default: null, nullable: true })
    birthMonth?: string;

    @Column({ default: null, nullable: true })
    birthDay?: number;

    @Column("jsonb", { default: {} })
    skills!: { [skill: string]: number };

    @OneToMany(() => EquipmentSlot, eqiupmentSlot => eqiupmentSlot.character)
    @JoinTable()
    equipmentSlots!: EquipmentSlot[];

    @ManyToMany(() => CharacterProfession, profession => profession.characters)
    professions!: CharacterProfession[];

    @ManyToMany(() => MemoryPool)
    @JoinTable()
    memoryPools!: MemoryPool[];

    @OneToMany(() => CharacterMemory, charMemory => charMemory.character)
    characterMemories!: CharacterMemory[];

    @Column({ type: "varchar", length: 3 })
    enneagramType!: string;

    @ManyToMany(() => Trait)
    @JoinTable()
    traits!: Trait[];

    @ManyToMany(() => Disease)
    @JoinTable()
    diseases?: Disease[];

    @ManyToMany(() => Addiction)
    @JoinTable()
    addictions?: Addiction[];

    @ManyToMany(() => PastExperienceChild)
    @JoinTable()
    pastExperiencesChild?: PastExperienceChild[];

    @ManyToMany(() => PastExperienceAdult)
    @JoinTable()
    pastExperiencesAdult?: PastExperienceAdult[];

    @ManyToMany(() => Faction, (faction) => faction.characters)
    @JoinTable()
    factions?: Faction[];

    @ManyToMany(() => Tag, (tag) => tag.characters)
    @JoinTable()
    tags?: Tag[];

    @ManyToOne(() => User, { nullable: true, })
    user!: User;

    @ManyToOne(() => Campaign, { nullable: true, })
    campaign?: Campaign;

    @ManyToOne(() => World, { nullable: true, })
    world!: World;

    public static toDTO(chr: Character): CharacterDTO {
        return {
            id: chr.id,
            blueprintId: chr.blueprint_id,
            firstName: chr.first_name,
            lastName: chr.last_name,
            race: chr.race.id,
            gender: serializeEnum(GenderEnum, chr.gender),
            birthsign: chr.birthsign?.id,
            birthEra: chr.birthEra,
            birthYear: chr.birthYear,
            birthMonth: chr.birthMonth,
            birthDay: chr.birthDay,
            skills: chr.skills,
            pastExperiencesChild: chr.pastExperiencesChild?.map(i => i.id),
            pastExperiencesAdult: chr.pastExperiencesAdult?.map(i => i.id),
            equipmentSlots: Character.serializeEntityArray(chr.equipmentSlots, i => EquipmentSlot.toDTO(i)),
            professions: chr.professions?.map(i => i.id),
            memoryPools: chr.memoryPools?.map(i => i.id),
            characterMemories: chr.characterMemories?.map(i => i.id),
            traits: chr.traits?.map(i => i.id),
            diseases: chr.diseases?.map(i => i.id),
            addictions: chr.addictions?.map(i => i.id),
            factions: chr.factions?.map(i => i.id),
            tags: chr.tags?.map(i => i.id),
            enneagramType: chr.enneagramType,
            user: chr.user.id,
            campaign: chr.campaign?.id,
            world: chr.world.id,
            targetEntity: chr.targetEntity
        };
    }

    public static fromDTO(dto: CharacterDTO, context: Context): Character {
        if (!dto.race) throw new Error("character race cannot be undefined")
        const character = new Character();
        character.id = dto.id;
        character.first_name = dto.firstName;
        character.last_name = dto.lastName;
        character.race = Race.fromDTO(dto.race, context);
        character.gender = deserializeEnum(GenderEnumDTO, dto.gender) as GenderEnum;
        character.birthsign = dto.birthsign ? Birthsign.fromDTO(dto.birthsign, context) : undefined;
        character.birthEra = dto.birthEra;
        character.birthYear = dto.birthYear;
        character.birthMonth = dto.birthMonth;
        character.birthDay = dto.birthDay;
        character.skills = dto.skills;
        character.pastExperiencesChild = Character.deserializeEntityArray(dto.pastExperiencesChild, i => PastExperienceChild.fromDTO(i, context))
        character.pastExperiencesAdult = Character.deserializeEntityArray(dto.pastExperiencesAdult, i => PastExperienceChild.fromDTO(i, context))
        character.equipmentSlots = Character.deserializeEntityArray(dto.equipmentSlots, i => EquipmentSlot.fromDTO(i, context));
        character.professions = Character.deserializeEntityArray(dto.professions, i => CharacterProfession.fromDTO(i, context));
        character.memoryPools = Character.deserializeEntityArray(dto.memoryPools, i => MemoryPool.fromDTO(i, context));
        character.characterMemories = Character.deserializeEntityArray(dto.characterMemories, i => CharacterMemory.fromDTO(i, context));
        character.enneagramType = dto.enneagramType;
        character.traits = Character.deserializeEntityArray(dto.traits, i => Trait.fromDTO(i, context));
        character.diseases = Character.deserializeEntityArray(dto.diseases, i => Disease.fromDTO(i, context));
        character.addictions = Character.deserializeEntityArray(dto.addictions, i => Addiction.fromDTO(i, context));
        character.factions = Character.deserializeEntityArray(dto.factions, i => Faction.fromDTO(i, context));
        character.tags = Character.deserializeEntityArray(dto.tags, i => Tag.fromDTO(i, context));
        character.user = context.user;
        character.campaign = context.campaign;
        character.world = context.world;
        character.targetEntity = dto.targetEntity
        return character;
    }
}
