import { Entity, PrimaryGeneratedColumn, Column, OneToMany, ManyToMany } from "typeorm";
import {Tag} from "./Tag"

@Entity
export class Attribute {
    @PrimaryGeneratedColumn("uuid")
    id: string;

    @Column()
    name: string;

    @ManyToMany(() => Tag, (tag) => tag.attributes)
    tags: Tag[];
}