import { BeforeInsert, ChildEntity, Column, Entity, JoinColumn, ManyToOne, OneToOne, PrimaryColumn, TableInheritance } from "typeorm";
import { Item } from "../Item/Item";
import { Character } from "../Character";
import { ContentBase } from "../../../ContentBase";
import { randomUUID } from "crypto";
import { Campaign } from "../../Campaign";
import { User } from "../../User";
import { World } from "../../World";

@Entity()
@TableInheritance({ column: { type: "varchar", name: "type" } })
export class EquipmentSlot extends ContentBase {
    @PrimaryColumn()
    id!: string;
    
    @BeforeInsert()
    generateId() {
        if (this.targetEntity) this.id = this.blueprint_id
        else this.id = `${this.id_prefix}_${randomUUID().replace(/-/g, "")}`;
    }
    id_prefix = "EQUIPMENT_SLOT"

    @Column({type: "varchar", length: 64})
    name!: string

    @Column({type: "jsonb"})
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
}
