import { ChildEntity, Column } from "typeorm";
import { Item } from "../Item";

@ChildEntity()
export class ItemMisc extends Item {
    id_prefix = "ITEM_MISC";

    @Column()
    use: string; // Functionality-specific description (e.g., "Fishing").

    @Column()
    durability: number; // Number of uses before it breaks.
}
