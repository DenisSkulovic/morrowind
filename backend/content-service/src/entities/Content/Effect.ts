import { BeforeInsert, Column, Entity, ManyToMany, ManyToOne, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";
import { TaggableContentBase } from "../../TaggableContentBase";
import { Tag } from "./Tag";
import { Campaign } from "../Campaign";
import { User } from "../User";
import { World } from "../World";
import { randomUUID } from "crypto";

@Entity()
export class Effect extends TaggableContentBase {
    @PrimaryColumn()
    id!: string;
    
    id_prefix = "EFFECT";

    @Column({ default: "PLACEHOLDER" })
    name!: string;

    @Column({ type: "enum", enum: ["DAMAGE", "HEALING", "BUFF", "DEBUFF", "RESISTANCE", "STEALING"] })
    type!: string; // "damage", "healing", "buff", "debuff", "resistance", etc.

    @Column({ type: "enum", enum: ["HEALTH", "STAMINA", "MAGIC"]})
    target!: string; // "health", "stamina", "magic", etc.

    @Column({ type: "enum", enum: ["INSTANT", "GRADUAL", "PERSISTENT"]})
    mode!: string; // "instant", "gradual", "persistent"

    @Column({ type: "enum", enum: ["FIRE", "FROST", "POISON", "SHOCK"], nullable: true})
    element?: string;


    @ManyToMany(() => Tag, (tag) => tag.effects)
    tags?: Tag[];

    @ManyToOne(() => User, { nullable: true })
    user!: User;

    @ManyToOne(() => Campaign, { nullable: true })
    campaign?: Campaign;

    @ManyToOne(() => World, { nullable: true })
    world!: World;
}
