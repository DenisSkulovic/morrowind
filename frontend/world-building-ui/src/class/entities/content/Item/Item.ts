import { TaggableContentBase } from "../../../../class/TaggableContentBase";
import { ItemActionEnum } from "../../../../enum/entityEnums";
import { serializeEnum, deserializeEnum } from "../../../../enum/util";
import { Serializable } from "../../../../decorator/serializable.decorator";
import { StorageSlot } from "../Slot/StorageSlot";
import { GridSize } from "../../../../class/GridSize";
import { FormField } from "../../../../decorator/form-field.decorator";
import { FieldComponentEnum } from "../../../../enum/FieldComponentEnum";
import { FormSelectOption } from "../../../../class/FormSelectOption";
import { Skill } from "../Skill/Skill";
import { DisplayField } from "../../../../decorator/display-field.decorator";
import { EntityDisplay } from "../../../../decorator/entity-display.decorator";
import { FilterOption } from "../../../../decorator/filter-option.decorator";
import { Context } from "../../../../class/Context";
import { SearchQuery } from "../../../../class/search/SearchQuery";
import { ItemRequirement } from "../../../../class/ItemRequirement";
import { StorageSlotDefinition } from "../../../../class/StorageSlotDefinition";
import { GridSizeDTO, ItemActionEnumDTO, ItemRequirementDTO, ItemRequirementsDTO, StorageSlotDefinitionDTO, StorageSlotDefinitionsDTO, StorageSlotDTO, StorageSlotsDTO } from "../../../../proto/common_pb";
import { SerializeStrategyEnum } from "../../../../serialize/serializer";

@EntityDisplay({
    title: 'Items',
    defaultSort: 'name'
})
export class Item extends TaggableContentBase {
    @DisplayField({ displayName: 'Name' })
    @FilterOption()
    @FormField({ component: FieldComponentEnum.TEXT_FIELD, label: 'Name', placeholder: 'Enter item name', required: true })
    @Serializable()
    name!: string; // Item name, e.g., "Iron Short Sword".

    @DisplayField({ displayName: 'Description' })
    @FormField({ component: FieldComponentEnum.TEXTAREA_FIELD, label: 'Description', placeholder: 'Enter item description', required: false })
    @Serializable()
    description?: string; // Item description or lore.

    // properties
    @DisplayField({
        displayName: 'Size',
        getValue: (item: Item) => `${item.size.width}x${item.size.height}`,
        width: 100,
    })
    @FormField({ component: FieldComponentEnum.OBJECT_FIELD, label: 'Size', required: true })
    @Serializable({ strategy: SerializeStrategyEnum.FULL, dtoClass: GridSizeDTO })
    size!: GridSize; // Grid size for grid-based inventories

    @DisplayField({ displayName: 'Weight' })
    @FilterOption()
    @FormField({ component: FieldComponentEnum.NUMBER_FIELD, label: 'Weight', placeholder: 'Enter item weight', required: true })
    @Serializable()
    weight!: number;

    @DisplayField({ displayName: 'Quantity' })
    @FormField({ component: FieldComponentEnum.NUMBER_FIELD, label: 'Quantity', placeholder: 'Enter quantity', required: true })
    @Serializable()
    quantity!: number;

    @DisplayField({ displayName: 'Max Quantity' })
    @FormField({ component: FieldComponentEnum.NUMBER_FIELD, label: 'Max Quantity', placeholder: 'Enter maximum quantity', required: true })
    @Serializable()
    maxQuantity!: number;

    @DisplayField({ displayName: 'Base Value' })
    @FilterOption()
    @FormField({ component: FieldComponentEnum.NUMBER_FIELD, label: 'Base Value', placeholder: 'Enter base value in gold', required: true })
    @Serializable()
    baseValue!: number; // Monetary value in gold coins. To be adjusted with skills, modifiers, attitude, etc.

    @DisplayField({ displayName: 'Trained Skill' })
    @FilterOption()
    @FormField({
        component: FieldComponentEnum.SELECT_FIELD,
        label: 'Trained Skill',
        search: async (filter: SearchQuery, context: Context): Promise<FormSelectOption[]> => {
            return (await Skill.search<Skill>(filter, context)).map((item: Skill) => {
                return { id: item.id, label: item.name }
            })
        },
        required: false
    })
    @Serializable()
    trainedSkill?: string

    @DisplayField({ displayName: 'Actions' })
    @FilterOption()
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
    @Serializable({ strategy: SerializeStrategyEnum.ENUM, internalEnum: ItemActionEnum, protoEnum: ItemActionEnumDTO })
    actions?: ItemActionEnum[];

    @FormField({ component: FieldComponentEnum.NESTED_FORM, label: 'Requirements', required: false })
    @Serializable({ strategy: SerializeStrategyEnum.FULL, dtoClass: ItemRequirementDTO, dtoArrClass: ItemRequirementsDTO })
    requirements?: ItemRequirement[]

    // flags
    @DisplayField({ displayName: 'Stackable' })
    @FilterOption()
    @FormField({ component: FieldComponentEnum.CHECKBOX_FIELD, label: 'Stackable', required: true })
    @Serializable()
    stackable!: boolean;

    // slots
    @Serializable()
    storageSlot?: string; // the slot where this item is stored (in a backpack section, for e.g., for in a pocket)

    @Serializable()
    gridPosition?: { x: number; y: number }; // Item's top-left corner on the grid inside a storage slot

    @FormField({ component: FieldComponentEnum.NESTED_FORM, label: 'Storage Slots', required: false })
    @Serializable({ strategy: SerializeStrategyEnum.FULL, dtoClass: StorageSlotDTO, dtoArrClass: StorageSlotsDTO })
    storageSlots?: StorageSlot[]; // the storage slots this item itself has (this is a backpack and it has 3 sections, i.e. slots)

    @FormField({ component: FieldComponentEnum.NESTED_FORM, label: 'Storage Slot Definitions', required: false })
    @Serializable({ strategy: SerializeStrategyEnum.FULL, dtoClass: StorageSlotDefinitionDTO, dtoArrClass: StorageSlotDefinitionsDTO })
    storageSlotDefinition?: StorageSlotDefinition[]; // the storage slots this item itself has (this is a backpack and it has 3 sections, i.e. slots)

    @FormField({ component: FieldComponentEnum.TEXT_FIELD, label: 'Equipment Slot', placeholder: 'Enter equipment slot', required: false })
    @Serializable()
    equipmentSlot?: string; // the equipment slot where this item sits (sword in hand, for e.g.)

}
