import { ChildEntity, Column } from "typeorm";
import { Item } from "../Item";
import { Serializable } from "../../../../../decorator/serializable.decorator";

@ChildEntity()
export class ItemConsumable extends Item {
    idPrefix = "ITEM_CONSUMABLE";

    @Column({ default: true })
    @Serializable()
    consumable!: boolean;

    @Column({ default: true })
    @Serializable()
    stackable!: boolean;

}
