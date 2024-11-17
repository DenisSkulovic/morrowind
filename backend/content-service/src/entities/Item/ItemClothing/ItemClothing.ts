import { ChildEntity } from "typeorm";
import { Item } from "../Item";

@ChildEntity()
export class ItemClothing extends Item {
    id_prefix = "ITEM_CLOTHING"

}
