import { ChildEntity, Column } from "typeorm";
import { ItemDrinkable } from "./ItemDrinkable";

@ChildEntity()
export class ItemPotion extends ItemDrinkable {
    idPrefix = "ITEM_POTION";

}
