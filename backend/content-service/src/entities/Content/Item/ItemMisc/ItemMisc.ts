import { ChildEntity, Column } from "typeorm";
import { Item } from "../Item";

@ChildEntity()
export class ItemMisc extends Item {
    id_prefix = "ITEM_MISC";

}
