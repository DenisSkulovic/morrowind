import { Entity, PrimaryGeneratedColumn } from "typeorm";



@Entity()
export class Skill {

    @PrimaryGeneratedColumn("uuid")
    id: string
}