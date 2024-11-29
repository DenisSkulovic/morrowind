import { Column, Entity, ManyToMany, ManyToOne, PrimaryColumn, TableInheritance } from "typeorm";
import { TaggableContentBase } from "../../../TaggableContentBase";
import { Tag } from "../Tag";
import { Campaign } from "../../Campaign";
import { User } from "../../User";
import { World } from "../../World";
import { SkillCategoryEnumDTO, SkillDTO } from "../../../proto/common";
import { SkillCategoryEnum } from "../../../enum/entityEnums";
import { serializeEnum, deserializeEnum } from "../../../enum/util";

@Entity()
@TableInheritance({ column: { type: "varchar", name: "type" } })
export class Skill extends TaggableContentBase {
    @PrimaryColumn()
    id!: string;
    
    id_prefix = "SKILL"

    @Column({type: "varchar", length: 50})
    name!: string

    @Column({type: "varchar", length: 255})
    description!: string
    
    @Column({type: "enum", enum: Object.values(SkillCategoryEnum)})
    category!: string
    
    @ManyToMany(() => Tag, (tag) => tag.skills)
    tags?: Tag[];

    @ManyToOne(() => User, { nullable: true })
    user!: User;

    @ManyToOne(() => Campaign, { nullable: true })
    campaign?: Campaign;

    @ManyToOne(() => World, { nullable: true })
    world!: World;

    public toDTO(): SkillDTO {
        return {
            id: this.id,
            blueprintId: this.blueprint_id,
            name: this.name,
            description: this.description,
            category: serializeEnum(SkillCategoryEnum, this.category),
            tags: this.tags ? {tags: this.tags?.map(tag => tag.toDTO())} : undefined,
            user: this.user?.toDTO(),
            campaign: this.campaign?.toDTO(),
            world: this.world?.toDTO(),
            targetEntity: this.targetEntity
        };
    }
    
    public static fromDTO(dto: SkillDTO, user: User, world: World, campaign?: Campaign): Skill {
        const skill = new Skill();
        skill.id = dto.id;
        skill.name = dto.name;
        skill.description = dto.description;
        skill.category = deserializeEnum(SkillCategoryEnumDTO,dto.category);
        skill.tags = dto.tags?.tags.map(i=>Tag.fromDTO(i, user, world, campaign));
        skill.user = user;
        skill.campaign = campaign;
        skill.world = world;
        skill.targetEntity = dto.targetEntity
        return skill;
    }
}