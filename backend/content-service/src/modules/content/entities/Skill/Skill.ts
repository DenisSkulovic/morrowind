import { Column, Entity, ManyToMany, ManyToOne, PrimaryColumn } from "typeorm";
import { TaggableContentBase } from "../../../../TaggableContentBase";
import { Tag } from "../Tag";
import { SkillDTO } from "../../../../proto/entities";
import { SkillCategoryEnum } from "../../../../common/enum/entityEnums";
import { Campaign } from "../../../campaign/entities/Campaign";
import { User } from "../../../user/entities/User";
import { World } from "../../../world/entities/World";
import { Serializer, SerializeStrategyEnum } from "../../../../serializer";
import { Serializable } from "../../../../decorator/serializable.decorator";
import {
    Field as GQLField,
    ID as GQLID,
    ObjectType as GQLObjectType,
} from '@nestjs/graphql';

@Entity()
@GQLObjectType({ implements: TaggableContentBase })
export class Skill extends TaggableContentBase {
    @PrimaryColumn()
    @Serializable()
    @GQLField(() => GQLID)
    id!: string;

    idPrefix = "SKILL"

    @Column({ type: "varchar", length: 50 })
    @Serializable()
    @GQLField()
    name!: string

    @Column({ type: "varchar", length: 255 })
    @Serializable()
    @GQLField()
    description!: string

    @Column({ type: "enum", enum: Object.values(SkillCategoryEnum) })
    @Serializable()
    @GQLField()
    category!: string

    @ManyToMany(() => Tag, (tag) => tag.skills)
    @Serializable({ strategy: SerializeStrategyEnum.ID })
    @GQLField(() => [Tag])
    tags?: Tag[];

    @ManyToOne(() => User, { nullable: true })
    @Serializable({ strategy: SerializeStrategyEnum.ID })
    @GQLField(() => User)
    user!: User;

    @ManyToOne(() => Campaign, { nullable: true })
    @Serializable({ strategy: SerializeStrategyEnum.ID })
    @GQLField(() => Campaign)
    campaign?: Campaign;

    @ManyToOne(() => World, { nullable: true })
    @Serializable({ strategy: SerializeStrategyEnum.ID })
    @GQLField(() => World)
    world!: World;

    public toDTO(): SkillDTO {
        return Serializer.toDTO(this);
    }

    public static fromDTO(dto: SkillDTO): Skill {
        return Serializer.fromDTO(dto, new Skill());
    }
}