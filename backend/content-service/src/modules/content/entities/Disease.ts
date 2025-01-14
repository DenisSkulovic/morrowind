import { Column, Entity, ManyToMany, ManyToOne, PrimaryColumn } from "typeorm";
import { TaggableContentBase } from "../../../TaggableContentBase";
import { Tag } from "./Tag";
import { Character } from "./Character";
import { DiseaseDTO, DiseaseSeverityEnumDTO } from "../../../proto/entities";
import { DiseaseSeverityEnum } from "../../../common/enum/entityEnums";
import { Campaign } from "../../campaign/entities/Campaign";
import { User } from "../../user/entities/User";
import { World } from "../../world/entities/World";
import { Serializable } from "../../../decorator/serializable.decorator";
import { Serializer, SerializeStrategyEnum } from "../../../serializer";
import {
    Field as GQLField,
    ID as GQLID,
    ObjectType as GQLObjectType,
} from '@nestjs/graphql';

@Entity()
@GQLObjectType({ implements: TaggableContentBase })
export class Disease extends TaggableContentBase {
    @PrimaryColumn()
    @GQLField(() => GQLID)
    @Serializable()
    id!: string;

    idPrefix = "DISEASE";

    @Column({ type: "varchar", length: 255 })
    @GQLField()
    @Serializable()
    name!: string;

    @Column({ type: "text" })
    @GQLField()
    @Serializable()
    description!: string;

    @Column({ type: "enum", enum: Object.values(DiseaseSeverityEnum) })
    @GQLField()
    @Serializable({ strategy: SerializeStrategyEnum.ENUM, internalEnum: DiseaseSeverityEnum, protoEnum: DiseaseSeverityEnumDTO })
    severity!: string;

    @ManyToMany(() => Character, {})
    @GQLField(() => [Character])
    characters?: Character[];

    @ManyToMany(() => Tag, (tag) => tag.diseases, {})
    @GQLField(() => [Tag])
    @Serializable({ strategy: SerializeStrategyEnum.ID })
    tags?: Tag[];

    @ManyToOne(() => User, { nullable: true, })
    @GQLField(() => User, { nullable: true })
    @Serializable({ strategy: SerializeStrategyEnum.ID })
    user!: User;

    @ManyToOne(() => Campaign, { nullable: true, })
    @GQLField(() => Campaign, { nullable: true })
    @Serializable({ strategy: SerializeStrategyEnum.ID })
    campaign?: Campaign;

    @ManyToOne(() => World, { nullable: true, })
    @GQLField(() => World, { nullable: true })
    @Serializable({ strategy: SerializeStrategyEnum.ID })
    world!: World;

    public toDTO(): DiseaseDTO {
        return Serializer.toDTO(this);
    }

    public static fromDTO(dto: DiseaseDTO): Disease {
        return Serializer.fromDTO(dto, new Disease());
    }
}
