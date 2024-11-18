import { Entity, PrimaryColumn, Column } from "typeorm";
import { ContentBase } from "./ContentBase";
import { ItemSetCombinator } from "../layer_1/loaders/ItemSetLoader/types";

@Entity()
export class ItemSet extends ContentBase {
    id_prefix = "ITEM_SET"
    
    @PrimaryColumn({ type: "varchar" })
    id: string; // Unique identifier for the item set (e.g., "BARE_ARMS")

    @Column({ type: "jsonb" })
    set: ItemSetCombinator; // JSON structure for the set, stored as jsonb
}
