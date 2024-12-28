import { Column, Entity, ManyToOne, OneToMany, PrimaryColumn } from "typeorm";
import { Item } from "../Item/Item";
import { ContentBase } from "../../../../ContentBase";
import { StorageGridDTO, StorageSlotDTO } from "../../../../proto/common";
import { Campaign } from "../../../campaign/entities/Campaign";
import { User } from "../../../user/entities/User";
import { World } from "../../../world/entities/World";
import { Serializer, SerializeStrategyEnum } from "../../../../serializer";
import { Serializable } from "../../../../decorator/serializable.decorator";
import { GridSize } from "../../../../class/GridSize";

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
    @Serializable({ strategy: SerializeStrategyEnum.FULL })
    grid!: GridSize;

    @Column({ type: "jsonb", default: [] })
    @Serializable({ serialize: serializeGridState, deserialize: deserializeGridState })
    gridState!: StorageGrid;

    @Column({ nullable: true })
    @Serializable()
    maxWeight!: number;

    @ManyToOne(() => Item, (parentItem) => parentItem.storageSlot, { nullable: true })
    @Serializable({ strategy: SerializeStrategyEnum.ID })
    parentItem!: Item;

    @OneToMany(() => Item, (storedItem) => storedItem.storageSlot, { cascade: true })
    @Serializable({ strategy: SerializeStrategyEnum.ID })
    storedItems?: Item[];

    @ManyToOne(() => User, { nullable: true })
    @Serializable({ strategy: SerializeStrategyEnum.ID })
    user!: User;

    @ManyToOne(() => Campaign, { nullable: true })
    @Serializable({ strategy: SerializeStrategyEnum.ID })
    campaign?: Campaign;

    @ManyToOne(() => World, { nullable: true })
    @Serializable({ strategy: SerializeStrategyEnum.ID })
    world!: World;

    public toDTO(): StorageSlotDTO {
        return Serializer.toDTO(this);
    }

    public static fromDTO(dto: StorageSlotDTO): StorageSlot {
        return Serializer.fromDTO(dto, new StorageSlot());
    }
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