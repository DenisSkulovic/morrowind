import { Entity, Column, ManyToMany, TableInheritance } from "typeorm";
import { Tag } from "../Tag";
import { ContentBase } from "../ContentBase";

@Entity()
@TableInheritance({ column: { type: "varchar", name: "type" } }) // Discriminator column for inheritance
export abstract class Trait extends ContentBase {

    @Column()
    name: string;
}
