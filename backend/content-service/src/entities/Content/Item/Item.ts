import { Entity, TableInheritance, Column, ManyToOne, ManyToMany, PrimaryGeneratedColumn, BeforeInsert, PrimaryColumn, OneToMany } from "typeorm";
import { TaggableContentBase } from "../../../TaggableContentBase";
import { Skill } from "../Skill/Skill";
import { ItemRequirements, StorageSlotDefinition } from "../../../types";
import { Tag } from "../Tag";
import { Campaign } from "../../Campaign";
import { User } from "../../User";
import { World } from "../../World";
import { randomUUID } from "crypto";
import { StorageSlot } from "../Slot/StorageSlot";
import { EquipmentSlot } from "../Slot/EquipmentSlot";

@Entity()
@TableInheritance({ column: { type: "varchar", name: "type" } })
export class Item extends TaggableContentBase {
    @PrimaryColumn()
    id?: string;

    id_prefix = "ITEM";

    @Column({ default: "PLACEHOLDER" })
    name!: string; // Item name, e.g., "Iron Short Sword".
    @Column({ nullable: true })
    description?: string; // Item description or lore.

    // properties
    @Column({ type: "jsonb", nullable: true })
    size!: [number, number]; // Grid size for grid-based inventories
    @Column({ default: 0, type: "float" })
    weight!: number;
    @Column({ default: 1 })
    quantity!: number;
    @Column({ default: 64 })
    maxQuantity!: number;
    @Column({ default: 0 })
    base_value!: number; // Monetary value in gold coins. To be adjusted with skills, modifiers, attitude, etc.

    @Column({nullable: true})
    trained_skill?: string

    @Column({ type: "enum", enum: ["ATTACK", "BLOCK", "USE"], nullable: true })
    actions?: string[];

    @Column({ type: "jsonb", default: null, nullable: true })
    requirements?: ItemRequirements

    // flags
    @Column({ default: false })
    consumable!: boolean;
    @Column({ default: false })
    stackable!: boolean;
    @Column({ default: false })
    repairable!: boolean;
    @Column({ default: false })
    drinkable!: boolean;
    @Column({ default: false })
    edible!: boolean;

    // slots
    @ManyToOne(() => StorageSlot, storageSlot => storageSlot.parentItem)
    storageSlot?: StorageSlot; // the slot where this item is stored (in a backpack section, for e.g., for in a pocket)
    @Column({ type: "jsonb", nullable: true })
    grid_position?: { x: number; y: number }; // Item's top-left corner on the grid inside a storage slot
    @OneToMany(() => StorageSlot, storageSlot => storageSlot.storedItems)
    storageSlots?: StorageSlot[]; // the storage slots this item itself has (this is a backpack and it has 3 sections, i.e. slots)
    @Column("jsonb", { nullable: true })
    storageSlotDefinition?: StorageSlotDefinition[]; // the storage slots this item itself has (this is a backpack and it has 3 sections, i.e. slots)
    @ManyToOne(() => EquipmentSlot, equipmentSlot => equipmentSlot.equippedItem)
    equipmentSlot?: EquipmentSlot; // the equipment slot where this item sits (sword in hand, for e.g.)


    @ManyToMany(() => Tag, (tag) => tag.items)
    tags?: Tag[];

    // context
    @ManyToOne(() => User, { nullable: true })
    user!: User;
    @ManyToOne(() => Campaign, { nullable: true })
    campaign?: Campaign;
    @ManyToOne(() => World, { nullable: true })
    world!: World;
}