import { ChildEntity, Column } from "typeorm";
import { PastExperience } from "./PastExperience";

@ChildEntity()
export class PastExperienceChild extends PastExperience {
    id_prefix = "PAST_EXPERIENCE_CHILD";

}
