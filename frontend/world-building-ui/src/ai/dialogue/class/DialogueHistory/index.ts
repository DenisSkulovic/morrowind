import { Serializable } from "../../../../decorator/serializable.decorator";
import { SerializeStrategyEnum } from "../../../../serialize/serializer";
import { DialogueHistoryTopic } from "./DialogueHistoryTopic";

export class DialogueHistory {
    @Serializable({ strategy: SerializeStrategyEnum.FULL, asDtoArray: true, internalClass: DialogueHistoryTopic })
    topicsNewestToOldest: DialogueHistoryTopic[] = [];

    @Serializable()
    clazz = 'DialogueHistory';

    static validate(data: any) {
        if (data.clazz !== 'DialogueHistory') throw new Error("Invalid class");
        if (!data.topicsNewestToOldest) throw new Error('DialogueHistory: topicsNewestToOldest is required');
        if (!Array.isArray(data.topicsNewestToOldest)) throw new Error('DialogueHistory: topicsNewestToOldest must be an array');
        if (typeof data.topicsNewestToOldest[0] !== 'object') throw new Error('DialogueHistory: topicsNewestToOldest must be an array of DialogueHistoryTopic objects');
    }

    static build(data: any) {
        DialogueHistory.validate(data);
        const history = new DialogueHistory();
        history.topicsNewestToOldest = data.topicsNewestToOldest.map((topic: any) => DialogueHistoryTopic.build(topic));
        return history;
    }
}
