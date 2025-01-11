import { Serializable } from "../../../../decorator/serializable.decorator";

export class CharacterInventory {
    @Serializable()
    equipped?: string[];

    @Serializable()
    stored?: string[];

    @Serializable()
    clazz = 'CharacterInventory';

    static validate(data: Partial<CharacterInventory>) {
        // Validate required fields
        if (data.clazz !== 'CharacterInventory') throw new Error("Invalid class");

        // Validate types
        if (data.equipped && !(data.equipped instanceof Array)) throw new Error('CharacterInventory: equipped must be an array');
        if (data.stored && !(data.stored instanceof Array)) throw new Error('CharacterInventory: stored must be an array');
    }

    static build(data: any) {
        CharacterInventory.validate(data);
        const inventory = new CharacterInventory();
        inventory.equipped = data.equipped;
        inventory.stored = data.stored;
        return inventory;
    }
}