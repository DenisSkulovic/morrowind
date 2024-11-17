import { Entity, PrimaryGeneratedColumn } from "typeorm";
import {Tag} from "./Tag"
import { ContentBase } from "./ContentBase";

@Entity
export class Item extends ContentBase {
    id_prefix = "ITEM"
}