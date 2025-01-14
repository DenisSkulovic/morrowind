import { Column, Entity, ManyToMany, ManyToOne, PrimaryColumn } from "typeorm";
import { TaggableContentBase } from "../../../../TaggableContentBase";
import { Tag } from "../Tag";
import { SkillSetDTO } from "../../../../proto/entities";
import { Campaign } from "../../../campaign/entities/Campaign";
import { User } from "../../../user/entities/User";
import { World } from "../../../world/entities/World";
import { Serializable } from "../../../../decorator/serializable.decorator";
import { Serializer, SerializeStrategyEnum } from "../../../../serializer";
import { serializeSkillImprovement, deserializeSkillImprovement, SkillImprovement } from "../../../../class/SkillImprovement";
import {
    Field as GQLField,
    ID as GQLID,
    ObjectType as GQLObjectType,
} from '@nestjs/graphql';

@Entity()
@GQLObjectType({ implements: TaggableContentBase })
export class SkillSet extends TaggableContentBase {
    @PrimaryColumn()
    @Serializable()
    @GQLField(() => GQLID)
    id!: string;

    idPrefix = "SKILL_SET"

    @Column({ type: "varchar", length: 64 })
    @Serializable()
    @GQLField()
    name!: string

    @Column("jsonb")
    @Serializable({ serialize: serializeSkillImprovement, deserialize: deserializeSkillImprovement })
    @GQLField()
    skillImprovement!: SkillImprovement

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

    public toDTO(): SkillSetDTO {
        return Serializer.toDTO(this);
    }

    public static fromDTO(dto: SkillSetDTO): SkillSet {
        return Serializer.fromDTO(dto, new SkillSet());
    }
}