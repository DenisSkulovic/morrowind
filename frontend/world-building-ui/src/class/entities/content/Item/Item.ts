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
import { ContentService } from "../../../../services/ContentService";
import { Context } from "../../../../class/Context";
import { SearchQuery } from "../../../../class/search/SearchQuery";
import { ItemRequirement } from "../../../../class/ItemRequirement";
import { StorageSlotDefinition } from "../../../../class/StorageSlotDefinition";
import { ItemActionEnumDTO, ItemRequirementsDTO, StorageSlotDefinitionDTO, StorageSlotDTO } from "../../../../proto/common_pb";

@EntityDisplay({
    title: 'Items',
    defaultSort: 'name'
})
export class Item extends TaggableContentBase {
    @DisplayField({ order: 1 })
    @FilterOption()
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

    @DisplayField({ order: 2 })
    @FilterOption()
    @FormField({ component: FieldComponentEnum.NUMBER_FIELD, label: 'Weight', placeholder: 'Enter item weight', required: true })
    @Serializable()
    weight!: number;

    @FormField({ component: FieldComponentEnum.NUMBER_FIELD, label: 'Quantity', placeholder: 'Enter quantity', required: true })
    @Serializable()
    quantity!: number;

    @FormField({ component: FieldComponentEnum.NUMBER_FIELD, label: 'Max Quantity', placeholder: 'Enter maximum quantity', required: true })
    @Serializable()
    maxQuantity!: number;

    @DisplayField({ order: 3 })
    @FilterOption()
    @FormField({ component: FieldComponentEnum.NUMBER_FIELD, label: 'Base Value', placeholder: 'Enter base value in gold', required: true })
    @Serializable()
    baseValue!: number; // Monetary value in gold coins. To be adjusted with skills, modifiers, attitude, etc.

    @DisplayField({ order: 4 })
    @FilterOption()
    @FormField({
        component: FieldComponentEnum.SELECT_FIELD,
        label: 'Trained Skill',
        search: async (filter: SearchQuery, context: Context): Promise<FormSelectOption[]> => {
            return (await Skill.search(filter, context)).map((item: Skill) => {
                return { id: item.id, label: item.name }
            })
        },
        required: false
    })
    @Serializable()
    trainedSkill?: string

    @DisplayField({ order: 5 })
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
    @Serializable({
        serialize: (actions: ItemActionEnum[]) => actions.map(action => serializeEnum(ItemActionEnum, ItemActionEnumDTO, action)),
        deserialize: (actions: number[]) => actions.map(action => deserializeEnum(ItemActionEnumDTO, ItemActionEnum, action)),
    })
    actions?: ItemActionEnum[];

    @FormField({ component: FieldComponentEnum.NESTED_FORM, label: 'Requirements', required: false })
    @Serializable({ strategy: 'full', getDTOInstance: () => new ItemRequirementsDTO() })
    requirements?: ItemRequirement[]

    // flags
    @DisplayField({ order: 6 })
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
    @Serializable({ strategy: 'full', getDTOInstance: () => new StorageSlotDTO() })
    storageSlots?: StorageSlot[]; // the storage slots this item itself has (this is a backpack and it has 3 sections, i.e. slots)

    @FormField({ component: FieldComponentEnum.NESTED_FORM, label: 'Storage Slot Definitions', required: false })
    @Serializable({ strategy: 'full', getDTOInstance: () => new StorageSlotDefinitionDTO() })
    storageSlotDefinition?: StorageSlotDefinition[]; // the storage slots this item itself has (this is a backpack and it has 3 sections, i.e. slots)

    @FormField({ component: FieldComponentEnum.TEXT_FIELD, label: 'Equipment Slot', placeholder: 'Enter equipment slot', required: false })
    @Serializable()
    equipmentSlot?: string; // the equipment slot where this item sits (sword in hand, for e.g.)

    public static async search(filter: SearchQuery, context: Context): Promise<Item[]> {
        const contentService = new ContentService<Item>();
        const { results } = await contentService.searchContent('Item', filter, context);
        return results as Item[];
    }
}
