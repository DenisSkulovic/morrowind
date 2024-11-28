import { BeforeInsert, Column, Entity, JoinTable, ManyToMany, ManyToOne, OneToMany, PrimaryColumn, PrimaryGeneratedColumn, TableInheritance } from "typeorm";
import { TaggableContentBase } from "../../../TaggableContentBase";
import { Tag } from "../Tag";
import { Item } from "../Item/Item";
import { Campaign } from "../../Campaign";
import { User } from "../../User";
import { World } from "../../World";
import { randomUUID } from "crypto";
import { SkillSetDTO } from "../../../proto/common";

@Entity()
@TableInheritance({ column: { type: "varchar", name: "type" } })
export class SkillSet extends TaggableContentBase {
    @PrimaryColumn()
    id!: string;
    
    id_prefix = "SKILL_SET"

    @Column({type: "varchar", length: 64})
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

    public toDTO(): SkillSetDTO {
        return {
            id: this.id,
            blueprintId: this.blueprint_id,
            name: this.name,
            metadata: this.metadata,
            user: this.user?.toDTO(),
            campaign: this.campaign?.toDTO(),
            world: this.world?.toDTO(),
            tags: this.tags ? { tags: this.tags.map(tag => tag.toDTO()) } : undefined,
            skillImprovement: {
                skillImprovement: this.skill_improvement,
            },
            targetEntity: this.targetEntity
        };
    }
    
    public static fromDTO(dto: SkillSetDTO, user: User, world: World, campaign?: Campaign): SkillSet {
        const skillSet = new SkillSet();
        skillSet.id = dto.id;
        skillSet.name = dto.name;
        skillSet.skill_improvement = dto.skillImprovement?.skillImprovement || {};
        skillSet.tags = dto.tags?.tags?.map(i=>Tag.fromDTO(i, user, world, campaign));
        skillSet.user = user;
        skillSet.campaign = campaign;
        skillSet.world = world;
        skillSet.targetEntity = dto.targetEntity
        return skillSet;
    }
}