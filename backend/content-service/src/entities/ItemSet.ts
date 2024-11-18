import { Entity, PrimaryColumn, Column } from "typeorm";

@Entity()
export class ItemSet {
    @PrimaryColumn({ type: "varchar" })
    id: string; // Unique identifier for the item set (e.g., "BARE_ARMS")

    @Column({ type: "jsonb" })
    set: Record<string, any>; // JSON structure for the set, stored as jsonb
}
