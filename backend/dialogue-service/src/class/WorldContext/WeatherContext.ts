import { Serializable } from "../../common/decorator/serializable.decorator";

export class WeatherContext {
    @Serializable()
    weather?: string;

    @Serializable()
    temperature?: string;

    @Serializable()
    wind?: string;

    @Serializable()
    precipitation?: string;

    @Serializable()
    visibility?: string;

    @Serializable()
    clazz = 'WeatherContext';

    static validate(data: any) {
        if (data.clazz !== 'WeatherContext') throw new Error("Invalid class");

        // Validate types
        if (data.weather && typeof data.weather !== 'string') throw new Error('WeatherContext: weather must be a string');
        if (data.temperature && typeof data.temperature !== 'string') throw new Error('WeatherContext: temperature must be a string');
        if (data.wind && typeof data.wind !== 'string') throw new Error('WeatherContext: wind must be a string');
        if (data.precipitation && typeof data.precipitation !== 'string') throw new Error('WeatherContext: precipitation must be a string');
        if (data.visibility && typeof data.visibility !== 'string') throw new Error('WeatherContext: visibility must be a string');
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