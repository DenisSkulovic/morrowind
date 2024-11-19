// Past experience can be a childhood or an adult one. These are basically labels for storytelling, and a bunch of accessible memories and probabilities for trauma, traits. Not fully sure, need to develop the idea further.
// Past experience is needed to provide a bit of variation for a "background"

import { Entity, JoinTable, ManyToMany, ManyToOne, PrimaryGeneratedColumn, TableInheritance } from "typeorm";
import { ContentBase } from "../../../../ContentBase";
import { Tag } from "../../Tag";
import { Campaign } from "../../../Campaign";
import { User } from "../../../User";
import { World } from "../../../World";

@Entity()
@TableInheritance({ column: { type: "varchar", name: "type" } })
export class PastExperience extends ContentBase {
    @PrimaryGeneratedColumn("uuid")
    id!: string;

    id_prefix = "PAST_EXPERIENCE"

    @ManyToMany(() => Tag, (tag) => tag.pastExperiences)
    tags?: Tag[];

    @ManyToOne(() => User, { nullable: true })
    user?: User;

    @ManyToOne(() => Campaign, { nullable: true })
    campaign?: Campaign;

    @ManyToOne(() => World, { nullable: true })
    world?: World;
}