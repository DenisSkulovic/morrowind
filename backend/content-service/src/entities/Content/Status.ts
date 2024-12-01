import { Column, Entity, ManyToOne, PrimaryColumn } from "typeorm";
import { ContentBase } from "../../ContentBase";
import { Campaign } from "../Campaign";
import { User } from "../User";
import { World } from "../World";
import { EffectTypeEnum } from "../../enum/entityEnums";
import { EffectTypeEnumDTO, StatusDTO } from "../../proto/common";
import { deserializeEnum, serializeEnum } from "../../enum/util";
import { Context } from "../../types";


@Entity()
export class Status extends ContentBase {


    @PrimaryColumn()
    id!: string;

    id_prefix = "STATUS";

    @Column({ type: "varchar", length: 255 })
    name!: string;

    @Column({ type: "text" })
    description!: string;

    @Column({ type: "enum", enum: Object.values(EffectTypeEnum) })
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

    public static toDTO(status: Status): StatusDTO {
        return {
            id: status.id,
            blueprintId: status.blueprint_id,
            name: status.name,
            description: status.description,
            type: serializeEnum(EffectTypeEnum, status.type),
            effects: status.effects,
            duration: status.duration,
            user: Status.serializeEntity(status.user, i => User.toDTO(i)),
            campaign: Status.serializeEntity(status.campaign, i => Campaign.toDTO(i)),
            world: Status.serializeEntity(status.world, i => World.toDTO(i)),
            targetEntity: status.targetEntity
        };
    }

    public static fromDTO(dto: StatusDTO, context: Context): Status {
        const status = new Status();
        status.id = dto.id;
        status.name = dto.name;
        status.description = dto.description;
        status.type = deserializeEnum(EffectTypeEnumDTO, dto.type);
        status.effects = dto.effects || [];
        status.duration = dto.duration;
        status.user = context.user;
        status.campaign = context.campaign;
        status.world = context.world;
        status.targetEntity = dto.targetEntity
        return status;
    }
}
