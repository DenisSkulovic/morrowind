import { Serializable } from "../../common/decorator/serializable.decorator";

export class CharacterKnowledge {
    @Serializable()
    locations!: string[];

    @Serializable()
    factions!: string[];

    @Serializable()
    familiar_characters!: string[];

    @Serializable()
    clazz = 'CharacterKnowledge';

    static validate(data: any) {
        if (data.clazz !== 'CharacterKnowledge') throw new Error("Invalid class");
        if (!data.locations) throw new Error('CharacterKnowledge: locations is required');
        if (!data.factions) throw new Error('CharacterKnowledge: factions is required');
        if (!data.familiar_characters) throw new Error('CharacterKnowledge: familiar_characters is required');
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