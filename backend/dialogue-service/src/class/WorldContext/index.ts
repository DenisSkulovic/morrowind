import { Serializable } from "../../common/decorator/serializable.decorator";
import { SerializeStrategyEnum } from "../../common/serializer/serializer";
import { LocationContext } from "./LocationContext";
import { SceneContext } from "./SceneContext";
import { TimeContext } from "./TimeContext";
import { WeatherContext } from "./WeatherContext";

export class WorldContext {
    @Serializable({ strategy: SerializeStrategyEnum.FULL })
    location?: LocationContext;

    @Serializable({ strategy: SerializeStrategyEnum.FULL })
    time?: TimeContext;

    @Serializable({ strategy: SerializeStrategyEnum.FULL })
    weather?: WeatherContext;

    @Serializable({ strategy: SerializeStrategyEnum.FULL })
    scene?: SceneContext;

    @Serializable()
    clazz = 'WorldContext';

    static validate(data: any) {
        if (data.clazz !== 'WorldContext') throw new Error("Invalid class");

        // Validate types
        if (data.location && !(data.location instanceof LocationContext)) throw new Error('WorldContext: location must be instance of LocationContext');
        if (data.time && !(data.time instanceof TimeContext)) throw new Error('WorldContext: time must be instance of TimeContext');
        if (data.weather && !(data.weather instanceof WeatherContext)) throw new Error('WorldContext: weather must be instance of WeatherContext');
        if (data.scene && !(data.scene instanceof SceneContext)) throw new Error('WorldContext: scene must be instance of SceneContext');
    }

    static build(data: any) {
        WorldContext.validate(data);
        const state = new WorldContext();
        state.location = LocationContext.build(data.location);
        state.time = TimeContext.build(data.time);
        state.weather = WeatherContext.build(data.weather);
        state.scene = SceneContext.build(data.scene);
        return state;
    }
}











