import { ChildEntity, Column } from "typeorm";
import { ItemDrinkable } from "./ItemDrinkable";

@ChildEntity()
export class ItemWater extends ItemDrinkable {
    id_prefix = "ITEM_WATER";

    @Column()
    thirst_quenched: number; // Amount of thirst satisfied.
}
