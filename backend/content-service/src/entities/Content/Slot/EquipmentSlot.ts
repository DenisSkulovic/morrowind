import { BeforeInsert, ChildEntity, Column, Entity, JoinColumn, ManyToOne, OneToOne, PrimaryColumn, TableInheritance } from "typeorm";
import { Item } from "../Item/Item";
import { Character } from "../Character";
import { ContentBase } from "../../../ContentBase";
import { randomUUID } from "crypto";
import { Campaign } from "../../Campaign";
import { User } from "../../User";
import { World } from "../../World";
import { EquipmentSlotDTO } from "../../../proto/common";

@Entity()
@TableInheritance({ column: { type: "varchar", name: "type" } })
export class EquipmentSlot extends ContentBase {
    @PrimaryColumn()
    id!: string;
    
    id_prefix = "EQUIPMENT_SLOT"

    @Column({type: "varchar", length: 64})
    name!: string

    @Column({type: "jsonb"})
    allowedEntities!: string[] // e.g. ["ItemWeapon", "ItemMiscFishingRod"] for hand, or ["ItemWearableHelmet"] for a head slot

    @OneToOne(() => Item, { nullable: true, lazy: true })
    @JoinColumn()
    equippedItem?: Item;

    @ManyToOne(() => Character, (character) => character.equipmentSlots, { nullable: true, lazy: true })
    character?: Character; // The character owning this slot (i.e. left hand slot, right hand slot, head slot)

    @ManyToOne(() => User, { nullable: true, lazy: true })
    user!: User;

    @ManyToOne(() => Campaign, { nullable: true, lazy: true })
    campaign?: Campaign;

    @ManyToOne(() => World, { nullable: true, lazy: true })
    world!: World;

    public toDTO(): EquipmentSlotDTO {
        return {
            id: this.id,
            blueprintId: this.blueprint_id,
            name: this.name,
            allowedEntities: this.allowedEntities,
            equippedItem: this.equippedItem?.toDTO(),
            character: this.character?.toDTO(),
            user: this.user?.toDTO(),
            campaign: this.campaign?.toDTO(),
            world: this.world?.toDTO(),
            targetEntity: this.targetEntity
        };
    }
    
    public static fromDTO(dto: EquipmentSlotDTO, user: User, world: World, campaign?: Campaign): EquipmentSlot {
        const equipmentSlot = new EquipmentSlot();
        equipmentSlot.id = dto.id;
        equipmentSlot.name = dto.name;
        equipmentSlot.allowedEntities = dto.allowedEntities;
        equipmentSlot.equippedItem = dto.equippedItem ? Item.fromDTO(dto.equippedItem, user, world, campaign) : undefined;
        equipmentSlot.character = dto.character ? Character.fromDTO(dto.character, user, world, campaign) : undefined;
        equipmentSlot.user = user;
        equipmentSlot.campaign = campaign;
        equipmentSlot.world = world;
        equipmentSlot.targetEntity = dto.targetEntity
        return equipmentSlot;
    }
}
