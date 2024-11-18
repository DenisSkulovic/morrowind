import { ChildEntity, Column } from "typeorm";
import { ItemConsumable } from "../ItemConsumable";

@ChildEntity()
export class ItemDrinkable extends ItemConsumable {
    id_prefix = "ITEM_DRINKABLE";

    @Column({default: true})
    drinkable: boolean;
}
