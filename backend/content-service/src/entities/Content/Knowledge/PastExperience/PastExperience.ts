// Past experience can be a childhood or an adult one. These are basically labels for storytelling, and a bunch of accessible memories and probabilities for trauma, traits. Not fully sure, need to develop the idea further.
// Past experience is needed to provide a bit of variation for a "background"

import { BeforeInsert, Column, Entity, ManyToMany, ManyToOne, PrimaryColumn, TableInheritance } from "typeorm";
import { TaggableContentBase } from "../../../../TaggableContentBase";
import { Tag } from "../../Tag";
import { Campaign } from "../../../Campaign";
import { User } from "../../../User";
import { World } from "../../../World";
import { randomUUID } from "crypto";
import { PastExperienceDTO } from "../../../../proto/common";
import { Context } from "../../../../types";

@Entity()
@TableInheritance({ column: { type: "varchar", name: "type" } })
export class PastExperience extends TaggableContentBase {
    @PrimaryColumn()
    id!: string;

    id_prefix = "PAST_EXPERIENCE"

    @Column()
    name!: string;

    @ManyToMany(() => Tag, (tag) => tag.pastExperiences)
    tags?: Tag[];

    @ManyToOne(() => User, { nullable: true })
    user!: User;

    @ManyToOne(() => Campaign, { nullable: true })
    campaign?: Campaign;

    @ManyToOne(() => World, { nullable: true })
    world!: World;

    public static toDTO(pastExp: PastExperience): PastExperienceDTO {
        return {
            id: pastExp.id,
            type: pastExp.type,
            blueprintId: pastExp.blueprint_id,
            name: pastExp.name,
            tags: PastExperience.serializeEntityArray(pastExp.tags, i => Tag.toDTO(i)),
            user: PastExperience.serializeEntity(pastExp.user, i => User.toDTO(i)),
            campaign: PastExperience.serializeEntity(pastExp.campaign, i => Campaign.toDTO(i)),
            world: PastExperience.serializeEntity(pastExp.world, i => World.toDTO(i)),
            targetEntity: pastExp.targetEntity
        };
    }

    public static fromDTO(dto: PastExperienceDTO, context: Context): PastExperience {
        const pastExperience = new PastExperience();
        pastExperience.id = dto.id;
        pastExperience.tags = PastExperience.deserializeEntityArray(dto.tags, i => Tag.fromDTO(i, context));
        pastExperience.user = context.user;
        pastExperience.campaign = context.campaign;
        pastExperience.world = context.world;
        pastExperience.targetEntity = dto.targetEntity
        return pastExperience;
    }
}