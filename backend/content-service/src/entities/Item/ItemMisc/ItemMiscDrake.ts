import { ChildEntity } from "typeorm";
import { ItemMisc } from "./ItemMisc";

@ChildEntity()
export class ItemMiscDrake extends ItemMisc {
    id_prefix = "ITEM_MISC_DRAKE"

}
