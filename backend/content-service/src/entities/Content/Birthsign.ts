import { Column, Entity, ManyToOne, PrimaryColumn } from "typeorm";
import { ContentBase } from "../../ContentBase";
import { Campaign } from "../Campaign";
import { User } from "../User";
import { World } from "../World";
import { BirthsignDTO } from "../../proto/common";

@Entity()
export class Birthsign extends ContentBase {
    @PrimaryColumn()
    id!: string;
    
    id_prefix = "BIRTHSIGN"

    @Column({type:"varchar", length: 50})
    name!: string

    @ManyToOne(() => User, { nullable: true })
    user!: User;

    @ManyToOne(() => Campaign, { nullable: true })
    campaign?: Campaign;

    @ManyToOne(() => World, { nullable: true })
    world!: World;

    public toDTO(): BirthsignDTO {
        return {
            id: this.id,
            blueprintId: this.blueprint_id,
            name: this.name,
            user: this.user?.toDTO(),
            campaign: this.campaign?.toDTO(),
            world: this.world?.toDTO(),
            targetEntity: this.targetEntity
        };
    }
    
    public static fromDTO(dto: BirthsignDTO, user: User, world: World, campaign?: Campaign): Birthsign {
        const birthsign = new Birthsign();
        birthsign.id = dto.id;
        birthsign.name = dto.name;
        birthsign.user = user;
        birthsign.campaign = campaign;
        birthsign.world = world;
        birthsign.targetEntity = dto.targetEntity
        return birthsign;
    }
}