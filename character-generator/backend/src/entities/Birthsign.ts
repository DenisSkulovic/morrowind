import { Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Birthsign {
    @PrimaryGeneratedColumn("uuid")
    id: string;
}