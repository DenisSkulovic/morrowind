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

@Entity()
export class SkillSet extends TaggableContentBase {
    @PrimaryColumn()
    @Serializable()
    id!: string;

    idPrefix = "SKILL_SET"

    @Column({ type: "varchar", length: 64 })
    @Serializable()
    name!: string

    @Column("jsonb")
    @Serializable({ serialize: serializeSkillImprovement, deserialize: deserializeSkillImprovement })
    skillImprovement!: SkillImprovement

    @ManyToMany(() => Tag, (tag) => tag.skills)
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

    public toDTO(): SkillSetDTO {
        return Serializer.toDTO(this);
    }

    public static fromDTO(dto: SkillSetDTO): SkillSet {
        return Serializer.fromDTO(dto, new SkillSet());
    }
}