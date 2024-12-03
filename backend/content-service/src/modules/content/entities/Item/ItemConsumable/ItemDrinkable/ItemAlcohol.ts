import { ChildEntity } from "typeorm";
import { ItemDrinkable } from "./ItemDrinkable";

@ChildEntity()
export class ItemAlcohol extends ItemDrinkable {
    idPrefix = "ITEM_ALCOHOL";

}
