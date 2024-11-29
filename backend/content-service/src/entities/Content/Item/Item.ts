import { Entity, TableInheritance, Column, ManyToOne, ManyToMany, PrimaryGeneratedColumn, BeforeInsert, PrimaryColumn, OneToMany } from "typeorm";
import { TaggableContentBase } from "../../../TaggableContentBase";
import { Skill } from "../Skill/Skill";
import { ItemRequirements, StorageSlotDefinition } from "../../../types";
import { Tag } from "../Tag";
import { Campaign } from "../../Campaign";
import { User } from "../../User";
import { World } from "../../World";
import { StorageSlot } from "../Slot/StorageSlot";
import { EquipmentSlot } from "../Slot/EquipmentSlot";
import { ItemDTO, ItemRequirementsDTO } from "../../../proto/common";
import { ItemActionEnum } from "../../../enum/entityEnums";


const serializeRequirements = (req: ItemRequirements): ItemRequirementsDTO => ({
    requirements: req.map(r => ({
        type: r.type,
        name: r.name,
        ...(typeof r.value === "number" ? { number: r.value } : { flag: r.value }),
    })),
});
const deserializeRequirements = (dtoReq: ItemRequirementsDTO): ItemRequirements => {
    return dtoReq.requirements.map(r => ({
        type: r.type,
        name: r.name,
        value: r.number !== undefined ? r.number : r.flag || false,
    }));
}

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

    public toDTO(): ItemDTO {
        if (!this.id) throw new Error("item cannot be without id");
        return {
            id: this.id,
            blueprintId: this.blueprint_id,
            name: this.name,
            description: this.description || "",
            size: this.size,
            quantity: this.quantity,
            maxQuantity: this.maxQuantity,
            baseValue: this.base_value,
            actions: this.actions && {actions: this.actions},
            requirements: this.requirements ? serializeRequirements(this.requirements) : undefined,
            stackable: this.stackable,
            repairable: this.repairable,
            drinkable: this.drinkable,
            edible: this.edible,
            gridPosition: this.grid_position
                ? { x: this.grid_position.x, y: this.grid_position.y }
                : undefined,
            storageSlot: this.storageSlot?.toDTO(),
            storageSlots: this.storageSlots
                ? { storageSlots: this.storageSlots.map(slot => slot.toDTO()) }
                : undefined,
            storageSlotDefinition: this.storageSlotDefinition
                ? {
                    definitions: this.storageSlotDefinition.map(def => ({
                        grid: def.grid,
                        name: def.name,
                        maxWeight: def.maxWeight,
                    })),
                }
                : undefined,
            equipmentSlot: this.equipmentSlot?.toDTO(),
            user: this.user?.toDTO(),
            campaign: this.campaign?.toDTO(),
            world: this.world?.toDTO(),
            trainedSkill: this.trained_skill,
            weight: this.weight,
            targetEntity: this.targetEntity
        };
    }

    public static fromDTO(dto: ItemDTO, user: User, world: World, campaign?: Campaign): Item {
        const item = new Item();
        item.id = dto.id;
        item.name = dto.name;
        item.description = dto.description;
        item.size = dto.size as [number, number];
        item.quantity = dto.quantity || 1;
        item.maxQuantity = dto.maxQuantity || 64;
        item.base_value = dto.baseValue || 0;
        item.actions = dto.actions?.actions;
        item.requirements = dto.requirements ? deserializeRequirements(dto.requirements) : undefined;
        item.stackable = dto.stackable || false;
        item.repairable = dto.repairable || false;
        item.drinkable = dto.drinkable || false;
        item.edible = dto.edible || false;
        item.grid_position = dto.gridPosition && { x: dto.gridPosition.x, y: dto.gridPosition.y };
        item.storageSlot = dto.storageSlot ? StorageSlot.fromDTO(dto.storageSlot, user, world, campaign) : undefined;
        item.storageSlots = dto.storageSlots?.storageSlots?.map(i => StorageSlot.fromDTO(i, user, world, campaign));
        item.storageSlotDefinition = dto.storageSlotDefinition?.definitions?.map(def => ({
            grid: def.grid as [number, number],
            name: def.name,
            maxWeight: def.maxWeight,
        }));
        item.equipmentSlot = dto.equipmentSlot
            ? EquipmentSlot.fromDTO(dto.equipmentSlot, user, world, campaign)
            : undefined;
        item.user = user;
        item.campaign = campaign;
        item.world = world;
        item.trained_skill = dto.trainedSkill || undefined;
        item.weight = dto.weight || 0;
        item.targetEntity = dto.targetEntity
        return item;
    }

}