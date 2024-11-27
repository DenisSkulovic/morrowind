import { Column, Entity, ManyToMany, ManyToOne, PrimaryColumn, TableInheritance } from "typeorm";
import { TaggableContentBase } from "../../../TaggableContentBase";
import { Tag } from "../Tag";
import { Campaign } from "../../Campaign";
import { User } from "../../User";
import { World } from "../../World";
import { SkillCategoryEnum } from "../../../enum/SkillCategoryEnum";

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
}