import { ChildEntity, Column } from "typeorm";
import { ItemRepairable } from "../ItemRepairable";
import { Serializable } from "../../../../../../decorator/serializable.decorator";

@ChildEntity()
export class ItemWearable extends ItemRepairable {
    id_prefix = "ITEM_WEARABLE"

    @Column({ default: null, nullable: true })
    @Serializable()
    armor_class!: number; // AC provided to that body part.

    @Column({ default: 0 })
    @Serializable()
    durability!: number;

    @Column({ default: 0 })
    @Serializable()
    maxDurability!: number;

    @Column({ nullable: true })
    @Serializable()
    stealth_disadvantage?: boolean; // Whether wearing the armor imposes disadvantage on Stealth checks.

}
