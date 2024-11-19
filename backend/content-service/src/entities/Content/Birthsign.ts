import { Entity, ManyToOne, PrimaryGeneratedColumn, TableInheritance } from "typeorm";
import { ContentBase } from "../../ContentBase";
import { Campaign } from "../Campaign";
import { User } from "../User";
import { World } from "../World";

@Entity()
export class Birthsign extends ContentBase {
    @PrimaryGeneratedColumn("uuid")
    id!: string;

    id_prefix = "BIRTHSIGN"

    @ManyToOne(() => User, { nullable: true })
    user?: User;

    @ManyToOne(() => Campaign, { nullable: true })
    campaign?: Campaign;

    @ManyToOne(() => World, { nullable: true })
    world?: World;
}