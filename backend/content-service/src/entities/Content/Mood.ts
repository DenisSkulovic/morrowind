// Moods can be "Energetic", "Sad", "Reclusive", "Talkative", or whatever.
// The mood is a result of personality traits and fulfillment of needs(?).
// A depressed person will most likely be always in a bad mood.

import { TableInheritance, Entity, Column } from "typeorm";
import { ContentBase } from "./ContentBase";

@Entity()
@TableInheritance({ column: { type: "varchar", name: "type" } }) // Discriminator column for inheritance
export class Mood extends ContentBase {
    id_prefix = "MOOD";

    @Column()
    name: string;

    @Column()
    description: string;

}
