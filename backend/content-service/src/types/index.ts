import { Campaign } from "../modules/campaign/entities/Campaign";
import { User } from "../modules/user/entities/User";
import { World } from "../modules/world/entities/World";

export type EntityConstructor<T> = new () => T;


export type Context = {
    user: User,
    world: World
    campaign?: Campaign,
}


// working with simple probabilities here, nothing fancy
export type Probability_0_to_1 = number
export type BlueprintGenInstruction_Simple = { [blueprint_id: string]: Probability_0_to_1 };