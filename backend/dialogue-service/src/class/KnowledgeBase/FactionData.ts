export class FactionData {
    id!: string;
    name!: string;
    description!: string;

    static validate(data: any) {
        // Validate mandatory fields
        if (!data.id) throw new Error('FactionData: id is required');
        if (!data.name) throw new Error('FactionData: name is required');
        if (!data.description) throw new Error('FactionData: description is required');

        // Validate types
        if (typeof data.id !== 'string') throw new Error('FactionData: id must be a string');
        if (typeof data.name !== 'string') throw new Error('FactionData: name must be a string');
        if (typeof data.description !== 'string') throw new Error('FactionData: description must be a string');
    }

    static build(data: any) {
        FactionData.validate(data);
        const state = new FactionData();
        Object.assign(state, data);
        return state;
    }
}