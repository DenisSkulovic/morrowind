import { ChildEntity } from "typeorm";
import { ItemWearable } from "./ItemWearable";

@ChildEntity()
export class ItemWearableBackpack extends ItemWearable {
    idPrefix = "ITEM_WEARABLE_BACKPACK"

}
