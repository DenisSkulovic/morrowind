import { Entity, TableInheritance, Column } from "typeorm";
import { Tag } from "./Tag";
import { ContentBase } from "./ContentBase";

@Entity()
@TableInheritance({ column: { type: "varchar", name: "type" } }) // Discriminator column for inheritance
export class Fact extends ContentBase {
    id_prefix = "FACT"

    @Column()
    description: string

    @Column()
    weight: number // 1 to 20; How "objectively" important the fact is. For example Red Mountain eruption is 20, because its a global event, but to a farmer in Leyawiin it may be a 2 of personal importance of the memory as a whole. The larger the weight, the more you need to accumulate "decay" to forget it. Lower weight facts are forgotten quicker.
}