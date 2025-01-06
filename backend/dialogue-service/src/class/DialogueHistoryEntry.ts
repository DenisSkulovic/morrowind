export class DialogueHistoryEntry {
    summary!: string;
    topic!: string;
    revealedInformation?: string[];
    actionsTaken?: string[];

    static validate(data: any) {
        // Validate required fields
        if (!data.summary) throw new Error('DialogueHistoryEntry: summary is required');
        if (!data.topic) throw new Error('DialogueHistoryEntry: topic is required');

        // Validate types
        if (typeof data.summary !== 'string') throw new Error('DialogueHistoryEntry: summary must be a string');
        if (typeof data.topic !== 'string') throw new Error('DialogueHistoryEntry: topic must be a string');
    }

    static build(data: any) {
        DialogueHistoryEntry.validate(data);
        const state = new DialogueHistoryEntry();
        Object.assign(state, data);
        return state;
    }
}