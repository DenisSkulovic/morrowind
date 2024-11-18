import { ChildEntity } from "typeorm";
import { ItemWearable } from "./ItemWearable";

@ChildEntity()
export class ItemWearableFeet extends ItemWearable {
    id_prefix = "ITEM_WEARABLE_FEET"

}
