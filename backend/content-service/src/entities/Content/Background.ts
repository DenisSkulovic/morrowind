import { Entity, Column, ManyToOne, BeforeInsert, PrimaryColumn } from "typeorm";
import { ContentBase } from "../../ContentBase";
import { Campaign } from "../Campaign";
import { User } from "../User";
import { World } from "../World";
import { randomUUID } from "crypto";
import { ProbObject_Simple } from "../../layer_1/types";



@Entity()
export class Background extends ContentBase {
    @PrimaryColumn()
    id!: string;
    
    @BeforeInsert()
    generateId() {
        if (this.targetEntity) this.id = this.blueprint_id
        else this.id = `${this.id_prefix}_${randomUUID().replace(/-/g, "")}`;
    }
    id_prefix = "BACKGROUND";

    @Column({ type: "varchar", length: 255 })
    name!: string; // Name of the background (e.g., "Highland Town Guard")

    @Column({ type: "jsonb", nullable: true })
    faction_prob?: ProbObject_Simple;

    @Column({ type: "jsonb", nullable: true })
    disease_prob?: ProbObject_Simple;

    @Column({ type: "jsonb", nullable: true })
    addiction_prob?: ProbObject_Simple;

    @Column({ type: "jsonb", nullable: true })
    profession_prob?: ProbObject_Simple;

    @Column({ type: "jsonb", nullable: true })
    race_prob?: ProbObject_Simple;

    @Column({ type: "jsonb", nullable: true })
    religion_prob?: ProbObject_Simple;

    @Column({ type: "jsonb", nullable: true })
    personality_prob?: ProbObject_Simple;

    @Column({ type: "jsonb", nullable: true })
    item_set_prob?: ProbObject_Simple;

    @Column({ type: "jsonb", nullable: true })
    past_exp_child_prob?: ProbObject_Simple
    
    @Column({ type: "jsonb", nullable: true })
    past_exp_adult_prob?: ProbObject_Simple

    // Relationships
    @ManyToOne(() => User, { nullable: true })
    user!: User;

    @ManyToOne(() => Campaign, { nullable: true })
    campaign?: Campaign;

    @ManyToOne(() => World, { nullable: true })
    world!: World;
}
