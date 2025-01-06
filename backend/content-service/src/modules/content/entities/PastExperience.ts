// Past experience can be a childhood or an adult one. These are basically labels for storytelling, and a bunch of accessible memories and probabilities for trauma, traits. Not fully sure, need to develop the idea further.
// Past experience is needed to provide a bit of variation for a "background"

import { Column, Entity, ManyToMany, ManyToOne, PrimaryColumn } from "typeorm";
import { TaggableContentBase } from "../../../TaggableContentBase";
import { Tag } from "./Tag";
import { PastExperienceDTO, PastExperienceTypeEnumDTO } from "../../../proto/entities";
import { Campaign } from "../../campaign/entities/Campaign";
import { User } from "../../user/entities/User";
import { World } from "../../world/entities/World";
import { Serializable } from "../../../decorator/serializable.decorator";
import { Serializer, SerializeStrategyEnum } from "../../../serializer";
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
    @Serializable({ strategy: SerializeStrategyEnum.ENUM, internalEnum: PastExperienceTypeEnum, protoEnum: PastExperienceTypeEnumDTO })
    expType!: PastExperienceTypeEnum

    @ManyToMany(() => Tag, (tag) => tag.pastExperiences)
    @Serializable({ strategy: SerializeStrategyEnum.ID })
    tags?: Tag[];

    @ManyToOne(() => User, { nullable: true })
    @Serializable({ strategy: SerializeStrategyEnum.ID })
    user!: User;

    @ManyToOne(() => Campaign, { nullable: true })
    @Serializable({ strategy: SerializeStrategyEnum.ID })
    campaign?: Campaign;

    @ManyToOne(() => World, { nullable: true })
    @Serializable({ strategy: SerializeStrategyEnum.ID })
    world!: World;

    public toDTO(): PastExperienceDTO {
        return Serializer.toDTO(this);
    }

    public static fromDTO(dto: PastExperienceDTO): PastExperience {
        return Serializer.fromDTO(dto, new PastExperience());
    }
}