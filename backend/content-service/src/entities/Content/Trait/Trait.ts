import { Entity, Column, JoinTable, ManyToMany, ManyToOne, PrimaryGeneratedColumn, TableInheritance, BeforeInsert, PrimaryColumn } from "typeorm";
import { TaggableContentBase } from "../../../TaggableContentBase";
import { Tag } from "../Tag";
import { Campaign } from "../../Campaign";
import { User } from "../../User";
import { World } from "../../World";
import { randomUUID } from "crypto";

@Entity()
@TableInheritance({ column: { type: "varchar", name: "type" } })
export class Trait extends TaggableContentBase {
    @PrimaryColumn()
    id!: string;
    
    id_prefix = "TRAIT";

    @Column({default: "PLACEHOLDER"})
    name!: string;

    
    @ManyToMany(() => Tag, (tag) => tag.traits)
    tags?: Tag[];

    @ManyToOne(() => User, { nullable: true })
    user!: User;

    @ManyToOne(() => Campaign, { nullable: true })
    campaign?: Campaign;

    @ManyToOne(() => World, { nullable: true })
    world!: World;
}
