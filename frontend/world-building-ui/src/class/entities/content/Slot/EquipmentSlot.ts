import { ContentBase } from "../../../../class/ContentBase";
import { Serializable } from "../../../../decorator/serializable.decorator";
import { Item } from "../Item/Item";
import { FormField } from "../../../../decorator/form-field.decorator";
import { FieldComponentEnum } from "../../../../enum/FieldComponentEnum";
import { EntityDisplay } from "../../../../decorator/entity-display.decorator";
import { DisplayField } from "../../../../decorator/display-field.decorator";
import { FilterOption } from "../../../../decorator/filter-option.decorator";
import { EquipmentSlotDTO } from "../../../../proto/common_pb";

@EntityDisplay({
    title: 'Equipment Slots',
    defaultSort: 'name'
})
export class EquipmentSlot extends ContentBase {
    @DisplayField({
        order: 1,
        displayName: 'Name'
    })
    @FilterOption()
    @FormField({ component: FieldComponentEnum.TEXT_FIELD, label: 'Name', placeholder: 'Enter equipment slot name', required: true })
    @Serializable()
    name!: string

    @FormField({ component: FieldComponentEnum.MULTI_SELECT_FIELD, label: 'Allowed Entities', placeholder: 'Select allowed item types', required: true })
    @Serializable()
    allowedEntities!: string[] // e.g. ["ItemWeapon", "ItemMiscFishingRod"] for hand, or ["ItemWearableHelmet"] for a head slot

    @FormField({ component: FieldComponentEnum.ITEM_LIST_FIELD, label: 'Equipped Item', required: false })
    @Serializable({ strategy: 'full', getDTOInstance: () => new EquipmentSlotDTO() })
    equippedItem?: Item;

    @Serializable()
    character?: string; // The character owning this slot (i.e. left hand slot, right hand slot, head slot)

}
