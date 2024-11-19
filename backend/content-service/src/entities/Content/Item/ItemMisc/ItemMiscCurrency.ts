import { ChildEntity, Column } from "typeorm";
import { ItemMisc } from "./ItemMisc";

@ChildEntity()
export class ItemMiscCurrency extends ItemMisc {
    id_prefix = "ITEM_MISC_CURRENCY"

    @Column({default: true})
    stackable!: boolean;

}