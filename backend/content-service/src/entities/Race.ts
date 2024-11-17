import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from "typeorm";
import { Tag } from "./Tag";
import { ContentBase } from "./ContentBase";

@Entity()
export class Race extends ContentBase {

    @Column()
    name: Record<string, string>; // Localized names

    @ManyToMany(() => Tag, (tag) => tag.effect)
    tags: Tag[];
}
