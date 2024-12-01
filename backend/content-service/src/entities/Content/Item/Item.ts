import { Entity, TableInheritance, Column, ManyToOne, ManyToMany, PrimaryGeneratedColumn, BeforeInsert, PrimaryColumn, OneToMany } from "typeorm";
import { TaggableContentBase } from "../../../TaggableContentBase";
import { Skill } from "../Skill/Skill";
import { Context, ItemRequirements, StorageSlotDefinition } from "../../../types";
import { Tag } from "../Tag";
import { Campaign } from "../../Campaign";
import { User } from "../../User";
import { World } from "../../World";
import { StorageSlot } from "../Slot/StorageSlot";
import { EquipmentSlot } from "../Slot/EquipmentSlot";
import { ItemDTO, ItemRequirementsDTO } from "../../../proto/common";
import { ItemActionEnum } from "../../../enum/entityEnums";




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

    @Column({ nullable: true })
    trained_skill?: string

    @Column({ type: "enum", enum: Object.values(ItemActionEnum), nullable: true })
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
    storageSlots?: | StorageSlot[]; // the storage slots this item itself has (this is a backpack and it has 3 sections, i.e. slots)
    @Column("jsonb", { nullable: true })
    storageSlotDefinition?: StorageSlotDefinition[]; // the storage slots this item itself has (this is a backpack and it has 3 sections, i.e. slots)
    @ManyToOne(() => EquipmentSlot, equipmentSlot => equipmentSlot.equippedItem)
    equipmentSlot?: EquipmentSlot; // the equipment slot where this item sits (sword in hand, for e.g.)


    @ManyToMany(() => Tag, (tag) => tag.items)
    tags?: | Tag[];

    // context
    @ManyToOne(() => User, { nullable: true })
    user!: User;
    @ManyToOne(() => Campaign, { nullable: true })
    campaign?: Campaign;
    @ManyToOne(() => World, { nullable: true })
    world!: World;

    public static toDTO(item: Item): ItemDTO {
        if (!item.id) throw new Error("item cannot be without id");
        return {
            id: item.id,
            blueprintId: item.blueprint_id,
            name: item.name,
            description: item.description || "",
            size: item.size,
            quantity: item.quantity,
            maxQuantity: item.maxQuantity,
            baseValue: item.base_value,
            actions: item.actions && { actions: item.actions },
            requirements: item.requirements ? Item.serializeRequirements(item.requirements) : undefined,
            stackable: item.stackable,
            repairable: item.repairable,
            drinkable: item.drinkable,
            edible: item.edible,
            gridPosition: item.grid_position
                ? { x: item.grid_position.x, y: item.grid_position.y }
                : undefined,
            storageSlot: Item.serializeEntity(item.storageSlot, i => StorageSlot.toDTO(i)),
            storageSlots: Item.serializeEntityArray(item.storageSlots, i => StorageSlot.toDTO(i)),
            storageSlotDefinition: item.storageSlotDefinition
                ? {
                    arr: item.storageSlotDefinition.map(def => ({
                        grid: def.grid,
                        name: def.name,
                        maxWeight: def.maxWeight,
                    })),
                }
                : undefined,
            equipmentSlot: Item.serializeEntity(item.equipmentSlot, i => EquipmentSlot.toDTO(i)),
            user: Item.serializeEntity(item.user, i => User.toDTO(i)),
            campaign: Item.serializeEntity(item.campaign, i => Campaign.toDTO(i)),
            world: Item.serializeEntity(item.world, i => World.toDTO(i)),
            trainedSkill: item.trained_skill,
            weight: item.weight,
            targetEntity: item.targetEntity
        };
    }

    public static fromDTO(dto: ItemDTO, context: Context): Item {
        const item = new Item();
        item.id = dto.id;
        item.name = dto.name;
        item.description = dto.description;
        item.size = dto.size as [number, number];
        item.quantity = dto.quantity || 1;
        item.maxQuantity = dto.maxQuantity || 64;
        item.base_value = dto.baseValue || 0;
        item.actions = dto.actions?.actions;
        item.requirements = dto.requirements ? Item.deserializeRequirements(dto.requirements) : undefined;
        item.stackable = dto.stackable || false;
        item.repairable = dto.repairable || false;
        item.drinkable = dto.drinkable || false;
        item.edible = dto.edible || false;
        item.grid_position = dto.gridPosition && { x: dto.gridPosition.x, y: dto.gridPosition.y };
        item.storageSlot = dto.storageSlot ? StorageSlot.fromDTO(dto.storageSlot, context) : undefined;
        item.storageSlots = Item.deserializeEntityArray(dto.storageSlots, i => StorageSlot.fromDTO(i, context));
        item.storageSlotDefinition = dto.storageSlotDefinition?.arr?.map(def => ({
            grid: def.grid as [number, number],
            name: def.name,
            maxWeight: def.maxWeight,
        }));
        item.equipmentSlot = dto.equipmentSlot
            ? EquipmentSlot.fromDTO(dto.equipmentSlot, context)
            : undefined;
        item.user = context.user;
        item.campaign = context.campaign;
        item.world = context.world;
        item.trained_skill = dto.trainedSkill || undefined;
        item.weight = dto.weight || 0;
        item.targetEntity = dto.targetEntity
        return item;
    }


    public static serializeRequirements(req: ItemRequirements): ItemRequirementsDTO {
        return {
            arr: req.map(r => ({
                type: r.type,
                name: r.name,
                ...(typeof r.value === "number" ? { number: r.value } : { flag: r.value }),
            }))
        }
    };
    public static deserializeRequirements(dtoReq: ItemRequirementsDTO): ItemRequirements {
        return dtoReq.arr.map(r => ({
            type: r.type,
            name: r.name,
            value: r.number !== undefined ? r.number : r.flag || false,
        }));
    }

}