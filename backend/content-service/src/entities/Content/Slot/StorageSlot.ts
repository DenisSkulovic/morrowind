import { BeforeInsert, Column, Entity, ManyToOne, OneToMany, PrimaryColumn, TableInheritance } from "typeorm";
import { Item } from "../Item/Item";
import { randomUUID } from "crypto";
import { ContentBase } from "../../../ContentBase";
import { Campaign } from "../../Campaign";
import { User } from "../../User";
import { World } from "../../World";

export type StorageGridCell = string | null; // Item ID or empty
export type StorageGrid = StorageGridCell[][]; // 2D grid array


@Entity()
@TableInheritance({ column: { type: "varchar", name: "type" } })
export class StorageSlot extends ContentBase {
    @PrimaryColumn()
    id!: string;
    
    @BeforeInsert()
    generateId() {
        if (this.targetEntity) this.id = this.blueprint_id
        else this.id = `${this.id_prefix}_${randomUUID().replace(/-/g, "")}`;
    }
    id_prefix = "STORAGE_SLOT"

    @Column({type: "varchar", length: 50})
    name!: string

    @Column({ nullable: true })
    grid!: { width: number; height: number }; // Grid configuration for storage slots

    @Column("json", { default: [] })
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
}
