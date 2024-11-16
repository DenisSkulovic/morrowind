import { Entity, PrimaryGeneratedColumn, Column, ManyToMany, TableInheritance } from "typeorm";
import { Tag } from "../Tag";

@Entity()
@TableInheritance({ column: { type: "varchar", name: "type" } }) // Discriminator column for inheritance
export abstract class Trait {
    @PrimaryGeneratedColumn("uuid")
    id: string;

    @Column()
    name: string;

    @ManyToMany(() => Tag, (tag) => tag.traits)
    tags: Tag[];
}
