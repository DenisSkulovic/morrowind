import { Column, Entity, ManyToMany, ManyToOne, PrimaryColumn } from "typeorm";
import { TaggableContentBase } from "../../TaggableContentBase";
import { Tag } from "./Tag";
import { Campaign } from "../Campaign";
import { User } from "../User";
import { World } from "../World";
import { EffectDTO } from "../../proto/common";

@Entity()
export class Effect extends TaggableContentBase {
    @PrimaryColumn()
    id!: string;
    
    id_prefix = "EFFECT";

    @Column({ default: "PLACEHOLDER" })
    name!: string;

    @Column({ type: "enum", enum: ["DAMAGE", "HEALING", "BUFF", "DEBUFF", "RESISTANCE", "STEALING"] })
    type!: string; // "damage", "healing", "buff", "debuff", "resistance", etc.

    @Column({ type: "enum", enum: ["HEALTH", "STAMINA", "MANA"]})
    target!: string; // "health", "stamina", "magic", etc.

    @Column({ type: "enum", enum: ["INSTANT", "GRADUAL", "PERSISTENT"]})
    mode!: string; // "instant", "gradual", "persistent"

    @Column({ type: "enum", enum: ["FIRE", "FROST", "POISON", "SHOCK"], nullable: true})
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
            name: this.name,
            type: this.type,
            target: this.target,
            mode: this.mode,
            element: this.element,
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
        effect.type = dto.type;
        effect.target = dto.target;
        effect.mode = dto.mode;
        effect.element = dto.element || undefined;
        effect.tags = dto.tags?.tags?.map(tag => Tag.fromDTO(tag, user, world, campaign)) || [];
        effect.user = user;
        effect.campaign = campaign;
        effect.world = world;
        effect.targetEntity = dto.targetEntity
        return effect;
    }
}
