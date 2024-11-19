import { TableInheritance, Entity, Column } from "typeorm";
import { ContentBase } from "./ContentBase";

@Entity()
@TableInheritance({ column: { type: "varchar", name: "type" } }) // Discriminator column for inheritance
export class Resistance extends ContentBase {
    id_prefix = "RESISTANCE";

    @Column()
    name: string;

    @Column()
    effectType: string; // Matches Effect.type (e.g., "elemental", "status", "disease").

    @Column({ nullable: true })
    targetEffect?: string; // "fire", "poison", "disease".
}
