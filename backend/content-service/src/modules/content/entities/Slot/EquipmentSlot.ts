import { Column, Entity, JoinColumn, ManyToOne, OneToOne, PrimaryColumn } from "typeorm";
import { Item } from "../Item/Item";
import { Character } from "../Character";
import { ContentBase } from "../../../../ContentBase";
import { EquipmentSlotDTO } from "../../../../proto/entities";
import { Campaign } from "../../../campaign/entities/Campaign";
import { User } from "../../../user/entities/User";
import { World } from "../../../world/entities/World";
import { Serializer, SerializeStrategyEnum } from "../../../../serializer";
import { Serializable } from "../../../../decorator/serializable.decorator";
import {
    Field as GQLField,
    ID as GQLID,
    ObjectType as GQLObjectType,
} from '@nestjs/graphql';

@Entity()
@GQLObjectType({ implements: ContentBase })
export class EquipmentSlot extends ContentBase {
    @PrimaryColumn()
    @Serializable()
    @GQLField(() => GQLID)
    id!: string;

    idPrefix = "EQUIPMENT_SLOT"

    @Column({ type: "varchar", length: 64 })
    @Serializable()
    @GQLField()
    name!: string

    @Column({ type: "jsonb" })
    @Serializable()
    @GQLField(() => [String])
    allowedEntities!: string[] // e.g. ["ItemWeapon", "ItemMiscFishingRod"] for hand, or ["ItemWearableHelmet"] for a head slot

    @OneToOne(() => Item, { nullable: true })
    @JoinColumn()
    @Serializable({ strategy: SerializeStrategyEnum.ID })
    @GQLField(() => Item, { nullable: true })
    equippedItem?: Item;

    @ManyToOne(() => Character, (character) => character.equipmentSlots, { nullable: true })
    @Serializable({ strategy: SerializeStrategyEnum.ID })
    @GQLField(() => Character, { nullable: true })
    character?: Character; // The character owning this slot (i.e. left hand slot, right hand slot, head slot)

    @ManyToOne(() => User, { nullable: true })
    @Serializable({ strategy: SerializeStrategyEnum.ID })
    @GQLField(() => User, { nullable: true })
    user!: User;

    @ManyToOne(() => Campaign, { nullable: true })
    @Serializable({ strategy: SerializeStrategyEnum.ID })
    @GQLField(() => Campaign, { nullable: true })
    campaign?: Campaign;

    @ManyToOne(() => World, { nullable: true })
    @Serializable({ strategy: SerializeStrategyEnum.ID })
    @GQLField(() => World, { nullable: true })
    world!: World;

    public toDTO(): EquipmentSlotDTO {
        return Serializer.toDTO(this);
    }

    public static fromDTO(dto: EquipmentSlotDTO): EquipmentSlot {
        return Serializer.fromDTO(dto, new EquipmentSlot());
    }
}
