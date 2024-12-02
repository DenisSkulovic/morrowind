import { BeforeInsert, ChildEntity, Column, Entity, JoinColumn, ManyToOne, OneToOne, PrimaryColumn, TableInheritance } from "typeorm";
import { Item } from "../Item/Item";
import { Character } from "../Character";
import { ContentBase } from "../../../../ContentBase";
import { randomUUID } from "crypto";
import { EquipmentSlotDTO } from "../../../../proto/common";
import { Context } from "../../../../types";
import { Campaign } from "../../../campaign/entities/Campaign";
import { User } from "../../../user/entities/User";
import { World } from "../../../world/entities/World";
import { Serializer } from "../../../../serializer";
import { Serializable } from "../../../../decorator/serializable.decorator";

@Entity()
@TableInheritance({ column: { type: "varchar", name: "type" } })
export class EquipmentSlot extends ContentBase {
    @PrimaryColumn()
    @Serializable()
    id!: string;

    id_prefix = "EQUIPMENT_SLOT"

    @Column({ type: "varchar", length: 64 })
    @Serializable()
    name!: string

    @Column({ type: "jsonb" })
    @Serializable()
    allowedEntities!: string[] // e.g. ["ItemWeapon", "ItemMiscFishingRod"] for hand, or ["ItemWearableHelmet"] for a head slot

    @OneToOne(() => Item, { nullable: true })
    @JoinColumn()
    @Serializable({ strategy: 'full' })
    equippedItem?: Item;

    @ManyToOne(() => Character, (character) => character.equipmentSlots, { nullable: true })
    @Serializable({ strategy: 'id' })
    character?: Character; // The character owning this slot (i.e. left hand slot, right hand slot, head slot)

    @ManyToOne(() => User, { nullable: true })
    @Serializable({ strategy: 'id' })
    user!: User;

    @ManyToOne(() => Campaign, { nullable: true })
    @Serializable({ strategy: 'id' })
    campaign?: Campaign;

    @ManyToOne(() => World, { nullable: true })
    @Serializable({ strategy: 'id' })
    world!: World;

    public toDTO(): EquipmentSlotDTO {
        return Serializer.toDTO(this);
    }

    public static fromDTO(dto: EquipmentSlotDTO): EquipmentSlot {
        const equipmentSlot = new EquipmentSlot();
        return Serializer.fromDTO(dto, equipmentSlot);
    }
}
