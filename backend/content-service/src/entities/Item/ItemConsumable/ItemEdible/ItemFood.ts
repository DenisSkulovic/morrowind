import { ChildEntity, Column } from "typeorm";
import { ItemConsumable } from "./ItemConsumable";

@ChildEntity()
export class ItemFood extends ItemConsumable {
    id_prefix = "ITEM_FOOD";

    @Column()
    nutrition: number; // Amount of hunger satisfied.

    @Column()
    spoilage: number; // Time in hours before the item spoils.
}
