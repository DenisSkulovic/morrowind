import { ChildEntity } from "typeorm";
import { ItemClothing } from "./ItemClothing";

@ChildEntity()
export class ItemClothingClothesTorso extends ItemClothing {
    id_prefix = "ITEM_CLOTHING_CLOTHES_TORSO"

}
