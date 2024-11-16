import { ChildEntity, Column } from "typeorm";
import { Trait } from "./Trait";

@ChildEntity()
export class TraitFaith extends Trait {
}
