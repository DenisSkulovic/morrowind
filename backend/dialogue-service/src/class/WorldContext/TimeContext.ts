import { Serializable } from "../../common/decorator/serializable.decorator";

export class TimeContext {
    @Serializable()
    timeOfDay?: string;

    @Serializable()
    day?: number;

    @Serializable()
    month?: string;

    @Serializable()
    year?: number;

    @Serializable()
    season?: string;

    @Serializable()
    clazz = 'TimeContext';

    static validate(data: any) {
        if (data.clazz !== 'TimeContext') throw new Error("Invalid class");

        // Validate types
        if (data.timeOfDay && typeof data.timeOfDay !== 'string') throw new Error('TimeContext: timeOfDay must be a string');
        if (data.day && typeof data.day !== 'number') throw new Error('TimeContext: day must be a number');
        if (data.month && typeof data.month !== 'string') throw new Error('TimeContext: month must be a string');
        if (data.year && typeof data.year !== 'number') throw new Error('TimeContext: year must be a number');
        if (data.season && typeof data.season !== 'string') throw new Error('TimeContext: season must be a string');
    }

    static build(data: any) {
        TimeContext.validate(data);
        const state = new TimeContext();
        state.timeOfDay = data.timeOfDay;
        state.day = data.day;
        state.month = data.month;
        state.year = data.year;
        state.season = data.season;
        return state;
    }
}