export type EntityConstructor<T> = new () => T;

export type LooseObject = { [key: string]: any };

// working with simple probabilities here, nothing fancy
export type Probability_0_to_1 = number
export type BlueprintGenInstruction_Simple = { [blueprintId: string]: Probability_0_to_1 };


export type Enum<E> = Record<keyof E, number | string> & { [k: number]: string };