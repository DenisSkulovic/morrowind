import { DialogueHistoryTopic } from "./DialogueHistoryTopic";

export class DialogueHistory {
    topicsNewestToOldest: DialogueHistoryTopic[] = [];

    static validate(data: any) {
        if (!data.topicsNewestToOldest) throw new Error('DialogueHistory: topicsNewestToOldest is required');
        if (!Array.isArray(data.topicsNewestToOldest)) throw new Error('DialogueHistory: topicsNewestToOldest must be an array');
        if (typeof data.topicsNewestToOldest[0] !== 'object') throw new Error('DialogueHistory: topicsNewestToOldest must be an array of DialogueHistoryTopic objects');
    }

    static build(data: any) {
        DialogueHistory.validate(data);
        const history = new DialogueHistory();
        Object.assign(history, data);
        return history;
    }
}

