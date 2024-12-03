import { ChildEntity, Column } from "typeorm";
import { Item } from "../Item";

@ChildEntity()
export class ItemMisc extends Item {
    idPrefix = "ITEM_MISC";

}
