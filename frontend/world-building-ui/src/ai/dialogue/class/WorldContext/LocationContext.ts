import { Serializable } from "../../../../decorator/serializable.decorator";

export class LocationContext {
    @Serializable()
    locationId?: string;

    @Serializable()
    name?: string;

    @Serializable()
    description?: string;

    @Serializable()
    biome?: string;

    @Serializable()
    clazz = 'LocationContext';

    static validate(data: any) {
        if (data.clazz !== 'LocationContext') throw new Error("Invalid class");

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