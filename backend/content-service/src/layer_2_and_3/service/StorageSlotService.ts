import { Item } from "../../entities/Content/Item/Item";
import { StorageSlot, StorageGrid } from "../../entities/Content/Slot/StorageSlot";


export class StorageSlotService {
    // -------------------- Grid-related methods --------------------

    private static _canPlaceItemIntoGrid(
        grid: StorageGrid,
        item: Item,
        grid_position: { x: number; y: number }
    ): boolean {


        const [ width, height ] = item.size!;
        const { x, y } = grid_position;

        // Check bounds
        if (x + width > grid.length || y + height > grid[0].length) return false;

        // Check for collisions
        for (let i = x; i < x + width; i++) {
            for (let j = y; j < y + height; j++) {
                if (grid[i][j] !== null) return false;
            }
        }

        return true;
    }

    private static _placeItemIntoGrid(grid: StorageGrid, item: Item, grid_position: { x: number; y: number }): void {
        const [ width, height ] = item.size!;
        const { x, y } = grid_position;

        for (let i = x; i < x + width; i++) {
            for (let j = y; j < y + height; j++) {
                grid[i][j] = item.id; // Mark grid cells with the item's ID
            }
        }

        item.grid_position = grid_position; // Record item's position
    }

    private static _removeItemFromGrid(grid: StorageGrid, item: Item): void {
        const { x, y } = item.grid_position!;
        const [ width, height ] = item.size!;

        for (let i = x; i < x + width; i++) {
            for (let j = y; j < y + height; j++) {
                grid[i][j] = null; // Clear the item's ID from the grid
            }
        }

        item.grid_position = undefined; // Clear the item's recorded position
    }

    private static _autoPlaceItemIntoGrid(grid: StorageGrid, item: Item): { x: number; y: number } | null {
        for (let i = 0; i < grid.length; i++) {
            for (let j = 0; j < grid[0].length; j++) {
                if (StorageSlotService._canPlaceItemIntoGrid(grid, item, { x: i, y: j })) {
                    StorageSlotService._placeItemIntoGrid(grid, item, { x: i, y: j });
                    return { x: i, y: j };
                }
            }
        }

        return null; // No valid position found
    }

    private static _swapItemsInGrid(grid: StorageGrid, item1: Item, item2: Item): boolean {
        const pos1 = item1.grid_position!;
        const pos2 = item2.grid_position!;

        // Remove items from grid
        StorageSlotService._removeItemFromGrid(grid, item1);
        StorageSlotService._removeItemFromGrid(grid, item2);

        // Try placing items in swapped positions
        if (StorageSlotService._canPlaceItemIntoGrid(grid, item1, pos2) && StorageSlotService._canPlaceItemIntoGrid(grid, item2, pos1)) {
            StorageSlotService._placeItemIntoGrid(grid, item1, pos2);
            StorageSlotService._placeItemIntoGrid(grid, item2, pos1);
            return true;
        }

        // Restore original positions if swap fails
        StorageSlotService._placeItemIntoGrid(grid, item1, pos1);
        StorageSlotService._placeItemIntoGrid(grid, item2, pos2);
        return false;
    }

    private static _organizeGrid(grid: StorageGrid, items: Item[]): void {
        // Clear grid
        for (let i = 0; i < grid.length; i++) {
            for (let j = 0; j < grid[0].length; j++) {
                grid[i][j] = null;
            }
        }

        // Sort items by size (largest first)
        items.sort((a, b) => (b.size![0] * b.size![1]) - (a.size![0] * a.size![1]));

        // Place items
        items.forEach((item) => {
            if (!StorageSlotService._autoPlaceItemIntoGrid(grid, item)) {
                throw new Error(`Could not fit item ${item.name} into the grid.`);
            }
        });
    }

    // -------------------- StorageSlot-related methods --------------------

    public static addItemToStorageSlot(storageSlot: StorageSlot, item: Item, autoOrganize = false): void { // autoOrganize will be useful for managing NPC storage, but will never be used for actual user characters. The user instead will have a separate button to auto organize
        if (!storageSlot.gridState) {
            throw new Error("Storage slot does not have a grid.");
        }
        
        // check weight
        const totalWeight = storageSlot.storedItems?.reduce((sum, i) => sum + i.weight, 0) || 0;
        const itemWeight = item.weight;
        const availableWeight = storageSlot.maxWeight - totalWeight;
        const remainingWeight = availableWeight - itemWeight;
        if (remainingWeight < 0) throw new Error("Cannot place item - storage weight would be exceeded.");

        if (autoOrganize && storageSlot.storedItems) this._organizeGrid(storageSlot.gridState, storageSlot.storedItems)

        if (!StorageSlotService._autoPlaceItemIntoGrid(storageSlot.gridState, item)) {
            throw new Error("Cannot place item into the storage slot.");
        }

        storageSlot.storedItems = storageSlot.storedItems || [];
        storageSlot.storedItems.push(item);
    }

    public static removeItemFromStorageSlot(storageSlot: StorageSlot, item: Item): void {
        if (!storageSlot.gridState) throw new Error("Storage slot does not have a grid.");
        if (!item.grid_position) throw new Error("Item is not placed in the grid.");

        StorageSlotService._removeItemFromGrid(storageSlot.gridState, item);

        storageSlot.storedItems = storageSlot.storedItems?.filter((storedItem) => storedItem.id !== item.id);
    }

    public static organizeStorageSlot(storageSlot: StorageSlot): void {
        if (!storageSlot.storedItems || storageSlot.storedItems.length === 0) return
        if (!storageSlot.gridState) throw new Error(`Storage slot is not properly initialized: missing "gridState"`);

        StorageSlotService._organizeGrid(storageSlot.gridState, storageSlot.storedItems);
    }

    public static swapItemsInStorageSlot(storageSlot: StorageSlot, item1: Item, item2: Item): boolean {
        if (!storageSlot.gridState) {
            throw new Error("Storage slot does not have a grid.");
        }

        if (!item1.grid_position || !item2.grid_position) {
            throw new Error("One or both items are not placed in the grid.");
        }

        return StorageSlotService._swapItemsInGrid(storageSlot.gridState, item1, item2);
    }

    
    public static placeItemsIntoStorageSlots(
        storageSlots: StorageSlot[],
        items: Item[]
    ): { placedItems: Item[]; unplacedItems: Item[] } {
        // Sort items by size (largest first), then by weight
        items.sort((a, b) => 
            (b.size![0] * b.size![1]) - (a.size![0] * a.size![1]) || 
            b.weight - a.weight
        );
    
        // Sort slots by available space and weight limit (smallest first)
        storageSlots.sort((a, b) => 
            (a.grid![0] * a.grid![1]) - (b.grid![0] * b.grid![1]) || 
            (a.maxWeight! - a.storedItems!.reduce((sum, i) => sum + i.weight, 0))
        );
    
        const placedItems: Item[] = [];
        const unplacedItems: Item[] = [];
    
        items.forEach(item => {
            let itemPlaced = false;
    
            // Try to place the item in each slot
            for (const slot of storageSlots) {
                // Auto-organize the slot before placement
                StorageSlotService.organizeStorageSlot(slot);
    
                const grid = slot.grid!;
                const cells = slot.gridState!;
    
                // Try to place the item in the slot using the new GridCell system
                const placement = StorageSlotService._findPlacementForItemInGrid(cells, grid, item);
                if (placement) {
                    StorageSlotService._placeItemIntoGridCells(cells, item, placement);
                    slot.storedItems!.push(item); // Add the item to the slot's stored items
                    itemPlaced = true;
                    break;
                }
            }
    
            if (itemPlaced) {
                placedItems.push(item);
            } else {
                unplacedItems.push(item); // If no slot is found, add to unplaced items
            }
        });
    
        // Auto-organize all slots after placement
        storageSlots.forEach(slot => StorageSlotService.organizeStorageSlot(slot));
    
        return { placedItems, unplacedItems };
    }
    
    private static _findPlacementForItemInGrid(
        gridCells: StorageGrid,
        grid: [number, number],
        item: Item
    ): { x: number; y: number } | null {
        const [itemWidth, itemHeight ] = item.size!;
    
        for (let x = 0; x <= grid[0] - itemWidth; x++) {
            for (let y = 0; y <= grid[1] - itemHeight; y++) {
                let canPlace = true;
    
                // Check if the item fits in the grid without collision
                for (let i = x; i < x + itemWidth; i++) {
                    for (let j = y; j < y + itemHeight; j++) {
                        const isCellOccupied = gridCells[i][j]
                        if (isCellOccupied) {
                            canPlace = false;
                            break;
                        }
                    }
                    if (!canPlace) break;
                }
    
                if (canPlace) {
                    return { x, y };
                }
            }
        }
    
        return null; // No valid position found
    }
    
    private static _placeItemIntoGridCells(
        gridCells: StorageGrid,
        item: Item,
        position: { x: number; y: number }
    ): void {
        const [itemWidth, itemHeight ] = item.size!;
        const { x, y } = position;
    
        for (let i = x; i < x + itemWidth; i++) {
            for (let j = y; j < y + itemHeight; j++) {
                gridCells[i][j] = item.id;
            }
        }
    
        item.grid_position = position; // Update the item's position
    }
    
}
