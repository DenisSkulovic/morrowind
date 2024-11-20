import { JoinTable, Entity, TableInheritance, Column, OneToMany, ManyToMany, ManyToOne, PrimaryGeneratedColumn, OneToOne } from "typeorm";
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

@Entity()
export class Character extends TaggableContentBase {
    @PrimaryColumn()
    id!: string;
    
    @BeforeInsert()
    generateId() {
        if (this.targetEntity) { // if this is an imported blueprint - make the id the same as blueprint id
            this.id = this.blueprint_id
        } else {
            this.id = `${this.id_prefix}_${randomUUID().replace(/-/g, "")}`;
        }
    }
    id_prefix = "CHARACTER"

    @Column({ type: "varchar", length: 255 })
    name!: string;

    @ManyToOne(() => Race)
    race!: Race;

    @Column({type: "enum", enum: ["Male", "Female"] })
    gender!: string;

    @ManyToOne(() => Birthsign)
    birthsign!: Birthsign;

    @Column({default: null, nullable: true})
    birthYear?: number;

    @Column({default: null, nullable: true})
    birthMonth?: number;

    @Column({default: null, nullable: true})
    birthDay?: number;

    @Column("jsonb", {default: {}})
    skills!: {[skill: string]: number};

    @OneToOne(() => Inventory)
    inventory!: Inventory;

    @OneToMany(() => CharacterProfession, profession => profession.character)
    professions!: CharacterProfession[]; // Tracks current and past professions

    @ManyToMany(() => MemoryPool)
    @JoinTable()
    memoryPools!: Promise<MemoryPool[]>; // Assigned during generation, or as the person expands their knowledge as their personality develops

    @OneToMany(() => CharacterMemory, charMemory => charMemory.character)
    characterMemories!: Promise<CharacterMemory[]>;

    @ManyToMany(() => Trait)
    @JoinTable()
    traits!: Trait[];

    
    @ManyToMany(() => Tag, (tag) => tag.characters)
    @JoinTable()
    tags?: Tag[];

    @ManyToOne(() => User, { nullable: true })
    user?: User;

    @ManyToOne(() => Campaign, { nullable: true })
    campaign?: Campaign;

    @ManyToOne(() => World, { nullable: true })
    world?: World;
}
