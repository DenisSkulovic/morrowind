import { TableInheritance, Entity, Column, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { ContentBase } from "../../ContentBase";
import { Campaign } from "../Campaign";
import { User } from "../User";
import { World } from "../World";

@Entity()
export class PersonalityProfile extends ContentBase {
    @PrimaryGeneratedColumn("uuid")
    id!: string;

    id_prefix = "PROFILE";

    /**
     * Name of the personality profile (e.g., "The Reformer").
     */
    @Column({ type: "varchar", length: 255 })
    name!: string;

    /**
     * Core type with wing (e.g., "5w4", "1w9").
     */
    @Column({ type: "varchar", length: 3 })
    coreType!: string; // Enneagram type with wing as a string.

    /**
     * List of traits associated with the profile, each with a probability.
     */
    @Column("jsonb")
    traits!: {
        name: string;
        probability: number; // Probability of assigning this trait during generation.
    }[];

    /**
     * Effects of trauma on behavior and traits, each with a probability.
     */
    @Column("jsonb")
    traumaInfluence!: {
        processed?: {
            name: string;
            probability: number; // Probability of assigning this processed trauma trait.
        }[];
        unresolved?: {
            name: string;
            probability: number; // Probability of assigning this unresolved trauma trait.
        }[];
    };

    @ManyToOne(() => User, { nullable: true })
    user?: User;

    @ManyToOne(() => Campaign, { nullable: true })
    campaign?: Campaign;

    @ManyToOne(() => World, { nullable: true })
    world?: World;
}
