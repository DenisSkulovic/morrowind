import { ChildEntity } from "typeorm";
import { ItemWearable } from "./ItemWearable";

@ChildEntity()
export class ItemWearableShield extends ItemWearable {
    idPrefix = "ITEM_WEARABLE_SHIELD"

}
