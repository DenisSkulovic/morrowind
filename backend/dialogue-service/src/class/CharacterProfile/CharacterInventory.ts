import { Serializable } from "../../common/decorator/serializable.decorator";

export class CharacterInventory {
    @Serializable()
    equipped!: string[];

    @Serializable()
    stored!: string[];

    @Serializable()
    clazz = 'CharacterInventory';

    static validate(data: any) {
        if (data.clazz !== 'CharacterInventory') throw new Error("Invalid class");
        if (!data.equipped) throw new Error('CharacterInventory: equipped is required');
        if (!data.stored) throw new Error('CharacterInventory: stored is required');
    }

    static build(data: any) {
        CharacterInventory.validate(data);
        const inventory = new CharacterInventory();
        inventory.equipped = data.equipped;
        inventory.stored = data.stored;
        return inventory;
    }
}