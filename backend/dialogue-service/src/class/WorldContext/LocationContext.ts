import { Serializable } from "../../common/decorator/serializable.decorator";

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

        // Validate types
        if (data.locationId && typeof data.locationId !== 'string') throw new Error('LocationContext: locationId must be a string');
        if (data.name && typeof data.name !== 'string') throw new Error('LocationContext: name must be a string');
        if (data.description && typeof data.description !== 'string') throw new Error('LocationContext: description must be a string');
        if (data.biome && typeof data.biome !== 'string') throw new Error('LocationContext: biome must be a string');
    }

    static build(data: any) {
        LocationContext.validate(data);
        const state = new LocationContext();
        Object.assign(state, data);
        return state;
    }
}