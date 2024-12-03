import { ChildEntity } from "typeorm";
import { ItemWearable } from "./ItemWearable";

@ChildEntity()
export class ItemWearableClothesPants extends ItemWearable {
    idPrefix = "ITEM_WEARABLE_CLOTHES_PANTS"

}
