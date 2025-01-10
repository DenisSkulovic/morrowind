import { Serializable } from "../../common/decorator/serializable.decorator";

export class WeatherContext {
    @Serializable()
    weather!: string;

    @Serializable()
    temperature!: string;

    @Serializable()
    wind!: string;

    @Serializable()
    precipitation!: string;

    @Serializable()
    visibility!: string;

    @Serializable()
    clazz = 'WeatherContext';

    static validate(data: any) {
        if (data.clazz !== 'WeatherContext') throw new Error("Invalid class");
        // Validate required fields
        if (!data.weather) throw new Error('WeatherContext: weather is required');
        if (!data.temperature) throw new Error('WeatherContext: temperature is required');
        if (!data.wind) throw new Error('WeatherContext: wind is required');

        // Validate types
        if (typeof data.weather !== 'string') throw new Error('WeatherContext: weather must be a string');
        if (typeof data.temperature !== 'string') throw new Error('WeatherContext: temperature must be a string');
        if (typeof data.wind !== 'string') throw new Error('WeatherContext: wind must be a string');
    }

    static build(data: any) {
        WeatherContext.validate(data);
        const state = new WeatherContext();
        state.weather = data.weather;
        state.temperature = data.temperature;
        state.wind = data.wind;
        state.precipitation = data.precipitation;
        state.visibility = data.visibility;
        return state;
    }
}