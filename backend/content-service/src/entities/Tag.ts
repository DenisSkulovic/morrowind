import { TableInheritance, Entity, Column, ManyToMany } from "typeorm";
import { ContentBase } from "./ContentBase";
import {TagSubtypeEnum} from "../enum/TagSubtypeEnum"

@Entity()
@TableInheritance({ column: { type: "varchar", name: "type" } }) // Discriminator column for inheritance
export class Tag extends ContentBase {
    id_prefix = "TAG"
    @Column({ unique: true })
    name: string; // The tag's name (e.g., "dunmeri", "rare")

    @Column()
    subtype: TagSubtypeEnum; // The tag's subtype (e.g., "tag_culture", "tag_weapon_quality")

    @ManyToMany(() => ContentBase, (content) => content.tags)
    content: ContentBase[];
}