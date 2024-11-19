import { ChildEntity } from "typeorm";
import { PastExperience } from "./PastExperience";

@ChildEntity()
export class PastExperienceAdult extends PastExperience {
    id_prefix = "PAST_EXPERIENCE_ADULT";

}