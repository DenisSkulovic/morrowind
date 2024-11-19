import { ChildEntity } from "typeorm";
import { Trait } from "./Trait";

@ChildEntity()
export class TraitPhysical extends Trait {
    id_prefix = "TRAIT_PHYSICAL"
}
