export class TimeData {
    timeOfDay!: string;
    day!: number;
    month!: string;
    year!: number;
    season!: string;

    static validate(data: any) {
        // Validate required fields
        if (!data.timeOfDay) throw new Error('TimeData: timeOfDay is required');
        if (!data.day) throw new Error('TimeData: day is required');
        if (!data.month) throw new Error('TimeData: month is required');
        if (!data.year) throw new Error('TimeData: year is required');
        if (!data.season) throw new Error('TimeData: season is required');

        // Validate types
        if (typeof data.timeOfDay !== 'string') throw new Error('TimeData: timeOfDay must be a string');
        if (typeof data.day !== 'number') throw new Error('TimeData: day must be a number');
        if (typeof data.month !== 'string') throw new Error('TimeData: month must be a string');
        if (typeof data.year !== 'number') throw new Error('TimeData: year must be a number');
        if (typeof data.season !== 'string') throw new Error('TimeData: season must be a string');
    }

    static build(data: any) {
        TimeData.validate(data);
        const state = new TimeData();
        Object.assign(state, data);
        return state;
    }
}