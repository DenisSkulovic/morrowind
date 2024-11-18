import { Entity, PrimaryColumn, Column } from "typeorm";
import { ContentBase } from "./ContentBase";

@Entity()
export class ItemSet extends ContentBase {
    id_prefix = "ITEM_SET"
    
    @PrimaryColumn({ type: "varchar" })
    id: string; // Unique identifier for the item set (e.g., "BARE_ARMS")

    @Column({ type: "jsonb" })
    set: Record<string, any>; // JSON structure for the set, stored as jsonb
}
