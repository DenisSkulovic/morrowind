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

@Entity()
export class Skill extends TaggableContentBase {
    @PrimaryColumn()
    @Serializable()
    id!: string;

    idPrefix = "SKILL"

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

    public toDTO(): SkillDTO {
        return Serializer.toDTO(this);
    }

    public static fromDTO(dto: SkillDTO): Skill {
        return Serializer.fromDTO(dto, new Skill());
    }
}