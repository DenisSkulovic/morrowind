import { Entity, Column, ManyToMany, ManyToOne, PrimaryGeneratedColumn, JoinTable, PrimaryColumn, BeforeInsert } from "typeorm";
import { ContentBase } from "../../ContentBase";
import { Item } from "./Item/Item";
import { PastExperience } from "./Knowledge/PastExperience/PastExperience";
import { CharacterMemory } from "./Knowledge/CharacterMemory";
import { Memory } from "./Knowledge/Memory";
import { MemoryPool } from "./Knowledge/MemoryPool";
import { Skill } from "./Skill/Skill";
import { Trait } from "./Trait/Trait";
import { Character } from "./Character";
import { CharacterProfession } from "./CharacterProfession";
import { Disease } from "./Disease";
import { Effect } from "./Effect";
import { Fact } from "./Fact";
import { Faction } from "./Faction";
import { Campaign } from "../Campaign";
import { User } from "../User";
import { World } from "../World";
import { randomUUID } from "crypto";


@Entity()
export class Tag extends ContentBase {
    @PrimaryColumn()
    id!: string;
    
    @BeforeInsert()
    generateId() {
        if (this.targetEntity) this.id = this.blueprint_id
        else this.id = `${this.id_prefix}_${randomUUID().replace(/-/g, "")}`;
    }
    id_prefix = "TAG"

    @Column({ type: "varchar", length: 30, unique: true })
    label!: string; // The tag's name (e.g., "dunmeri", "rare")

    @Column({ type: "enum", enum: ["CULTURE", "RELATION", "FACTION", "RELIGION", "WEAPON_QUALITY", "ARMOR_QUALITY"]})
    subtype?: string; // TagSubtypeEnum

    @ManyToMany(() => Item, (i) => i.tags)
    @JoinTable()
    items?: Item[];

    @ManyToMany(() => PastExperience, (i) => i.tags)
    @JoinTable()
    pastExperiences?: PastExperience[];

    @ManyToMany(() => CharacterMemory, (i) => i.tags)
    @JoinTable()
    characterMemories?: CharacterMemory[];

    @ManyToMany(() => Memory, (i) => i.tags)
    @JoinTable()
    memories?: Memory[];

    @ManyToMany(() => MemoryPool, (i) => i.tags)
    @JoinTable()
    memoryPools?: MemoryPool[];

    @ManyToMany(() => Skill, (i) => i.tags)
    @JoinTable()
    skills?: Skill[];

    @ManyToMany(() => Trait, (i) => i.tags)
    @JoinTable()
    traits?: Trait[];

    @ManyToMany(() => Character, (i) => i.tags)
    @JoinTable()
    characters?: Character[];

    @ManyToMany(() => CharacterProfession, (i) => i.tags)
    @JoinTable()
    characterProfessions?: CharacterProfession[];

    @ManyToMany(() => Disease, (i) => i.tags)
    @JoinTable()
    diseases?: Disease[];

    @ManyToMany(() => Effect, (i) => i.tags)
    @JoinTable()
    effects?: Effect[];

    @ManyToMany(() => Fact, (i) => i.tags)
    @JoinTable()
    facts?: Fact[];

    @ManyToMany(() => Faction, (i) => i.tags)
    @JoinTable()
    factions?: Faction[];

    @ManyToOne(() => User, { nullable: true })
    user!: User;

    @ManyToOne(() => Campaign, { nullable: true })
    campaign?: Campaign;

    @ManyToOne(() => World, { nullable: true })
    world!: World;
}