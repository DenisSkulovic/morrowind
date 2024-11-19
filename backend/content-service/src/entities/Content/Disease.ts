import { TableInheritance, Column, Entity, JoinTable, ManyToMany, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { ContentBase } from "../../ContentBase";
import { Tag } from "./Tag";
import { Campaign } from "../Campaign";
import { User } from "../User";
import { World } from "../World";


@Entity()
export class Disease extends ContentBase {
    @PrimaryGeneratedColumn("uuid")
    id!: string;

    id_prefix = "DISEASE";

    @Column({ type: "varchar", length: 255 })
    name!: string;

    @Column({ type: "text" })
    description!: string;

    @Column({ type: "enum", enum: ["mild", "moderate", "severe"] })
    severity!: string;

    @Column("jsonb", { nullable: true, default: null })
    effects!: string[] | null; // Links to associated Effect IDs.

    @Column("jsonb", { nullable: true, default: null })
    resistances!: string[] | null; // Links to associated Resistance IDs.

    @ManyToMany(() => Tag, (tag) => tag.diseases)
    tags?: Tag[];

    @ManyToOne(() => User, { nullable: true })
    user?: User;

    @ManyToOne(() => Campaign, { nullable: true })
    campaign?: Campaign;

    @ManyToOne(() => World, { nullable: true })
    world?: World;
}
