import { ChildEntity, Column } from "typeorm";
import { ItemDrinkable } from "./ItemDrinkable";

@ChildEntity()
export class ItemAlcohol extends ItemDrinkable {
    id_prefix = "ITEM_ALCOHOL";

    @Column()
    intoxication: number; // Level of intoxication caused.

    @Column()
    mood_boost: number; // Temporary improvement to recreation or mood.
}
