export class InventoryChange {
    itemId!: string;
    quantityDeltaChange!: number;
    clazz = 'InventoryChange';

    static validate(body: Partial<InventoryChange>): void {
        if (body.clazz !== 'InventoryChange') throw new Error("Invalid class");
        if (!body.itemId) throw new Error("Item ID is required");
        if (typeof body.quantityDeltaChange !== 'number') throw new Error("Quantity delta change must be a number");
    }

    static build(body: Partial<InventoryChange>): InventoryChange {
        InventoryChange.validate(body);
        const inventoryChange = new InventoryChange();
        inventoryChange.itemId = body.itemId!;
        inventoryChange.quantityDeltaChange = body.quantityDeltaChange!;
        return inventoryChange;
    }
}