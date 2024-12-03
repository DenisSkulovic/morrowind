// Moods can be "Energetic", "Sad", "Reclusive", "Talkative", or whatever.
// The mood is a result of personality traits and fulfillment of needs(?).
// A depressed person will most likely be always in a bad mood.

import { Entity, Column, ManyToOne, PrimaryColumn } from "typeorm";
import { ContentBase } from "../../../ContentBase";
import { MoodDTO } from "../../../proto/common";
import { Context } from "../../../types";
import { Campaign } from "../../campaign/entities/Campaign";
import { User } from "../../user/entities/User";
import { World } from "../../world/entities/World";
import { Serializable } from "../../../decorator/serializable.decorator";
import { Serializer } from "../../../serializer";

@Entity()
export class Mood extends ContentBase {
    @PrimaryColumn()
    @Serializable()
    id!: string;

    idPrefix = "MOOD";

    @Column({ type: "varchar", length: 255 })
    @Serializable()
    name!: string;

    @Column({ type: "text" })
    @Serializable()
    description!: string;

    @ManyToOne(() => User, { nullable: true })
    @Serializable({ strategy: 'id' })
    user!: User;

    @ManyToOne(() => Campaign, { nullable: true })
    @Serializable({ strategy: 'id' })
    campaign?: Campaign;

    @ManyToOne(() => World, { nullable: true })
    @Serializable({ strategy: 'id' })
    world!: World;


    public toDTO(): MoodDTO {
        return Serializer.toDTO(this);
    }

    public static fromDTO(dto: MoodDTO): Mood {
        const mood = new Mood();
        return Serializer.fromDTO(dto, mood);
    }
}
