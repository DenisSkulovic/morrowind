import { Serializable } from "../../../../decorator/serializable.decorator";

export class CharacterKnowledge {
    @Serializable()
    locations?: string[];

    @Serializable()
    factions?: string[];

    @Serializable()
    familiar_characters?: string[];

    @Serializable()
    clazz = 'CharacterKnowledge';

    static validate(data: Partial<CharacterKnowledge>) {
        // Validate required fields
        if (data.clazz !== 'CharacterKnowledge') throw new Error("Invalid class");

        // Validate types
        if (data.locations && !(data.locations instanceof Array)) throw new Error('CharacterKnowledge: locations must be an array');
        if (data.factions && !(data.factions instanceof Array)) throw new Error('CharacterKnowledge: factions must be an array');
        if (data.familiar_characters && !(data.familiar_characters instanceof Array)) throw new Error('CharacterKnowledge: familiar_characters must be an array');
    }

    static build(data: any) {
        CharacterKnowledge.validate(data);
        const knowledge = new CharacterKnowledge();
        knowledge.locations = data.locations;
        knowledge.factions = data.factions;
        knowledge.familiar_characters = data.familiar_characters;
        return knowledge;
    }
}