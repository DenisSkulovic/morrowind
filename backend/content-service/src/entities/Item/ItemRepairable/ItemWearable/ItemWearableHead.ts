import { ChildEntity } from "typeorm";
import { ItemWearable } from "./ItemWearable";

@ChildEntity()
export class ItemWearableHead extends ItemWearable {
    id_prefix = "ITEM_WEARABLE_HEAD"

}
