import { ChildEntity } from "typeorm";
import { Trait } from "./Trait";

@ChildEntity()
export class TraitPersonality extends Trait {
    id_prefix = "TRAIT_PERSONALITY"
}
