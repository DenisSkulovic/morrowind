import { Entity, Column, ManyToOne, PrimaryColumn } from "typeorm";
import { ContentBase } from "../../ContentBase";
import { Campaign } from "../Campaign";
import { User } from "../User";
import { World } from "../World";
import { NeedDTO } from "../../proto/common";

@Entity()
export class Need extends ContentBase {

    public toDTO(): NeedDTO {
        return {
            id: this.id,
            name: this.name,
            description: this.description,
            type: this.type,
            layer: this.layer,
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
        need.type = dto.type;
        need.layer = dto.layer;
        need.user = user;
        need.campaign = campaign;
        need.world = world;
        need.targetEntity
        return need;
    }
    
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
    @Column({ type: "enum", enum: ["DYNAMIC", "THRESHOLD", "EXTERNAL"]})
    type!: string; // "dynamic", "threshold", "external".

    /**
     * Need layer according to Maslow pyramid
     */
    @Column({ type: "enum", enum: ["PHYSIOLOGICAL", "SAFETY", "BELONGING_AND_LOVE", "ESTEEM", "COGNITIVE", "AESTHETIC", "SELF_ACTUALIZATION", "TRANSCENDENCE"]})
    layer!: string

    @ManyToOne(() => User, { nullable: true })
    user!: User;

    @ManyToOne(() => Campaign, { nullable: true })
    campaign?: Campaign;

    @ManyToOne(() => World, { nullable: true })
    world!: World;
}
