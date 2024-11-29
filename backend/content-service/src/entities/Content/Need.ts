import { Entity, Column, ManyToOne, PrimaryColumn } from "typeorm";
import { ContentBase } from "../../ContentBase";
import { Campaign } from "../Campaign";
import { User } from "../User";
import { World } from "../World";
import { NeedDTO, NeedLayerEnumDTO, NeedTypeEnumDTO } from "../../proto/common";
import { NeedTypeEnum, NeedLayerEnum } from "../../enum/entityEnums";
import { serializeEnum, deserializeEnum } from "../../enum/util";

@Entity()
export class Need extends ContentBase {
    @PrimaryColumn()
    id!: string;
    
    id_prefix = "NEED";

    /**
     * Name of the need (e.g., Hunger, Security, Financial Stability).
     */
    @Column({ type: "varchar", length: 255 })
    name!: string;

    /**
     * Description of the need.
     */
    @Column({type: "text"})
    description!: string;

    /**
     * The type of need (e.g., dynamic, threshold, external).
     * Hunger is a dynamic need. Safety is an external need as it is based on the world around the NPC. 
     */
    @Column({ type: "enum", enum: Object.values(NeedTypeEnum)})
    type!: string; // "dynamic", "threshold", "external".

    /**
     * Need layer according to Maslow pyramid
     */
    @Column({ type: "enum", enum: Object.values(NeedLayerEnum)})
    layer!: string

    @ManyToOne(() => User, { nullable: true })
    user!: User;

    @ManyToOne(() => Campaign, { nullable: true })
    campaign?: Campaign;

    @ManyToOne(() => World, { nullable: true })
    world!: World;

    
    public toDTO(): NeedDTO {
        return {
            id: this.id,
            blueprintId: this.blueprint_id,
            name: this.name,
            description: this.description,
            type: serializeEnum(NeedTypeEnumDTO, this.type),
            layer: serializeEnum(NeedLayerEnumDTO, this.layer),
            user: this.user?.toDTO(),
            campaign: this.campaign?.toDTO(),
            world: this.world?.toDTO(),
            targetEntity: this.targetEntity
        };
    }

    public static fromDTO(dto: NeedDTO, user: User, world: World, campaign?: Campaign): Need {
        const need = new Need();
        need.id = dto.id;
        need.name = dto.name;
        need.description = dto.description;
        need.type = deserializeEnum(NeedTypeEnum, dto.type);
        need.layer = deserializeEnum(NeedLayerEnum, dto.layer);
        need.user = user;
        need.campaign = campaign;
        need.world = world;
        need.targetEntity
        return need;
    }
}
