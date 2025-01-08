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

import { v4 as uuidv4 } from 'uuid';
import { DialoguePlayerResponseOption } from '../../class/DialoguePlayerResponseOption';
import { rollDice } from '../../dnd/rollDice';
import { DiceThrowResult } from '../../dnd/class/DiceRollResult';
import { DialogueHistoryTopic } from '../../class/DialogueHistory/DialogueHistoryTopic';
import { DialogueHistory } from '../../class/DialogueHistory';
import { DialogueDirectionEnum } from '../../enum/DialogueDirectionEnum';
import { aiConfig } from '../../config/aiConfig';
import { DialogueStepOutcomeEnum } from '../../enum/DialogueStepOutcomeEnum';
import { AiResponseOutcome, StepOutcome } from '../../class/StepOutcome';
import { AiDialogueOption } from '../../class/DialogueOption/AiDialogueOption';
import { DialogueOption } from '../../class/DialogueOption';
import { D20_SCALE_CONFIG } from '../../dnd/scales/D20_SCALE_CONFIG';
import { DiceScaleConfig } from '../../dnd/types';





export interface IDialogueService {
    startDialogue(
        initiatingParticipantId: string,
        playerCharacterId: string,
        aiProvider: AiProviderImplementationEnum,
        dialogueParticipants: CharacterProfile[],
        worldContext: WorldContext,
        dialogueHistory: DialogueHistory,
        knowledgeBase: KnowledgeBase,
    ): Promise<{ dialogueId: string }>;
    generateResponseOptions(
        dialogueId: string,
        desiredOptionDirection: DialogueDirectionEnum,
        quantity: number,
    ): Promise<GenerateResponseOptionsResponse>;
    progressDialogue(
        dialogueId: string,
        selectedPlayerDialogueOption: DialoguePlayerResponseOption,
        onChunkReceived: (chunk: any) => void,
        diceScale?: DiceScaleConfig,
    ): Promise<{ requestId: string, fullResponse: string, outcome: AiResponseOutcome }>;
    modifyDialogueGoals(
        participantId: string,
        add: string[],
        remove: string[],
        dialogueId: string,
    ): Promise<void>;
    generatePlayerDialogueDirections(
        dialogueId: string,
        quantity: number,
    ): Promise<DialogueDirectionEnum[]>;
    generatePlayerDialogueOptions(
        dialogueId: string,
        dialogueDirection: DialogueDirectionEnum,
        quantity: number,
    ): Promise<DialogueOption[]>;
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

    public async modifyDialogueGoals(
        participantId: string,
        add: string[],
        remove: string[],
        dialogueId: string,
    ): Promise<void> {
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
        dialogueParticipants: CharacterProfile[],
        worldContext: WorldContext,
        dialogueHistory: DialogueHistory,
        knowledgeBase: KnowledgeBase,
    ): Promise<{ dialogueId: string }> {
        this.logger.debug(`Starting dialogue with arguments:`, { aiProvider, dialogueParticipants, worldContext, dialogueHistory, knowledgeBase });

        const dialogueId: string = uuidv4();

        const dialogueState: DialogueState = DialogueState.build({
            initiatingParticipantId,
            dialogueId,
            playerCharacterId,
            aiProvider,
            dialogueParticipants,
            worldContext,
            dialogueHistory,
            knowledgeBase
        })
        await this.dialogueStateService.cacheState(dialogueId, CacheKeyEnum.DIALOGUE_STATE, dialogueState);

        return { dialogueId };
    }

    public async generatePlayerDialogueDirections(
        dialogueId: string,
        quantity = 10,
    ): Promise<DialogueDirectionEnum[]> {
        // extract data from dialogue state
        const dialogueState: DialogueState = await this.getDialogueState(dialogueId);
        const playerCharacterId: string = dialogueState.playerCharacterId;
        const dialogueParticipants: CharacterProfile[] = dialogueState.dialogueParticipants;
        const dialogueHistory: DialogueHistory = dialogueState.dialogueHistory;
        const knowledgeBase: KnowledgeBase = dialogueState.knowledgeBase;
        const worldContext: WorldContext = dialogueState.worldContext;

        // extract player character and ai characters
        const playerCharacter: CharacterProfile | undefined = dialogueParticipants.find((participant) => participant.id === playerCharacterId);
        if (!playerCharacter) throw new Error(`Player character not found for id ${playerCharacterId}`);
        const aiCharacters: CharacterProfile[] = dialogueParticipants.filter((participant) => participant.id !== playerCharacterId);
        if (aiCharacters.length === 0) throw new Error('No AI characters found');

        // generate player dialogue directions
        const prompt = this.promptService.assembleGeneratePlayerDialogueDirectionsPrompt(
            playerCharacter,
            aiCharacters,
            dialogueHistory,
            knowledgeBase,
            worldContext,
            quantity,
        );
        const aiProvider: AiProviderImplementationEnum = aiConfig.useCases.generatePlayerDialogueDirections.aiProvider;
        const aiDialogueOptionsString: string = await this.aiService.processPrompt(
            prompt,
            aiProvider,
            aiConfig.useCases.generatePlayerDialogueDirections,
        );
        try {
            const aiDialogueOptions: DialogueDirectionEnum[] = JSON.parse(aiDialogueOptionsString) as DialogueDirectionEnum[];
            return aiDialogueOptions;
        } catch (error) {
            throw new Error(`[DialogueService - generatePlayerDialogueDirections] Failed to parse ai generated outcome: ${error}; outcomeString: ${aiDialogueOptionsString}`);
        }
    }

    public async generatePlayerDialogueOptions(
        dialogueId: string,
        dialogueDirection: DialogueDirectionEnum,
        quantity = 5,
    ): Promise<DialogueOption[]> {
        // extract data from dialogue state
        const dialogueState: DialogueState = await this.getDialogueState(dialogueId);
        const playerCharacter: CharacterProfile | undefined = dialogueState.dialogueParticipants.find((participant) => participant.id === dialogueState.playerCharacterId);
        if (!playerCharacter) throw new Error(`Player character not found for id ${dialogueState.playerCharacterId}`);
        const aiCharacters: CharacterProfile[] = dialogueState.dialogueParticipants.filter((participant) => participant.id !== dialogueState.playerCharacterId);
        if (aiCharacters.length === 0) throw new Error('No AI characters found');
        const dialogueHistory: DialogueHistory = dialogueState.dialogueHistory;
        const knowledgeBase: KnowledgeBase = dialogueState.knowledgeBase;
        const worldContext: WorldContext = dialogueState.worldContext;

        const prompt: string = this.promptService.assembleGeneratePlayerDialogueOptionsPrompt(
            dialogueDirection,
            playerCharacter,
            aiCharacters,
            dialogueHistory,
            knowledgeBase,
            worldContext,
            quantity,
        );
        const aiProvider: AiProviderImplementationEnum = aiConfig.useCases.generatePlayerDialogueOptions.aiProvider;
        const options = AiRequestOptionsV1.build({
            model: aiConfig.useCases.generatePlayerDialogueOptions.aiModel,
            maxTokens: aiConfig.useCases.generatePlayerDialogueOptions.maxTokens,
            temperature: aiConfig.useCases.generatePlayerDialogueOptions.temperature,
        });
        const aiDialogueOptionsString: string = await this.aiService.processPrompt(aiProvider, prompt, options);
        try {
            const aiDialogueOptionsRaw: any[] = JSON.parse(aiDialogueOptionsString);
            const aiDialogueOptions: DialogueOption[] = aiDialogueOptionsRaw.map((option: any) => DialogueOption.build(option));
            return aiDialogueOptions;
        } catch (error) {
            throw new Error(`[DialogueService - generatePlayerDialogueOptions] Failed to parse ai generated outcome: ${error}; aiDialogueOptionsString: ${aiDialogueOptionsString}`);
        }
    }

    private addDialogueHistoryEntry(
        topicName: string,
        entry: DialoguePlayerResponseOption | StepOutcome,
        dialogueState: DialogueState,
    ): DialogueHistoryTopic {
        // manage topics
        let currentTopic: DialogueHistoryTopic
        const latestTopic: DialogueHistoryTopic | undefined = dialogueState.dialogueHistory.topicsNewestToOldest[0];
        const isNeedToChangeTopic: boolean = topicName !== latestTopic?.topicName;
        if (isNeedToChangeTopic) {
            currentTopic = DialogueHistoryTopic.build({
                name: topicName,
                entriesNewestToOldest: []
            })
            dialogueState.dialogueHistory.topicsNewestToOldest.unshift(currentTopic);
        } else {
            currentTopic = latestTopic;
        }
        if (!currentTopic.entriesNewestToOldest) currentTopic.entriesNewestToOldest = [];
        currentTopic.entriesNewestToOldest.unshift(entry);
        return currentTopic
    }

    public async progressDialogue(
        dialogueId: string,
        selectedPlayerDialogueOption: DialoguePlayerResponseOption,
        onChunkReceived: (chunk: any) => void,
        diceScale: DiceScaleConfig = D20_SCALE_CONFIG,
    ): Promise<{ requestId: string, fullResponse: string, outcome: AiResponseOutcome }> {
        this.logger.debug(`Processing message for dialogue id: ${dialogueId}`);

        const dialogueState: DialogueState = await this.getDialogueState(dialogueId);

        const playerCharacter: CharacterProfile | undefined = dialogueState.dialogueParticipants.find((participant) => participant.id === dialogueState.playerCharacterId);
        if (!playerCharacter) throw new Error(`Player character not found for id ${dialogueState.playerCharacterId}`);

        const playerHistoryEntry: DialogueHistoryEntry = DialogueHistoryEntry.build({
            dialogueParticipantId: playerCharacter.id,
            text: JSON.stringify(selectedPlayerDialogueOption),
        });

        const aiProvider: AiProviderImplementationEnum = dialogueState.aiProvider;

        this.addDialogueHistoryEntry(
            selectedPlayerDialogueOption.topic,
            playerHistoryEntry,
            dialogueState,
        );

        // roll dice
        const playerResponseDiceResult: DiceThrowResult = rollDice(
            diceScale,
            selectedPlayerDialogueOption.riskImpact,
        );

        const { selectedAiDialogueOption, allAiDialogueOptions } = await this.getAiDialogueDirectionDecision(
            playerCharacter.id,
            selectedPlayerDialogueOption,
            playerResponseDiceResult,
            dialogueState,
        );

        // assemble progress dialogue prompt
        const prompt = this.promptService.assembleProgressDialoguePrompt(
            playerCharacter.id,
            selectedPlayerDialogueOption,
            selectedAiDialogueOption,
            playerResponseDiceResult,
            dialogueState.dialogueParticipants,
            dialogueState.dialogueHistory,
            dialogueState.knowledgeBase,
            dialogueState.worldContext,
        );

        // get the stream
        const { requestId, dialoguePromise } = this.streamDialogue(
            prompt,
            aiProvider,
            aiConfig.useCases.progressDialogue,
            onChunkReceived,
        );

        // wait until the stream is complete and get the full response for analysis and storage
        const { fullResponse } = await dialoguePromise;

        // analyze the response for outcomes
        const aiHistoryEntry: DialogueHistoryEntry = DialogueHistoryEntry.build({
            dialogueParticipantId: playerCharacter.id,
            text: JSON.stringify(selectedAiDialogueOption),
        });
        const outcome: StepOutcome = await this.analyzeDialogueStepForOutcome(fullResponse);

        currentTopic.exchangesNewestToOldest?.push(aiHistoryEntry);

        // save the state
        await this.dialogueStateService.cacheState(dialogueId, CacheKeyEnum.DIALOGUE_STATE, dialogueState);

        return { requestId, fullResponse, outcome };
    }


    async getAiDialogueDirectionDecision(
        playerCharacterId: string,
        selectedPlayerDialogueOption: DialoguePlayerResponseOption,
        playerResponseDiceResult: DiceThrowResult,
        dialogueState: DialogueState,
        quantityOptionsConsidered = 10,
    ): Promise<{ selectedAiDialogueOption: AiDialogueOption, allAiDialogueOptions: AiDialogueOption[] }> {
        const prompt: string = this.promptService.assembleGetAiDialogueDirectionDecisionPrompt(
            playerCharacterId,
            selectedPlayerDialogueOption,
            playerResponseDiceResult,
            dialogueState.dialogueParticipants,
            dialogueState.dialogueHistory,
            dialogueState.knowledgeBase,
            dialogueState.worldContext,
            quantityOptionsConsidered,
        );
        console.log(`[DialogueService - getAiDialogueDirectionDecision] Prompt: ${prompt}`);
        const aiDialogueOptionsString: string = await this.aiService.processPrompt(
            prompt,
            aiConfig.useCases.getAiDialogueDirectionDecision,
        );
        console.log(`[DialogueService - getAiDialogueDirectionDecision] AiDialogueOptionsString: ${aiDialogueOptionsString}`);
        try {
            const aiDialogueOptions: AiDialogueOption[] = JSON.parse(aiDialogueOptionsString) as AiDialogueOption[];
            const selectedAiDialogueOption: AiDialogueOption = AiDialogueOption.selectOptionByProbability(aiDialogueOptions);
            console.log(`[DialogueService - getAiDialogueDirectionDecision] SelectedAiDialogueOption: ${JSON.stringify(selectedAiDialogueOption)}`);
            return {
                selectedAiDialogueOption,
                allAiDialogueOptions: aiDialogueOptions,
            };
        } catch (error) {
            throw new Error(`[DialogueService - getAiDialogueDirectionDecision] Failed to parse ai generated outcome: ${error}; outcomeString: ${aiDialogueOptionsString}`);
        }
    }


    private async analyzeDialogueStepForOutcome(
        fullResponse: string,
    ): Promise<StepOutcome> {

        const outcome = StepOutcome.build({
            actionsTaken,
            aiUnfulfilledGoalsFulfilled: goalsFulfilled,
        });
        return outcome;
    }

    private async summarizeTopic(topic: DialogueHistoryTopic): Promise<DialogueHistoryTopic> {
        const prompt: string = this.promptService.assembleSummarizeTopicPrompt(topic)
        const aiProvider = aiConfig.summarizeTopic.aiProvider;
        const options = AiRequestOptionsV1.build({
            model: aiConfig.summarizeTopic.aiModel,
            maxTokens: aiConfig.summarizeTopic.maxTokens,
            temperature: aiConfig.summarizeTopic.temperature,
        });

        const summarizeResponse: string = await this.aiService.processPrompt(
            aiProvider,
            prompt,
            options,
        );
        // erase actual exchanges and instead set a summary
        topic.summary = summarizeResponse
        return topic
    }

    private async summarizeDialogue(dialogueState: DialogueState): Promise<string> {
        const prompt: string = this.promptService.assembleSummarizeDialoguePrompt(dialogueState.dialogueHistory);
        const aiProvider = aiConfig.summarizeDialogue.aiProvider;
        const options = AiRequestOptionsV1.build({
            model: aiConfig.summarizeDialogue.aiModel,
            maxTokens: aiConfig.summarizeDialogue.maxTokens,
            temperature: aiConfig.summarizeDialogue.temperature,
        });
        const summary: string = await this.aiService.processPrompt(aiProvider, prompt, options);
        return summary;
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

        const summary: string = await this.summarizeDialogue(dialogueState);

        await this.dialogueStateService.removeState(dialogueId);

        return {
            success: true,
            summary: '',
            revealedInformation: [] as RevealedInformationDTO[],
            updatedParticipants: []
        };
    }
}
