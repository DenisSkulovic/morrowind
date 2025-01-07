export class CharacterKnowledgeBase {
    id!: string;
    name!: string;
    description!: string;
    locationId?: string;
    factionId?: string;

    static validate(data: any) {
        // Validate mandatory fields
        if (!data.id) throw new Error('CharacterKnowledgeBase: id is required');
        if (!data.name) throw new Error('CharacterKnowledgeBase: name is required');
        if (!data.description) throw new Error('CharacterKnowledgeBase: description is required');

        // Validate types
        if (typeof data.id !== 'string') throw new Error('CharacterKnowledgeBase: id must be a string');
        if (typeof data.name !== 'string') throw new Error('CharacterKnowledgeBase: name must be a string');
        if (typeof data.description !== 'string') throw new Error('CharacterKnowledgeBase: description must be a string');
    }

    static build(data: any) {
        CharacterKnowledgeBase.validate(data);
        const state = new CharacterKnowledgeBase();
        Object.assign(state, data);
        return state;
    }
}