import { Entity, PrimaryGeneratedColumn } from "typeorm";
import {Tag} from "./Tag"
import { ContentBase } from "./ContentBase";

@Entity
export class Item extends ContentBase {

    @ManyToMany(() => Tag, (tag) => tag.item)
    tags: Item[];
}