import { Entity, Column, TableInheritance } from "typeorm";
import { ContentBase } from "./ContentBase";

@Entity()
@TableInheritance({ column: { type: "varchar", name: "type" } }) // Discriminator column for inheritance
export class Religion extends ContentBase {
    id_prefix = "RELIGION";

    /**
     * The name of the religion.
     */
    @Column()
    name: string;

    /**
     * A description of the religion, outlining its beliefs and core philosophy.
     */
    @Column("text")
    description: string;

    /**
     * A list of common rituals or practices for this religion.
     */
    @Column("jsonb", { nullable: true })
    rituals?: { name: string; description: string }[];

    /**
     * A list of moral or behavioral principles associated with the religion.
     */
    @Column("jsonb", { nullable: true })
    tenets?: { name: string; description: string }[];
}
