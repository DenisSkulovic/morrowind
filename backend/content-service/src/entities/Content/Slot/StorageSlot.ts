import { BeforeInsert, Column, Entity, ManyToOne, OneToMany, PrimaryColumn, TableInheritance } from "typeorm";
import { Item } from "../Item/Item";
import { randomUUID } from "crypto";
import { ContentBase } from "../../../ContentBase";
import { Campaign } from "../../Campaign";
import { User } from "../../User";
import { World } from "../../World";
import { StorageGridDTO, StorageSlotDTO } from "../../../proto/common";
import { Context } from "../../../types";

export type StorageGridCell = string | null;
export type StorageGrid = StorageGridCell[][];

@Entity()
@TableInheritance({ column: { type: "varchar", name: "type" } })
export class StorageSlot extends ContentBase {
    @PrimaryColumn()
    id?: string;

    id_prefix = "STORAGE_SLOT"

    @Column({ type: "varchar", length: 50 })
    name!: string

    @Column({ type: "jsonb", nullable: true })
    grid!: [number, number];

    @Column({ type: "jsonb", default: [] })
    gridState!: StorageGrid;

    @Column({ nullable: true })
    maxWeight!: number;

    @ManyToOne(() => Item, (parentItem) => parentItem.storageSlot, { nullable: true })
    parentItem!: Item;

    @OneToMany(() => Item, (storedItem) => storedItem.storageSlot, { cascade: true })
    storedItems?: Item[];

    @ManyToOne(() => User, { nullable: true })
    user!: User;

    @ManyToOne(() => Campaign, { nullable: true })
    campaign?: Campaign;

    @ManyToOne(() => World, { nullable: true })
    world!: World;

    public static toDTO(stSlot: StorageSlot): StorageSlotDTO {
        if (!stSlot.id) throw new Error("cannot serialize StorageSlot entity when it does not have an id");
        return {
            id: stSlot.id,
            blueprintId: stSlot.blueprint_id,
            name: stSlot.name,
            grid: serializeGrid(stSlot.grid),
            gridState: serializeGridState(stSlot.gridState),
            maxWeight: stSlot.maxWeight,
            parentItem: StorageSlot.serializeEntity(stSlot.parentItem, i => Item.toDTO(i)),
            storedItems: StorageSlot.serializeEntityArray(stSlot.storedItems, i => Item.toDTO(i)),
            user: StorageSlot.serializeEntity(stSlot.user, i => User.toDTO(i)),
            campaign: StorageSlot.serializeEntity(stSlot.campaign, i => Campaign.toDTO(i)),
            world: StorageSlot.serializeEntity(stSlot.world, i => World.toDTO(i)),
            targetEntity: stSlot.targetEntity
        };
    }

    public static fromDTO(dto: StorageSlotDTO, context: Context): StorageSlot {
        if (!dto.gridState) throw new Error("StorageStolDTO cannot be with gridState undefined")
        if (!dto.parentItem) throw new Error("StorageSlotDTO cannot have no parentItem")
        const storageSlot = new StorageSlot();
        storageSlot.id = dto.id;
        storageSlot.name = dto.name;
        storageSlot.grid = deserializeGrid(dto.grid);
        storageSlot.gridState = deserializeGridState(dto.gridState);
        storageSlot.maxWeight = dto.maxWeight;
        storageSlot.parentItem = Item.fromDTO(dto.parentItem, context);
        storageSlot.storedItems = StorageSlot.deserializeEntityArray(dto.storedItems, i => Item.fromDTO(i, context));
        storageSlot.user = context.user;
        storageSlot.campaign = context.campaign;
        storageSlot.world = context.world;
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
                value: value || "",
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
        grid[cell.row][cell.column] = cell.value || null;
    });

    return grid;
}