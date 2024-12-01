import { Column, Entity, ManyToMany, ManyToOne, PrimaryColumn } from "typeorm";
import { TaggableContentBase } from "../../TaggableContentBase";
import { Tag } from "./Tag";
import { Campaign } from "../Campaign";
import { User } from "../User";
import { World } from "../World";
import { EffectDTO, EffectElementEnumDTO, EffectModeEnumDTO, EffectTargetEnumDTO, EffectTypeEnumDTO } from "../../proto/common";
import { EffectTypeEnum, EffectTargetEnum, EffectModeEnum, EffectElementEnum } from "../../enum/entityEnums";
import { serializeEnum, deserializeEnum } from "../../enum/util";
import { Context } from "../../types";

@Entity()
export class Effect extends TaggableContentBase {
    @PrimaryColumn()
    id!: string;

    id_prefix = "EFFECT";

    @Column({ default: "PLACEHOLDER" })
    name!: string;

    @Column({ type: "enum", enum: Object.values(EffectTypeEnum) })
    type!: string; // "damage", "healing", "buff", "debuff", "resistance", etc.

    @Column({ type: "enum", enum: Object.values(EffectTargetEnum) })
    target!: string; // "health", "stamina", "magic", etc.

    @Column({ type: "enum", enum: Object.values(EffectModeEnum) })
    mode!: string; // "instant", "gradual", "persistent"

    @Column({ type: "enum", enum: Object.values(EffectElementEnum), nullable: true })
    element?: string;


    @ManyToMany(() => Tag, (tag) => tag.effects, {})
    tags?: Tag[];

    @ManyToOne(() => User, { nullable: true, })
    user!: User;

    @ManyToOne(() => Campaign, { nullable: true, })
    campaign?: Campaign;

    @ManyToOne(() => World, { nullable: true, })
    world!: World;

    public static toDTO(effect: Effect): EffectDTO {
        return {
            id: effect.id,
            blueprintId: effect.blueprint_id,
            name: effect.name,
            type: serializeEnum(EffectTypeEnumDTO, effect.type),
            target: serializeEnum(EffectTargetEnumDTO, effect.target),
            mode: serializeEnum(EffectModeEnumDTO, effect.mode),
            element: effect.element ? serializeEnum(EffectElementEnumDTO, effect.element) : undefined,
            tags: Effect.serializeEntityArray(effect.tags, i => Tag.toDTO(i)),
            user: Effect.serializeEntity(effect.user, i => User.toDTO(i)),
            campaign: Effect.serializeEntity(effect.campaign, i => Campaign.toDTO(i)),
            world: Effect.serializeEntity(effect.world, i => World.toDTO(i)),
            targetEntity: effect.targetEntity
        };
    }

    public static fromDTO(dto: EffectDTO, context: Context): Effect {
        const effect = new Effect();
        effect.id = dto.id;
        effect.name = dto.name;
        effect.type = deserializeEnum(EffectTypeEnum, dto.type);
        effect.target = deserializeEnum(EffectTargetEnum, dto.target);
        effect.mode = deserializeEnum(EffectModeEnum, dto.mode);
        effect.element = dto.element ? deserializeEnum(EffectElementEnum, dto.element) : undefined;
        effect.tags = Effect.deserializeEntityArray(dto.tags, i => Tag.fromDTO(i, context));
        effect.user = context.user;
        effect.campaign = context.campaign;
        effect.world = context.world;
        effect.targetEntity = dto.targetEntity
        return effect;
    }
}
