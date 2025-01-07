import { Inject, Injectable, Logger } from '@nestjs/common';
import { firstValueFrom, Observable } from 'rxjs';
import {
    StartDialogueRequest,
    StartDialogueResponse,
    GenerateResponseOptionsRequest,
    GenerateResponseOptionsResponse,
    SendMessageRequest,
    MessageChunk,
    InterruptDialogueRequest,
    InterruptDialogueResponse,
    EndDialogueRequest,
    EndDialogueResponse,
    DialogueStateDTO,
    CharacterDialogueInitiationDTO,
    RevealedInformationDTO
} from '../../proto/dialogue';
import { ContentService } from '../content/content.service';
import { AiProviderImplementationEnum, AiService } from '../ai/ai.service';
import { PromptService } from '../prompt/prompt.service';
import { DialogueState } from '../../class/DialogueState';
import { CacheKeyEnum, DialogueStateService } from '../dialogueState/dialogueState.service';
import { KnowledgeBase } from '../../class/KnowledgeBase';
import { DialogueHistoryEntry } from '../../class/DialogueHistory/DialogueHistoryEntry';
import { WorldContext } from '../../class/WorldContext';
import { CharacterProfile } from '../../class/CharacterProfile';
import { AiRequestOptionsV1 } from '../../class/AiRequestOptionsV1';

import { v4 as uuidv4 } from 'uuid';
import { DialogueResponseOption } from '../../class/DialogueResponseOption';
import { rollDice } from '../../dnd/rollDice';
import { DiceThrowResult } from '../../dnd/class/DiceThrowResult';
import { DialogueHistoryTopic } from '../../class/DialogueHistory/DialogueHistoryTopic';
import { DialogueHistory } from '../../class/DialogueHistory';
import { DialogueOptionDirectionEnum } from '../../enum/DialogueOptionDirectionEnum';
import {
    summarizeTopicAiProvider, summarizeTopicAiModel, summarizeTopicMaxTokens, summarizeTopicTemperature,
    analyzeAiResponseForOutcomesAiProvider, analyzeAiResponseForOutcomesAiModel, analyzeAiResponseForOutcomesMaxTokens, analyzeAiResponseForOutcomesTemperature,
    generateResponseOptionsAiProvider, generateResponseOptionsAiModel, generateResponseOptionsMaxTokens, generateResponseOptionsTemperature,
} from '../../config/aiConfig';
import { DialogueActionEnum } from '../../enum/DialogueActionEnum';
import { AiResponseOutcome } from '../../class/AiResponseOutcome';





export interface IDialogueService {
    startDialogue(
        initiatingParticipantId: string,
        playerCharacterId: string,
        aiProvider: AiProviderImplementationEnum,
        options: AiRequestOptionsV1,
        dialogueParticipants: CharacterProfile[],
        worldContext: WorldContext,
        dialogueHistory: DialogueHistoryEntry[],
        knowledgeBase: KnowledgeBase,
    ): Promise<{ dialogueId: string }>;
    generateResponseOptions(dialogueId: string): Promise<GenerateResponseOptionsResponse>;
    progressDialogue(
        selectedDialogueOption: DialogueResponseOption,
        dialogueId: string,
        onChunkReceived: (chunk: any) => void,
        options?: AiRequestOptionsV1,
        diceSides?: number,
    ): Promise<{ requestId: string, fullResponse: string, outcome: AiResponseOutcome }>;
    interrupt(dialogueId: string): Promise<void>;
    finalizeDialogue(dialogueId: string): Promise<EndDialogueResponse>;
}



@Injectable()
export class DialogueService implements IDialogueService {
    private readonly logger = new Logger(DialogueService.name);

    constructor(
        @Inject(PromptService) private promptService: PromptService,
        @Inject(ContentService) private contentService: ContentService,
        @Inject(AiService) private aiService: AiService,
        @Inject(DialogueStateService) private readonly dialogueStateService: DialogueStateService
    ) { }

    private streamDialogue(
        prompt: string,
        aiProvider: AiProviderImplementationEnum,
        options: AiRequestOptionsV1,
        onChunkReceived: (chunk: any) => void,
    ): { requestId: string, dialoguePromise: Promise<{ fullResponse: string }> } {

        const { requestId, stream } = this.aiService.streamProcessPrompt(
            aiProvider,
            prompt,
            options
        );

        const dialoguePromise: Promise<{ fullResponse: string }> = new Promise((resolve, reject) => {
            let fullResponse: string = "";
            stream.subscribe({
                next: (chunk: AiResponseV1) => {
                    if (chunk.errorMessage) {
                        reject(new Error(chunk.errorMessage));
                        return;
                    }
                    fullResponse += chunk.output;
                    onChunkReceived(chunk);
                },
                error: (err) => {
                    console.error('Error from AI service:', err);
                    reject(err);
                },
                complete: async () => {
                    console.log('AI service stream complete');
                    resolve({ fullResponse });
                },
            });
        });
        return { requestId, dialoguePromise };
    }

    private async getDialogueState(dialogueId: string): Promise<DialogueState> {
        const dialogueState: DialogueState | null = await this.dialogueStateService.getState(dialogueId);
        if (!dialogueState) throw new Error(`DialogueState not found for dialogue id ${dialogueId}`);
        return dialogueState;
    }

    public async modifyDialogueGoals(participantId: string, add: string[], remove: string[], dialogueId: string): Promise<void> {
        if (add.length === 0 && remove.length === 0) throw new Error("No goals to modify");

        // we only deal with unsatisfied goals, cannot modify satisfied
        const dialogueState: DialogueState = await this.getDialogueState(dialogueId);
        const participant = dialogueState.dialogueParticipants.find((participant) => participant.id === participantId);
        if (!participant) throw new Error(`Participant not found for id ${participantId}`);

        // ensure goals are fully initialized
        if (!participant.goals) participant.goals = { unsatisfied: [], satisfied: [] }
        if (!participant.goals.unsatisfied) participant.goals.unsatisfied = []
        if (!participant.goals.satisfied) participant.goals.satisfied = []

        // Check if any goals to add are already satisfied
        const alreadySatisfiedGoals = add.filter(goal => participant.goals!.satisfied.includes(goal));
        if (alreadySatisfiedGoals.length > 0) {
            throw new Error(`Cannot add already satisfied goals: ${alreadySatisfiedGoals.join(', ')}`);
        }

        // remove goals that are being removed
        if (remove.length > 0) participant.goals.unsatisfied = participant.goals.unsatisfied.filter((goal) => !remove.includes(goal));

        // add new goals
        if (add.length > 0) participant.goals.unsatisfied.push(...add);

        // save state
        await this.dialogueStateService.cacheState(dialogueId, CacheKeyEnum.DIALOGUE_STATE, dialogueState);
    }


    public async startDialogue(
        initiatingParticipantId: string,
        playerCharacterId: string,
        aiProvider: AiProviderImplementationEnum,
        options: AiRequestOptionsV1,
        dialogueParticipants: CharacterProfile[],
        worldContext: WorldContext,
        dialogueHistory: DialogueHistory,
        knowledgeBase: KnowledgeBase,
    ): Promise<{ dialogueId: string }> {
        this.logger.debug(`Starting dialogue with arguments:`, { aiProvider, options, dialogueParticipants, worldContext, dialogueHistory, knowledgeBase });

        const dialogueId: string = uuidv4();

        const dialogueState: DialogueState = DialogueState.build({
            initiatingParticipantId,
            dialogueId,
            playerCharacterId,
            lastUsedOptions: options,
            aiProvider,
            dialogueParticipants,
            worldContext,
            dialogueHistory,
            knowledgeBase
        })
        await this.dialogueStateService.cacheState(dialogueId, CacheKeyEnum.DIALOGUE_STATE, dialogueState);

        return { dialogueId };
    }

    async generateResponseOptions(dialogueId: string, desiredOptionDirection: DialogueOptionDirectionEnum): Promise<GenerateResponseOptionsResponse> {
        this.logger.debug(`Generating response options for dialogue id: ${dialogueId}`);

        const dialogueState: DialogueState = await this.getDialogueState(dialogueId);

        const prompt = await this.promptService.assembleGenerateResponseOptionsPrompt(dialogueState, desiredOptionDirection);



        // TODO: Implement response options generation logic
        // TODO: Implement context-aware processing
        // TODO: Implement character personality influence

        return {
            // TODO: Return proper response structure
            responseOptions: [],
            updatedState: {} as DialogueStateDTO
        };
    }

    async progressDialogue(
        selectedDialogueOption: DialogueResponseOption,
        dialogueId: string,
        onChunkReceived: (chunk: any) => void,
        options?: AiRequestOptionsV1,
        diceSides?: number,
    ): Promise<{ requestId: string, fullResponse: string, outcome: AiResponseOutcome }> {
        this.logger.debug(`Processing message for dialogue id: ${dialogueId}`);

        const dialogueState: DialogueState = await this.getDialogueState(dialogueId);
        if (options) dialogueState.lastUsedOptions = options;

        const playerCharacter: CharacterProfile | undefined = dialogueState.dialogueParticipants.find((participant) => participant.id === dialogueState.playerCharacterId);
        if (!playerCharacter) throw new Error(`Player character not found for id ${dialogueState.playerCharacterId}`);

        const playerHistoryEntry: DialogueHistoryEntry = DialogueHistoryEntry.build({
            dialogueParticipantId: playerCharacter.id,
            text: JSON.stringify(selectedDialogueOption),
        });

        const aiProvider: AiProviderImplementationEnum = dialogueState.aiProvider;

        // manage topics
        let currentTopic: DialogueHistoryTopic
        const latestTopic: DialogueHistoryTopic | undefined = dialogueState.dialogueHistory.topicsNewestToOldest[0];
        const isNeedToChangeTopic = selectedDialogueOption.topic !== latestTopic?.name;
        if (isNeedToChangeTopic) {
            const summarizedTopic: DialogueHistoryTopic = await this.summarizeTopic(latestTopic);
            dialogueState.dialogueHistory.topicsNewestToOldest.splice(0, 1, summarizedTopic);
            currentTopic = DialogueHistoryTopic.build({
                name: selectedDialogueOption.topic,
                exchangesNewestToOldest: []
            })
        } else {
            currentTopic = latestTopic;
        }
        currentTopic.exchangesNewestToOldest?.push(playerHistoryEntry); // TODO at the moment the player has full control of topics, which is lame, so in the future I need to trigger topic change based on AI actions as well... Ok for now as it is

        // roll dice
        const diceResult: DiceThrowResult = rollDice(selectedDialogueOption.riskImpact, diceSides);

        // assemble progress dialogue prompt
        const prompt = await this.promptService.assembleProgressDialoguePrompt(
            diceResult,
            dialogueState,
        );

        // get the stream
        const { requestId, dialoguePromise } = this.streamDialogue(
            prompt,
            aiProvider,
            dialogueState.lastUsedOptions,
            onChunkReceived,
        );

        // wait until the stream is complete and get the full response for analysis and storage
        const { fullResponse } = await dialoguePromise;

        // analyze the response for outcomes
        const outcome: AiResponseOutcome = await this.analyzeAiResponseForOutcomes(fullResponse, dialogueState);
        const aiHistoryEntry: DialogueHistoryEntry = DialogueHistoryEntry.build({
            dialogueParticipantId: playerCharacter.id,
            text: JSON.stringify(selectedDialogueOption),
            outcome,
        });
        currentTopic.exchangesNewestToOldest?.push(aiHistoryEntry);

        // save the state
        await this.dialogueStateService.cacheState(dialogueId, CacheKeyEnum.DIALOGUE_STATE, dialogueState);

        return { requestId, fullResponse, outcome };
    }



    private async analyzeAiResponseForOutcomes(fullResponse: string, dialogueState: DialogueState): Promise<AiResponseOutcome> {
        const [actionsTaken, goalsFulfilled] = await Promise.all([
            this.analyzeAiResponseForActionsTaken(fullResponse),
            this.analyzeAiResponseForGoalsFulfilled(fullResponse, dialogueState),
        ]);
        const outcome = AiResponseOutcome.build({
            actionsTaken,
            aiUnfulfilledGoalsFulfilled: goalsFulfilled,
        });
        return outcome;
    }

    private async analyzeAiResponseForActionsTaken(fullResponse: string): Promise<DialogueActionEnum[]> {
        const prompt: string = this.promptService.assembleAnalyzeAiResponseForActionsTakenPrompt(fullResponse);
        const aiProvider = analyzeAiResponseForOutcomesAiProvider;
        const options = AiRequestOptionsV1.build({
            model: analyzeAiResponseForOutcomesAiModel,
            maxTokens: analyzeAiResponseForOutcomesMaxTokens,
        });
        const outcomeString: string = await this.aiService.processPrompt(aiProvider, prompt, options);
        try {
            return JSON.parse(outcomeString) as DialogueActionEnum[];
        } catch (error) {
            throw new Error(`[DialogueService - analyzeAiResponseForActionsTaken] Failed to parse ai generated outcome: ${error}; outcomeString: ${outcomeString}`);
        }
    }

    private async analyzeAiResponseForGoalsFulfilled(fullResponse: string, dialogueState: DialogueState): Promise<string[]> {
        const prompt: string = this.promptService.assembleAnalyzeAiResponseForGoalsFulfilledPrompt(fullResponse, dialogueState.goals.unsatisfied);
        const aiProvider = analyzeAiResponseForOutcomesAiProvider;
        const options = AiRequestOptionsV1.build({
            model: analyzeAiResponseForOutcomesAiModel,
            maxTokens: analyzeAiResponseForOutcomesMaxTokens,
            temperature: analyzeAiResponseForOutcomesTemperature,
        });
        const outcomeString: string = await this.aiService.processPrompt(aiProvider, prompt, options);
        try {
            return JSON.parse(outcomeString) as string[];
        } catch (error) {
            throw new Error(`[DialogueService - analyzeAiResponseForGoalsFulfilled] Failed to parse ai generated outcome: ${error}; outcomeString: ${outcomeString}`);
        }
    }

    private async summarizeTopic(topic: DialogueHistoryTopic): Promise<DialogueHistoryTopic> {
        const prompt: string = this.promptService.assembleSummarizeTopicPrompt(topic)
        const aiProvider = summarizeTopicAiProvider;
        const options = AiRequestOptionsV1.build({
            model: summarizeTopicAiModel,
            maxTokens: summarizeTopicMaxTokens,
            temperature: summarizeTopicTemperature,
        });

        const summarizeResponse: string = await this.aiService.processPrompt(
            aiProvider,
            prompt,
            options,
        );
        // erase actual exchanges and instead set a summary
        delete topic.exchangesNewestToOldest
        topic.summary = summarizeResponse
        return topic
    }

    public async interrupt(dialogueId: string): Promise<void> {
        this.logger.debug(`Interrupting dialogue id: ${dialogueId}`);

        const dialogueState: DialogueState = await this.getDialogueState(dialogueId);

        await this.aiService.interrupt(dialogueState.aiProvider, dialogueId);

        // TODO: decide what to do with an interrupted dialogue - terminate it and treat as endDialogue? Or provide options to continue somehow?
    }

    public async finalizeDialogue(
        dialogueId: string,
        options?: AiRequestOptionsV1,
    ): Promise<EndDialogueResponse> {
        this.logger.debug(`Ending dialogue id: ${dialogueId}`);

        const dialogueState: DialogueState = await this.getDialogueState(dialogueId);
        if (options) dialogueState.lastUsedOptions = options;

        // TODO: Implement dialogue conclusion logic
        // TODO: Implement final state processing
        // TODO: Implement dialogue summary generation

        await this.dialogueStateService.removeState(dialogueId);

        return {
            success: true,
            summary: '',
            revealedInformation: [] as RevealedInformationDTO[],
            updatedParticipants: []
        };
    }
}
