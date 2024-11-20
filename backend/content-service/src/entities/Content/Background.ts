import { Entity, Column, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { ContentBase } from "../../ContentBase";
import { Campaign } from "../Campaign";
import { User } from "../User";
import { World } from "../World";

type ProbabilityCondition = "OR" | "ANY";
type ProbabilityMap = Record<string, number>;

@Entity()
export class Background extends ContentBase {
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
    id_prefix = "BACKGROUND";

    @Column({ type: "varchar", length: 255 })
    name!: string; // Name of the background (e.g., "Highland Town Guard")

    @Column({ type: "jsonb", nullable: true })
    faction_prob?: {
        condition: ProbabilityCondition;
        prob: ProbabilityMap;
    };

    @Column({ type: "jsonb", nullable: true })
    disease_prob?: {
        condition: ProbabilityCondition;
        prob: ProbabilityMap;
    };

    @Column({ type: "jsonb", nullable: true })
    addiction_prob?: {
        condition: ProbabilityCondition;
        prob: ProbabilityMap;
    };

    @Column({ type: "jsonb", nullable: true })
    profession_prob?: {
        condition: ProbabilityCondition;
        prob: ProbabilityMap;
    };

    @Column({ type: "jsonb", nullable: true })
    race_prob?: {
        condition: ProbabilityCondition;
        prob: ProbabilityMap;
    };

    @Column({ type: "jsonb", nullable: true })
    religion_prob?: {
        condition: ProbabilityCondition;
        prob: ProbabilityMap;
    };

    @Column({ type: "jsonb", nullable: true })
    personality_prob?: {
        condition: ProbabilityCondition;
        prob: ProbabilityMap;
    };

    @Column({ type: "jsonb", nullable: true })
    item_set_prob?: {
        condition: ProbabilityCondition;
        prob: ProbabilityMap;
    };

    @Column({ type: "jsonb", nullable: true })
    past_exp_prob?: {
        child: {
            condition: ProbabilityCondition;
            prob: ProbabilityMap;
        };
        adult: {
            condition: ProbabilityCondition;
            prob: ProbabilityMap;
        };
    };

    // Relationships
    @ManyToOne(() => User, { nullable: true })
    user?: User;

    @ManyToOne(() => Campaign, { nullable: true })
    campaign?: Campaign;

    @ManyToOne(() => World, { nullable: true })
    world?: World;
}
