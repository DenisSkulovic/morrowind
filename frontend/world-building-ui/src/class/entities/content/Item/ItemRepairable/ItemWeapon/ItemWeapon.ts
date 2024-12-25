import { DisplayField } from "../../../../../../decorator/display-field.decorator";
import { FormField } from "../../../../../../decorator/form-field.decorator";
import { Serializable } from "../../../../../../decorator/serializable.decorator";
import { FieldComponentEnum } from "../../../../../../enum/FieldComponentEnum";
import { ItemRepairable } from "../ItemRepairable";

export class ItemWeapon extends ItemRepairable {
    @FormField({ component: FieldComponentEnum.TEXT_FIELD, label: 'Damage Slash', placeholder: 'Enter damage slash', required: false })
    @DisplayField({ displayName: 'Damage Slash', getValue: (entity: ItemWeapon) => entity.damageSlash, width: 100, sortable: true })
    @Serializable()
    damageSlash?: string;

    @FormField({ component: FieldComponentEnum.TEXT_FIELD, label: 'Damage Pierce', placeholder: 'Enter damage pierce', required: false })
    @DisplayField({ displayName: 'Damage Pierce', getValue: (entity: ItemWeapon) => entity.damagePierce, width: 100, sortable: true })
    @Serializable()
    damagePierce?: string;

    @FormField({ component: FieldComponentEnum.TEXT_FIELD, label: 'Damage Blunt', placeholder: 'Enter damage blunt', required: false })
    @DisplayField({ displayName: 'Damage Blunt', getValue: (entity: ItemWeapon) => entity.damageBlunt, width: 100, sortable: true })
    @Serializable()
    damageBlunt?: string;

    @FormField({ component: FieldComponentEnum.TEXT_FIELD, label: 'Range', placeholder: 'Enter range', required: false })
    @DisplayField({ displayName: 'Range', getValue: (entity: ItemWeapon) => entity.range, width: 100, sortable: true })
    @Serializable()
    range?: string; // Range in feet for ranged weapons, e.g., "30/120".

    @FormField({ component: FieldComponentEnum.CHECKBOX_FIELD, label: 'Two Handed', required: true })
    @DisplayField({ displayName: 'Two Handed', getValue: (entity: ItemWeapon) => entity.twoHanded, width: 100, sortable: true })
    @Serializable()
    twoHanded!: boolean; // Whether the weapon requires two hands.

}
