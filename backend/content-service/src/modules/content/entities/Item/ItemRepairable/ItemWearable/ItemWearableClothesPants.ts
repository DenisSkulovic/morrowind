import { ChildEntity } from "typeorm";
import { ItemWearable } from "./ItemWearable";

@ChildEntity()
export class ItemWearableClothesPants extends ItemWearable {
    id_prefix = "ITEM_WEARABLE_CLOTHES_PANTS"

}
