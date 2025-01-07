import { DialogueHistoryExchange } from "./DialogueHistoryEntry";

export class DialogueHistoryTopic {
    name!: string;
    summary?: string
    exchangesNewestToOldest?: DialogueHistoryExchange[];

    static validate(data: any) {
        if (!data.name) throw new Error('DialogueHistoryTopic: name is required');
    }

    static build(data: any) {
        DialogueHistoryTopic.validate(data);
        const topic = new DialogueHistoryTopic();
        Object.assign(topic, data);
        return topic;
    }
}