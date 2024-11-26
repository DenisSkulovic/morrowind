import { BeforeInsert, Entity, ManyToOne, PrimaryColumn, PrimaryGeneratedColumn, TableInheritance } from "typeorm";
import { ContentBase } from "../../ContentBase";
import { Campaign } from "../Campaign";
import { User } from "../User";
import { World } from "../World";
import { randomUUID } from "crypto";

@Entity()
export class Birthsign extends ContentBase {
    @PrimaryColumn()
    id!: string;
    
    id_prefix = "BIRTHSIGN"

    @ManyToOne(() => User, { nullable: true })
    user!: User;

    @ManyToOne(() => Campaign, { nullable: true })
    campaign?: Campaign;

    @ManyToOne(() => World, { nullable: true })
    world!: World;
}