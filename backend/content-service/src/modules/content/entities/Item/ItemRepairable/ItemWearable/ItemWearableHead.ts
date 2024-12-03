import { ChildEntity } from "typeorm";
import { ItemWearable } from "./ItemWearable";

@ChildEntity()
export class ItemWearableHead extends ItemWearable {
    idPrefix = "ITEM_WEARABLE_HEAD"

}
