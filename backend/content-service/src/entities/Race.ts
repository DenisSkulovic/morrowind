import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from "typeorm";
import { Tag } from "./Tag";
import { ContentBase } from "./ContentBase";

@Entity()
export class Race extends ContentBase {
    id_prefix = "RACE"

    @Column()
    name: Record<string, string>; // Localized names
}
