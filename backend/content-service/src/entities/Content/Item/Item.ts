import { Entity, TableInheritance, Column, ManyToOne } from "typeorm";
import { ContentBase } from "../ContentBase";
import { Skill } from "../Skill/Skill";
import { ItemInstanceService } from "../../../service/ItemInstanceService";

@Entity()
@TableInheritance({ column: { type: "varchar", name: "type" } })
export class Item extends ContentBase {
    id_prefix = "ITEM";

    @Column({ nullable: true })
    instance_id: string;

    @Column()
    name: string; // Item name, e.g., "Iron Short Sword".

    @Column({ nullable: true })
    description?: string; // Item description or lore.

    @Column()
    weight: number;

    @Column()
    quantity: number;

    @Column()
    base_value: number; // Monetary value in gold coins.

    @ManyToOne(() => Skill, { nullable: true })
    trained_skill?: Skill

    @Column("jsonb")
    requirements: { [type: string]: { [name: string]: number | boolean } }

    @Column({ default: false })
    consumable: boolean;

    @Column({ default: false })
    stackable: boolean;

    @Column({ default: false })
    repairable: boolean;

    @Column({ default: false })
    drinkable: boolean;

    @Column({ default: false })
    edible: boolean;

    public async merge(item2: this): Promise<this> {
        return ItemInstanceService.merge(this, item2);
    }
}