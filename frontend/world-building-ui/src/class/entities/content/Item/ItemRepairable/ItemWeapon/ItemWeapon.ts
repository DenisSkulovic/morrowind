import { DisplayField } from "../../../../../../decorator/display-field.decorator";
import { FilterOption, FilterOptionTypeEnum } from "../../../../../../decorator/filter-option.decorator";
import { FormField } from "../../../../../../decorator/form-field.decorator";
import { Serializable } from "../../../../../../decorator/serializable.decorator";
import { FieldComponentEnum } from "../../../../../../enum/FieldComponentEnum";
import { ItemRepairable } from "../ItemRepairable";

export class ItemWeapon extends ItemRepairable {
    @FormField({ component: FieldComponentEnum.TEXT_FIELD, label: 'Damage Slash', placeholder: 'Enter damage slash', required: false })
    @FilterOption({ type: FilterOptionTypeEnum.TEXT })
    @DisplayField({ displayName: 'Damage Slash', getValue: (entity: ItemWeapon) => entity.damageSlash, width: 100, sortable: true })
    @Serializable()
    damageSlash?: string;

    @FormField({ component: FieldComponentEnum.TEXT_FIELD, label: 'Damage Pierce', placeholder: 'Enter damage pierce', required: false })
    @FilterOption({ type: FilterOptionTypeEnum.TEXT })
    @DisplayField({ displayName: 'Damage Pierce', getValue: (entity: ItemWeapon) => entity.damagePierce, width: 100, sortable: true })
    @Serializable()
    damagePierce?: string;

    @FormField({ component: FieldComponentEnum.TEXT_FIELD, label: 'Damage Blunt', placeholder: 'Enter damage blunt', required: false })
    @FilterOption({ type: FilterOptionTypeEnum.TEXT })
    @DisplayField({ displayName: 'Damage Blunt', getValue: (entity: ItemWeapon) => entity.damageBlunt, width: 100, sortable: true })
    @Serializable()
    damageBlunt?: string;

    @FormField({ component: FieldComponentEnum.NUMBER_FIELD, label: 'Range', placeholder: 'Enter range', required: false })
    @FilterOption({ type: FilterOptionTypeEnum.NUMBER_RANGE, min: 0 })
    @DisplayField({ displayName: 'Range' })
    @Serializable()
    range?: number; // Range in meters for ranged weapons

    @FormField({ component: FieldComponentEnum.CHECKBOX_FIELD, label: 'Two Handed', required: true })
    @FilterOption({ type: FilterOptionTypeEnum.BOOLEAN })
    @DisplayField({ displayName: 'Two Handed' })
    @Serializable()
    twoHanded!: boolean; // Whether the weapon requires two hands.

}
