import { ChildEntity, Column } from "typeorm";
import { Item } from "../Item";
import { Serializable } from "../../../../../decorator/serializable.decorator";

@ChildEntity()
export class ItemRepairable extends Item {
    idPrefix = "ITEM_REPAIRABLE";

    @Column({ default: true })
    @Serializable()
    repairable!: boolean;

    @Column({ default: 0 })
    @Serializable()
    durability!: number;

    @Column({ default: 0 })
    @Serializable()
    maxDurability!: number;
}
