import { serializeRequirement, deserializeRequirement, ItemRequirement } from "../../class/ItemRequirement";
import { serializeStorageSlotDefinitions, deserializeStorageSlotDefinitions, StorageSlotDefinition } from "../../class/StorageSlotDefinition";
import { TaggableContentBase } from "../../class/TaggableContentBase";
import { ItemActionEnum } from "../../enum/entityEnums";
import { serializeEnum, deserializeEnum } from "../../enum/util";
import { ItemActionEnumDTO, ItemDTO } from "../../proto/common";
import { Serializable } from "../../decorator/serializable.decorator";
import { Serializer } from "../../serialize/serializer";
import { StorageSlot } from "../Slot/StorageSlot";

export class Item extends TaggableContentBase {
    @Serializable()
    name!: string; // Item name, e.g., "Iron Short Sword".

    @Serializable()
    description?: string; // Item description or lore.

    // properties
    @Serializable()
    size!: [number, number]; // Grid size for grid-based inventories

    @Serializable()
    weight!: number;

    @Serializable()
    quantity!: number;

    @Serializable()
    maxQuantity!: number;

    @Serializable()
    baseValue!: number; // Monetary value in gold coins. To be adjusted with skills, modifiers, attitude, etc.

    @Serializable()
    trainedSkill?: string

    @Serializable({
        serialize: (actions: ItemActionEnum[]) => actions.map(action => serializeEnum(ItemActionEnum, ItemActionEnumDTO, action)),
        deserialize: (actions: number[]) => actions.map(action => deserializeEnum(ItemActionEnumDTO, ItemActionEnum, action)),
    })
    actions?: ItemActionEnum[];

    @Serializable({
        serialize: serializeRequirement,
        deserialize: deserializeRequirement
    })
    requirements?: ItemRequirement[]

    // flags
    @Serializable()
    stackable!: boolean;

    // slots
    @Serializable()
    storageSlot?: string; // the slot where this item is stored (in a backpack section, for e.g., for in a pocket)

    @Serializable()
    gridPosition?: { x: number; y: number }; // Item's top-left corner on the grid inside a storage slot

    @Serializable({ strategy: 'full' })
    storageSlots?: StorageSlot[]; // the storage slots this item itself has (this is a backpack and it has 3 sections, i.e. slots)

    @Serializable({
        serialize: serializeStorageSlotDefinitions,
        deserialize: deserializeStorageSlotDefinitions
    })
    storageSlotDefinition?: StorageSlotDefinition[]; // the storage slots this item itself has (this is a backpack and it has 3 sections, i.e. slots)

    @Serializable()
    equipmentSlot?: string; // the equipment slot where this item sits (sword in hand, for e.g.)

    public toDTO(): ItemDTO {
        return Serializer.toDTO(this);
    }

    public static fromDTO(dto: ItemDTO): Item {
        const item = new Item();
        return Serializer.fromDTO(dto, item);
    }



}

