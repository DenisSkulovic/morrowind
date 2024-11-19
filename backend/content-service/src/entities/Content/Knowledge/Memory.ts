import { Entity, TableInheritance, OneToMany } from "typeorm";
import { Fact } from "../Fact";
import { Tag } from "../Tag";
import { ContentBase } from "../ContentBase";

@Entity()
@TableInheritance({ column: { type: "varchar", name: "type" } }) // Discriminator column for inheritance
export class Memory extends ContentBase {
    id_prefix = "MEMORY"

    @OneToMany(() => Fact, memory => memory.facts, { lazy: true })
    facts: Promise<Fact[]>
}