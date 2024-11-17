import { ChildEntity } from "typeorm";
import { ItemClothing } from "./ItemClothing";

@ChildEntity()
export class ItemClothingHelmet extends ItemClothing {
    id_prefix = "ITEM_CLOTHING_HELMET"

}
