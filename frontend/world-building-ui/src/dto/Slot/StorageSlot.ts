import { ContentBase } from "../../class/ContentBase";
import { StorageSlotDTO, StorageGridDTO } from "../../proto/common";
import { Serializable } from "../../decorator/serializable.decorator";
import { Serializer } from "../../serialize/serializer";
import { Item } from "../Item/Item";

export type StorageGridCell = string | null;
export type StorageGrid = StorageGridCell[][];

export class StorageSlot extends ContentBase {
    @Serializable()
    name!: string

    @Serializable({ serialize: serializeGrid, deserialize: deserializeGrid })
    grid!: [number, number];

    @Serializable({ serialize: serializeGridState, deserialize: deserializeGridState })
    gridState!: StorageGrid;

    @Serializable()
    maxWeight!: number;

    @Serializable()
    parentItem!: string;

    @Serializable({ strategy: 'full' })
    storedItems?: Item[];

    public toDTO(): StorageSlotDTO {
        return Serializer.toDTO(this);
    }

    public static fromDTO(dto: StorageSlotDTO): StorageSlot {
        const storageSlot = new StorageSlot();
        return Serializer.fromDTO(dto, storageSlot);
    }
}




export function serializeGrid(grid: [number, number]): number[] {
    return [grid[0], grid[1]];
}
export function deserializeGrid(grid: number[]): [number, number] {
    if (grid.length !== 2) throw new Error("Invalid grid array length. Expected [rows, columns], i.e. length of 2.");
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
export function deserializeGridState(gridState: StorageGridDTO): StorageGrid {
    const maxRow = Math.max(...gridState.cells.map(cell => cell.row)) + 1;
    const maxColumn = Math.max(...gridState.cells.map(cell => cell.column)) + 1;

    const grid: StorageGrid = Array.from({ length: maxRow }, () => Array(maxColumn).fill(null));

    gridState.cells.forEach(cell => {
        grid[cell.row][cell.column] = cell.value || null;
    });

    return grid;
}