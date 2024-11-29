import { Entity, Column, ManyToOne, PrimaryColumn } from "typeorm";
import { ContentBase } from "../../ContentBase";
import { Campaign } from "../Campaign";
import { User } from "../User";
import { World } from "../World";
import { EffectTargetEnumDTO, EffectTypeEnumDTO, ResistanceDTO } from "../../proto/common";
import { EffectTypeEnum } from "../../enum/entityEnums";
import { serializeEnum, deserializeEnum } from "../../enum/util";

@Entity()
export class Resistance extends ContentBase {
    @PrimaryColumn()
    id!: string;
    
    id_prefix = "RESISTANCE";

    @Column({ type: "varchar", length: 255 })
    name!: string;

    @Column({ type: "enum", enum: Object.values(EffectTypeEnum)})
    effectType!: string; // Matches Effect.type

    @Column({ nullable: true })
    targetEffect?: string; // "fire", "poison", "disease".

    @ManyToOne(() => User, { nullable: true })
    user!: User;

    @ManyToOne(() => Campaign, { nullable: true })
    campaign?: Campaign;

    @ManyToOne(() => World, { nullable: true })
    world!: World;


    public toDTO(): ResistanceDTO {
        return {
            id: this.id,
            blueprintId: this.blueprint_id,
            name: this.name,
            effectType: serializeEnum(EffectTypeEnumDTO, this.effectType),
            targetEffect: this.targetEffect,
            user: this.user?.toDTO(),
            campaign: this.campaign?.toDTO(),
            world: this.world?.toDTO(),
            targetEntity: this.targetEntity
        };
    }

    public static fromDTO(dto: ResistanceDTO, user: User, world: World, campaign?: Campaign): Resistance {
        const resistance = new Resistance();
        resistance.id = dto.id;
        resistance.name = dto.name;
        resistance.effectType = deserializeEnum(EffectTypeEnum, dto.effectType);
        resistance.targetEffect = dto.targetEffect;
        resistance.user = user;
        resistance.campaign = campaign;
        resistance.world = world;
        resistance.targetEntity = dto.targetEntity
        return resistance;
    }
}
