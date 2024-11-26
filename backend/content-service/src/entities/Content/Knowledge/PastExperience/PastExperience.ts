// Past experience can be a childhood or an adult one. These are basically labels for storytelling, and a bunch of accessible memories and probabilities for trauma, traits. Not fully sure, need to develop the idea further.
// Past experience is needed to provide a bit of variation for a "background"

import { BeforeInsert, Entity, ManyToMany, ManyToOne, PrimaryColumn, TableInheritance } from "typeorm";
import { TaggableContentBase } from "../../../../TaggableContentBase";
import { Tag } from "../../Tag";
import { Campaign } from "../../../Campaign";
import { User } from "../../../User";
import { World } from "../../../World";
import { randomUUID } from "crypto";

@Entity()
@TableInheritance({ column: { type: "varchar", name: "type" } })
export class PastExperience extends TaggableContentBase {
    @PrimaryColumn()
    id!: string;
    
    id_prefix = "PAST_EXPERIENCE"

    @ManyToMany(() => Tag, (tag) => tag.pastExperiences)
    tags?: Tag[];

    @ManyToOne(() => User, { nullable: true })
    user!: User;

    @ManyToOne(() => Campaign, { nullable: true })
    campaign?: Campaign;

    @ManyToOne(() => World, { nullable: true })
    world!: World;
}