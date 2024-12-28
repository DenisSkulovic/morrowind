import { Entity, Column, ManyToOne, PrimaryColumn } from "typeorm";
import { ContentBase } from "../../../ContentBase";
import { RaceDTO } from "../../../proto/common";
import { Campaign } from "../../campaign/entities/Campaign";
import { User } from "../../user/entities/User";
import { World } from "../../world/entities/World";
import { Serializable } from "../../../decorator/serializable.decorator";
import { Serializer, SerializeStrategyEnum } from "../../../serializer";
import { EquipmentSlotDefinition } from "../../../class/ItemSlotDefinition";

// TODO somehow I need a way to connect races to needs, but also add needs through other ways, like an addiction. Also, a layer of modifiers, so that I can adjust the rate of decay and thresholds with %.

@Entity()
export class Race extends ContentBase {
    @PrimaryColumn()
    @Serializable()
    id!: string;

    idPrefix = "RACE"

    @Column({ type: "varchar", length: 255 })
    @Serializable()
    name!: string;

    @Column("jsonb")
    @Serializable({ strategy: SerializeStrategyEnum.FULL, asDtoArray: true })
    equipment_slot_definitions!: EquipmentSlotDefinition[]

    @ManyToOne(() => User, { nullable: true })
    @Serializable({ strategy: SerializeStrategyEnum.ID })
    user!: User;

    @ManyToOne(() => Campaign, { nullable: true })
    @Serializable({ strategy: SerializeStrategyEnum.ID })
    campaign?: Campaign;

    @ManyToOne(() => World, { nullable: true })
    @Serializable({ strategy: SerializeStrategyEnum.ID })
    world!: World;

    public toDTO(): RaceDTO {
        return Serializer.toDTO(this);
    }

    public static fromDTO(dto: RaceDTO): Race {
        return Serializer.fromDTO(dto, new Race());
    }
}
