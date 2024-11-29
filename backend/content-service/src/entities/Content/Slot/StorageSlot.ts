import { BeforeInsert, Column, Entity, ManyToOne, OneToMany, PrimaryColumn, TableInheritance } from "typeorm";
import { Item } from "../Item/Item";
import { randomUUID } from "crypto";
import { ContentBase } from "../../../ContentBase";
import { Campaign } from "../../Campaign";
import { User } from "../../User";
import { World } from "../../World";
import { StorageGridDTO, StorageSlotDTO } from "../../../proto/common";

export type StorageGridCell = string | null; // Item ID or empty
export type StorageGrid = StorageGridCell[][]; // 2D grid array

@Entity()
@TableInheritance({ column: { type: "varchar", name: "type" } })
export class StorageSlot extends ContentBase {
    @PrimaryColumn()
    id?: string;

    id_prefix = "STORAGE_SLOT"

    @Column({ type: "varchar", length: 50 })
    name!: string

    @Column({ type: "jsonb", nullable: true })
    grid!: [number, number]; // Grid configuration for storage slots

    @Column({ type: "jsonb", default: [] })
    gridState!: StorageGrid; // 2D array representing the grid's current state

    @Column({ nullable: true })
    maxWeight!: number; // Weight limitation for storage slots

    @ManyToOne(() => Item, (parentItem) => parentItem.storageSlot, { nullable: true })
    parentItem!: Item; // The item owning this slot (for storage slots)

    @OneToMany(() => Item, (storedItem) => storedItem.storageSlot, { cascade: true })
    storedItems?: Item[]; // For storage slots

    @ManyToOne(() => User, { nullable: true })
    user!: User;

    @ManyToOne(() => Campaign, { nullable: true })
    campaign?: Campaign;

    @ManyToOne(() => World, { nullable: true })
    world!: World;

    public toDTO(): StorageSlotDTO {
        if (!this.id) throw new Error("cannot serialize StorageSlot entity when it does not have an id");
        return {
            id: this.id,
            blueprintId: this.blueprint_id,
            name: this.name,
            grid: serializeGrid(this.grid), // Use helper to serialize grid
            gridState: serializeGridState(this.gridState), // Use helper to serialize gridState
            maxWeight: this.maxWeight,
            parentItem: this.parentItem?.toDTO(),
            storedItems: this.storedItems ? { items: this.storedItems.map(item => item.toDTO()) } : undefined,
            user: this.user?.toDTO(),
            campaign: this.campaign?.toDTO(),
            world: this.world?.toDTO(),
            targetEntity: this.targetEntity
        };
    }

    public static fromDTO(dto: StorageSlotDTO, user: User, world: World, campaign?: Campaign): StorageSlot {
        if (!dto.gridState) throw new Error("StorageStolDTO cannot be with gridState undefined")
        if (!dto.parentItem) throw new Error("StorageSlotDTO cannot have no parentItem")
        const storageSlot = new StorageSlot();
        storageSlot.id = dto.id;
        storageSlot.name = dto.name;
        storageSlot.grid = deserializeGrid(dto.grid); // Use helper to deserialize grid
        storageSlot.gridState = deserializeGridState(dto.gridState); // Use helper to deserialize gridState
        storageSlot.maxWeight = dto.maxWeight;
        storageSlot.parentItem = Item.fromDTO(dto.parentItem, user, world, campaign);
        storageSlot.storedItems = dto.storedItems?.items.map(item => Item.fromDTO(item, user, world, campaign));
        storageSlot.user = user;
        storageSlot.campaign = campaign;
        storageSlot.world = world;
        storageSlot.targetEntity = dto.targetEntity
        return storageSlot;
    }
}




export function serializeGrid(grid: [number, number]): number[] {
    return [grid[0], grid[1]];
}

export function serializeGridState(gridState: StorageGrid): StorageGridDTO {
    return {
        cells: gridState.flatMap((row, rowIndex) =>
            row.map((value, columnIndex) => ({
                row: rowIndex,
                column: columnIndex,
                value: value || "", // Null becomes empty string for Proto compatibility
            }))
        ),
    };
}

export function deserializeGrid(grid: number[]): [number, number] {
    if (grid.length !== 2) throw new Error("Invalid grid array length. Expected [rows, columns].");
    return [grid[0], grid[1]];
}

export function deserializeGridState(gridState: StorageGridDTO): StorageGrid {
    const maxRow = Math.max(...gridState.cells.map(cell => cell.row)) + 1;
    const maxColumn = Math.max(...gridState.cells.map(cell => cell.column)) + 1;

    const grid: StorageGrid = Array.from({ length: maxRow }, () => Array(maxColumn).fill(null));

    gridState.cells.forEach(cell => {
        grid[cell.row][cell.column] = cell.value || null; // Empty string becomes null
    });

    return grid;
}