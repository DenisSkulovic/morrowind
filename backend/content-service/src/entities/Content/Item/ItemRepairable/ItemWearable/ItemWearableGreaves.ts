import { ChildEntity } from "typeorm";
import { ItemWearable } from "./ItemWearable";

@ChildEntity()
export class ItemWearableGreaves extends ItemWearable {
    id_prefix = "ITEM_WEARABLE_GREAVES"

}
