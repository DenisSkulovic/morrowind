import { ChildEntity } from "typeorm";
import { ItemWearable } from "./ItemWearable";

@ChildEntity()
export class ItemWearableFeet extends ItemWearable {
    idPrefix = "ITEM_WEARABLE_FEET"

}
