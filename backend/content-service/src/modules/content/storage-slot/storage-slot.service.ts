import { Injectable } from "@nestjs/common";
import { Item } from "../entities/Item/Item";
import { StorageGrid, StorageSlot } from "../entities/Slot/StorageSlot";
import { GridSize } from "../../../class/GridSize";

export interface IStorageSlotService {
    addItemToStorageSlot(storageSlot: StorageSlot, item: Item, autoOrganize: boolean): void
    removeItemFromStorageSlot(storageSlot: StorageSlot, item: Item): void
    organizeStorageSlot(storageSlot: StorageSlot): void
    swapItemsInStorageSlot(storageSlot: StorageSlot, item1: Item, item2: Item): boolean
    placeItemsIntoStorageSlots(
        storageSlots: StorageSlot[],
        items: Item[]
    ): { placedItems: Item[]; unplacedItems: Item[] }
}


@Injectable()
export class StorageSlotService implements IStorageSlotService {

    constructor(

    ) { }


    public addItemToStorageSlot(storageSlot: StorageSlot, item: Item, autoOrganize = false): void { // autoOrganize will be useful for managing NPC storage, but will never be used for actual user characters. The user instead will have a separate button to auto organize
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

        if (!this._autoPlaceItemIntoGrid(storageSlot.gridState, item)) {
            throw new Error("Cannot place item into the storage slot.");
        }

        storageSlot.storedItems = storageSlot.storedItems || [];
        storageSlot.storedItems.push(item);
    }

    public removeItemFromStorageSlot(storageSlot: StorageSlot, item: Item): void {
        if (!storageSlot.gridState) throw new Error("Storage slot does not have a grid.");
        if (!item.gridPosition) throw new Error("Item is not placed in the grid.");

        this._removeItemFromGrid(storageSlot.gridState, item);

        storageSlot.storedItems = storageSlot.storedItems?.filter((storedItem) => storedItem.id !== item.id);
    }

    public organizeStorageSlot(storageSlot: StorageSlot): void {
        if (!storageSlot.storedItems || storageSlot.storedItems.length === 0) return
        if (!storageSlot.gridState) throw new Error(`Storage slot is not properly initialized: missing "gridState"`);

        this._organizeGrid(storageSlot.gridState, storageSlot.storedItems);
    }

    public swapItemsInStorageSlot(storageSlot: StorageSlot, item1: Item, item2: Item): boolean {
        if (!storageSlot.gridState) {
            throw new Error("Storage slot does not have a grid.");
        }

        if (!item1.gridPosition || !item2.gridPosition) {
            throw new Error("One or both items are not placed in the grid.");
        }

        return this._swapItemsInGrid(storageSlot.gridState, item1, item2);
    }


    public placeItemsIntoStorageSlots(
        storageSlots: StorageSlot[],
        items: Item[]
    ): { placedItems: Item[]; unplacedItems: Item[] } {
        // Sort items by size (largest first), then by weight
        items.sort((a, b) =>
            (b.size!.width * b.size!.height) - (a.size!.width * a.size!.height) ||
            b.weight - a.weight
        );

        // Sort slots by available space and weight limit (smallest first)
        storageSlots.sort((a, b) =>
            (a.grid!.width * a.grid!.height) - (b.grid!.width * b.grid!.height) ||
            (a.maxWeight! - a.storedItems!.reduce((sum, i) => sum + i.weight, 0))
        );

        const placedItems: Item[] = [];
        const unplacedItems: Item[] = [];

        items.forEach(item => {
            let itemPlaced = false;

            // Try to place the item in each slot
            for (const slot of storageSlots) {
                // Auto-organize the slot before placement
                this.organizeStorageSlot(slot);

                const grid = slot.grid!;
                const cells = slot.gridState!;

                // Try to place the item in the slot using the new GridCell system
                const placement = this._findPlacementForItemInGrid(cells, grid, item);
                if (placement) {
                    this._placeItemIntoGridCells(cells, item, placement);
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
        storageSlots.forEach(slot => this.organizeStorageSlot(slot));

        return { placedItems, unplacedItems };
    }


    private _canPlaceItemIntoGrid(
        grid: StorageGrid,
        item: Item,
        gridPosition: { x: number; y: number }
    ): boolean {


        const { width, height } = item.size!;
        const { x, y } = gridPosition;

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

    private _placeItemIntoGrid(grid: StorageGrid, item: Item, gridPosition: { x: number; y: number }): void {
        if (!item.id) throw new Error("cannot place item into grid when item has no id; are you trying to place an item that doesn't exist yet?")
        const { width, height } = item.size!;
        const { x, y } = gridPosition;

        for (let i = x; i < x + width; i++) {
            for (let j = y; j < y + height; j++) {
                grid[i][j] = item.id; // Mark grid cells with the item's ID
            }
        }

        item.gridPosition = gridPosition; // Record item's position
    }

    private _removeItemFromGrid(grid: StorageGrid, item: Item): void {
        const { x, y } = item.gridPosition!;
        const { width, height } = item.size!;

        for (let i = x; i < x + width; i++) {
            for (let j = y; j < y + height; j++) {
                grid[i][j] = null; // Clear the item's ID from the grid
            }
        }

        item.gridPosition = undefined; // Clear the item's recorded position
    }

    private _autoPlaceItemIntoGrid(grid: StorageGrid, item: Item): { x: number; y: number } | null {
        for (let i = 0; i < grid.length; i++) {
            for (let j = 0; j < grid[0].length; j++) {
                if (this._canPlaceItemIntoGrid(grid, item, { x: i, y: j })) {
                    this._placeItemIntoGrid(grid, item, { x: i, y: j });
                    return { x: i, y: j };
                }
            }
        }

        return null; // No valid position found
    }

    private _swapItemsInGrid(grid: StorageGrid, item1: Item, item2: Item): boolean {
        const pos1 = item1.gridPosition!;
        const pos2 = item2.gridPosition!;

        // Remove items from grid
        this._removeItemFromGrid(grid, item1);
        this._removeItemFromGrid(grid, item2);

        // Try placing items in swapped positions
        if (this._canPlaceItemIntoGrid(grid, item1, pos2) && this._canPlaceItemIntoGrid(grid, item2, pos1)) {
            this._placeItemIntoGrid(grid, item1, pos2);
            this._placeItemIntoGrid(grid, item2, pos1);
            return true;
        }

        // Restore original positions if swap fails
        this._placeItemIntoGrid(grid, item1, pos1);
        this._placeItemIntoGrid(grid, item2, pos2);
        return false;
    }

    private _organizeGrid(grid: StorageGrid, items: Item[]): void {
        // Clear grid
        for (let i = 0; i < grid.length; i++) {
            for (let j = 0; j < grid[0].length; j++) {
                grid[i][j] = null;
            }
        }

        // Sort items by size (largest first)
        items.sort((a, b) => (b.size!.width * b.size!.height) - (a.size!.width * a.size!.height));

        // Place items
        items.forEach((item) => {
            if (!this._autoPlaceItemIntoGrid(grid, item)) {
                throw new Error(`Could not fit item ${item.name} into the grid.`);
            }
        });
    }



    private _findPlacementForItemInGrid(
        gridCells: StorageGrid,
        grid: GridSize,
        item: Item
    ): { x: number; y: number } | null {
        const { width, height } = item.size!;

        for (let x = 0; x <= grid.width - width; x++) {
            for (let y = 0; y <= grid.height - height; y++) {
                let canPlace = true;

                // Check if the item fits in the grid without collision
                for (let i = x; i < x + width; i++) {
                    for (let j = y; j < y + height; j++) {
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

    private _placeItemIntoGridCells(
        gridCells: StorageGrid,
        item: Item,
        position: { x: number; y: number }
    ): void {
        if (!item.id) throw new Error("cannot place item into grid when item has no id; are you trying to place an item that doesn't exist yet?")
        const { width, height } = item.size!;
        const { x, y } = position;

        for (let i = x; i < x + width; i++) {
            for (let j = y; j < y + height; j++) {
                gridCells[i][j] = item.id;
            }
        }

        item.gridPosition = position; // Update the item's position
    }

}
