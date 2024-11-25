import { Entity, Column, ManyToOne, BeforeInsert, PrimaryColumn } from "typeorm";
import { ContentBase } from "../../ContentBase";
import { Campaign } from "../Campaign";
import { User } from "../User";
import { World } from "../World";
import { randomUUID } from "crypto";
import { BlueprintGenInstruction_Gaussian, ProbObject_Simple } from "../../layer_1/types";
import { GenerationInstruction } from "../../types";



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
    faction?: GenerationInstruction[];

    @Column({ type: "jsonb", nullable: true })
    disease?: GenerationInstruction[];

    @Column({ type: "jsonb", nullable: true })
    addiction?: GenerationInstruction[];

    @Column({ type: "jsonb", nullable: true })
    profession?: GenerationInstruction[];

    @Column({ type: "jsonb", nullable: true })
    race!: GenerationInstruction[];

    @Column({ type: "jsonb", nullable: true })
    religion?: GenerationInstruction[];

    @Column({ type: "jsonb", nullable: true })
    personality!: GenerationInstruction[];

    @Column({ type: "jsonb", nullable: true })
    items?: GenerationInstruction[];

    @Column({ type: "jsonb", nullable: true })
    past_exp_child!: GenerationInstruction[]
    
    @Column({ type: "jsonb", nullable: true })
    past_exp_adult?: GenerationInstruction[]
    
    @Column({ type: "jsonb", nullable: true })
    memory_pools?: GenerationInstruction[]

    @Column({ type: "jsonb", nullable: true })
    skill_sets?: string[]
    
    @Column({ type: "jsonb", nullable: true })
    skill_adjustments?: { [skill_blueprint_id: string]: number }

    // Relationships
    @ManyToOne(() => User, { nullable: true })
    user!: User;

    @ManyToOne(() => Campaign, { nullable: true })
    campaign?: Campaign;

    @ManyToOne(() => World, { nullable: true })
    world!: World;
}
