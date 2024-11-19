import { ChildEntity } from "typeorm";
import { Trait } from "./Trait";

@ChildEntity()
export class TraitInfamy extends Trait {
    id_prefix = "TRAIT_INFAMY"
}
