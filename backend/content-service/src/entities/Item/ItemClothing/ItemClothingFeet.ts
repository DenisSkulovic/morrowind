import { ChildEntity } from "typeorm";
import { ItemClothing } from "./ItemClothing";

@ChildEntity()
export class ItemClothingFeet extends ItemClothing {
    id_prefix = "ITEM_CLOTHING_FEET"

}
