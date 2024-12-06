import { Serializable } from "../../../../decorator/serializable.decorator";
import { ItemRepairable } from "../ItemRepairable";

export class ItemWearable extends ItemRepairable {
    @Serializable()
    armorClass!: number;

    @Serializable()
    stealthDisadvantage?: boolean;

}
