import { CharacterProfile } from './CharacterProfile';
import { WorldContext } from './WorldContext';
import { KnowledgeBase } from './KnowledgeBase';

export class DialoguePromptData {
    prompt!: string;
    current_topic!: string;
    instruction!: string;
    profiles!: {
        playerCharacter: CharacterProfile;
        aiCharacter1: CharacterProfile;
    };
    world_context!: WorldContext;
    dialogueHistory!: string[];
    knowledge_base!: KnowledgeBase;

    static validate(data: any) {
        // Validate required fields
        if (!data.prompt) throw new Error('DialoguePromptData: prompt is required');
        if (!data.instruction) throw new Error('DialoguePromptData: instruction is required');
        if (!data.profiles) throw new Error('DialoguePromptData: profiles is required');
        if (!data.current_topic) throw new Error('DialoguePromptData: current_topic is required');
        if (!data.world_context) throw new Error('DialoguePromptData: world_context is required');
        if (!data.dialogueHistory) throw new Error('DialoguePromptData: dialogueHistory is required');
        if (!data.knowledge_base) throw new Error('DialoguePromptData: knowledge_base is required');

        // Validate types
        if (typeof data.prompt !== 'string') throw new Error('DialoguePromptData: prompt must be a string');
        if (typeof data.instruction !== 'string') throw new Error('DialoguePromptData: instruction must be a string');
        if (typeof data.profiles !== 'object') throw new Error('DialoguePromptData: profiles must be an object');
        if (typeof data.world_context !== 'object') throw new Error('DialoguePromptData: world_context must be an object');
        if (typeof data.current_topic !== 'string') throw new Error('DialoguePromptData: current_topic must be a string');
        if (!Array.isArray(data.dialogueHistory)) throw new Error('DialoguePromptData: dialogueHistory must be an array');
        if (typeof data.knowledge_base !== 'object') throw new Error('DialoguePromptData: knowledge_base must be an object');
    }

    static build(data: any) {
        this.validate(data);
        const state = new DialoguePromptData();
        Object.assign(state, data);
        return state;
    }
}