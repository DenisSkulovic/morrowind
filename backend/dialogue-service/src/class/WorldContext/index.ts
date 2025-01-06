import { LocationData } from "../KnowledgeBase/LocationData";
import { SceneData } from "./SceneData";
import { TimeData } from "./TimeData";
import { WeatherData } from "./WeatherData";

export class WorldContext {
    location!: LocationData;
    time!: TimeData;
    weather!: WeatherData;
    scene!: SceneData;

    getExplanation() {
        return {
            location: ""
        }
    }

    static validate(data: any) {
        // Validate required fields
        if (!data.location) throw new Error('WorldContext: location is required');
        if (!data.time) throw new Error('WorldContext: time is required');
        if (!data.weather) throw new Error('WorldContext: weather is required');
        if (!data.scene) throw new Error('WorldContext: scene is required');

        // Validate types
        if (!(data.location instanceof LocationData)) throw new Error('WorldContext: location must be instance of LocationData');
        if (!(data.time instanceof TimeData)) throw new Error('WorldContext: time must be instance of TimeData');
        if (!(data.weather instanceof WeatherData)) throw new Error('WorldContext: weather must be instance of WeatherData');
        if (!(data.scene instanceof SceneData)) throw new Error('WorldContext: scene must be instance of SceneData');
    }

    static build(data: any) {
        WorldContext.validate(data);
        const state = new WorldContext();
        Object.assign(state, data);
        return state;
    }
}











