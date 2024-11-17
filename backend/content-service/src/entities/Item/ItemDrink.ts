import { ChildEntity, Column } from "typeorm";
import { Item } from "./Item";

@ChildEntity()
export class ItemDrink extends Item {
    id_prefix = "ITEM_DRINK";

    @Column()
    thirst_quenched: number; // Amount of thirst satisfied.

    @Column()
    refills: number; // Number of uses for reusable drinkable items.
}
