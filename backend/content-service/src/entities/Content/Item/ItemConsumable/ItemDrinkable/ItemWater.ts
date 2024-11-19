import { ChildEntity, Column } from "typeorm";
import { ItemDrinkable } from "./ItemDrinkable";

@ChildEntity()
export class ItemWater extends ItemDrinkable {
    id_prefix = "ITEM_WATER";

    @Column({default: 0})
    thirst_quenched!: number; // Amount of thirst satisfied.
}
