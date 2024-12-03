import { Column, Entity, ManyToMany, ManyToOne, PrimaryColumn } from "typeorm";
import { TaggableContentBase } from "../../../../TaggableContentBase";
import { Tag } from "../Tag";
import { SkillSetDTO } from "../../../../proto/common";
import { Campaign } from "../../../campaign/entities/Campaign";
import { User } from "../../../user/entities/User";
import { World } from "../../../world/entities/World";
import { Serializable } from "../../../../decorator/serializable.decorator";
import { Serializer } from "../../../../serializer";
import { serializeSkillImprovement, deserializeSkillImprovement, SkillImprovement } from "../../../../class/SkillImprovement";

@Entity()
export class SkillSet extends TaggableContentBase {
    @PrimaryColumn()
    @Serializable()
    id!: string;

    id_prefix = "SKILL_SET"

    @Column({ type: "varchar", length: 64 })
    @Serializable()
    name!: string

    @Column("jsonb")
    @Serializable({ serialize: serializeSkillImprovement, deserialize: deserializeSkillImprovement })
    skill_improvement!: SkillImprovement

    @ManyToMany(() => Tag, (tag) => tag.skills)
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

    public toDTO(): SkillSetDTO {
        return Serializer.toDTO(this);
    }

    public static fromDTO(dto: SkillSetDTO): SkillSet {
        const skillSet = new SkillSet();
        return Serializer.fromDTO(dto, skillSet);
    }
}