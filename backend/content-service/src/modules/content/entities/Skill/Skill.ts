import { Column, Entity, ManyToMany, ManyToOne, PrimaryColumn, TableInheritance } from "typeorm";
import { TaggableContentBase } from "../../../../TaggableContentBase";
import { Tag } from "../Tag";
import { SkillCategoryEnumDTO, SkillDTO } from "../../../../proto/common";
import { Context } from "../../../../types";
import { SkillCategoryEnum } from "../../../../common/enum/entityEnums";
import { serializeEnum, deserializeEnum } from "../../../../common/enum/util";
import { Campaign } from "../../../campaign/entities/Campaign";
import { User } from "../../../user/entities/User";
import { World } from "../../../world/entities/World";
import { Serializer } from "../../../../serializer";
import { Serializable } from "../../../../decorator/serializable.decorator";

@Entity()
@TableInheritance({ column: { type: "varchar", name: "type" } })
export class Skill extends TaggableContentBase {
    @PrimaryColumn()
    @Serializable()
    id!: string;

    id_prefix = "SKILL"

    @Column({ type: "varchar", length: 50 })
    @Serializable()
    name!: string

    @Column({ type: "varchar", length: 255 })
    @Serializable()
    description!: string

    @Column({ type: "enum", enum: Object.values(SkillCategoryEnum) })
    @Serializable()
    category!: string

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

    public toDTO(): SkillDTO {
        return Serializer.toDTO(this);
    }

    public static fromDTO(dto: SkillDTO): Skill {
        const skill = new Skill();
        return Serializer.fromDTO(dto, skill);
    }
}