import { Entity, JoinTable, ManyToMany, ManyToOne, OneToMany, PrimaryGeneratedColumn, TableInheritance } from "typeorm";
import { TaggableContentBase } from "../../../TaggableContentBase";
import { Tag } from "../Tag";
import { Item } from "../Item/Item";
import { Campaign } from "../../Campaign";
import { User } from "../../User";
import { World } from "../../World";

@Entity()
@TableInheritance({ column: { type: "varchar", name: "type" } })
export class Skill extends TaggableContentBase {
    @PrimaryColumn()
    id!: string;
    
    @BeforeInsert()
    generateId() {
        if (this.targetEntity) { // if this is an imported blueprint - make the id the same as blueprint id
            this.id = this.blueprint_id
        } else {
            this.id = `${this.id_prefix}_${randomUUID().replace(/-/g, "")}`;
        }
    }
    id_prefix = "SKILL"

    @OneToMany(() => Item, item => item.trained_skill, { nullable: true })
    items?: Item[]
    
    @ManyToMany(() => Tag, (tag) => tag.skills)
    tags?: Tag[];

    @ManyToOne(() => User, { nullable: true })
    user?: User;

    @ManyToOne(() => Campaign, { nullable: true })
    campaign?: Campaign;

    @ManyToOne(() => World, { nullable: true })
    world?: World;
}