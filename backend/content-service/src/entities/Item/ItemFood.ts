import { ChildEntity, Column } from "typeorm";
import { Item } from "./Item";

@ChildEntity()
export class ItemFood extends Item {
    id_prefix = "ITEM_FOOD";

    @Column()
    nutrition: number; // Amount of hunger satisfied.

    @Column()
    spoilage: number; // Time in hours before the item spoils.
}
