import { ChildEntity } from "typeorm";
import { Trait } from "./Trait";

@ChildEntity()
export class TraitHealth extends Trait {
}
