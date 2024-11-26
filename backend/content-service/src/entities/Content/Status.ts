import { BeforeInsert, Column, Entity, ManyToOne, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";
import { ContentBase } from "../../ContentBase";
import { Campaign } from "../Campaign";
import { User } from "../User";
import { World } from "../World";
import { randomUUID } from "crypto";


@Entity()
export class Status extends ContentBase {
    @PrimaryColumn()
    id!: string;
    
    id_prefix = "STATUS";

    @Column({ type: "varchar", length: 255 })
    name!: string;

    @Column({ type: "text" })
    description!: string;

    @Column({ type: "enum", enum: ["BUFF", "DEBUFF", "NEUTRAL"]})
    type!: string; // "buff", "debuff", "neutral"

    @Column("jsonb", { nullable: true })
    effects!: string[]; // Links to associated Effect IDs.

    @Column({ nullable: true })
    duration!: number; // Duration in ticks (0 for permanent).

    @ManyToOne(() => User, { nullable: true })
    user!: User;

    @ManyToOne(() => Campaign, { nullable: true })
    campaign?: Campaign;

    @ManyToOne(() => World, { nullable: true })
    world!: World;
}
