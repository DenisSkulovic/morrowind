import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from "typeorm";
import { Tag } from "./Tag";

@Entity()
export class Race {
    @PrimaryGeneratedColumn("uuid")
    id: string;

    @Column()
    name: Record<string, string>; // Localized names

    @ManyToMany(() => Tag, (tag) => tag.effect)
    tags: Tag[];
}
