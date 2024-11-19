import { TableInheritance, Entity, Column } from "typeorm";
import { ContentBase } from "./ContentBase";

@Entity()
@TableInheritance({ column: { type: "varchar", name: "type" } }) // Discriminator column for inheritance
export class PersonalityProfile extends ContentBase {
    id_prefix = "PROFILE";

    /**
     * Name of the personality profile (e.g., "The Reformer").
     */
    @Column()
    name: string;

    /**
     * Core type with wing (e.g., "5w4", "1w9").
     */
    @Column()
    coreType: string; // Enneagram type with wing as a string.

    /**
     * List of traits associated with the profile, each with a probability.
     */
    @Column("jsonb")
    traits: {
        name: string;
        probability: number; // Probability of assigning this trait during generation.
    }[];

    /**
     * Effects of trauma on behavior and traits, each with a probability.
     */
    @Column("jsonb", { nullable: true })
    traumaInfluence?: {
        processed?: {
            name: string;
            probability: number; // Probability of assigning this processed trauma trait.
        }[];
        unresolved?: {
            name: string;
            probability: number; // Probability of assigning this unresolved trauma trait.
        }[];
    };
}
