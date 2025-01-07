export class ItemKnowledgeBase {
    id!: string;
    name!: string;
    description!: string;

    static validate(data: any) {
        // Validate mandatory fields
        if (!data.id) throw new Error('ItemKnowledgeBase: id is required');
        if (!data.name) throw new Error('ItemKnowledgeBase: name is required');
        if (!data.description) throw new Error('ItemKnowledgeBase: description is required');

        // Validate types
        if (typeof data.id !== 'string') throw new Error('ItemKnowledgeBase: id must be a string');
        if (typeof data.name !== 'string') throw new Error('ItemKnowledgeBase: name must be a string');
        if (typeof data.description !== 'string') throw new Error('ItemKnowledgeBase: description must be a string');
    }

    static build(data: any) {
        ItemKnowledgeBase.validate(data);
        const state = new ItemKnowledgeBase();
        Object.assign(state, data);
        return state;
    }
}