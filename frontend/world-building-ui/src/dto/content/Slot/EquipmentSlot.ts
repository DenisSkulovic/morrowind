import { ContentBase } from "../../../class/ContentBase";
import { EquipmentSlotDTO } from "../../../proto/common";
import { Serializable } from "../../../decorator/serializable.decorator";
import { Serializer } from "../../../serialize/serializer";
import { Item } from "../Item/Item";
import { FormField } from "../../../decorator/form-field.decorator";
import { FieldComponentEnum } from "../../../enum/FieldComponentEnum";

export class EquipmentSlot extends ContentBase {
    @FormField({ component: FieldComponentEnum.TEXT_FIELD, label: 'Name', placeholder: 'Enter equipment slot name', required: true })
    @Serializable()
    name!: string

    @FormField({ component: FieldComponentEnum.MULTI_SELECT_FIELD, label: 'Allowed Entities', placeholder: 'Select allowed item types', required: true })
    @Serializable()
    allowedEntities!: string[] // e.g. ["ItemWeapon", "ItemMiscFishingRod"] for hand, or ["ItemWearableHelmet"] for a head slot

    @FormField({ component: FieldComponentEnum.ITEM_LIST_FIELD, label: 'Equipped Item', required: false })
    @Serializable({ strategy: 'full' })
    equippedItem?: Item;

    @Serializable()
    character?: string; // The character owning this slot (i.e. left hand slot, right hand slot, head slot)

    public toDTO(): EquipmentSlotDTO {
        return Serializer.toDTO(this);
    }

    public static fromDTO(dto: EquipmentSlotDTO): EquipmentSlot {
        const equipmentSlot = new EquipmentSlot();
        return Serializer.fromDTO(dto, equipmentSlot);
    }

    public static async search(filter?: any): Promise<EquipmentSlot[]> {
        // perform request to backend using the filter
        // return array of options
        return []
    }
}
