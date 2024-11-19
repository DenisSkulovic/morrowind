import { ChildEntity } from "typeorm";
import { Trait } from "./Trait";

@ChildEntity()
export class TraitLifestyle extends Trait {
    id_prefix = "TRAIT_LIFESTYLE"
}
