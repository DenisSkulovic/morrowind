import { TableInheritance, Entity, Column, ManyToOne, PrimaryGeneratedColumn, BeforeInsert, PrimaryColumn } from "typeorm";
import { ContentBase } from "../../ContentBase";
import { Campaign } from "../Campaign";
import { User } from "../User";
import { World } from "../World";
import { randomUUID } from "crypto";
import { GenerationInstruction } from "../../types";


@Entity()
export class PersonalityProfile extends ContentBase {
    @PrimaryColumn()
    id!: string;
    
    id_prefix = "PROFILE";

    @Column({ type: "varchar", length: 255 })
    name!: string;

    @Column({ type: "varchar", length: 3 })
    enneagramType!: string; // Enneagram type with wing as a string.

    @Column("jsonb")
    traits!: GenerationInstruction[];

    @ManyToOne(() => User, { nullable: true })
    user!: User;

    @ManyToOne(() => Campaign, { nullable: true })
    campaign?: Campaign;

    @ManyToOne(() => World, { nullable: true })
    world!: World;
}
