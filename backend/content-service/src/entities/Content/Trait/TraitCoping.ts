import { ChildEntity } from "typeorm";
import { Trait } from "./Trait";

@ChildEntity()
export class TraitCoping extends Trait {
    id_prefix = "TRAIT_COPING"
}
