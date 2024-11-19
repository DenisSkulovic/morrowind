import { Entity, TableInheritance } from "typeorm";
import { ContentBase } from "./ContentBase";

@Entity()
@TableInheritance({ column: { type: "varchar", name: "type" } }) // Discriminator column for inheritance
export class Addiction extends ContentBase {
    id_prefix = "ADDICTION"
}