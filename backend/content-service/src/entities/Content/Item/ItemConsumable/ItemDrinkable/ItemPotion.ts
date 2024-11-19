import { ChildEntity, Column } from "typeorm";
import { ItemDrinkable } from "./ItemDrinkable";

@ChildEntity()
export class ItemPotion extends ItemDrinkable {
    id_prefix = "ITEM_POTION";

}
