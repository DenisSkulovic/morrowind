import { Column, Entity, ManyToOne, PrimaryColumn } from "typeorm";
import { ContentBase } from "../../ContentBase";
import { Campaign } from "../Campaign";
import { User } from "../User";
import { World } from "../World";
import { BirthsignDTO } from "../../proto/common";
import { Context } from "../../types";

@Entity()
export class Birthsign extends ContentBase {
    @PrimaryColumn()
    id!: string;

    id_prefix = "BIRTHSIGN"

    @Column({ type: "varchar", length: 50 })
    name!: string

    @ManyToOne(() => User, { nullable: true })
    user!: User;

    @ManyToOne(() => Campaign, { nullable: true })
    campaign?: Campaign;

    @ManyToOne(() => World, { nullable: true })
    world!: World;

    public static toDTO(birthSign: Birthsign): BirthsignDTO {
        return {
            id: birthSign.id,
            blueprintId: birthSign.blueprint_id,
            name: birthSign.name,
            user: Birthsign.serializeEntity(birthSign.user, i => User.toDTO(i)),
            campaign: Birthsign.serializeEntity(birthSign.campaign, i => Campaign.toDTO(i)),
            world: Birthsign.serializeEntity(birthSign.world, i => World.toDTO(i)),
            targetEntity: birthSign.targetEntity
        };
    }

    public static fromDTO(dto: BirthsignDTO, context: Context): Birthsign {
        const birthsign = new Birthsign();
        birthsign.id = dto.id;
        birthsign.name = dto.name;
        birthsign.user = context.user;
        birthsign.campaign = context.campaign;
        birthsign.world = context.world;
        birthsign.targetEntity = dto.targetEntity
        return birthsign;
    }
}