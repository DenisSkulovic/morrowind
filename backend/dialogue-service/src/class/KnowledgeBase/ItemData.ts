export class ItemData {
    id!: string;
    name!: string;
    description!: string;

    static validate(data: any) {
        // Validate mandatory fields
        if (!data.id) throw new Error('ItemData: id is required');
        if (!data.name) throw new Error('ItemData: name is required');
        if (!data.description) throw new Error('ItemData: description is required');

        // Validate types
        if (typeof data.id !== 'string') throw new Error('ItemData: id must be a string');
        if (typeof data.name !== 'string') throw new Error('ItemData: name must be a string');
        if (typeof data.description !== 'string') throw new Error('ItemData: description must be a string');
    }

    static build(data: any) {
        ItemData.validate(data);
        const state = new ItemData();
        Object.assign(state, data);
        return state;
    }
}