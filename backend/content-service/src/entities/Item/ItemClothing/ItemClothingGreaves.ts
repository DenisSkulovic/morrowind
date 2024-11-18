import { ChildEntity } from "typeorm";
import { ItemClothing } from "./ItemClothing";

@ChildEntity()
export class ItemClothingGreaves extends ItemClothing {
    id_prefix = "ITEM_CLOTHING_GREAVES"

}
