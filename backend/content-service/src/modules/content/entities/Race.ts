import { Entity, Column, ManyToOne, PrimaryColumn } from "typeorm";
import { ContentBase } from "../../../ContentBase";
import { RaceDTO } from "../../../proto/common";
import { Campaign } from "../../campaign/entities/Campaign";
import { User } from "../../user/entities/User";
import { World } from "../../world/entities/World";
import { Serializable } from "../../../decorator/serializable.decorator";
import { EquipmentSlotDefinitions, serializeEquipmentSlotDefinitions, deserializeEquipmentSlotDefinitions } from "../../../class/ItemSlotDefinition";
import { Serializer } from "../../../serializer";

// TODO somehow I need a way to connect races to needs, but also add needs through other ways, like an addiction. Also, a layer of modifiers, so that I can adjust the rate of decay and thresholds with %.

@Entity()
export class Race extends ContentBase {
    @PrimaryColumn()
    @Serializable()
    id!: string;

    id_prefix = "RACE"

    @Column({ type: "varchar", length: 255 })
    @Serializable()
    name!: string;

    @Column("jsonb")
    @Serializable({
        serialize: serializeEquipmentSlotDefinitions,
        deserialize: deserializeEquipmentSlotDefinitions,
    })
    equipment_slot_definitions!: EquipmentSlotDefinitions

    @ManyToOne(() => User, { nullable: true })
    @Serializable({ strategy: 'id' })
    user!: User;

    @ManyToOne(() => Campaign, { nullable: true })
    @Serializable({ strategy: 'id' })
    campaign?: Campaign;

    @ManyToOne(() => World, { nullable: true })
    @Serializable({ strategy: 'id' })
    world!: World;

    public toDTO(): RaceDTO {
        return Serializer.toDTO(this);
    }

    public static fromDTO(dto: RaceDTO): Race {
        const race = new Race();
        return Serializer.fromDTO(dto, race);
    }
}
