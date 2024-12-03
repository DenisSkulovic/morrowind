import { ChildEntity } from "typeorm";
import { ItemWearable } from "./ItemWearable";

@ChildEntity()
export class ItemWearableGreaves extends ItemWearable {
    idPrefix = "ITEM_WEARABLE_GREAVES"

}
