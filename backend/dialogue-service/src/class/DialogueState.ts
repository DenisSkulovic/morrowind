import { AiProviderImplementationEnum } from "../modules/ai/ai.service";
import { AiRequestOptionsV1 } from "./AiRequestOptionsV1";
import { CharacterProfile } from "./CharacterProfile";
import { KnowledgeBase } from "./KnowledgeBase";
import { WorldContext } from "./WorldContext";
import { DialogueHistory } from "./DialogueHistory";

export class DialogueState {
    initiatingParticipantId!: string;
    dialogueId!: string;
    playerCharacterId!: string;
    lastUsedOptions!: AiRequestOptionsV1;
    aiProvider!: AiProviderImplementationEnum;
    dialogueParticipants!: CharacterProfile[];
    worldContext!: WorldContext;
    dialogueHistory!: DialogueHistory;
    knowledgeBase!: KnowledgeBase;

    static validate(data: Partial<DialogueState>) {
        // Validate required fields
        if (!data.initiatingParticipantId) throw new Error('DialogueState: initiatingParticipantId is required');
        if (!data.dialogueId) throw new Error('DialogueState: dialogueId is required');
        if (!data.playerCharacterId) throw new Error('DialogueState: playerCharacterId is required');
        if (!data.aiProvider) throw new Error('DialogueState: aiProvider is required');
        if (!data.dialogueParticipants) throw new Error('DialogueState: dialogueParticipants is required');
        if (!data.worldContext) throw new Error('DialogueState: worldContext is required');
        if (!data.dialogueHistory) throw new Error('DialogueState: dialogueHistory is required');
        if (!data.knowledgeBase) throw new Error('DialogueState: knowledgeBase is required');

        // Validate types
        if (typeof data.initiatingParticipantId !== 'string') throw new Error('DialogueState: initiatingParticipantId must be a string');
        if (typeof data.dialogueId !== 'string') throw new Error('DialogueState: dialogueId must be a string');
        if (typeof data.playerCharacterId !== 'string') throw new Error('DialogueState: playerCharacterId must be a string');
        if (typeof data.dialogueParticipants !== 'object') throw new Error('DialogueState: dialogueParticipants must be an object');
        if (typeof data.worldContext !== 'object') throw new Error('DialogueState: worldContext must be an object');
        if (typeof data.dialogueHistory !== 'object') throw new Error('DialogueState: dialogueHistory must be an object');
        if (typeof data.knowledgeBase !== 'object') throw new Error('DialogueState: knowledgeBase must be an object');
        if (typeof data.aiProvider !== 'string') throw new Error('DialogueState: aiProvider must be a string');
        if (!Object.values(AiProviderImplementationEnum).includes(data.aiProvider as AiProviderImplementationEnum)) throw new Error('DialogueState: aiProvider must be a valid AI provider');
    }

    static build(data: Partial<DialogueState>) {
        DialogueState.validate(data);
        const state = new DialogueState();
        Object.assign(state, data);
        return state;
    }
}