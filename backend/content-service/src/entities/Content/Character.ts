import { JoinTable, Entity, TableInheritance, Column, OneToMany, ManyToMany, ManyToOne, PrimaryGeneratedColumn, OneToOne, BeforeInsert, PrimaryColumn } from "typeorm";
import { CharacterMemory } from "./Knowledge/CharacterMemory";
import { MemoryPool } from "./Knowledge/MemoryPool";
import { Trait } from "./Trait/Trait";
import { CharacterProfession } from "./CharacterProfession";
import { Skill } from "./Skill/Skill";
import { Birthsign } from "./Birthsign";
import { Race } from "./Race";
import { Inventory } from "./Inventory";
import { Tag } from "./Tag";
import { TaggableContentBase } from "../../TaggableContentBase";
import { Campaign } from "../Campaign";
import { User } from "../User";
import { World } from "../World";
import { randomUUID } from "crypto";
import { Faction } from "./Faction";
import { Disease } from "./Disease";
import { Addiction } from "./Addiction";

@Entity()
export class Character extends TaggableContentBase {
    @PrimaryColumn()
    id!: string;
    
    @BeforeInsert()
    generateId() {
        if (this.targetEntity) this.id = this.blueprint_id
        else this.id = `${this.id_prefix}_${randomUUID().replace(/-/g, "")}`;
    }
    id_prefix = "CHARACTER"

    @Column({ type: "varchar", length: 255 })
    first_name!: string;

    @Column({ type: "varchar", length: 255 })
    last_name!: string;

    @ManyToOne(() => Race)
    race!: Race;

    @Column({type: "enum", enum: ["MALE", "FEMALE"] })
    gender!: string;

    @ManyToOne(() => Birthsign)
    birthsign?: Birthsign;

    @Column({default: null, nullable: true})
    birthYear?: number;

    @Column({default: null, nullable: true})
    birthMonth?: number;

    @Column({default: null, nullable: true})
    birthDay?: number;

    @Column("jsonb", {default: {}})
    skills!: {[skill: string]: number};

    @OneToOne(() => Inventory)
    @JoinTable()
    inventory!: Inventory;

    @OneToMany(() => CharacterProfession, profession => profession.character)
    professions!: CharacterProfession[]; // Tracks current and past professions

    @ManyToMany(() => MemoryPool)
    @JoinTable()
    memoryPools!: Promise<MemoryPool[]>; // Assigned during generation, or as the person expands their knowledge as their personality develops

    @OneToMany(() => CharacterMemory, charMemory => charMemory.character)
    characterMemories!: Promise<CharacterMemory[]>;

    @Column({type: "varchar", length: 3})
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


    @ManyToMany(() => Faction, (faction) => faction.characters)
    @JoinTable()
    factions?: Faction[];

    
    @ManyToMany(() => Tag, (tag) => tag.characters)
    @JoinTable()
    tags?: Tag[];

    @ManyToOne(() => User, { nullable: true })
    user!: User;
    
    @ManyToOne(() => World, { nullable: true })
    world!: World;

    @ManyToOne(() => Campaign, { nullable: true })
    campaign?: Campaign;
}
