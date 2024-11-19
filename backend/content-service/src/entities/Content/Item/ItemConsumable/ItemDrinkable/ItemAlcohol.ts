import { ChildEntity, Column } from "typeorm";
import { ItemDrinkable } from "./ItemDrinkable";

@ChildEntity()
export class ItemAlcohol extends ItemDrinkable {
    id_prefix = "ITEM_ALCOHOL";

}
