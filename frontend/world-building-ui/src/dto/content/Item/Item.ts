import { ItemRequirement, serializeRequirements, deserializeRequirements } from "../../../class/ItemRequirement";
import { serializeStorageSlotDefinitions, deserializeStorageSlotDefinitions, StorageSlotDefinition } from "../../../class/StorageSlotDefinition";
import { TaggableContentBase } from "../../../class/TaggableContentBase";
import { ItemActionEnum } from "../../../enum/entityEnums";
import { serializeEnum, deserializeEnum } from "../../../enum/util";
import { ItemActionEnumDTO, ItemDTO } from "../../../proto/common";
import { Serializable } from "../../../decorator/serializable.decorator";
import { Serializer } from "../../../serialize/serializer";
import { StorageSlot } from "../Slot/StorageSlot";
import type { GridSize } from "../Slot/StorageSlot";
import { FormField } from "../../../decorator/form-field.decorator";
import { FieldComponentEnum } from "../../../enum/FieldComponentEnum";
import { FormSelectOption } from "../../../class/FormSelectOption";
import { Skill } from "../Skill/Skill";

export class Item extends TaggableContentBase {
    @FormField({ component: FieldComponentEnum.TEXT_FIELD, label: 'Name', placeholder: 'Enter item name', required: true })
    @Serializable()
    name!: string; // Item name, e.g., "Iron Short Sword".

    @FormField({ component: FieldComponentEnum.TEXTAREA_FIELD, label: 'Description', placeholder: 'Enter item description', required: false })
    @Serializable()
    description?: string; // Item description or lore.

    // properties
    @FormField({ component: FieldComponentEnum.OBJECT_FIELD, label: 'Size', required: true })
    @Serializable()
    size!: GridSize; // Grid size for grid-based inventories

    @FormField({ component: FieldComponentEnum.NUMBER_FIELD, label: 'Weight', placeholder: 'Enter item weight', required: true })
    @Serializable()
    weight!: number;

    @FormField({ component: FieldComponentEnum.NUMBER_FIELD, label: 'Quantity', placeholder: 'Enter quantity', required: true })
    @Serializable()
    quantity!: number;

    @FormField({ component: FieldComponentEnum.NUMBER_FIELD, label: 'Max Quantity', placeholder: 'Enter maximum quantity', required: true })
    @Serializable()
    maxQuantity!: number;

    @FormField({ component: FieldComponentEnum.NUMBER_FIELD, label: 'Base Value', placeholder: 'Enter base value in gold', required: true })
    @Serializable()
    baseValue!: number; // Monetary value in gold coins. To be adjusted with skills, modifiers, attitude, etc.

    @FormField({
        component: FieldComponentEnum.SELECT_FIELD,
        label: 'Trained Skill',
        search: async (filter): Promise<FormSelectOption[]> => {
            return (await Skill.search(filter)).map((item: Skill) => {
                return { id: item.id, label: item.name }
            })
        },
        required: false
    })
    @Serializable()
    trainedSkill?: string

    @FormField({
        component: FieldComponentEnum.MULTI_SELECT_FIELD,
        label: 'Actions',
        search: async (): Promise<FormSelectOption[]> => {
            return Object.values(ItemActionEnum).map((value) => {
                return { id: value, label: value }
            })
        },
        required: false
    })
    @Serializable({
        serialize: (actions: ItemActionEnum[]) => actions.map(action => serializeEnum(ItemActionEnum, ItemActionEnumDTO, action)),
        deserialize: (actions: number[]) => actions.map(action => deserializeEnum(ItemActionEnumDTO, ItemActionEnum, action)),
    })
    actions?: ItemActionEnum[];

    @FormField({ component: FieldComponentEnum.NESTED_FORM, label: 'Requirements', required: false })
    @Serializable({
        serialize: serializeRequirements,
        deserialize: deserializeRequirements
    })
    requirements?: ItemRequirement[]

    // flags
    @FormField({ component: FieldComponentEnum.CHECKBOX_FIELD, label: 'Stackable', required: true })
    @Serializable()
    stackable!: boolean;

    // slots
    @Serializable()
    storageSlot?: string; // the slot where this item is stored (in a backpack section, for e.g., for in a pocket)

    @Serializable()
    gridPosition?: { x: number; y: number }; // Item's top-left corner on the grid inside a storage slot

    @FormField({ component: FieldComponentEnum.NESTED_FORM, label: 'Storage Slots', required: false })
    @Serializable({ strategy: 'full' })
    storageSlots?: StorageSlot[]; // the storage slots this item itself has (this is a backpack and it has 3 sections, i.e. slots)

    @FormField({ component: FieldComponentEnum.NESTED_FORM, label: 'Storage Slot Definitions', required: false })
    @Serializable({
        serialize: serializeStorageSlotDefinitions,
        deserialize: deserializeStorageSlotDefinitions
    })
    storageSlotDefinition?: StorageSlotDefinition[]; // the storage slots this item itself has (this is a backpack and it has 3 sections, i.e. slots)

    @FormField({ component: FieldComponentEnum.TEXT_FIELD, label: 'Equipment Slot', placeholder: 'Enter equipment slot', required: false })
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
