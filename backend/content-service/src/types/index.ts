import { Campaign } from "../modules/campaign/entities/Campaign";
import { User } from "../modules/user/entities/User";
import { World } from "../modules/world/entities/World";

export type EntityConstructor<T> = new () => T;


export type Context = {
    user?: User | null,
    world?: World | null
    campaign?: Campaign | null,
}


// working with simple probabilities here, nothing fancy
export type Probability_0_to_1 = number
export type BlueprintGenInstruction_Simple = { [blueprintId: string]: Probability_0_to_1 };


export type Enum<E> = Record<keyof E, number | string> & { [k: number]: string };