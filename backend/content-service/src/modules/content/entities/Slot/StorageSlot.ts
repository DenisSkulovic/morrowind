import { Column, Entity, ManyToOne, OneToMany, PrimaryColumn } from "typeorm";
import { Item } from "../Item/Item";
import { ContentBase } from "../../../../ContentBase";
import { StorageGridDTO, StorageSlotDTO } from "../../../../proto/common";
import { Campaign } from "../../../campaign/entities/Campaign";
import { User } from "../../../user/entities/User";
import { World } from "../../../world/entities/World";
import { Serializer } from "../../../../serializer";
import { Serializable } from "../../../../decorator/serializable.decorator";

export type StorageGridCell = string | null;
export type StorageGrid = StorageGridCell[][];

@Entity()
export class StorageSlot extends ContentBase {
    @PrimaryColumn()
    @Serializable()
    id?: string;

    idPrefix = "STORAGE_SLOT"

    @Column({ type: "varchar", length: 50 })
    @Serializable()
    name!: string

    @Column({ type: "jsonb", nullable: true })
    @Serializable({ serialize: serializeGrid, deserialize: deserializeGrid })
    grid!: [number, number];

    @Column({ type: "jsonb", default: [] })
    @Serializable({ serialize: serializeGridState, deserialize: deserializeGridState })
    gridState!: StorageGrid;

    @Column({ nullable: true })
    @Serializable()
    maxWeight!: number;

    @ManyToOne(() => Item, (parentItem) => parentItem.storageSlot, { nullable: true })
    @Serializable({ strategy: 'id' })
    parentItem!: Item;

    @OneToMany(() => Item, (storedItem) => storedItem.storageSlot, { cascade: true })
    @Serializable({ strategy: 'full' })
    storedItems?: Item[];

    @ManyToOne(() => User, { nullable: true })
    @Serializable({ strategy: 'id' })
    user!: User;

    @ManyToOne(() => Campaign, { nullable: true })
    @Serializable({ strategy: 'id' })
    campaign?: Campaign;

    @ManyToOne(() => World, { nullable: true })
    @Serializable({ strategy: 'id' })
    world!: World;

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