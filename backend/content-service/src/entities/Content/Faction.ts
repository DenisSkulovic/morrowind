import { BeforeInsert, Entity, JoinTable, ManyToMany, ManyToOne, PrimaryColumn, PrimaryGeneratedColumn, TableInheritance } from "typeorm";
import { TaggableContentBase } from "../../TaggableContentBase";
import { Tag } from "./Tag";
import { Campaign } from "../Campaign";
import { User } from "../User";
import { World } from "../World";
import { randomUUID } from "crypto";
import { Character } from "./Character";

@Entity()
export class Faction extends TaggableContentBase {
    @PrimaryColumn()
    id!: string;
    
    id_prefix = "FACTION"

    @ManyToMany(() => Character, (character) => character.factions)
    characters?: Character[];
    
    @ManyToMany(() => Tag, (tag) => tag.factions)
    tags?: Tag[];

    @ManyToOne(() => User, { nullable: true })
    user!: User;

    @ManyToOne(() => Campaign, { nullable: true })
    campaign?: Campaign;

    @ManyToOne(() => World, { nullable: true })
    world!: World;
}