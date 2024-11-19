import { ChildEntity, Column } from "typeorm";
import { ItemConsumable } from "../ItemConsumable";

@ChildEntity()
export class ItemFood extends ItemConsumable {
    id_prefix = "ITEM_FOOD";

    @Column({default: 0})
    nutrition!: number; // Amount of hunger satisfied.

    @Column({default: 0})
    spoilage!: number; // Time in hours before the item spoils.
}
