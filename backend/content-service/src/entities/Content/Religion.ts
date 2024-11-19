import { Entity, Column, TableInheritance, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { ContentBase } from "../../ContentBase";
import { Campaign } from "../Campaign";
import { User } from "../User";
import { World } from "../World";

@Entity()
export class Religion extends ContentBase {
    @PrimaryGeneratedColumn("uuid")
    id!: string;

    id_prefix = "RELIGION";

    /**
     * The name of the religion.
     */
    @Column({ type: "varchar", length: 255 })
    name!: string;

    /**
     * A description of the religion, outlining its beliefs and core philosophy.
     */
    @Column({type: "text"})
    description!: string;

    /**
     * A list of common rituals or practices for this religion.
     */
    @Column("jsonb", { nullable: true })
    rituals?: { name: string; description: string }[];

    /**
     * A list of moral or behavioral principles associated with the religion.
     */
    @Column("jsonb", { nullable: true })
    tenets?: { name: string; description: string }[];

    @ManyToOne(() => User, { nullable: true })
    user?: User;

    @ManyToOne(() => Campaign, { nullable: true })
    campaign?: Campaign;

    @ManyToOne(() => World, { nullable: true })
    world?: World;
}
