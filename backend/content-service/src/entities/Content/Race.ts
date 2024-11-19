import { Entity, TableInheritance, Column } from "typeorm";
import { ContentBase } from "./ContentBase";

@Entity()
@TableInheritance({ column: { type: "varchar", name: "type" } }) // Discriminator column for inheritance
export class Race extends ContentBase {
    id_prefix = "RACE"

    @Column()
    name: Record<string, string>; // Localized names
}
