import { Entity, Column, JoinTable, ManyToMany, ManyToOne, PrimaryGeneratedColumn, TableInheritance } from "typeorm";
import { ContentBase } from "../../../ContentBase";
import { Tag } from "../Tag";
import { Campaign } from "../../Campaign";
import { User } from "../../User";
import { World } from "../../World";

@Entity()
@TableInheritance({ column: { type: "varchar", name: "type" } })
export class Trait extends ContentBase {
    @PrimaryGeneratedColumn("uuid")
    id!: string;

    @Column({default: "PLACEHOLDER"})
    name!: string;

    
    @ManyToMany(() => Tag, (tag) => tag.traits)
    tags?: Tag[];

    @ManyToOne(() => User, { nullable: true })
    user?: User;

    @ManyToOne(() => Campaign, { nullable: true })
    campaign?: Campaign;

    @ManyToOne(() => World, { nullable: true })
    world?: World;
}
