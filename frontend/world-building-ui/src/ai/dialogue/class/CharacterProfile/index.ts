import { Character } from "../../../../class/entities/content/Character";
import { Serializable } from "../../../../decorator/serializable.decorator";
import { SerializeStrategyEnum } from "../../../../serialize/serializer";
import { DialogueAttitudeEnum } from "../../enum/DialogueAttitudeEnum";
import { CharacterGoals } from "./CharacterGoals";
import { CharacterInventory } from "./CharacterInventory";
import { CharacterKnowledge } from "./CharacterKnowledge";

export class CharacterProfile {
    @Serializable()
    id!: string;

    @Serializable()
    name!: string;

    @Serializable()
    race!: string;

    @Serializable()
    gender!: string;

    @Serializable()
    birthsign?: string;

    @Serializable()
    birthEra?: string;

    @Serializable()
    birthYear?: number;

    @Serializable()
    birthMonth?: number;

    @Serializable()
    birthDay?: number;

    @Serializable()
    traits!: string[];

    @Serializable()
    enneagram!: string;

    @Serializable()
    mood?: string;

    @Serializable()
    needs?: string[];

    @Serializable({ strategy: SerializeStrategyEnum.FULL, internalClass: CharacterGoals, dtoClass: CharacterGoalsDTO })
    goals?: CharacterGoals;

    @Serializable()
    professions?: string[];

    @Serializable()
    diseases?: string[];

    @Serializable()
    addictions?: string[];

    @Serializable()
    skills?: Record<string, number>;

    @Serializable()
    factions?: string[];

    @Serializable()
    stats?: Record<string, string>;

    @Serializable({ strategy: SerializeStrategyEnum.FULL, internalClass: CharacterInventory, dtoClass: CharacterInventoryDTO })
    inventory?: CharacterInventory;

    @Serializable({ strategy: SerializeStrategyEnum.FULL, internalClass: CharacterKnowledge, dtoClass: CharacterKnowledgeDTO })
    knowledge?: CharacterKnowledge;

    @Serializable() // no need for serializeEnum, in proto it's just a string (for simplicity)
    dialogueAttitude?: DialogueAttitudeEnum;

    static validate(data: any) {
        // Validate required fields
        if (!data.id) throw new Error('CharacterProfile: id is required');
        if (!data.name) throw new Error('CharacterProfile: name is required');
        if (!data.race) throw new Error('CharacterProfile: race is required');
        if (!data.gender) throw new Error('CharacterProfile: gender is required');

        // Validate types
        if (typeof data.id !== 'string') throw new Error('CharacterProfile: id must be a string');
        if (typeof data.name !== 'string') throw new Error('CharacterProfile: name must be a string');
        if (typeof data.race !== 'string') throw new Error('CharacterProfile: race must be a string');
        if (typeof data.gender !== 'string') throw new Error('CharacterProfile: gender must be a string');
        if (data.dialogueAttitude && !Object.values(DialogueAttitudeEnum).includes(data.dialogueAttitude)) throw new Error('CharacterProfile: dialogueAttitude must be a valid DialogueAttitudeEnum value');

    }

    static build(data: any) {
        CharacterProfile.validate(data);
        const profile = new CharacterProfile();
        profile.id = data.id;
        profile.name = data.name;
        profile.race = data.race;
        profile.gender = data.gender;
        profile.dialogueAttitude = data.dialogueAttitude;
        profile.goals = CharacterGoals.build(data.goals);
        profile.inventory = CharacterInventory.build(data.inventory);
        profile.knowledge = CharacterKnowledge.build(data.knowledge);
        profile.skills = data.skills;
        profile.stats = data.stats;
        profile.traits = data.traits;
        profile.enneagram = data.enneagram;
        profile.mood = data.mood;
        profile.needs = data.needs;
        return profile;
    }

    static fromCharacter(
        character: Character,
        needs?: string[],
        goals?: CharacterGoals,
        dialogueAttitude?: DialogueAttitudeEnum
    ) {
        const profile = new CharacterProfile();
        profile.id = character.id;
        profile.name = character.firstName + ' ' + character.lastName;
        profile.race = character.race.name;
        profile.gender = character.gender;
        profile.birthsign = character.birthsign;
        profile.birthEra = character.birthEra;
        profile.birthYear = character.birthYear;
        profile.birthMonth = character.birthMonth;
        profile.birthDay = character.birthDay;
        profile.traits = character.traits.map(trait => trait.name);
        profile.enneagram = character.enneagramType;
        profile.dialogueAttitude = dialogueAttitude;
        profile.goals = goals;
        profile.needs = needs;
        return profile;
    }
}