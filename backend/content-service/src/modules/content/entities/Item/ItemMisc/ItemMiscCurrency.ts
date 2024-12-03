import { ChildEntity, Column } from "typeorm";
import { ItemMisc } from "./ItemMisc";
import { Serializable } from "../../../../../decorator/serializable.decorator";

@ChildEntity()
export class ItemMiscCurrency extends ItemMisc {
    idPrefix = "ITEM_MISC_CURRENCY"

    @Column({ default: true })
    @Serializable()
    stackable!: boolean;

}