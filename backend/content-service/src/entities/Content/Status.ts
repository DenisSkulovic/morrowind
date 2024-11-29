import { Column, Entity, ManyToOne, PrimaryColumn } from "typeorm";
import { ContentBase } from "../../ContentBase";
import { Campaign } from "../Campaign";
import { User } from "../User";
import { World } from "../World";
import { EffectTypeEnum } from "../../enum/entityEnums";
import { EffectTypeEnumDTO, StatusDTO } from "../../proto/common";
import { deserializeEnum, serializeEnum } from "../../enum/util";


@Entity()
export class Status extends ContentBase {

    
    @PrimaryColumn()
    id!: string;
    
    id_prefix = "STATUS";

    @Column({ type: "varchar", length: 255 })
    name!: string;

    @Column({ type: "text" })
    description!: string;

    @Column({ type: "enum", enum: Object.values(EffectTypeEnum)})
    type!: string;

    @Column("jsonb", { nullable: true })
    effects!: string[]; // Links to associated Effect IDs.

    @Column({ nullable: true })
    duration!: number; // Duration in ticks (0 for permanent).

    @ManyToOne(() => User, { nullable: true })
    user!: User;

    @ManyToOne(() => Campaign, { nullable: true })
    campaign?: Campaign;

    @ManyToOne(() => World, { nullable: true })
    world!: World;

    public toDTO(): StatusDTO {
        return {
            id: this.id,
            blueprintId: this.blueprint_id,
            name: this.name,
            description: this.description,
            type: serializeEnum(EffectTypeEnum, this.type),
            effects: this.effects,
            duration: this.duration,
            user: this.user?.toDTO(),
            campaign: this.campaign?.toDTO(),
            world: this.world?.toDTO(),
            targetEntity: this.targetEntity
        };
    }

    public static fromDTO(dto: StatusDTO, user: User, world: World, campaign?: Campaign): Status {
        const status = new Status();
        status.id = dto.id;
        status.name = dto.name;
        status.description = dto.description;
        status.type = deserializeEnum(EffectTypeEnumDTO, dto.type);
        status.effects = dto.effects || [];
        status.duration = dto.duration;
        status.user = user;
        status.campaign = campaign;
        status.world = world;
        status.targetEntity = dto.targetEntity
        return status;
    }
}
