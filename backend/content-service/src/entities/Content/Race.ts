import { Entity, Column, ManyToOne, PrimaryColumn } from "typeorm";
import { ContentBase } from "../../ContentBase";
import { Need } from "./Need";
import { Campaign } from "../Campaign";
import { User } from "../User";
import { World } from "../World";
import { RaceDTO } from "../../proto/common";

// TODO somehow I need a way to connect races to needs, but also add needs through other ways, like an addiction. Also, a layer of modifiers, so that I can adjust the rate of decay and thresholds with %.

@Entity()
export class Race extends ContentBase {
    @PrimaryColumn()
    id!: string;

    id_prefix = "RACE"

    @Column({ type: "varchar", length: 255 })
    name!: string;

    @Column("jsonb")
    equipment_slot_definitions!: { name: string, allowedEntities: string[] }[]

    @ManyToOne(() => User, { nullable: true })
    user!: User;

    @ManyToOne(() => Campaign, { nullable: true })
    campaign?: Campaign;

    @ManyToOne(() => World, { nullable: true })
    world!: World;

    public toDTO(): RaceDTO {
        return {
            id: this.id,
            blueprintId: this.blueprint_id,
            name: this.name,
            equipmentSlotDefinitions: this.equipment_slot_definitions
                ? { equipmentSlotDefinition: this.equipment_slot_definitions }
                : undefined,
            user: this.user?.toDTO(),
            campaign: this.campaign?.toDTO(),
            world: this.world?.toDTO(),
            targetEntity: this.targetEntity
        };
    }

    public static fromDTO(dto: RaceDTO, user: User, world: World, campaign?: Campaign): Race {
        const race = new Race();
        race.id = dto.id;
        race.name = dto.name;
        race.equipment_slot_definitions =
            dto.equipmentSlotDefinitions?.equipmentSlotDefinition || [];
        race.user = user;
        race.campaign = campaign;
        race.world = world;
        race.targetEntity = dto.targetEntity
        return race;
    }
}
