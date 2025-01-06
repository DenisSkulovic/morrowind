export class LocationData {
    id!: string;
    name!: string;
    description!: string;
    parentLocationChain!: string;

    static validate(data: any) {
        // Validate required fields
        if (!data.id) throw new Error('LocationData: id is required');
        if (!data.name) throw new Error('LocationData: name is required');
        if (!data.description) throw new Error('LocationData: description is required');
        if (!data.parentLocationChain) throw new Error('LocationData: parentLocationChain is required');

        // Validate types
        if (typeof data.id !== 'string') throw new Error('LocationData: id must be a string');
        if (typeof data.name !== 'string') throw new Error('LocationData: name must be a string');
        if (typeof data.description !== 'string') throw new Error('LocationData: description must be a string');
        if (!Array.isArray(data.parentLocationChain)) throw new Error('LocationData: parentLocationChain must be an array');
    }

    static build(data: any) {
        LocationData.validate(data);
        const state = new LocationData();
        Object.assign(state, data);
        return state;
    }
}