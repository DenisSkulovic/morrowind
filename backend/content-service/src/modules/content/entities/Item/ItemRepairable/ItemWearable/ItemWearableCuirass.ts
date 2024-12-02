import { ChildEntity, Column } from "typeorm";
import { ItemWearable } from "./ItemWearable";

@ChildEntity()
export class ItemWearableCuirass extends ItemWearable {
    id_prefix = "ITEM_WEARABLE_CUIRASS";
}
