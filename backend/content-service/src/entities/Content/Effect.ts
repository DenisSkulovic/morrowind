import { TableInheritance, Column, Entity, JoinTable, ManyToMany, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { ContentBase } from "../../ContentBase";
import { Tag } from "./Tag";
import { Campaign } from "../Campaign";
import { User } from "../User";
import { World } from "../World";

@Entity()
export class Effect extends ContentBase {
    @PrimaryGeneratedColumn("uuid")
    id!: string;

    id_prefix = "EFFECT";

    @Column({ default: "PLACEHOLDER" })
    name!: string;

    @Column({ type: "enum", enum: ["DAMAGE", "HEALING", "BUFF", "DEBUFF", "RESISTANCE"] })
    type!: string; // "damage", "healing", "buff", "debuff", "resistance", etc.

    @Column({ type: "enum", enum: ["HEALTH", "STAMINA", "MAGIC"]})
    target!: string | null; // "health", "stamina", "magic", etc.

    @Column({ type: "enum", enum: ["INSTANT", "GRADUAL", "PERSISTENT"]})
    mode!: string | null; // "instant", "gradual", "persistent"

    @Column({ type: "enum", enum: ["FIRE", "FROST", "POISON", "SHOCK"]})
    element?: string;


    @ManyToMany(() => Tag, (tag) => tag.effects)
    tags?: Tag[];

    @ManyToOne(() => User, { nullable: true })
    user?: User;

    @ManyToOne(() => Campaign, { nullable: true })
    campaign?: Campaign;

    @ManyToOne(() => World, { nullable: true })
    world?: World;
}
