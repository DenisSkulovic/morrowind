import { ChildEntity } from "typeorm";
import { ItemClothing } from "./ItemClothing";

@ChildEntity()
export class ItemClothingClothesPants extends ItemClothing {
    id_prefix = "ITEM_CLOTHING_CLOTHES_PANTS"

}
