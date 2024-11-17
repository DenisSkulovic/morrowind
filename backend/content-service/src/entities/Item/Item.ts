import { Entity, TableInheritance, Column } from "typeorm";
import { ContentBase } from "../ContentBase";

@Entity()
@TableInheritance({ column: { type: "varchar", name: "type" } }) // Discriminator column for inheritance
export class Item extends ContentBase {
    id_prefix = "ITEM";

    @Column()
    name: string; // Item name, e.g., "Iron Short Sword".

    @Column({ nullable: true })
    description?: string; // Item description or lore.

    @Column()
    weight: number; // Weight in pounds.

    @Column()
    value: number; // Monetary value in gold coins.

    @Column({ default: false })
    magical: boolean; // Whether the item has magical properties.
}
