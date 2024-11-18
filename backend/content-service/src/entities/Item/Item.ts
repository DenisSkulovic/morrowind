import { Entity, TableInheritance, Column, ManyToOne } from "typeorm";
import { ContentBase } from "../ContentBase";
import { Skill } from "../Skill/Skill";

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
    base_value: number; // Monetary value in gold coins.

    @Column()
    protection: number; // Protection provided to that body part.

    @ManyToOne(() => Skill, { nullable: true })
    trained_skill?: Skill

    @Column("jsonb")
    requirements: { [type: string]: { [name: string]: number } }

}