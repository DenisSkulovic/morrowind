export type EntityConstructor<T> = new () => T;

export type ItemRequirements = { [type: string]: { [name: string]: number | boolean } }

export type CharacterGenInstruction =
    {
        "first_name": string,
        "last_name": string,
        "location": string,
        "background": string,
        "background_customization"?: {
            "add"?: { [backgroundField: string]: any[] },
            "replace"?: { [backgroundField: string]: any[] }
        }
    }