import { BeforeInsert, Column, Entity, JoinTable, ManyToMany, ManyToOne, OneToMany, PrimaryColumn, PrimaryGeneratedColumn, TableInheritance } from "typeorm";
import { TaggableContentBase } from "../../../TaggableContentBase";
import { Tag } from "../Tag";
import { Item } from "../Item/Item";
import { Campaign } from "../../Campaign";
import { User } from "../../User";
import { World } from "../../World";
import { randomUUID } from "crypto";
import { SkillSetDTO } from "../../../proto/common";
import { Context } from "../../../types";

@Entity()
@TableInheritance({ column: { type: "varchar", name: "type" } })
export class SkillSet extends TaggableContentBase {
    @PrimaryColumn()
    id!: string;

    id_prefix = "SKILL_SET"

    @Column({ type: "varchar", length: 64 })
    name!: string

    @Column("jsonb")
    skill_improvement!: {
        [skill_blueprint_id: string]: number // number by which the base skill from race gets increased
    }

    @ManyToMany(() => Tag, (tag) => tag.skills)
    tags?: Tag[];

    @ManyToOne(() => User, { nullable: true })
    user!: User;

    @ManyToOne(() => Campaign, { nullable: true })
    campaign?: Campaign;

    @ManyToOne(() => World, { nullable: true })
    world!: World;

    public static toDTO(skillSet: SkillSet): SkillSetDTO {
        return {
            id: skillSet.id,
            blueprintId: skillSet.blueprint_id,
            name: skillSet.name,
            metadata: skillSet.metadata && { metadata: skillSet.metadata },
            user: SkillSet.serializeEntity(skillSet.user, i => User.toDTO(i)),
            campaign: SkillSet.serializeEntity(skillSet.campaign, i => Campaign.toDTO(i)),
            world: SkillSet.serializeEntity(skillSet.world, i => World.toDTO(i)),
            tags: SkillSet.serializeEntityArray(skillSet.tags, i => Tag.toDTO(i)),
            skillImprovement: {
                skillImprovement: skillSet.skill_improvement,
            },
            targetEntity: skillSet.targetEntity
        };
    }

    public static fromDTO(dto: SkillSetDTO, context: Context): SkillSet {
        const skillSet = new SkillSet();
        skillSet.id = dto.id;
        skillSet.name = dto.name;
        skillSet.skill_improvement = dto.skillImprovement?.skillImprovement || {};
        skillSet.tags = SkillSet.deserializeEntityArray(dto.tags, i => Tag.fromDTO(i, context));
        skillSet.user = context.user;
        skillSet.campaign = context.campaign;
        skillSet.world = context.world;
        skillSet.targetEntity = dto.targetEntity
        return skillSet;
    }
}