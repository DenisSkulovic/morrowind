export class FactionKnowledgeBase {
    id!: string;
    name!: string;
    description!: string;
    clazz = 'FactionKnowledgeBase';

    static validate(data: any) {
        if (data.clazz !== 'FactionKnowledgeBase') throw new Error("Invalid class");
        // Validate mandatory fields
        if (!data.id) throw new Error('FactionKnowledgeBase: id is required');
        if (!data.name) throw new Error('FactionKnowledgeBase: name is required');
        if (!data.description) throw new Error('FactionKnowledgeBase: description is required');

        // Validate types
        if (typeof data.id !== 'string') throw new Error('FactionKnowledgeBase: id must be a string');
        if (typeof data.name !== 'string') throw new Error('FactionKnowledgeBase: name must be a string');
        if (typeof data.description !== 'string') throw new Error('FactionKnowledgeBase: description must be a string');
    }

    static build(data: any) {
        FactionKnowledgeBase.validate(data);
        const state = new FactionKnowledgeBase();
        Object.assign(state, data);
        return state;
    }
}