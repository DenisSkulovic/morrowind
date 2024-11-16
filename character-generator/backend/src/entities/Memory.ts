import { Entity, PrimaryGeneratedColumn, ManyToMany, OneToMany } from "typeorm";
import { Fact } from "./Fact";
import { Tag } from "./Tag";

@Entity()
export class Memory {
    @PrimaryGeneratedColumn("uuid")
    id: string;

    @OneToMany(() => Fact, memory => memory.facts, { lazy: true })
    facts: Promise<Fact[]>

    @ManyToMany(() => Tag, (tag) => tag.memory)
    tags: Tag[];
}