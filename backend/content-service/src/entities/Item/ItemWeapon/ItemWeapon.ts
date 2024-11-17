import { ChildEntity, Column } from "typeorm";
import { Item } from "../Item";

@ChildEntity()
export class ItemWeapon extends Item {
    id_prefix = "ITEM_WEAPON";

    @Column()
    damage: string; // Damage dice, e.g., "1d6", "2d8".

    @Column()
    damage_type: string; // E.g., "Slashing", "Piercing", "Bludgeoning".

    @Column({ nullable: true })
    range?: string; // Range in feet for ranged weapons, e.g., "30/120".

    @Column({ default: false })
    two_handed: boolean; // Whether the weapon requires two hands.

    @Column({ default: false })
    finesse: boolean; // Whether the weapon can use Dexterity for attack rolls.

    @Column({ default: false })
    heavy: boolean; // Heavy weapon trait.

    @Column({ default: false })
    light: boolean; // Light weapon trait for dual wielding.
}
