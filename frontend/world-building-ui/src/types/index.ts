import { User } from "../dto/User";
import { World } from "../dto/World";
import { ContextDTO } from "../proto/common";

export type EntityConstructor<T> = new () => T;


export class Context {
    user?: User | null
    world?: World | null
    campaign?: null

    toDTO(): ContextDTO {
        return {
            userId: this.user?.id ?? "",
            worldId: this.world?.id ?? "",
            campaignId: "",
        }
    }
}


// working with simple probabilities here, nothing fancy
export type Probability_0_to_1 = number
export type BlueprintGenInstruction_Simple = { [blueprintId: string]: Probability_0_to_1 };


export type Enum<E> = Record<keyof E, number | string> & { [k: number]: string };