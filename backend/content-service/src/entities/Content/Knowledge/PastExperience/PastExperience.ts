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

    public toDTO(): PastExperienceDTO {
        return {
            id: this.id,
            type: this.type,
            blueprintId: this.blueprint_id,
            name: this.name,
            tags: this.tags ? { tags: this.tags.map(tag => tag.toDTO()) } : undefined,
            user: this.user?.toDTO(),
            campaign: this.campaign?.toDTO(),
            world: this.world?.toDTO(),
            targetEntity: this.targetEntity
        };
    }
    
    public static fromDTO(dto: PastExperienceDTO, user: User, world: World, campaign?: Campaign): PastExperience {
        const pastExperience = new PastExperience();
        pastExperience.id = dto.id;
        pastExperience.tags = dto.tags?.tags?.map(tag => Tag.fromDTO(tag, user, world, campaign)) || [];
        pastExperience.user = user;
        pastExperience.campaign = campaign;
        pastExperience.world = world;
        pastExperience.targetEntity = dto.targetEntity
        return pastExperience;
    }
}