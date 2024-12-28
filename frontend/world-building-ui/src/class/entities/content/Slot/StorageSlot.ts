import { TaggableContentBase } from "../../../../class/TaggableContentBase";
import { Serializable } from "../../../../decorator/serializable.decorator";
import { FormField } from "../../../../decorator/form-field.decorator";
import { FieldComponentEnum } from "../../../../enum/FieldComponentEnum";
import { EntityDisplay } from "../../../../decorator/entity-display.decorator";
import { DisplayField } from "../../../../decorator/display-field.decorator";
import { FilterOption } from "../../../../decorator/filter-option.decorator";
import { StorageGridDTO, StorageGridCellDTO } from "../../../../proto/common_pb";
import { GridSize } from "../../../../class/GridSize";

export type StorageGridCell = string | null;
export type StorageGrid = StorageGridCell[][];

@EntityDisplay({
    title: 'Storage Slots',
    defaultSort: 'name'
})
export class StorageSlot extends TaggableContentBase {
    @DisplayField({
        displayName: 'Name'
    })
    @FilterOption()
    @FormField({ component: FieldComponentEnum.TEXT_FIELD, label: 'Name', placeholder: 'Enter storage slot name', required: true })
    @Serializable()
    name!: string

    @FormField({ component: FieldComponentEnum.OBJECT_FIELD, label: 'Grid Size', required: true })
    @Serializable()
    grid!: GridSize;

    @Serializable({ serialize: serializeGridState, deserialize: deserializeGridState })
    gridState!: StorageGrid;

    @FormField({ component: FieldComponentEnum.NUMBER_FIELD, label: 'Max Weight', placeholder: 'Enter maximum weight', required: true })
    @Serializable()
    maxWeight!: number;

    @Serializable()
    parentItem!: string;

    @FormField({ component: FieldComponentEnum.ITEM_LIST_FIELD, label: 'Stored Items', required: false })
    @Serializable()
    storedItems?: string[];

}


export function serializeGridState(gridState: StorageGrid): StorageGridDTO {
    const cells = gridState.flatMap((row, rowIndex) =>
        row.map((value, columnIndex) => {
            const cell = new StorageGridCellDTO();
            cell.setRow(rowIndex);
            cell.setColumn(columnIndex);
            cell.setValue(value || "");
            return cell;
        })
    );
    const dto = new StorageGridDTO();
    dto.setCellsList(cells);
    return dto;
}

export function deserializeGridState(gridState: StorageGridDTO): StorageGrid {
    const cells = gridState.getCellsList();
    const maxRow = Math.max(...cells.map(cell => cell.getRow())) + 1;
    const maxColumn = Math.max(...cells.map(cell => cell.getColumn())) + 1;

    const grid: StorageGrid = Array.from({ length: maxRow }, () => Array(maxColumn).fill(null));

    cells.forEach(cell => {
        grid[cell.getRow()][cell.getColumn()] = cell.getValue() || null;
    });

    return grid;
}