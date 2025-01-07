export class WeatherContext {
    weather!: string;
    temperature!: string;
    wind!: string;
    precipitation!: string;
    visibility!: string;

    getExplanation() {
        return `This is the weather context. It contains information about the weather, temperature, wind, precipitation, and visibility.`
    }

    static validate(data: any) {
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
        Object.assign(state, data);
        return state;
    }
}