export class TimeContext {
    timeOfDay!: string;
    day!: number;
    month!: string;
    year!: number;
    season!: string;

    getExplanation() {
        return `
        This is the time context. It contains information about the time of day, day, month, year, and season.
        `
    }

    static validate(data: any) {
        // Validate required fields
        if (!data.timeOfDay) throw new Error('TimeContext: timeOfDay is required');
        if (!data.day) throw new Error('TimeContext: day is required');
        if (!data.month) throw new Error('TimeContext: month is required');
        if (!data.year) throw new Error('TimeContext: year is required');
        if (!data.season) throw new Error('TimeContext: season is required');

        // Validate types
        if (typeof data.timeOfDay !== 'string') throw new Error('TimeContext: timeOfDay must be a string');
        if (typeof data.day !== 'number') throw new Error('TimeContext: day must be a number');
        if (typeof data.month !== 'string') throw new Error('TimeContext: month must be a string');
        if (typeof data.year !== 'number') throw new Error('TimeContext: year must be a number');
        if (typeof data.season !== 'string') throw new Error('TimeContext: season must be a string');
    }

    static build(data: any) {
        TimeContext.validate(data);
        const state = new TimeContext();
        Object.assign(state, data);
        return state;
    }
}