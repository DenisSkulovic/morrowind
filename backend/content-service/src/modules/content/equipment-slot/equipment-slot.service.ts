import { Injectable } from "@nestjs/common";
import { ContentBase } from "../../../ContentBase";
import { EntityConstructor } from "../../../types";
import { Item } from "../entities/Item/Item";
import { EquipmentSlot } from "../entities/Slot/EquipmentSlot";
import { ContentEntityMapService } from "../../../CONTENT_ENTITY_MAP";
import { EntityEnum } from "../../../common/enum/EntityEnum";
import { sanitizeEntityName } from "../../../util/sanitizeEntityName";

@Injectable()
export class EquipmentSlotService {

    constructor() { }

    /**
     * Equips items into the character's equipment slots based on the provided logic.
     * @param equipmentSlots Array of EquipmentSlot objects assigned to the character.
     * @param items Array of Item objects to be equipped.
     */
    public equipItems(
        equipmentSlots: EquipmentSlot[],
        items: Item[]
    ): { equippedItems: Item[]; unequippedItems: Item[] } {
        console.log(`[EquipmentSlotService - equipItems]`)
        const equippedItems: Item[] = [];
        const unequippedItems: Item[] = [...items];

        // Iterate through each equipment slot
        for (const slot of equipmentSlots) {
            const allowedEntities: string[] = slot.allowedEntities;
            let bestItem: Item | null = null;

            // Iterate through allowed entities in priority order
            for (const entityName of allowedEntities) {
                const entityNameEnum: EntityEnum = sanitizeEntityName(entityName)
                const entityConstructor: EntityConstructor<ContentBase> | undefined = ContentEntityMapService.getEntityConstructor<ContentBase>(entityNameEnum)
                if (!entityConstructor) throw new Error(`unrecognized entity name in allowedEntities: "${entityName}" of equipment slot: "${slot.name}"`)

                // Filter items that can be placed in this slot
                const candidateItems = unequippedItems.filter((item: Item) => {
                    if (item instanceof entityConstructor) { // Direct match
                        return true
                    }
                    if (Object.getPrototypeOf(item) instanceof entityConstructor) { // Inherited match
                        return true
                    }
                    return false
                }
                );

                // TODO: Add complex decision-making logic here.
                // Example: Consider armor protection, weapon damage, NPC preferences, etc.
                const selectedItem = this._selectBestItem(candidateItems, slot)

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
    private _selectBestItem(items: Item[], slot: EquipmentSlot): Item | null {
        // TODO: Implement complex logic for selecting the best item.
        // Examples:
        // - Consider item stats like protection, damage, weight, etc.
        // - Check NPC preferences or traits (e.g., prefers heavy armor).
        // - Evaluate the context (e.g., equip a weapon even if it means leaving a shield unequipped).
        return items.sort((a, b) => b.baseValue - a.baseValue)[0] || null; // Fallback to base price for now
    }
}
