import { Inject, Injectable, Logger } from '@nestjs/common';
import { firstValueFrom } from 'rxjs';
import { DialogueActionEnum } from '../../enum/DialogueActionEnum';
import { DialogueGoalEnum } from '../../enum/DialogueGoalEnum';
import { DialoguePromptData } from '../../class/DialoguePromptData';
import { DialogueHistoryEntry } from '../../class/DialogueHistoryEntry';
import { DialogueState } from '../../class/DialogueState';
import { D20_scales, D20_SCALE_TYPE_ENUM } from '../../dnd/D20_scales';
import { DialogueStateService } from '../dialogueState/dialogueState.service';
import { ContentService } from '../content/content.service';


@Injectable()
export class PromptService {
    private readonly logger = new Logger(PromptService.name);

    constructor(
        @Inject('ContentService') private readonly contentService: ContentService,
        @Inject(DialogueStateService) private readonly dialogueStateService: DialogueStateService
    ) { }

    async assembleDialoguePrompt(sessionId: string, dialogueState: DialogueState, promptType: string, params: any): Promise<DialoguePromptData> {
        const [
            prompt,
            instruction,
            profiles,
            worldContext,
            dialogueHistory,
            knowledgeBase
        ] = await Promise.all([
            this.constructPrompt(promptType, params),
            this.assembleDialogueInstruction(aiCharacterName, playerCharacterName),
            this.assembleProfiles(sessionId, dialogueState),
            this.assembleWorldContext(sessionId, dialogueState),
            this.getDialogueHistory(sessionId),
            this.assembleKnowledgeBase(sessionId, params)
        ]);

        const promptData = DialoguePromptData.build({
            prompt,
            instruction,
            profiles,
            world_context: worldContext,
            dialogueHistory,
            knowledge_base: knowledgeBase
        });
        return promptData;
    }

    assembleDialogueInstruction(aiCharacterName: string, playerCharacterName: string): string {
        return `
            You are ${aiCharacterName}, in a dialogue with ${playerCharacterName}.
            You must embody the character with their unique traits, needs, moods, etc, as listed in the data.
            You must respond based on the knowledge your character has, or doesn't have (like when the player asks for something your character does not know).
            Your character may not want to share something, or talk about something. Or they may want to.
            You can behave any way you want, to reply to the player or not. Do whatever would be in the character of this person that you embody.
            You have full power of will. First, voice the player character, then reply to the player.
        `;
    }

    assembleSummarizeTopicPrompt(sessionId: string, params: any): string {
        const explanation = {
            summary: "The summary of the dialogue. This is a string.",
            topic: "The topic of the dialogue. This is a string.",
            revealedInformation: "The information revealed to the AI by the dialogue. Array of strings.",
            actionsTaken: "The actions taken by the AI by the dialogue. Array of strings."
        }
        const format = {
            summary: "The summary of the dialogue",
            topic: "The topic of the dialogue",
            revealedInformation: "The information revealed to the AI by the dialogue",
            actionsTaken: "The actions taken by the AI by the dialogue"
        }
        return `Summarize the current topic of the dialogue: ${params.current_topic}`;
    }

    assembleSummarizeDialoguePrompt(sessionId: string, params: any): string {
        const explanation = {
            summary: "The summary of the dialogue. This is a string.",
            topic: "The topic of the dialogue. This is a string.",
            revealedInformation: "The information revealed to the AI by the dialogue. Array of strings.",
            actionsTaken: "The actions taken by the AI by the dialogue. Array of strings."
        }
        const format = {
            summary: "The summary of the dialogue",
            topic: "The topic of the dialogue",
            revealedInformation: "The information revealed to the AI by the dialogue",
            actionsTaken: "The actions taken by the AI by the dialogue"
        }
        return `
            Summarize the dialogue: ${params.dialogueHistory}
            Here is the explanation of the format and different fields: "${JSON.stringify(explanation)}".
            It is extremely important to follow the format extremely strictly as this will be consumed by the backend as a parsed JSON object.
        `;
    }

    assembleGetNextDialogueOptionsPrompt(
        lastAiResponse: string,
        dialogueHistory: DialogueHistoryEntry[],
        actions: DialogueActionEnum[],
        goals: DialogueGoalEnum[],
        quantity: number,
    ): string {
        const explanation = {
            text: "The text of the dialogue option. This is the text that the AI will say to the player. It is a string.",
            goal: "The goal that this dialogue action aims to achieve. This is a string.",
            revealedInformation: "The information revealed to the AI by this dialogue action. Array of strings.",
            actionsTaken: "The actions taken by this dialogue action. Array of strings. Leave empty if no actions will be taken by this dialogue action.",
            D20_scale: "The D20 scale that this dialogue option will have. This is an enum string and it must match one of the values of D20_SCALE_TYPE_ENUM. This field is mandatory. You must assess the risk and the impact of this dialogue option and select the D20 scale so that I could throw a D20 die and determine the outcome of this selected dialogue option."
        }
        const format = {
            "text": "The text of the dialogue option",
            "goal": "GOAL1",
            "revealedInformation": ["INFORMATION1", "INFORMATION2"],
            "actionsTaken": ["ACTION1", "ACTION2"],
            "D20_scale": "<...> Risk <...> Impact"
        }
        return `
            Your task is to generate the next dialogue options.
            Your response must strictly follow the following format: "${JSON.stringify(format)}".
            Here is the explanation of the format and different fields: "${JSON.stringify(explanation)}".
            Here is the dialogue history (i.e. summaries of topics previously discussed, if any): ${JSON.stringify(dialogueHistory)}.
            Here are all the possible actions: ${JSON.stringify(actions)}.
            Here are all the possible goals: ${JSON.stringify(goals)}.
            Here are all the possible values of D20_SCALE_TYPE_ENUM: ${JSON.stringify(Object.values(D20_SCALE_TYPE_ENUM))}.
            Here are all the possible D20 scales (keys are values of D20_SCALE_TYPE_ENUM, as you can see): ${JSON.stringify(D20_scales)}.

            It is extremely important to follow the format extremely strictly as this will be consumed by the backend as a parsed JSON object.

            You must keep a sense of the context of the dialogue and base the options on that.
            Calm dialogue should receive calm options, and dynamic and tense dialogue should receive dynamic and tense options that allow for interesting roleplay.

            Try to include an option that continues the current topic (if the situation allows it),
            an option or several to change the topic to anything else that is in the dialogue goals of the player (if the situation allows it), etc. Tense situations should provide the player with very limited options, for example, if the dialogue is clearly headed towards combat and a refusal to continue to talk, the options should reflect that and limit the choices of the player.

            IMPORTANT: You must generate minimum 1 option, maximum ${quantity} options. In most cases go for the maximum, but in limiting dialogue conditions, like when: combat is clearly about to start; the dialogue clearly ends here; etc., you can provide only one or two limited options with the appropriate action from the list of possible actions, so as to force the player into the limiting situation and trigger the combat/end of dialogue/etc.
        `;
    }

    assembleAnalyzeAIResponseForOutcomesPrompt(sessionId: string, actions: DialogueActionEnum[]): string {
        const explanation = {
            topicChangedTo: "The topic changed to. Do not include the field if the topic is still the same.",
            goalsAchieved: "The goals achieved by the AI's response. Do not include the field if no goal was achieved.",
            revealedInformation: "The information revealed by the AI's response. Do not include the field if no information was revealed.",
            actionsTaken: "The actions taken by the AI's response. Do not include the field if no actions were taken."
        }
        const formatExample = {
            topicChangedTo: "Some different topic of discussion for the next few messages.",
            goalsAchieved: ["GOAL1", "GOAL2"],
            revealedInformation: ["INFORMATION1", "INFORMATION2"],
            actionsTaken: ["ACTION1", "ACTION2"]
        }
        return `
            Analyze the AI's response for outcomes. Look at the response and determine
            Your response must strictly follow the following format: "${JSON.stringify(formatExample)}".
            Here is the explanation of the format and different fields: "${JSON.stringify(explanation)}".
            It is extremely important to follow the format extremely strictly as this will be consumed by the backend as a parsed JSON object.
        `;
    }

    private async getDialogueState(sessionId: string): Promise<DialogueState | null> {
        return await this.dialogueStateService.getState(sessionId);
    }

    private async constructPrompt(promptType: string, params: any): Promise<string> {
        // Construct the basic prompt based on type and parameters
        return `Player ${params.action} ${params.target}`;
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