import { Entity, PrimaryGeneratedColumn, Column, ManyToMany } from "typeorm";
import { Tag } from "./Tag";

@Entity()
export class Fact {
    @PrimaryGeneratedColumn("uuid")
    id: string;

    @Column()
    description: string

    @Column()
    weight: number // 1 to 20; How "objectively" important the fact is. For example Red Mountain eruption is 20, because its a global event, but to a farmer in Leyawiin it may be a 2 of personal importance of the memory as a whole. The larger the weight, the more you need to accumulate "decay" to forget it. Lower weight facts are forgotten quicker.

    @ManyToMany(() => Tag, (tag) => tag.fact)
    tags: Tag[]; // Tags for filtering (e.g., "location", "religion", or anything else, like a type: "Observation", "Event", "Knowledge")
}