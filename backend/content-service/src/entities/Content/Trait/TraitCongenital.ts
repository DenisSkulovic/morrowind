import { ChildEntity } from "typeorm";
import { Trait } from "./Trait";

@ChildEntity()
export class TraitCongenital extends Trait {
    id_prefix = "TRAIT_CONGENITAL"

}
