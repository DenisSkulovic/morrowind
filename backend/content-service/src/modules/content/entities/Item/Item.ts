import { Entity, TableInheritance, PrimaryColumn, Column, ManyToOne, OneToMany, ManyToMany } from "typeorm";
import { TaggableContentBase } from "../../../../TaggableContentBase";
import { ItemActionEnum } from "../../../../common/enum/entityEnums";
import { ItemActionEnumDTO, ItemDTO, ItemRequirementsDTO, StorageSlotDefinitionDTO } from "../../../../proto/common";
import { Campaign } from "../../../campaign/entities/Campaign";
import { User } from "../../../user/entities/User";
import { World } from "../../../world/entities/World";
import { EquipmentSlot } from "../Slot/EquipmentSlot";
import { StorageSlot } from "../Slot/StorageSlot";
import { Tag } from "../Tag";
import { Serializer } from "../../../../serializer";
import { Serializable } from "../../../../decorator/serializable.decorator";
import { StorageSlotDefinition, deserializeStorageSlotDefinition, serializeStorageSlotDefinition } from "../../../../class/StorageSlotDefinition";
import { serializeRequirements, deserializeRequirements, ItemRequirements } from "../../../../class/ItemRequirement";
import { deserializeEnum, serializeEnum } from "../../../../common/enum/util";




@Entity()
@TableInheritance({ column: { type: "varchar", name: "type" } })
export class Item extends TaggableContentBase {
    @PrimaryColumn()
    @Serializable()
    id?: string;

    id_prefix = "ITEM";

    @Column({ default: "PLACEHOLDER" })
    @Serializable()
    name!: string; // Item name, e.g., "Iron Short Sword".

    @Column({ nullable: true })
    @Serializable()
    description?: string; // Item description or lore.

    // properties
    @Column({ type: "jsonb", nullable: true })
    @Serializable()
    size!: [number, number]; // Grid size for grid-based inventories

    @Column({ default: 0, type: "float" })
    @Serializable()
    weight!: number;

    @Column({ default: 1 })
    @Serializable()
    quantity!: number;

    @Column({ default: 64 })
    @Serializable()
    maxQuantity!: number;

    @Column({ default: 0 })
    @Serializable()
    base_value!: number; // Monetary value in gold coins. To be adjusted with skills, modifiers, attitude, etc.

    @Column({ nullable: true })
    @Serializable()
    trained_skill?: string

    @Column({ type: "simple-array", nullable: true })
    @Serializable({
        serialize: (actions: ItemActionEnum[]) => actions.map(action => serializeEnum(ItemActionEnumDTO, action)),
        deserialize: (actions: number[]) => actions.map(action => deserializeEnum(ItemActionEnum, action)),
    })
    actions?: ItemActionEnum[];

    @Column({ type: "jsonb", default: null, nullable: true })
    @Serializable({
        serialize: serializeRequirements,
        deserialize: deserializeRequirements
    })
    requirements?: ItemRequirements

    // flags
    @Column({ default: false })
    @Serializable()
    consumable!: boolean;

    @Column({ default: false })
    @Serializable()
    stackable!: boolean;

    @Column({ default: false })
    @Serializable()
    repairable!: boolean;

    @Column({ default: false })
    @Serializable()
    drinkable!: boolean;

    @Column({ default: false })
    @Serializable()
    edible!: boolean;

    // slots
    @ManyToOne(() => StorageSlot, storageSlot => storageSlot.parentItem)
    @Serializable({ strategy: 'id' })
    storageSlot?: StorageSlot; // the slot where this item is stored (in a backpack section, for e.g., for in a pocket)

    @Column({ type: "jsonb", nullable: true })
    @Serializable()
    grid_position?: { x: number; y: number }; // Item's top-left corner on the grid inside a storage slot

    @OneToMany(() => StorageSlot, storageSlot => storageSlot.storedItems)
    @Serializable({ strategy: 'full' })
    storageSlots?: | StorageSlot[]; // the storage slots this item itself has (this is a backpack and it has 3 sections, i.e. slots)

    @Column("jsonb", { nullable: true })
    @Serializable({
        serialize: serializeStorageSlotDefinition,
        deserialize: deserializeStorageSlotDefinition
    })
    storageSlotDefinition?: StorageSlotDefinition[]; // the storage slots this item itself has (this is a backpack and it has 3 sections, i.e. slots)

    @ManyToOne(() => EquipmentSlot, equipmentSlot => equipmentSlot.equippedItem)
    @Serializable({ strategy: 'id' })
    equipmentSlot?: EquipmentSlot; // the equipment slot where this item sits (sword in hand, for e.g.)


    @ManyToMany(() => Tag, (tag) => tag.items)
    @Serializable({ strategy: 'id' })
    tags?: | Tag[];

    // context
    @ManyToOne(() => User, { nullable: true })
    @Serializable({ strategy: 'id' })
    user!: User;

    @ManyToOne(() => Campaign, { nullable: true })
    @Serializable({ strategy: 'id' })
    campaign?: Campaign;

    @ManyToOne(() => World, { nullable: true })
    @Serializable({ strategy: 'id' })
    world!: World;

    public toDTO(): ItemDTO {
        return Serializer.toDTO(this);
    }

    public static fromDTO(dto: ItemDTO): Item {
        const item = new Item();
        return Serializer.fromDTO(dto, item);
    }



}

