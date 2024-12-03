import { ChildEntity, Column } from "typeorm";
import { ItemRepairable } from "../ItemRepairable";
import { Serializable } from "../../../../../../decorator/serializable.decorator";

@ChildEntity()
export class ItemWearable extends ItemRepairable {
    idPrefix = "ITEM_WEARABLE"

    @Column({ default: null, nullable: true })
    @Serializable()
    armorClass!: number; // AC provided to that body part.

    @Column({ default: 0 })
    @Serializable()
    durability!: number;

    @Column({ default: 0 })
    @Serializable()
    maxDurability!: number;

    @Column({ nullable: true })
    @Serializable()
    stealthDisadvantage?: boolean; // Whether wearing the armor imposes disadvantage on Stealth checks.

}
