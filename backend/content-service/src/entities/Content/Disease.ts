import { BeforeInsert, Column, Entity, ManyToMany, ManyToOne, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";
import { TaggableContentBase } from "../../TaggableContentBase";
import { Tag } from "./Tag";
import { Campaign } from "../Campaign";
import { User } from "../User";
import { World } from "../World";
import { randomUUID } from "crypto";
import { Character } from "./Character";


@Entity()
export class Disease extends TaggableContentBase {
    @PrimaryColumn()
    id!: string;
    
    id_prefix = "DISEASE";

    @Column({ type: "varchar", length: 255 })
    name!: string;

    @Column({ type: "text" })
    description!: string;

    @Column({ type: "enum", enum: ["MILD", "MODERATE", "SEVERE"] })
    severity!: string;

    @Column("jsonb", { nullable: true, default: null })
    effects!: string[]; // Links to associated Effect IDs.

    @Column("jsonb", { nullable: true, default: null })
    resistances!: string[]; // Links to associated Resistance IDs.

    @ManyToMany(() => Character)
    characters?: Character[];

    @ManyToMany(() => Tag, (tag) => tag.diseases)
    tags?: Tag[];

    @ManyToOne(() => User, { nullable: true })
    user!: User;

    @ManyToOne(() => Campaign, { nullable: true })
    campaign?: Campaign;

    @ManyToOne(() => World, { nullable: true })
    world!: World;
}
