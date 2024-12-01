import { Column, Entity, ManyToMany, ManyToOne, PrimaryColumn, TableInheritance } from "typeorm";
import { TaggableContentBase } from "../../../TaggableContentBase";
import { Tag } from "../Tag";
import { Campaign } from "../../Campaign";
import { User } from "../../User";
import { World } from "../../World";
import { SkillCategoryEnumDTO, SkillDTO } from "../../../proto/common";
import { SkillCategoryEnum } from "../../../enum/entityEnums";
import { serializeEnum, deserializeEnum } from "../../../enum/util";
import { Context } from "../../../types";

@Entity()
@TableInheritance({ column: { type: "varchar", name: "type" } })
export class Skill extends TaggableContentBase {
    @PrimaryColumn()
    id!: string;

    id_prefix = "SKILL"

    @Column({ type: "varchar", length: 50 })
    name!: string

    @Column({ type: "varchar", length: 255 })
    description!: string

    @Column({ type: "enum", enum: Object.values(SkillCategoryEnum) })
    category!: string

    @ManyToMany(() => Tag, (tag) => tag.skills)
    tags?: Tag[];

    @ManyToOne(() => User, { nullable: true })
    user!: User;

    @ManyToOne(() => Campaign, { nullable: true })
    campaign?: Campaign;

    @ManyToOne(() => World, { nullable: true })
    world!: World;

    public static toDTO(skill: Skill): SkillDTO {
        return {
            id: skill.id,
            blueprintId: skill.blueprint_id,
            name: skill.name,
            description: skill.description,
            category: serializeEnum(SkillCategoryEnum, skill.category),
            tags: Skill.serializeEntityArray(skill.tags, i => Tag.toDTO(i)),
            user: Skill.serializeEntity(skill.user, i => User.toDTO(i)),
            campaign: Skill.serializeEntity(skill.campaign, i => Campaign.toDTO(i)),
            world: Skill.serializeEntity(skill.world, i => World.toDTO(i)),
            targetEntity: skill.targetEntity
        };
    }

    public static fromDTO(dto: SkillDTO, context: Context): Skill {
        const skill = new Skill();
        skill.id = dto.id;
        skill.name = dto.name;
        skill.description = dto.description;
        skill.category = deserializeEnum(SkillCategoryEnumDTO, dto.category);
        skill.tags = Skill.deserializeEntityArray(dto.tags, i => Tag.fromDTO(i, context));
        skill.user = context.user;
        skill.campaign = context.campaign;
        skill.world = context.world;
        skill.targetEntity = dto.targetEntity
        return skill;
    }
}