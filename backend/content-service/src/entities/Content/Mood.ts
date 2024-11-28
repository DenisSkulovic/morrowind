// Moods can be "Energetic", "Sad", "Reclusive", "Talkative", or whatever.
// The mood is a result of personality traits and fulfillment of needs(?).
// A depressed person will most likely be always in a bad mood.

import { Entity, Column, ManyToOne, PrimaryColumn } from "typeorm";
import { ContentBase } from "../../ContentBase";
import { Campaign } from "../Campaign";
import { User } from "../User";
import { World } from "../World";
import { MoodDTO } from "../../proto/common";

@Entity()
export class Mood extends ContentBase {
    @PrimaryColumn()
    id!: string;
    
    id_prefix = "MOOD";

    @Column({ type: "varchar", length: 255 })
    name!: string;

    @Column({ type: "text" })
    description!: string;

    @ManyToOne(() => User, { nullable: true })
    user!: User;

    @ManyToOne(() => Campaign, { nullable: true })
    campaign?: Campaign;

    @ManyToOne(() => World, { nullable: true })
    world!: World;


    public toDTO(): MoodDTO {
        return {
            id: this.id,
            blueprintId: this.blueprint_id,
            name: this.name,
            description: this.description,
            user: this.user?.toDTO(),
            campaign: this.campaign?.toDTO(),
            world: this.world?.toDTO(),
            targetEntity: this.targetEntity
        };
    }

    public static fromDTO(dto: MoodDTO, user: User, world: World, campaign?: Campaign): Mood {
        const mood = new Mood();
        mood.id = dto.id;
        mood.name = dto.name;
        mood.description = dto.description;
        mood.user = user;
        mood.campaign = campaign;
        mood.world = world;
        mood.targetEntity = dto.targetEntity
        return mood;
    }
}
