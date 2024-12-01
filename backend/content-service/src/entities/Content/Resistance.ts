import { Entity, Column, ManyToOne, PrimaryColumn } from "typeorm";
import { ContentBase } from "../../ContentBase";
import { Campaign } from "../Campaign";
import { User } from "../User";
import { World } from "../World";
import { EffectTargetEnumDTO, EffectTypeEnumDTO, ResistanceDTO } from "../../proto/common";
import { EffectTypeEnum } from "../../enum/entityEnums";
import { serializeEnum, deserializeEnum } from "../../enum/util";
import { Context } from "../../types";

@Entity()
export class Resistance extends ContentBase {
    @PrimaryColumn()
    id!: string;

    id_prefix = "RESISTANCE";

    @Column({ type: "varchar", length: 255 })
    name!: string;

    @Column({ type: "enum", enum: Object.values(EffectTypeEnum) })
    effectType!: string; // Matches Effect.type

    @Column({ nullable: true })
    targetEffect?: string; // "fire", "poison", "disease".

    @ManyToOne(() => User, { nullable: true })
    user!: User;

    @ManyToOne(() => Campaign, { nullable: true })
    campaign?: Campaign;

    @ManyToOne(() => World, { nullable: true })
    world!: World;


    public static toDTO(resis: Resistance): ResistanceDTO {
        return {
            id: resis.id,
            blueprintId: resis.blueprint_id,
            name: resis.name,
            effectType: serializeEnum(EffectTypeEnumDTO, resis.effectType),
            targetEffect: resis.targetEffect,
            user: Resistance.serializeEntity(resis.user, i => User.toDTO(i)),
            campaign: Resistance.serializeEntity(resis.campaign, i => Campaign.toDTO(i)),
            world: Resistance.serializeEntity(resis.world, i => World.toDTO(i)),
            targetEntity: resis.targetEntity
        };
    }

    public static fromDTO(dto: ResistanceDTO, context: Context): Resistance {
        const resistance = new Resistance();
        resistance.id = dto.id;
        resistance.name = dto.name;
        resistance.effectType = deserializeEnum(EffectTypeEnum, dto.effectType);
        resistance.targetEffect = dto.targetEffect;
        resistance.user = context.user;
        resistance.campaign = context.campaign;
        resistance.world = context.world;
        resistance.targetEntity = dto.targetEntity
        return resistance;
    }
}
