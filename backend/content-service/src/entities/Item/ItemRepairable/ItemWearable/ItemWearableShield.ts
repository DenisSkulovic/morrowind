import { ChildEntity } from "typeorm";
import { ItemWearable } from "./ItemWearable";

@ChildEntity()
export class ItemWearableShield extends ItemWearable {
    id_prefix = "ITEM_WEARABLE_SHIELD"

}
