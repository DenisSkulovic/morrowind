import { ChildEntity } from "typeorm";
import { ItemWearable } from "./ItemWearable";

@ChildEntity()
export class ItemWearableBackpack extends ItemWearable {
    id_prefix = "ITEM_WEARABLE_BACKPACK"

}
