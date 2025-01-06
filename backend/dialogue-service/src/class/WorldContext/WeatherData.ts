export class WeatherData {
    weather!: string;
    temperature!: string;
    wind!: string;
    precipitation!: string;
    visibility!: string;

    static validate(data: any) {
        // Validate required fields
        if (!data.weather) throw new Error('WeatherData: weather is required');
        if (!data.temperature) throw new Error('WeatherData: temperature is required');
        if (!data.wind) throw new Error('WeatherData: wind is required');

        // Validate types
        if (typeof data.weather !== 'string') throw new Error('WeatherData: weather must be a string');
        if (typeof data.temperature !== 'string') throw new Error('WeatherData: temperature must be a string');
        if (typeof data.wind !== 'string') throw new Error('WeatherData: wind must be a string');
    }

    static build(data: any) {
        WeatherData.validate(data);
        const state = new WeatherData();
        Object.assign(state, data);
        return state;
    }
}