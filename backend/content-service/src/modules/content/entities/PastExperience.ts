// Past experience can be a childhood or an adult one. These are basically labels for storytelling, and a bunch of accessible memories and probabilities for trauma, traits. Not fully sure, need to develop the idea further.
// Past experience is needed to provide a bit of variation for a "background"

import { Column, Entity, ManyToMany, ManyToOne, PrimaryColumn, TableInheritance } from "typeorm";
import { TaggableContentBase } from "../../../TaggableContentBase";
import { Tag } from "./Tag";
import { PastExperienceDTO, PastExperienceTypeEnumDTO } from "../../../proto/common";
import { Campaign } from "../../campaign/entities/Campaign";
import { User } from "../../user/entities/User";
import { World } from "../../world/entities/World";
import { Serializable } from "../../../decorator/serializable.decorator";
import { Serializer } from "../../../serializer";
import { PastExperienceTypeEnum } from "../../../common/enum/PastExperienceTypeEnum";
import { deserializeEnum, serializeEnum } from "../../../common/enum/util";

@Entity()
export class PastExperience extends TaggableContentBase {
    @PrimaryColumn()
    @Serializable()
    id!: string;

    idPrefix = "PAST_EXPERIENCE"

    @Column()
    @Serializable()
    name!: string;

    @Column({ type: "enum", enum: Object.values(PastExperienceTypeEnum) })
    @Serializable({
        serialize: (i) => serializeEnum(PastExperienceTypeEnum, PastExperienceTypeEnumDTO, i),
        deserialize: (i) => deserializeEnum(PastExperienceTypeEnumDTO, PastExperienceTypeEnum, i)
    })
    expType!: PastExperienceTypeEnum

    @ManyToMany(() => Tag, (tag) => tag.pastExperiences)
    @Serializable({ strategy: 'id' })
    tags?: Tag[];

    @ManyToOne(() => User, { nullable: true })
    @Serializable({ strategy: 'id' })
    user!: User;

    @ManyToOne(() => Campaign, { nullable: true })
    @Serializable({ strategy: 'id' })
    campaign?: Campaign;

    @ManyToOne(() => World, { nullable: true })
    @Serializable({ strategy: 'id' })
    world!: World;

    public toDTO(): PastExperienceDTO {
        return Serializer.toDTO(this);
    }

    public static fromDTO(dto: PastExperienceDTO): PastExperience {
        const pastExperience = new PastExperience();
        return Serializer.fromDTO(dto, pastExperience);
    }
}