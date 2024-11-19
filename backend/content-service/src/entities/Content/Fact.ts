import { Entity, TableInheritance, Column, JoinTable, ManyToMany, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Tag } from "./Tag";
import { ContentBase } from "../../ContentBase";
import { Campaign } from "../Campaign";
import { User } from "../User";
import { World } from "../World";
import { Memory } from "./Knowledge/Memory";

@Entity()
export class Fact extends ContentBase {
    @PrimaryGeneratedColumn("uuid")
    id!: string;

    id_prefix = "FACT"

    @Column({ type: "text" })
    description!: string

    @Column()
    weight!: number // 1 to 20; How "objectively" important the fact is. For example Red Mountain eruption is 20, because its a global event, but to a farmer in Leyawiin it may be a 2 of personal importance of the memory as a whole. The larger the weight, the more you need to accumulate "decay" to forget it. Lower weight facts are forgotten quicker.

    @ManyToMany(() => Memory, memory => memory.facts)
    memories!: Memory[]

    @ManyToMany(() => Tag, (tag) => tag.facts)
    tags?: Tag[];

    @ManyToOne(() => User, { nullable: true })
    user?: User;

    @ManyToOne(() => Campaign, { nullable: true })
    campaign?: Campaign;

    @ManyToOne(() => World, { nullable: true })
    world?: World;
}