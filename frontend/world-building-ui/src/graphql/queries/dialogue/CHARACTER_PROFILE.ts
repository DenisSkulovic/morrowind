import { gql } from "@apollo/client";

export const CHARACTER_PROFILES = gql`
    query SearchContent($ids: [SearchContentInput!]!) {
        searchContent(input: $input) {
            entityName
            items {
                targetEntity
                blueprintId
                ... on Character {
                    id
                    firstName
                    lastName
                    race {
                        id
                        name
                    }
                    gender
                    birthsign
                    birthEra
                    birthYear
                    birthMonth
                    birthDay
                    skills
                    equipmentSlots {
                        name
                        allowedEntities
                        equippedItem
                    }
                    professioons
                    memoryPools
                    characterMemories
                    enneagramType
                    traits {
                        id
                        name
                    }
                    diseases
                    addictions
                    pastExperiences
                    factions
                }
            }
        }
    }
`;

export class SearchCharactersResponse {
    id!: string;
    firstName!: string;
    lastName!: string;
    race?: {
        id: string;
        name: string;
    };
    gender?: string;
    birthsign?: string;
    birthEra?: string;
    birthYear?: number;
    birthMonth?: number;
    birthDay?: number;
    skills?: Record<string, number>;
    equipmentSlots?: {
        name: string;
        allowedEntities: string[];
        equippedItem?: string;
    }[];
    professioons?: string[];
    memoryPools?: string[];
    characterMemories?: string[];
    enneagramType?: string;
    traits?: {
        id: string;
        name: string;
    }[];
    diseases?: string[];
    addictions?: string[];
    pastExperiences?: string[];
    factions?: string[];

    static validate(data: any): void {
        const requiredFields = ['id', 'firstName', 'lastName'];
        requiredFields.forEach(field => {
            if (!data[field]) throw new Error(`CharacterProfile: ${field} is required`);
        });

        if (data.race) {
            if (typeof data.race !== 'object') throw new Error('CharacterProfile: race must be an object');
            if (!data.race.id || !data.race.name) throw new Error('CharacterProfile: race must have id and name');
        }

        const stringFields = ['gender', 'birthsign', 'birthEra', 'enneagramType'];
        stringFields.forEach(field => {
            if (data[field] && typeof data[field] !== 'string') throw new Error(`CharacterProfile: ${field} must be a string`);
        });

        const numberFields = ['birthYear', 'birthMonth', 'birthDay'];
        numberFields.forEach(field => {
            if (data[field] && typeof data[field] !== 'number') throw new Error(`CharacterProfile: ${field} must be a number`);
        });
    }

    static build(data: any): SearchCharactersResponse {
        SearchCharactersResponse.validate(data);
        const profile = new SearchCharactersResponse();
        profile.id = data.id;
        profile.firstName = data.firstName;
        profile.lastName = data.lastName;
        profile.race = data.race ? { id: data.race.id, name: data.race.name } : undefined;
        profile.gender = data.gender;
        profile.birthsign = data.birthsign;
        profile.birthEra = data.birthEra;
        profile.birthYear = data.birthYear;
        profile.birthMonth = data.birthMonth;
        profile.birthDay = data.birthDay;
        profile.skills = data.skills ? { ...data.skills } : undefined;
        profile.equipmentSlots = data.equipmentSlots ? data.equipmentSlots.map((slot: any) => ({
            name: slot.name,
            allowedEntities: [...slot.allowedEntities],
            equippedItem: slot.equippedItem
        })) : undefined;
        profile.professioons = data.professioons ? [...data.professioons] : undefined;
        profile.memoryPools = data.memoryPools ? [...data.memoryPools] : undefined;
        profile.characterMemories = data.characterMemories ? [...data.characterMemories] : undefined;
        profile.traits = data.traits ? data.traits.map((trait: any) => ({ id: trait.id, name: trait.name })) : undefined;
        profile.diseases = data.diseases ? [...data.diseases] : undefined;
        profile.addictions = data.addictions ? [...data.addictions] : undefined;
        profile.pastExperiences = data.pastExperiences ? [...data.pastExperiences] : undefined;
        profile.factions = data.factions ? [...data.factions] : undefined;
        profile.enneagramType = data.enneagramType;
        return profile;
    }
}