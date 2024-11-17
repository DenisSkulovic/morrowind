import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, ManyToMany } from "typeorm";
import { ContentBase } from "./ContentBase";

@Entity()
export class Inventory extends ContentBase {
    id_prefix = "INVENTORY"

    @Column("jsonb")
    equipment: Record<string, string | null>; // FK to Item entity

    @Column("jsonb")
    backpack: {
        maxWeight: number;
        sections: Array<{
            type: string; // main_section, side_pocket, etc.
            maxVolume: number;
            items: Array<{
                id: string; // FK to Item
                quantity: number;
            }>;
        }>;
    };

    @Column("float", { default: 0 })
    totalWeight: number; // Computed from item weights
}
