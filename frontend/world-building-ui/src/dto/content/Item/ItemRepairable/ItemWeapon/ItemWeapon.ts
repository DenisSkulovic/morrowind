import { FormField } from "../../../../../decorator/form-field.decorator";
import { Serializable } from "../../../../../decorator/serializable.decorator";
import { FieldComponentEnum } from "../../../../../enum/FieldComponentEnum";
import { ItemRepairable } from "../ItemRepairable";

export class ItemWeapon extends ItemRepairable {
    @FormField({ component: FieldComponentEnum.TEXT_FIELD, label: 'Damage Slash', placeholder: 'Enter damage slash', required: false })
    @Serializable()
    damageSlash?: string;

    @FormField({ component: FieldComponentEnum.TEXT_FIELD, label: 'Damage Pierce', placeholder: 'Enter damage pierce', required: false })
    @Serializable()
    damagePierce?: string;

    @FormField({ component: FieldComponentEnum.TEXT_FIELD, label: 'Damage Blunt', placeholder: 'Enter damage blunt', required: false })
    @Serializable()
    damageBlunt?: string;

    @FormField({ component: FieldComponentEnum.TEXT_FIELD, label: 'Range', placeholder: 'Enter range', required: false })
    @Serializable()
    range?: string; // Range in feet for ranged weapons, e.g., "30/120".

    @FormField({ component: FieldComponentEnum.CHECKBOX_FIELD, label: 'Two Handed', required: true })
    @Serializable()
    twoHanded!: boolean; // Whether the weapon requires two hands.

}
