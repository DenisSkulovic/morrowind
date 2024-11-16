import { Entity, PrimaryGeneratedColumn } from "typeorm";
import {Tag} from "./Tag"

@Entity
export class Item {
    @PrimaryGeneratedColumn("uuid")
    id: string

    @ManyToMany(() => Tag, (tag) => tag.item)
    tags: Item[];
}