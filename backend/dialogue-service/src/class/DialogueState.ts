import { CharacterProfile } from "./CharacterProfile";
import { KnowledgeBase } from "./KnowledgeBase";
import { WorldContext } from "./WorldContext";

export class DialogueState {
    characters!: { [characterId: string]: CharacterProfile };
    worldState!: WorldContext;
    dialogueHistory!: string[];
    knowledgeBase!: KnowledgeBase;

    static validate(data: any) {
        // Validate required fields
        if (!data.characters) throw new Error('DialogueState: characters is required');
        if (!data.worldState) throw new Error('DialogueState: worldState is required');
        if (!data.dialogueHistory) throw new Error('DialogueState: dialogueHistory is required');
        if (!data.knowledgeBase) throw new Error('DialogueState: knowledgeBase is required');

        // Validate types
        if (typeof data.characters !== 'object') throw new Error('DialogueState: characters must be an object');
        if (typeof data.worldState !== 'object') throw new Error('DialogueState: worldState must be an object');
        if (!Array.isArray(data.dialogueHistory)) throw new Error('DialogueState: dialogueHistory must be an array');
        if (typeof data.knowledgeBase !== 'object') throw new Error('DialogueState: knowledgeBase must be an object');
    }

    static build(data: any) {
        DialogueState.validate(data);
        const state = new DialogueState();
        Object.assign(state, data);
        return state;
    }
}