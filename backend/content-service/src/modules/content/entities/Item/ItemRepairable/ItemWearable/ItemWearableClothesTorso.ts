import { ChildEntity } from "typeorm";

import { ItemWearable } from "./ItemWearable";

@ChildEntity()
export class ItemWearableClothesTorso extends ItemWearable {
    idPrefix = "ITEM_WEARABLE_CLOTHES_TORSO"

}
