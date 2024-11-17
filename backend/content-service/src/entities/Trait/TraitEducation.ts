import { ChildEntity } from "typeorm";
import { Trait } from "./Trait";

@ChildEntity()
export class TraitEducation extends Trait {
    id_prefix = "TRAIT_EDUCATION"
}
