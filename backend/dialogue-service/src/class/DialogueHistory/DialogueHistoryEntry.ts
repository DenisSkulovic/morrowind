import { AiResponseOutcome } from "../AiResponseOutcome";


export class DialogueHistoryEntry {
    public dialogueParticipantId!: string;
    public text!: string;
    public outcome?: AiResponseOutcome;

    static validate(data: any) {
        // Validate required fields
        if (!data.dialogueParticipantId) throw new Error('DialogueHistoryEntry: dialogueParticipantId is required');
        if (!data.text) throw new Error('DialogueHistoryEntry: text is required');

        // Validate types
        if (typeof data.dialogueParticipantId !== 'string') throw new Error('DialogueHistoryEntry: dialogueParticipantId must be a string');
        if (typeof data.text !== 'string') throw new Error('DialogueHistoryEntry: text must be a string');
        if (data.outcome && !(typeof data.outcome === 'object' && data.outcome !== null && 'actionsTaken' in data.outcome)) throw new Error('DialogueHistoryEntry: outcome must be an instance of AiResponseOutcome');
    }

    static build(data: any) {
        DialogueHistoryEntry.validate(data);
        const exchange = new DialogueHistoryEntry();
        Object.assign(exchange, data);
        if (data.outcome) exchange.outcome = AiResponseOutcome.build(data.outcome);
        return exchange;
    }
}