import { Column, Entity, ManyToOne, OneToMany, PrimaryColumn } from "typeorm";
import { Item } from "../Item/Item";
import { ContentBase } from "../../../../ContentBase";
import { StorageGridDTO, StorageSlotDTO } from "../../../../proto/entities";
import { Campaign } from "../../../campaign/entities/Campaign";
import { User } from "../../../user/entities/User";
import { World } from "../../../world/entities/World";
import { Serializer, SerializeStrategyEnum } from "../../../../serializer";
import { Serializable } from "../../../../decorator/serializable.decorator";
import { GridSize } from "../../../../class/GridSize";
import {
    Field as GQLField,
    ID as GQLID,
    ObjectType as GQLObjectType,
} from '@nestjs/graphql';

export type StorageGridCell = string | null;
export type StorageGrid = StorageGridCell[][];

@Entity()
@GQLObjectType({ implements: ContentBase })
export class StorageSlot extends ContentBase {
    @PrimaryColumn()
    @Serializable()
    @GQLField(() => GQLID)
    id!: string;

    idPrefix = "STORAGE_SLOT"

    @Column({ type: "varchar", length: 50 })
    @Serializable()
    @GQLField()
    name!: string

    @Column({ type: "jsonb", nullable: true })
    @Serializable({ strategy: SerializeStrategyEnum.FULL })
    @GQLField(() => GridSize)
    grid!: GridSize;

    @Column({ type: "jsonb", default: [] })
    @Serializable({ serialize: serializeGridState, deserialize: deserializeGridState })
    @GQLField(() => [String])
    gridState!: StorageGrid;

    @Column({ nullable: true })
    @Serializable()
    @GQLField()
    maxWeight!: number;

    @ManyToOne(() => Item, (parentItem) => parentItem.storageSlot, { nullable: true })
    @Serializable({ strategy: SerializeStrategyEnum.ID })
    @GQLField(() => Item, { nullable: true })
    parentItem!: Item;

    @OneToMany(() => Item, (storedItem) => storedItem.storageSlot, { cascade: true })
    @Serializable({ strategy: SerializeStrategyEnum.ID })
    @GQLField(() => [Item])
    storedItems?: Item[];

    @ManyToOne(() => User, { nullable: true })
    @Serializable({ strategy: SerializeStrategyEnum.ID })
    @GQLField(() => User, { nullable: true })
    user!: User;

    @ManyToOne(() => Campaign, { nullable: true })
    @Serializable({ strategy: SerializeStrategyEnum.ID })
    @GQLField(() => Campaign, { nullable: true })
    campaign?: Campaign;

    @ManyToOne(() => World, { nullable: true })
    @Serializable({ strategy: SerializeStrategyEnum.ID })
    @GQLField(() => World, { nullable: true })
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