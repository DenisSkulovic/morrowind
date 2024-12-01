import { BeforeInsert, ChildEntity, Column, Entity, JoinColumn, ManyToOne, OneToOne, PrimaryColumn, TableInheritance } from "typeorm";
import { Item } from "../Item/Item";
import { Character } from "../Character";
import { ContentBase } from "../../../ContentBase";
import { randomUUID } from "crypto";
import { Campaign } from "../../Campaign";
import { User } from "../../User";
import { World } from "../../World";
import { EquipmentSlotDTO } from "../../../proto/common";
import { Context } from "../../../types";

@Entity()
@TableInheritance({ column: { type: "varchar", name: "type" } })
export class EquipmentSlot extends ContentBase {
    @PrimaryColumn()
    id!: string;

    id_prefix = "EQUIPMENT_SLOT"

    @Column({ type: "varchar", length: 64 })
    name!: string

    @Column({ type: "jsonb" })
    allowedEntities!: string[] // e.g. ["ItemWeapon", "ItemMiscFishingRod"] for hand, or ["ItemWearableHelmet"] for a head slot

    @OneToOne(() => Item, { nullable: true })
    @JoinColumn()
    equippedItem?: Item;

    @ManyToOne(() => Character, (character) => character.equipmentSlots, { nullable: true })
    character?: Character; // The character owning this slot (i.e. left hand slot, right hand slot, head slot)

    @ManyToOne(() => User, { nullable: true })
    user!: User;

    @ManyToOne(() => Campaign, { nullable: true })
    campaign?: Campaign;

    @ManyToOne(() => World, { nullable: true })
    world!: World;

    public static toDTO(eqSlot: EquipmentSlot): EquipmentSlotDTO {
        return {
            id: eqSlot.id,
            blueprintId: eqSlot.blueprint_id,
            name: eqSlot.name,
            allowedEntities: eqSlot.allowedEntities,
            equippedItem: EquipmentSlot.serializeEntity(eqSlot.equippedItem, i => Item.toDTO(i)),
            character: EquipmentSlot.serializeEntity(eqSlot.character, i => Character.toDTO(i)),
            user: EquipmentSlot.serializeEntity(eqSlot.user, i => User.toDTO(i)),
            campaign: EquipmentSlot.serializeEntity(eqSlot.campaign, i => Campaign.toDTO(i)),
            world: EquipmentSlot.serializeEntity(eqSlot.world, i => World.toDTO(i)),
            targetEntity: eqSlot.targetEntity
        };
    }

    public static fromDTO(dto: EquipmentSlotDTO, context: Context): EquipmentSlot {
        const equipmentSlot = new EquipmentSlot();
        equipmentSlot.id = dto.id;
        equipmentSlot.name = dto.name;
        equipmentSlot.allowedEntities = dto.allowedEntities;
        equipmentSlot.equippedItem = dto.equippedItem ? Item.fromDTO(dto.equippedItem, context) : undefined;
        equipmentSlot.character = dto.character ? Character.fromDTO(dto.character, context) : undefined;
        equipmentSlot.user = context.user;
        equipmentSlot.campaign = context.campaign;
        equipmentSlot.world = context.world;
        equipmentSlot.targetEntity = dto.targetEntity
        return equipmentSlot;
    }
}
