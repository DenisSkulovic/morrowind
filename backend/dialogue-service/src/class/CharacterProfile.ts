export class CharacterProfile {
    id!: string;
    name!: string;
    race!: string;
    class!: string;
    traits?: string[];
    enneagram?: string;
    mood?: string;
    needs?: string[];
    activeGoal?: string;
    goals?: string[];
    skills!: Record<string, number>;
    stats!: Record<string, string>;
    inventory!: string[];
    knowledge!: {
        locations: string[];
        factions: string[];
        familiar_characters: string[];
    };

    static validate(data: any) {
        // Validate required fields
        if (!data.id) throw new Error('CharacterProfile: id is required');
        if (!data.name) throw new Error('CharacterProfile: name is required');
        if (!data.race) throw new Error('CharacterProfile: race is required');
        if (!data.class) throw new Error('CharacterProfile: class is required');

        // Validate types
        if (typeof data.id !== 'string') throw new Error('CharacterProfile: id must be a string');
        if (typeof data.name !== 'string') throw new Error('CharacterProfile: name must be a string');
        if (typeof data.race !== 'string') throw new Error('CharacterProfile: race must be a string');
        if (typeof data.class !== 'string') throw new Error('CharacterProfile: class must be a string');
    }

    static build(data: any) {
        CharacterProfile.validate(data);
        const state = new CharacterProfile();
        Object.assign(state, data);
        return state;
    }
}