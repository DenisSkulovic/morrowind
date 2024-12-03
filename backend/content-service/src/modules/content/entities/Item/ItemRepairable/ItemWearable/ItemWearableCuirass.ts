import { ChildEntity, Column } from "typeorm";
import { ItemWearable } from "./ItemWearable";

@ChildEntity()
export class ItemWearableCuirass extends ItemWearable {
    idPrefix = "ITEM_WEARABLE_CUIRASS";
}
