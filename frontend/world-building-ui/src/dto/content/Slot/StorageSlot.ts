import { ContentBase } from "../../../class/ContentBase";
import { StorageSlotDTO, StorageGridDTO } from "../../../proto/common";
import { Serializable } from "../../../decorator/serializable.decorator";
import { Serializer } from "../../../serialize/serializer";
import { Item } from "../Item/Item";
import { FormField } from "../../../decorator/form-field.decorator";
import { FieldComponentEnum } from "../../../enum/FieldComponentEnum";

export type GridSize = { width: number, height: number };
export type StorageGridCell = string | null;
export type StorageGrid = StorageGridCell[][];

export class StorageSlot extends ContentBase {
    @FormField({ component: FieldComponentEnum.TEXT_FIELD, label: 'Name', placeholder: 'Enter storage slot name', required: true })
    @Serializable()
    name!: string

    @FormField({ component: FieldComponentEnum.OBJECT_FIELD, label: 'Grid Size', required: true })
    @Serializable({ serialize: serializeGrid, deserialize: deserializeGrid })
    grid!: GridSize;

    @Serializable({ serialize: serializeGridState, deserialize: deserializeGridState })
    gridState!: StorageGrid;

    @FormField({ component: FieldComponentEnum.NUMBER_FIELD, label: 'Max Weight', placeholder: 'Enter maximum weight', required: true })
    @Serializable()
    maxWeight!: number;

    @Serializable()
    parentItem!: string;

    @FormField({ component: FieldComponentEnum.ITEM_LIST_FIELD, label: 'Stored Items', required: false })
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

export function serializeGrid(grid: GridSize): number[] {
    return [grid["width"], grid["height"]];
}
export function deserializeGrid(grid: number[]): GridSize {
    if (grid.length !== 2) throw new Error("Invalid grid array length. Expected [rows, columns], i.e. length of 2.");
    return { width: grid[0], height: grid[1] };
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