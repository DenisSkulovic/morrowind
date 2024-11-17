import { Entity, PrimaryGeneratedColumn, ManyToMany, OneToMany } from "typeorm";
import { Fact } from "../Fact";
import { Tag } from "../Tag";
import { ContentBase } from "../ContentBase";

@Entity()
export class Memory extends ContentBase {
    id_prefix = "MEMORY"

    @OneToMany(() => Fact, memory => memory.facts, { lazy: true })
    facts: Promise<Fact[]>
}