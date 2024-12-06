import { ContentBase } from "../../class/ContentBase";
import { EquipmentSlotDTO } from "../../proto/common";
import { Serializable } from "../../decorator/serializable.decorator";
import { Serializer } from "../../serialize/serializer";
import { Item } from "../Item/Item";

export class EquipmentSlot extends ContentBase {
    @Serializable()
    name!: string

    @Serializable()
    allowedEntities!: string[] // e.g. ["ItemWeapon", "ItemMiscFishingRod"] for hand, or ["ItemWearableHelmet"] for a head slot

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
}
