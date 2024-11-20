import { Campaign } from "../entities/Campaign";
import { User } from "../entities/User";
import { World } from "../entities/World";

export type EntityConstructor<T> = new () => T;

export type ItemRequirements = { [type: string]: { [name: string]: number | boolean } }


export type Context = {
    user: User,
    world: World
    campaign?: Campaign,
}