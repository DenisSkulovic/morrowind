import { Entity, TableInheritance, PrimaryColumn, Column, ManyToOne, OneToMany, ManyToMany } from "typeorm";
import { TaggableContentBase } from "../../../../TaggableContentBase";
import { ItemActionEnum } from "../../../../common/enum/entityEnums";
import { ItemActionEnumDTO, ItemDTO } from "../../../../proto/entities";
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
import { GridSize } from "../../../../class/GridSize";
import {
    Field as GQLField,
    ID as GQLID,
    ObjectType as GQLObjectType,
} from '@nestjs/graphql';



@Entity()
@GQLObjectType({ implements: TaggableContentBase })
@TableInheritance({ column: { type: "varchar", name: "type" } })
export class Item extends TaggableContentBase {
    @PrimaryColumn()
    @GQLField(() => GQLID)
    @Serializable()
    id?: string;

    idPrefix = "ITEM";

    @Column({ default: "PLACEHOLDER" })
    @GQLField()
    @Serializable()
    name!: string; // Item name, e.g., "Iron Short Sword".

    @Column({ nullable: true })
    @GQLField({ nullable: true })
    @Serializable()
    description?: string; // Item description or lore.

    // properties
    @Column({ type: "jsonb", nullable: true })
    @GQLField(() => GridSize, { nullable: true })
    @Serializable({ strategy: SerializeStrategyEnum.FULL })
    size!: GridSize; // Grid size for grid-based inventories

    @Column({ default: 0, type: "float" })
    @GQLField()
    @Serializable()
    weight!: number;

    @Column({ default: 1 })
    @GQLField()
    @Serializable()
    quantity!: number;

    @Column({ default: 64 })
    @GQLField()
    @Serializable()
    maxQuantity!: number;

    @Column({ default: 0 })
    @GQLField()
    @Serializable()
    baseValue!: number; // Monetary value in gold coins. To be adjusted with skills, modifiers, attitude, etc.

    @Column({ nullable: true })
    @GQLField({ nullable: true })
    @Serializable()
    trainedSkill?: string

    @Column({ type: "jsonb", nullable: true })
    @GQLField(() => [ItemActionEnum], { nullable: true })
    @Serializable({ strategy: SerializeStrategyEnum.ENUM, internalEnum: ItemActionEnum, protoEnum: ItemActionEnumDTO })
    actions?: ItemActionEnum[];

    @Column({ type: "jsonb", default: null, nullable: true })
    @GQLField(() => [ItemRequirement], { nullable: true })
    @Serializable({ strategy: SerializeStrategyEnum.FULL, asDtoArray: true, internalClass: ItemRequirement })
    requirements?: ItemRequirement[]

    // flags
    @Column({ default: false })
    @GQLField()
    @Serializable()
    consumable!: boolean;

    @Column({ default: false })
    @GQLField()
    @Serializable()
    stackable!: boolean;

    @Column({ default: false })
    @GQLField()
    @Serializable()
    repairable!: boolean;

    @Column({ default: false })
    @GQLField()
    @Serializable()
    drinkable!: boolean;

    @Column({ default: false })
    @GQLField()
    @Serializable()
    edible!: boolean;

    // slots
    @ManyToOne(() => StorageSlot, storageSlot => storageSlot.parentItem)
    @GQLField(() => StorageSlot, { nullable: true })
    @Serializable({ strategy: SerializeStrategyEnum.ID })
    storageSlot?: StorageSlot; // the slot where this item is stored (in a backpack section, for e.g., for in a pocket)

    @Column({ type: "jsonb", nullable: true })
    @GQLField(() => Object, { nullable: true })
    @Serializable()
    gridPosition?: { x: number; y: number }; // Item's top-left corner on the grid inside a storage slot

    @OneToMany(() => StorageSlot, storageSlot => storageSlot.storedItems)
    @Serializable({ strategy: SerializeStrategyEnum.FULL, asDtoArray: true, internalClass: StorageSlot })
    storageSlots?: StorageSlot[]; // the storage slots this item itself has (this is a backpack and it has 3 sections, i.e. slots)

    @Column("jsonb", { nullable: true })
    @GQLField(() => [StorageSlotDefinition], { nullable: true })
    @Serializable({ strategy: SerializeStrategyEnum.FULL, asDtoArray: true, internalClass: StorageSlotDefinition })
    storageSlotDefinition?: StorageSlotDefinition[]; // the storage slots this item itself has (this is a backpack and it has 3 sections, i.e. slots)

    @ManyToOne(() => EquipmentSlot, equipmentSlot => equipmentSlot.equippedItem)
    @GQLField(() => EquipmentSlot, { nullable: true })
    @Serializable({ strategy: SerializeStrategyEnum.ID })
    equipmentSlot?: EquipmentSlot; // the equipment slot where this item sits (sword in hand, for e.g.)


    @ManyToMany(() => Tag, (tag) => tag.items)
    @GQLField(() => [Tag])
    @Serializable({ strategy: SerializeStrategyEnum.ID })
    tags?: | Tag[];

    // context
    @ManyToOne(() => User, { nullable: true })
    @GQLField(() => User, { nullable: true })
    @Serializable({ strategy: SerializeStrategyEnum.ID })
    user!: User;

    @ManyToOne(() => Campaign, { nullable: true })
    @GQLField(() => Campaign, { nullable: true })
    @Serializable({ strategy: SerializeStrategyEnum.ID })
    campaign?: Campaign;

    @ManyToOne(() => World, { nullable: true })
    @GQLField(() => World, { nullable: true })
    @Serializable({ strategy: SerializeStrategyEnum.ID })
    world!: World;

    public toDTO(): ItemDTO {
        return Serializer.toDTO(this);
    }

    public static fromDTO(dto: ItemDTO): Item {
        return Serializer.fromDTO(dto, new Item());
    }


}

