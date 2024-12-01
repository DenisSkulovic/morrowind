// Moods can be "Energetic", "Sad", "Reclusive", "Talkative", or whatever.
// The mood is a result of personality traits and fulfillment of needs(?).
// A depressed person will most likely be always in a bad mood.

import { Entity, Column, ManyToOne, PrimaryColumn } from "typeorm";
import { ContentBase } from "../../ContentBase";
import { Campaign } from "../Campaign";
import { User } from "../User";
import { World } from "../World";
import { MoodDTO } from "../../proto/common";
import { Context } from "../../types";

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


    public static toDTO(mood: Mood): MoodDTO {
        return {
            id: mood.id,
            blueprintId: mood.blueprint_id,
            name: mood.name,
            description: mood.description,
            user: Mood.serializeEntity(mood.user, i => User.toDTO(i)),
            campaign: Mood.serializeEntity(mood.campaign, i => Campaign.toDTO(i)),
            world: Mood.serializeEntity(mood.world, i => World.toDTO(i)),
            targetEntity: mood.targetEntity
        };
    }

    public static fromDTO(dto: MoodDTO, context: Context): Mood {
        const mood = new Mood();
        mood.id = dto.id;
        mood.name = dto.name;
        mood.description = dto.description;
        mood.user = context.user;
        mood.campaign = context.campaign;
        mood.world = context.world;
        mood.targetEntity = dto.targetEntity
        return mood;
    }
}
