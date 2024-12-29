import { ContentBase } from "../../../../class/ContentBase";
import { Serializable } from "../../../../decorator/serializable.decorator";
import { FormField } from "../../../../decorator/form-field.decorator";
import { FieldComponentEnum } from "../../../../enum/FieldComponentEnum";
import { EntityDisplay } from "../../../../decorator/entity-display.decorator";
import { DisplayField } from "../../../../decorator/display-field.decorator";
import { FilterOption, FilterOptionTypeEnum } from "../../../../decorator/filter-option.decorator";
import { EntityEnum } from "../../../../enum/EntityEnum";

@EntityDisplay({
    title: 'Equipment Slots',
    defaultSort: 'name'
})
export class EquipmentSlot extends ContentBase {
    @DisplayField({
        displayName: 'Name'
    })
    @FilterOption({ type: FilterOptionTypeEnum.TEXT })
    @FormField({ component: FieldComponentEnum.TEXT_FIELD, label: 'Name', placeholder: 'Enter equipment slot name', required: true })
    @Serializable()
    name!: string

    @DisplayField({ displayName: 'Allowed Entities' })
    @FilterOption({ type: FilterOptionTypeEnum.MULTI_SELECT, enum: EntityEnum })
    @FormField({ component: FieldComponentEnum.MULTI_SELECT_FIELD, label: 'Allowed Entities', placeholder: 'Select allowed item types', required: true })
    @Serializable()
    allowedEntities!: EntityEnum[] // e.g. ["ItemWeapon", "ItemMiscFishingRod"] for hand, or ["ItemWearableHelmet"] for a head slot

    @DisplayField({ displayName: 'Equipped Item' })
    @FormField({ component: FieldComponentEnum.ITEM_LIST_FIELD, label: 'Equipped Item', required: false })
    @Serializable()
    equippedItem?: string;

    @DisplayField({ displayName: 'Character' })
    @FilterOption({ type: FilterOptionTypeEnum.TEXT })
    @Serializable()
    character?: string; // The character owning this slot (i.e. left hand slot, right hand slot, head slot)

}
