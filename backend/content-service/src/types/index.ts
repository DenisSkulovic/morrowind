export type EntityConstructor<T> = new () => T;

export type ItemRequirements = { [type: string]: { [name: string]: number | boolean } }