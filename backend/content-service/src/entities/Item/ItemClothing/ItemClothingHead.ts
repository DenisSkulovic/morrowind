import { ChildEntity } from "typeorm";
import { ItemClothing } from "./ItemClothing";

@ChildEntity()
export class ItemClothingHead extends ItemClothing {
    id_prefix = "ITEM_CLOTHING_HEAD"

}
