import { Column, Entity } from "typeorm";
import { ContentBase } from "./ContentBase";


@Entity()
export class Disease extends ContentBase {
    id_prefix = "DISEASE";

    @Column()
    name: string;

    @Column()
    description: string;

    @Column()
    severity: string; // "mild", "moderate", "severe".

    @Column("jsonb", { nullable: true })
    effects: string[]; // Links to associated Effect IDs.

    @Column("jsonb", { nullable: true })
    resistances: string[]; // Links to associated Resistance IDs.
}
