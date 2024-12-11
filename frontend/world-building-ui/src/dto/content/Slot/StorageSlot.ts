import { TaggableContentBase } from "../../../class/TaggableContentBase";
import { common } from "../../../proto/common";
import { Serializable } from "../../../decorator/serializable.decorator";
import { Serializer } from "../../../serialize/serializer";
import { Item } from "../Item/Item";
import { FormField } from "../../../decorator/form-field.decorator";
import { FieldComponentEnum } from "../../../enum/FieldComponentEnum";
import { Context } from "../../../class/Context";
import { ContentService } from "../../../services/ContentService";
import { SearchQuery } from "../../../class/search/SearchQuery";
import { EntityDisplay } from "../../../decorator/entity-display.decorator";
import { DisplayField } from "../../../decorator/display-field.decorator";
import { FilterOption } from "../../../decorator/filter-option.decorator";

export type GridSize = { width: number, height: number };
export type StorageGridCell = string | null;
export type StorageGrid = StorageGridCell[][];

@EntityDisplay({
    title: 'Storage Slots',
    defaultSort: 'name'
})
export class StorageSlot extends TaggableContentBase {
    @DisplayField({
        order: 1,
        displayName: 'Name'
    })
    @FilterOption()
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

    public toDTO(): common.StorageSlotDTO {
        return Serializer.toDTO(this);
    }

    public static fromDTO(dto: common.StorageSlotDTO): StorageSlot {
        const storageSlot = new StorageSlot();
        return Serializer.fromDTO(dto, storageSlot);
    }

    public static async search(filter: SearchQuery, context: Context): Promise<StorageSlot[]> {
        const contentService = new ContentService<StorageSlot>();
        const { results } = await contentService.searchContent('StorageSlot', filter, context);
        return results as StorageSlot[];
    }
}

export function serializeGrid(grid: GridSize): number[] {
    return [grid["width"], grid["height"]];
}
export function deserializeGrid(grid: number[]): GridSize {
    if (grid.length !== 2) throw new Error("Invalid grid array length. Expected [rows, columns], i.e. length of 2.");
    return { width: grid[0], height: grid[1] };
}

export function serializeGridState(gridState: StorageGrid): common.StorageGridDTO {
    const cells = gridState.flatMap((row, rowIndex) =>
        row.map((value, columnIndex) => {
            const cell = new common.StorageGridCellDTO();
            cell.row = rowIndex;
            cell.column = columnIndex;
            cell.value = value || "";
            return cell;
        })
    );
    const dto = new common.StorageGridDTO();
    dto.cells = cells;
    return dto;
}

export function deserializeGridState(gridState: common.StorageGridDTO): StorageGrid {
    const cells = gridState.cells;
    const maxRow = Math.max(...cells.map(cell => cell.row)) + 1;
    const maxColumn = Math.max(...cells.map(cell => cell.column)) + 1;

    const grid: StorageGrid = Array.from({ length: maxRow }, () => Array(maxColumn).fill(null));

    cells.forEach(cell => {
        grid[cell.row][cell.column] = cell.value || null;
    });

    return grid;
}