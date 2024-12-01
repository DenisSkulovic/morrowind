import { Entity, Column, ManyToOne, PrimaryColumn } from "typeorm";
import { ContentBase } from "../../ContentBase";
import { Need } from "./Need";
import { Campaign } from "../Campaign";
import { User } from "../User";
import { World } from "../World";
import { RaceDTO } from "../../proto/common";
import { Context } from "../../types";

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

    public static toDTO(race: Race): RaceDTO {
        return {
            id: race.id,
            blueprintId: race.blueprint_id,
            name: race.name,
            equipmentSlotDefinitions: race.equipment_slot_definitions ? { arr: race.equipment_slot_definitions } : undefined,
            user: Race.serializeEntity(race.user, i => User.toDTO(i)),
            campaign: Race.serializeEntity(race.campaign, i => Campaign.toDTO(i)),
            world: Race.serializeEntity(race.world, i => World.toDTO(i)),
            targetEntity: race.targetEntity
        };
    }

    public static fromDTO(dto: RaceDTO, context: Context): Race {
        const race = new Race();
        race.id = dto.id;
        race.name = dto.name;
        race.equipment_slot_definitions =
            dto.equipmentSlotDefinitions?.arr || [];
        race.user = context.user;
        race.campaign = context.campaign;
        race.world = context.world;
        race.targetEntity = dto.targetEntity
        return race;
    }
}
