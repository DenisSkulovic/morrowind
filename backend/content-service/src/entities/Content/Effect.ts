import { Column, Entity, ManyToMany, ManyToOne, PrimaryColumn } from "typeorm";
import { TaggableContentBase } from "../../TaggableContentBase";
import { Tag } from "./Tag";
import { Campaign } from "../Campaign";
import { User } from "../User";
import { World } from "../World";
import { EffectDTO, EffectElementEnumDTO, EffectModeEnumDTO, EffectTargetEnumDTO, EffectTypeEnumDTO } from "../../proto/common";
import { EffectTypeEnum, EffectTargetEnum, EffectModeEnum, EffectElementEnum } from "../../enum/entityEnums";
import { serializeEnum, deserializeEnum } from "../../enum/util";

@Entity()
export class Effect extends TaggableContentBase {
    @PrimaryColumn()
    id!: string;
    
    id_prefix = "EFFECT";

    @Column({ default: "PLACEHOLDER" })
    name!: string;

    @Column({ type: "enum", enum: Object.values(EffectTypeEnum) })
    type!: string; // "damage", "healing", "buff", "debuff", "resistance", etc.

    @Column({ type: "enum", enum: Object.values(EffectTargetEnum)})
    target!: string; // "health", "stamina", "magic", etc.

    @Column({ type: "enum", enum: Object.values(EffectModeEnum)})
    mode!: string; // "instant", "gradual", "persistent"

    @Column({ type: "enum", enum: Object.values(EffectElementEnum), nullable: true})
    element?: string;


    @ManyToMany(() => Tag, (tag) => tag.effects)
    tags?: Tag[];

    @ManyToOne(() => User, { nullable: true })
    user!: User;

    @ManyToOne(() => Campaign, { nullable: true })
    campaign?: Campaign;

    @ManyToOne(() => World, { nullable: true })
    world!: World;

    public toDTO(): EffectDTO {
        return {
            id: this.id,
            blueprintId: this.blueprint_id,
            name: this.name,
            type: serializeEnum(EffectTypeEnumDTO, this.type),
            target: serializeEnum(EffectTargetEnumDTO, this.target),
            mode: serializeEnum(EffectModeEnumDTO, this.mode),
            element: this.element ? serializeEnum(EffectElementEnumDTO, this.element) : undefined,
            tags: this.tags ? { tags: this.tags.map(tag => tag.toDTO()) } : undefined,
            user: this.user?.toDTO(),
            campaign: this.campaign?.toDTO(),
            world: this.world?.toDTO(),
            targetEntity: this.targetEntity
        };
    }

    public static fromDTO(dto: EffectDTO, user: User, world: World, campaign?: Campaign): Effect {
        const effect = new Effect();
        effect.id = dto.id;
        effect.name = dto.name;
        effect.type = deserializeEnum(EffectTypeEnum, dto.type);
        effect.target = deserializeEnum(EffectTargetEnum, dto.target);
        effect.mode = deserializeEnum(EffectModeEnum, dto.mode);
        effect.element = dto.element ? deserializeEnum(EffectElementEnum, dto.element) : undefined;
        effect.tags = dto.tags?.tags?.map(tag => Tag.fromDTO(tag, user, world, campaign)) || [];
        effect.user = user;
        effect.campaign = campaign;
        effect.world = world;
        effect.targetEntity = dto.targetEntity
        return effect;
    }
}
