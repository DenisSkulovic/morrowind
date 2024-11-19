import { ChildEntity } from "typeorm";
import { Trait } from "./Trait";

@ChildEntity()
export class TraitLeveled extends Trait {
    id_prefix = "TRAIT_LEVELED"
}
