import { Column, Entity, ManyToOne, OneToMany, PrimaryColumn, TableInheritance } from "typeorm";
import { Item } from "../Item/Item";
import { ContentBase } from "../../../../ContentBase";
import { StorageGridDTO, StorageSlotDTO } from "../../../../proto/common";
import { Context } from "../../../../types";
import { Campaign } from "../../../campaign/entities/Campaign";
import { User } from "../../../user/entities/User";
import { World } from "../../../world/entities/World";
import { Serializer } from "../../../../serializer";

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