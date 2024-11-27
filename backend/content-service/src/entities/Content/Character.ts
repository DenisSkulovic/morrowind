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
    memoryPools!: Promise<MemoryPool[]>; // Assigned during generation, or as the person expands their knowledge as their personality develops

    @OneToMany(() => CharacterMemory, charMemory => charMemory.character, { lazy: true })
    characterMemories!: Promise<CharacterMemory[]>;

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
}
