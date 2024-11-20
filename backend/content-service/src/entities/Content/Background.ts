import { Entity, Column, ManyToOne, BeforeInsert, PrimaryColumn } from "typeorm";
import { ContentBase } from "../../ContentBase";
import { Campaign } from "../Campaign";
import { User } from "../User";
import { World } from "../World";
import { randomUUID } from "crypto";
import { CharGenProbObject } from "../../layer_2_and_3/generator/CharacterGenerator";


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
    faction_prob?: CharGenProbObject;

    @Column({ type: "jsonb", nullable: true })
    disease_prob?: CharGenProbObject;

    @Column({ type: "jsonb", nullable: true })
    addiction_prob?: CharGenProbObject;

    @Column({ type: "jsonb", nullable: true })
    profession_prob?: CharGenProbObject;

    @Column({ type: "jsonb", nullable: true })
    race_prob?: CharGenProbObject;

    @Column({ type: "jsonb", nullable: true })
    religion_prob?: CharGenProbObject;

    @Column({ type: "jsonb", nullable: true })
    personality_prob?: CharGenProbObject;

    @Column({ type: "jsonb", nullable: true })
    item_set_prob?: CharGenProbObject;

    @Column({ type: "jsonb", nullable: true })
    past_exp_prob?: {
        child: CharGenProbObject;
        adult: CharGenProbObject;
    };

    // Relationships
    @ManyToOne(() => User, { nullable: true })
    user!: User;

    @ManyToOne(() => Campaign, { nullable: true })
    campaign?: Campaign;

    @ManyToOne(() => World, { nullable: true })
    world!: World;
}
