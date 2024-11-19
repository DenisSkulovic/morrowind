import { Entity, Column, ManyToMany, TableInheritance } from "typeorm";
import { ContentBase } from "../ContentBase";

@Entity()
@TableInheritance({ column: { type: "varchar", name: "type" } }) // Discriminator column for inheritance
export class Trait extends ContentBase {

    @Column()
    name: string;
}
