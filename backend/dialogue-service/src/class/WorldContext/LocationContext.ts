export class LocationContext {
    locationId!: string;
    name!: string;
    description!: string;
    biome!: string;

    getExplanation() {
        return `This is the location context. It contains information about the location, name, description, and the biome of the location.`
    }

    static validate(data: any) {
        // Validate required fields
        if (!data.locationId) throw new Error('LocationContext: locationId is required');
        if (!data.name) throw new Error('LocationContext: name is required');
        if (!data.description) throw new Error('LocationContext: description is required');
        if (!data.biome) throw new Error('LocationContext: biome is required');

        // Validate types
        if (typeof data.locationId !== 'string') throw new Error('LocationContext: locationId must be a string');
        if (typeof data.name !== 'string') throw new Error('LocationContext: name must be a string');
        if (typeof data.description !== 'string') throw new Error('LocationContext: description must be a string');
        if (typeof data.biome !== 'string') throw new Error('LocationContext: biome must be a string');
    }

    static build(data: any) {
        LocationContext.validate(data);
        const state = new LocationContext();
        Object.assign(state, data);
        return state;
    }
}