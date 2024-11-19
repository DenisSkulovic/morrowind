import { TableInheritance, Column, Entity } from "typeorm";
import { ContentBase } from "./ContentBase";


@Entity()
@TableInheritance({ column: { type: "varchar", name: "type" } }) // Discriminator column for inheritance
export class Status extends ContentBase {
    id_prefix = "STATUS";

    @Column()
    name: string;

    @Column()
    description: string;

    @Column()
    type: string; // "buff", "debuff", "neutral"

    @Column("jsonb", { nullable: true })
    effects: string[]; // Links to associated Effect IDs.

    @Column({ nullable: true })
    duration: number; // Duration in ticks (0 for permanent).
}
