// Past experience can be a childhood or an adult one. These are basically labels for storytelling, and a bunch of accessible memories and probabilities for trauma, traits. Not fully sure, need to develop the idea further.
// Past experience is needed to provide a bit of variation for a "background"

import { Entity, TableInheritance } from "typeorm";
import { ContentBase } from "../ContentBase";

@Entity()
@TableInheritance({ column: { type: "varchar", name: "type" } }) // Discriminator column for inheritance
export class PastExperience extends ContentBase {
    id_prefix = "PAST_EXPERIENCE"

}