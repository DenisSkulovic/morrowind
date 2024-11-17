import { Entity, Column } from "typeorm";
import { ContentBase } from "./ContentBase";

@Entity()
export class Need extends ContentBase {
    id_prefix = "NEED";

    /**
     * Name of the need (e.g., Hunger, Security, Financial Stability).
     */
    @Column()
    name: string;

    /**
     * Description of the need.
     */
    @Column()
    description: string;

    /**
     * The type of need (e.g., dynamic, threshold, external).
     */
    @Column()
    type: string; // "dynamic", "threshold", "external".

    /**
     * Decay rate for dynamic needs.
     */
    @Column("float", { nullable: true })
    decayRate?: number; // Example: 0.05 per tick (for dynamic needs).

    /**
     * Minimum threshold for threshold-based needs.
     */
    @Column("float", { nullable: true })
    threshold?: number; // Example: Financial Stability = 10 coins.

    /**
     * Source of external needs, if applicable.
     */
    @Column("jsonb", { nullable: true })
    externalSource?: {
        type: string; // Example: "location_security".
        value?: number; // Current level of security in the environment.
    };

    /**
     * Effects triggered when the need is unmet.
     */
    @Column("jsonb", { nullable: true })
    neglectEffects?: string[]; // Links to Effect IDs.
}
