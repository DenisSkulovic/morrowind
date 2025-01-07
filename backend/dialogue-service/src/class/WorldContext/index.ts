import { LocationContext } from "./LocationContext";
import { SceneContext } from "./SceneContext";
import { TimeContext } from "./TimeContext";
import { WeatherContext } from "./WeatherContext";

export class WorldContext {
    location!: LocationContext;
    time!: TimeContext;
    weather!: WeatherContext;
    scene!: SceneContext;

    getExplanation() {
        return `
        This is the world context. It contains information about the location, time, weather, and scene.
        WorldContext.location: ${this.location.getExplanation()}
        WorldContext.time: ${this.time.getExplanation()}
        WorldContext.weather: ${this.weather.getExplanation()}
        WorldContext.scene: ${this.scene.getExplanation()}
        `
    }

    static validate(data: any) {
        // Validate required fields
        if (!data.location) throw new Error('WorldContext: location is required');
        if (!data.time) throw new Error('WorldContext: time is required');
        if (!data.weather) throw new Error('WorldContext: weather is required');
        if (!data.scene) throw new Error('WorldContext: scene is required');

        // Validate types
        if (!(data.location instanceof LocationContext)) throw new Error('WorldContext: location must be instance of LocationContext');
        if (!(data.time instanceof TimeContext)) throw new Error('WorldContext: time must be instance of TimeContext');
        if (!(data.weather instanceof WeatherContext)) throw new Error('WorldContext: weather must be instance of WeatherContext');
        if (!(data.scene instanceof SceneContext)) throw new Error('WorldContext: scene must be instance of SceneContext');
    }

    static build(data: any) {
        WorldContext.validate(data);
        const state = new WorldContext();
        Object.assign(state, data);
        return state;
    }
}











