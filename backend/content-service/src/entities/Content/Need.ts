import { TableInheritance, Entity, Column, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { ContentBase } from "../../ContentBase";
import { Campaign } from "../Campaign";
import { User } from "../User";
import { World } from "../World";

@Entity()
export class Need extends ContentBase {
    @PrimaryGeneratedColumn("uuid")
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
    user?: User;

    @ManyToOne(() => Campaign, { nullable: true })
    campaign?: Campaign;

    @ManyToOne(() => World, { nullable: true })
    world?: World;
}
