import { Injectable, Logger } from '@nestjs/common';
import { ClientGrpc } from '@nestjs/microservices';
import { firstValueFrom } from 'rxjs';
import { Redis } from 'ioredis';

export interface IContentService {
    getLocationData(request: any): Promise<any>;
    getCharacterData(request: any): Promise<any>;
    getFactionData(request: any): Promise<any>;
    getItemData(request: any): Promise<any>;
    getWorldStateData(request: any): Promise<any>;


}

export class DialogueState {
    characters: { [characterId: string]: CharacterProfile } = {};
    worldState: WorldContext = {};
    dialogueHistory: string[] = [];
    knowledgeBase: KnowledgeBase = {};

    build(data: any) {
        const state = new DialogueState();
        Object.assign(state, data);
        return state;
    }
}

export interface DialoguePromptData {
    prompt: string;
    instruction: string;
    profiles: {
        playerCharacter: CharacterProfile;
        aiCharacter1: CharacterProfile;
    };
    world_context: WorldContext;
    dialogueHistory: string[];
    knowledge_base: KnowledgeBase;
}

export interface CharacterProfile {
    id: string;
    name: string;
    race: string;
    class: string;
    traits?: string[];
    enneagram?: string;
    mood?: string;
    needs?: string[];
    activeGoal?: string;
    goals?: string[];
    skills: Record<string, number>;
    stats: Record<string, string>;
    inventory: string[];
    knowledge: {
        locations: string[];
        factions: string[];
        familiar_characters: string[];
    };
}

export class WorldContext {
    location: LocationData = {};
    time: TimeData = {};
    weather: WeatherData = {};
    surroundings: SurroundingsData = {};

    build(data: any) {
        const state = new WorldContext();
        Object.assign(state, data);
        return state;
    }
}

export class KnowledgeBase {
    locations: LocationData[] = [];
    factions: FactionData[] = [];
    characters: CharacterData[] = [];
    items: ItemData[] = [];

    build(data: any) {
        const state = new KnowledgeBase();
        Object.assign(state, data);
        return state;
    }
}

@Injectable()
export class PromptService {
    private readonly logger = new Logger(PromptService.name);
    private contentService: IContentService;
    private readonly instructionTemplates = {
        GOAL_LEARN_LOCATION: "You are {aiCharacter} ({aiRace} {aiClass}), in a dialogue with {playerCharacter}. The player wants to learn about {targetLocation}. Reply based on your knowledge.",
        GOAL_TRADE_ITEM: "You are {aiCharacter} ({aiRace} {aiClass}), in a dialogue with {playerCharacter}. The player wants to trade {itemName}. Consider your inventory and negotiate accordingly.",
        // Add more templates for different goal types
    };

    constructor(
        private readonly grpcClient: ClientGrpc,
        private readonly redisClient: Redis
    ) {
        this.contentService = this.grpcClient.getService<IContentService>('ContentService');
    }

    async assembleDialoguePrompt(sessionId: string, promptType: string, params: any): Promise<DialoguePromptData> {
        const cachedState = await this.getDialogueState(sessionId);

        const prompt = await this.constructPrompt(promptType, params);
        const instruction = await this.constructInstruction(promptType, params);
        const profiles = await this.assembleProfiles(sessionId, cachedState);
        const worldContext = await this.assembleWorldContext(sessionId, cachedState);
        const dialogueHistory = await this.getDialogueHistory(sessionId);
        const knowledgeBase = await this.assembleKnowledgeBase(sessionId, params);

        return {
            prompt,
            instruction,
            profiles,
            world_context: worldContext,
            dialogueHistory,
            knowledge_base: knowledgeBase
        };
    }

    private async getDialogueState(sessionId: string): Promise<DialogueState> {
        const cachedState = await this.redisClient.get(`dialogue:${sessionId}`);
        return cachedState ? JSON.parse(cachedState) : {};
    }

    private async constructPrompt(promptType: string, params: any): Promise<string> {
        // Construct the basic prompt based on type and parameters
        return `Player ${params.action} ${params.target}`;
    }

    private async constructInstruction(promptType: string, params: any): Promise<string> {
        const template = this.instructionTemplates[promptType] || this.instructionTemplates.DEFAULT;
        return template.replace(/\{(\w+)\}/g, (match, key) => params[key] || match);
    }

    private async assembleProfiles(sessionId: string, cachedState: any): Promise<any> {
        if (!cachedState.characters) {
            const characterData = await firstValueFrom(
                this.contentService.getCharacterData({ sessionId })
            );
            await this.cacheStateData(sessionId, 'characters', characterData);
            return characterData;
        }
        return cachedState.characters;
    }

    private async assembleWorldContext(sessionId: string, cachedState: any): Promise<WorldContext> {
        if (!cachedState.worldState) {
            const worldData = await firstValueFrom(
                this.contentService.getWorldStateData({ sessionId })
            );
            await this.cacheStateData(sessionId, 'worldState', worldData);
            return worldData;
        }
        return cachedState.worldState;
    }

    private async getDialogueHistory(sessionId: string): Promise<string[]> {
        const history = await this.redisClient.lrange(`dialogue:${sessionId}:history`, 0, -1);
        return history;
    }

    private async assembleKnowledgeBase(sessionId: string, params: any): Promise<KnowledgeBase> {
        const cachedKnowledge = await this.redisClient.get(`dialogue:${sessionId}:knowledge`);
        if (cachedKnowledge) {
            return JSON.parse(cachedKnowledge);
        }

        const [locations, factions, characters, items] = await Promise.all([
            firstValueFrom(this.contentService.getLocationData({ sessionId })),
            firstValueFrom(this.contentService.getFactionData({ sessionId })),
            firstValueFrom(this.contentService.getCharacterData({ sessionId })),
            firstValueFrom(this.contentService.getItemData({ sessionId }))
        ]);

        const knowledgeBase = { locations, factions, characters, items };
        await this.cacheStateData(sessionId, 'knowledge', knowledgeBase);
        return knowledgeBase;
    }

    private async cacheStateData(sessionId: string, key: string, data: any): Promise<void> {
        await this.redisClient.set(
            `dialogue:${sessionId}:${key}`,
            JSON.stringify(data),
            'EX',
            3600 // 1 hour expiration
        );
    }
}

// Additional interfaces for type safety
export class LocationData {
    id: string;
    name: string;
    description: string;
    parentLocationChain: string;

    build(data: any) {
        const state = new LocationData();
        Object.assign(state, data);
        return state;
    }
}

export class TimeData {
    timeOfDay: string;
    day: number;
    month: string;
    year: number;
    season: string;

    build(data: any) {
        const state = new TimeData();
        Object.assign(state, data);
        return state;
    }
}

export class WeatherData {
    weather: string;
    temperature: string;
    wind: string;

    build(data: any) {
        const state = new WeatherData();
        Object.assign(state, data);
        return state;
    }
}

export class SurroundingsData {
    near: Record<string, any> = {};
    mid: {
        npc: Array<{ id: string, activity: string }> = [];
        item: string[] = [];
    };
    far: Record<string, any> = {};

    build(data: any) {
        const state = new SurroundingsData();
        Object.assign(state, data);
        return state;
    }
}

export class FactionData {
    id: string;
    name: string;
    description: string;

    build(data: any) {
        const state = new FactionData();
        Object.assign(state, data);
        return state;
    }
}

export class CharacterData {
    id: string;
    name: string;
    description: string;
    location?: string;
    faction?: string;

    build(data: any) {
        const state = new CharacterData();
        Object.assign(state, data);
        return state;
    }
}

export class ItemData {
    id: string;
    name: string;
    description: string;

    build(data: any) {
        const state = new ItemData();
        Object.assign(state, data);
        return state;
    }
}
