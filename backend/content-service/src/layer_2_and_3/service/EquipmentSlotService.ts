import { ContentBase } from "../../ContentBase";
import { contentEntityMap } from "../../contentEntityMap";
import { Item } from "../../entities/Content/Item/Item";
import { EquipmentSlot } from "../../entities/Content/Slot/EquipmentSlot";
import { EntityConstructor } from "../../types";

export class EquipmentSlotService {
    /**
     * Equips items into the character's equipment slots based on the provided logic.
     * @param equipmentSlots Array of EquipmentSlot objects assigned to the character.
     * @param items Array of Item objects to be equipped.
     */
    public static equipItems(
        equipmentSlots: EquipmentSlot[],
        items: Item[]
    ): { equippedItems: Item[]; unequippedItems: Item[] } {
        const equippedItems: Item[] = [];
        const unequippedItems: Item[] = [...items];

        // Iterate through each equipment slot
        for (const slot of equipmentSlots) {
            const allowedEntities = slot.allowedEntities;
            let bestItem: Item | null = null;

            // Iterate through allowed entities in priority order
            for (const entityName of allowedEntities) {
                console.log(`entityName`, entityName)
                const entityConstructor: EntityConstructor<ContentBase> | undefined = contentEntityMap[entityName];
                console.log(`entityConstructor`, entityConstructor)

                // Filter items that can be placed in this slot
                const candidateItems = unequippedItems.filter(
                    (item) =>
                        item instanceof entityConstructor || // Direct match
                        Object.getPrototypeOf(item) instanceof entityConstructor // Inherited match
                );

                // TODO: Add complex decision-making logic here.
                // Example: Consider armor protection, weapon damage, NPC preferences, etc.
                const selectedItem = EquipmentSlotService._selectBestItem(candidateItems, slot)

                if (selectedItem) {
                    bestItem = selectedItem;
                    break; // Stop checking other allowed entities for this slot
                }
            }

            if (bestItem) {
                // Equip the item to the slot
                slot.equippedItem = bestItem;
                equippedItems.push(bestItem);

                // Remove the equipped item from the unequippedItems array
                const index = unequippedItems.indexOf(bestItem);
                if (index > -1) unequippedItems.splice(index, 1);
            }
        }

        return { equippedItems, unequippedItems };
    }

    /**
     * Placeholder for complex selection logic in the future.
     * @param items Array of candidate items.
     * @param slot Equipment slot being considered.
     * @returns The best item to equip in the given slot.
     */
    private static _selectBestItem(items: Item[], slot: EquipmentSlot): Item | null {
        // TODO: Implement complex logic for selecting the best item.
        // Examples:
        // - Consider item stats like protection, damage, weight, etc.
        // - Check NPC preferences or traits (e.g., prefers heavy armor).
        // - Evaluate the context (e.g., equip a weapon even if it means leaving a shield unequipped).
        return items.sort((a, b) => b.base_value - a.base_value)[0] || null; // Fallback to base price for now
    }
}
