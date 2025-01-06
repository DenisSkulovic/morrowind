export class CharacterData {
    id!: string;
    name!: string;
    description!: string;
    location?: string;
    faction?: string;

    static validate(data: any) {
        // Validate mandatory fields
        if (!data.id) throw new Error('CharacterData: id is required');
        if (!data.name) throw new Error('CharacterData: name is required');
        if (!data.description) throw new Error('CharacterData: description is required');

        // Validate types
        if (typeof data.id !== 'string') throw new Error('CharacterData: id must be a string');
        if (typeof data.name !== 'string') throw new Error('CharacterData: name must be a string');
        if (typeof data.description !== 'string') throw new Error('CharacterData: description must be a string');
    }

    static build(data: any) {
        CharacterData.validate(data);
        const state = new CharacterData();
        Object.assign(state, data);
        return state;
    }
}