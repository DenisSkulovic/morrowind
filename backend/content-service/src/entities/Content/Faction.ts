import { Entity, TableInheritance } from "typeorm";
import { ContentBase } from "./ContentBase";

@Entity()
@TableInheritance({ column: { type: "varchar", name: "type" } }) // Discriminator column for inheritance
export class Faction extends ContentBase {
    id_prefix = "FACTION"
}