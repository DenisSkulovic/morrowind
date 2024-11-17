import { ChildEntity, Column } from "typeorm";
import { ItemDrink } from "./ItemDrink";

@ChildEntity()
export class ItemAlcohol extends ItemDrink {
    id_prefix = "ITEM_ALCOHOL";

    @Column()
    intoxication: number; // Level of intoxication caused.

    @Column()
    mood_boost: number; // Temporary improvement to recreation or mood.
}
