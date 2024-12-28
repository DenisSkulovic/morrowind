import { Entity, TableInheritance, PrimaryColumn, Column, ManyToOne, OneToMany, ManyToMany } from "typeorm";
import { TaggableContentBase } from "../../../../TaggableContentBase";
import { ItemActionEnum } from "../../../../common/enum/entityEnums";
import { ItemActionEnumDTO, ItemDTO } from "../../../../proto/common";
import { Campaign } from "../../../campaign/entities/Campaign";
import { User } from "../../../user/entities/User";
import { World } from "../../../world/entities/World";
import { EquipmentSlot } from "../Slot/EquipmentSlot";
import { StorageSlot } from "../Slot/StorageSlot";
import { Tag } from "../Tag";
import { Serializer, SerializeStrategyEnum } from "../../../../serializer";
import { Serializable } from "../../../../decorator/serializable.decorator";
import { StorageSlotDefinition } from "../../../../class/StorageSlotDefinition";
import { ItemRequirement } from "../../../../class/ItemRequirement";
import { deserializeEnum, serializeEnum } from "../../../../common/enum/util";
import { GridSize } from "../../../../class/GridSize";




@Entity()
@TableInheritance({ column: { type: "varchar", name: "type" } })
export class Item extends TaggableContentBase {
    @PrimaryColumn()
    @Serializable()
    id?: string;

    idPrefix = "ITEM";

    @Column({ default: "PLACEHOLDER" })
    @Serializable()
    name!: string; // Item name, e.g., "Iron Short Sword".

    @Column({ nullable: true })
    @Serializable()
    description?: string; // Item description or lore.

    // properties
    @Column({ type: "jsonb", nullable: true })
    @Serializable({ strategy: SerializeStrategyEnum.FULL })
    size!: GridSize; // Grid size for grid-based inventories

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
    baseValue!: number; // Monetary value in gold coins. To be adjusted with skills, modifiers, attitude, etc.

    @Column({ nullable: true })
    @Serializable()
    trainedSkill?: string

    @Column({ type: "jsonb", nullable: true })
    @Serializable({ strategy: SerializeStrategyEnum.ENUM, internalEnum: ItemActionEnum, protoEnum: ItemActionEnumDTO })
    actions?: ItemActionEnum[];

    @Column({ type: "jsonb", default: null, nullable: true })
    @Serializable({ strategy: SerializeStrategyEnum.FULL, asDtoArray: true })
    requirements?: ItemRequirement[]

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
    @Serializable({ strategy: SerializeStrategyEnum.ID })
    storageSlot?: StorageSlot; // the slot where this item is stored (in a backpack section, for e.g., for in a pocket)

    @Column({ type: "jsonb", nullable: true })
    @Serializable()
    gridPosition?: { x: number; y: number }; // Item's top-left corner on the grid inside a storage slot

    @OneToMany(() => StorageSlot, storageSlot => storageSlot.storedItems)
    @Serializable({ strategy: SerializeStrategyEnum.FULL, asDtoArray: true })
    storageSlots?: StorageSlot[]; // the storage slots this item itself has (this is a backpack and it has 3 sections, i.e. slots)

    @Column("jsonb", { nullable: true })
    @Serializable({ strategy: SerializeStrategyEnum.FULL, asDtoArray: true })
    storageSlotDefinition?: StorageSlotDefinition[]; // the storage slots this item itself has (this is a backpack and it has 3 sections, i.e. slots)

    @ManyToOne(() => EquipmentSlot, equipmentSlot => equipmentSlot.equippedItem)
    @Serializable({ strategy: SerializeStrategyEnum.ID })
    equipmentSlot?: EquipmentSlot; // the equipment slot where this item sits (sword in hand, for e.g.)


    @ManyToMany(() => Tag, (tag) => tag.items)
    @Serializable({ strategy: SerializeStrategyEnum.ID })
    tags?: | Tag[];

    // context
    @ManyToOne(() => User, { nullable: true })
    @Serializable({ strategy: SerializeStrategyEnum.ID })
    user!: User;

    @ManyToOne(() => Campaign, { nullable: true })
    @Serializable({ strategy: SerializeStrategyEnum.ID })
    campaign?: Campaign;

    @ManyToOne(() => World, { nullable: true })
    @Serializable({ strategy: SerializeStrategyEnum.ID })
    world!: World;

    public toDTO(): ItemDTO {
        return Serializer.toDTO(this);
    }

    public static fromDTO(dto: ItemDTO): Item {
        return Serializer.fromDTO(dto, new Item());
    }


}

