import { Inject, Injectable, Logger } from '@nestjs/common';
import { v4 as uuidv4 } from 'uuid';
// services
import { ContentService } from './content/content.service';
import { AiService } from './ai/ai.service';
import { PromptService } from './prompt/prompt.service';
// data classes
import { Context } from './content/class/Context';
import { DialogueState } from '../../class/DialogueState';
import { CacheKeyEnum, DialogueStateService } from './dialogueState/dialogueState.service';
import { KnowledgeBase } from '../../class/KnowledgeBase';
import { WorldContext } from '../../class/WorldContext';
import { CharacterProfile } from '../../class/CharacterProfile';
import { DialogueHistoryTopic } from '../../class/DialogueHistory/DialogueHistoryTopic';
import { DialogueHistory } from '../../class/DialogueHistory';
import { aiConfig, AiUseCaseConfig } from '../../config/aiConfig';
import { StepOutcome } from '../../class/DialogueHistory/DialogueStep/StepOutcome';
import { DialogueOption } from '../../class/DialogueOption';
import { DialogueStep } from '../../class/DialogueHistory/DialogueStep';
import { PlayerCharacterStep } from '../../class/DialogueHistory/DialogueStep/PlayerCharacterStep';
import { AiCharacterStep } from '../../class/DialogueHistory/DialogueStep/AiCharacterStep';
import { ChanceDialogueOption } from '../../class/DialogueOption/ChanceDialogueOption';
// enums
import { DialogueDirectionEnum } from '../../enum/DialogueDirectionEnum';
import { DialogueStepOutcomeEnum } from '../../enum/DialogueStepOutcomeEnum';
// DND
import { rollDice } from '../../dnd/rollDice';
import { DiceRollResult } from '../../dnd/class/DiceRollResult';
import { DiceScaleConfig } from '../../dnd/types';
import { SCALE_CONFIGS } from '../../dnd/scales';
import { AiServiceEnum } from '../../enum/AiServiceEnum';
import { ScaleTypeEnum } from '../../dnd/enum/ScaleTypeEnum';
import { AiResponse } from '../../proto/ai_service_common';


const defaultConsideredAiCharacterOptionsQuantity = 10; // this is the number of options that the AI will consider when generating dialogue options
const defaultOfferedPlayerDirectionsQuantity = 5; // this is the number of directions that the player will be offered when generating dialogue options
const defaultOfferedPlayerOptionsVariations = 3; // this is the number of variations that the player will be offered for each direction


// TODO I dont need an interrupt gRPC call, instead I will do it via the open websocket connection


export interface IDialogueService {
    initializeDialogue(
        initiatingParticipantId: string,
        playerCharacterId: string,
        aiProvider: AiServiceEnum,
        dialogueParticipants: CharacterProfile[],
        worldContext: WorldContext,
        dialogueHistory: DialogueHistory,
        knowledgeBase: KnowledgeBase,
        context: Context,
    ): Promise<{ dialogueId: string }>;
    progressDialogue(
        dialogueId: string,
        selectedPlayerDialogueOption: DialogueOption,
        onChunkReceived: (chunk: any) => void,
        scaleType: ScaleTypeEnum,
    ): Promise<{ requestId: string, dialogueStep: DialogueStep }>;
    generatePlayerDialogueOptions(
        dialogueId: string,
        directionsQuantity: number,
        variations: number,
        scaleType?: ScaleTypeEnum,
    ): Promise<DialogueOption[]>;
    interrupt(requestId: string, provider: AiServiceEnum): Promise<void>;
    finalizeDialogue(dialogueId: string): Promise<{ summary: string, dialogueParticipants: CharacterProfile[], worldContext: WorldContext, dialogueHistory: DialogueHistory }>;
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
        options: AiUseCaseConfig,
        onChunkReceived: (chunk: any) => void,
    ): { requestId: string, dialoguePromise: Promise<{ fullResponse: string }> } {

        const { requestId, stream } = this.aiService.streamProcessPrompt(
            prompt,
            options
        );

        const dialoguePromise: Promise<{ fullResponse: string }> = new Promise((resolve, reject) => {
            let fullResponse: string = "";
            stream.subscribe({
                next: (chunk: AiResponse) => {
                    if (chunk.errorMessage) {
                        reject(new Error(chunk.errorMessage));
                        return;
                    }
                    fullResponse += chunk.output;
                    onChunkReceived(chunk);
                },
                error: (err: any) => {
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

    private getPlayerAndAiCharacters(
        playerCharacterId: string,
        dialogueParticipants: CharacterProfile[],
    ): { playerCharacter: CharacterProfile, aiCharacters: CharacterProfile[] } {
        const playerCharacter: CharacterProfile | undefined = dialogueParticipants.find((participant) => participant.id === playerCharacterId);
        if (!playerCharacter) throw new Error(`Player character not found for id ${playerCharacterId}`);
        const aiCharacters: CharacterProfile[] = dialogueParticipants.filter((participant) => participant.id !== playerCharacterId);
        if (aiCharacters.length === 0) throw new Error('No AI characters found');
        if (aiCharacters.length > 1) throw new Error('More than one AI character found, and it is not supported yet. Sorry.');
        return { playerCharacter, aiCharacters };
    }




    public async initializeDialogue(
        initiatingParticipantId: string,
        playerCharacterId: string,
        aiProvider: AiServiceEnum,
        dialogueParticipants: CharacterProfile[],
        worldContext: WorldContext,
        dialogueHistory: DialogueHistory,
        knowledgeBase: KnowledgeBase,
        context?: Context,
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
            knowledgeBase,
            context
        })
        await this.dialogueStateService.cacheState(dialogueId, CacheKeyEnum.DIALOGUE_STATE, dialogueState);

        return { dialogueId };
    }




    public async generatePlayerDialogueOptions(
        dialogueId: string,
        directionsQuantity = defaultOfferedPlayerDirectionsQuantity,
        variations = defaultOfferedPlayerOptionsVariations,
        scaleType: ScaleTypeEnum,
    ): Promise<DialogueOption[]> {
        // extract data from dialogue state
        const dialogueState: DialogueState = await this.getDialogueState(dialogueId);
        const { playerCharacter, aiCharacters } = this.getPlayerAndAiCharacters(dialogueState.playerCharacterId, dialogueState.dialogueParticipants);

        const mandatoryDirections: DialogueDirectionEnum[] | null = null;
        const allowedDirections: DialogueDirectionEnum[] | null = null;

        const scaleConfig: DiceScaleConfig = SCALE_CONFIGS[scaleType];

        const prompt: string = this.promptService.assembleGeneratePlayerDialogueOptionsPrompt(
            scaleConfig,
            playerCharacter,
            aiCharacters,
            dialogueState.dialogueHistory,
            dialogueState.knowledgeBase,
            dialogueState.worldContext,
            directionsQuantity,
            variations,
            mandatoryDirections,
            allowedDirections,
        );
        const aiDialogueOptionsString: string = await this.aiService.processPrompt(
            prompt,
            aiConfig.useCases.generatePlayerDialogueOptions,
        );
        try {
            const aiDialogueOptionsRaw: any[] = JSON.parse(aiDialogueOptionsString);
            const aiDialogueOptions: DialogueOption[] = aiDialogueOptionsRaw.map((option: any) => DialogueOption.build(option));
            return aiDialogueOptions;
        } catch (error) {
            throw new Error(`[DialogueService - generatePlayerDialogueOptions] Failed to parse ai generated outcome: ${error}; aiDialogueOptionsString: ${aiDialogueOptionsString}`);
        }
    }




    public async progressDialogue(
        dialogueId: string,
        selectedPlayerDialogueOption: DialogueOption,
        onChunkReceived: (chunk: any) => void,
        scaleType: ScaleTypeEnum,
    ): Promise<{ requestId: string, dialogueStep: DialogueStep }> {
        this.logger.debug(`Processing message for dialogue id: ${dialogueId}`);

        const dialogueState: DialogueState = await this.getDialogueState(dialogueId);
        const { playerCharacter, aiCharacters } = this.getPlayerAndAiCharacters(dialogueState.playerCharacterId, dialogueState.dialogueParticipants);
        const aiCharacter: CharacterProfile = aiCharacters[0];

        const scaleConfig: DiceScaleConfig = SCALE_CONFIGS[scaleType];

        //  PLAYER STEP
        // roll dice for player step
        const playerResponseDiceResult: DiceRollResult = rollDice(scaleConfig, selectedPlayerDialogueOption.riskImpact);
        // build player step
        const playerStep: PlayerCharacterStep = PlayerCharacterStep.build({
            characterId: playerCharacter.id,
            selectedDialogueOption: selectedPlayerDialogueOption,
            diceRollResult: playerResponseDiceResult,
        });


        // AI STEP
        // get ai dialogue direction decision
        const { selectedAiDialogueOption } = await this.getAiDialogueOptionDecision(
            playerStep,
            dialogueState,
        );
        // roll dice for ai step
        const aiResponseDiceResult: DiceRollResult = rollDice(scaleConfig, selectedAiDialogueOption.option.riskImpact);
        // build ai step
        const aiStep: AiCharacterStep = AiCharacterStep.build({
            characterId: aiCharacter.id,
            selectedDialogueOption: selectedAiDialogueOption.option,
            diceRollResult: aiResponseDiceResult,
        });


        // DIALOGUE STEP ANALYSIS
        // analyze the step for outcomes
        const outcome: StepOutcome = await this.analyzeDialogueStepForOutcome(playerStep, aiStep, dialogueState,
        );

        // build dialogue step
        const dialogueStep: DialogueStep = DialogueStep.build({ playerStep, aiStep, outcome: outcome, narration: '' });


        // STREAM THE NARRATION
        // assemble progress dialogue prompt
        const prompt = this.promptService.assembleProgressDialoguePrompt(
            dialogueStep,
            playerCharacter,
            dialogueState.dialogueParticipants,
            dialogueState.dialogueHistory,
            dialogueState.knowledgeBase,
            dialogueState.worldContext,
        );
        // get the stream
        const { requestId, dialoguePromise } = this.streamDialogue(
            prompt,
            aiConfig.useCases.progressDialogue,
            onChunkReceived,
        );
        // wait until the stream is complete and get the full response for analysis and storage
        const { fullResponse } = await dialoguePromise;
        dialogueStep.narration = fullResponse;

        // TOPIC HANDLING
        // introduce a new topic if the outcome is TOPIC_CHANGED
        if (outcome.stepOutcome === DialogueStepOutcomeEnum.TOPIC_CHANGED) {
            // add the new topic to the dialogue history
            if (!outcome.newTopicName) throw new Error('New topic name is required when outcome is TOPIC_CHANGED - this is clearly an issue with the response AI generated, as it is a parsed AI result');
            const newTopic: DialogueHistoryTopic = DialogueHistoryTopic.build({
                topic: outcome.newTopicName,
                stepsNewestToOldest: [],
            });
            dialogueState.dialogueHistory.topicsNewestToOldest.unshift(newTopic);
        }
        // add the dialogue step to the latest topic
        const latestTopic: DialogueHistoryTopic | undefined = dialogueState.dialogueHistory.topicsNewestToOldest[0];
        if (!latestTopic) throw new Error('No topic found');
        latestTopic.stepsNewestToOldest?.unshift(dialogueStep);


        // STATE HANDLING
        // save the state
        await this.dialogueStateService.cacheState(dialogueId, CacheKeyEnum.DIALOGUE_STATE, dialogueState);


        // DIALOGUE ENDING IF NEEDED
        // if the outcome is DIALOGUE_ENDED, finalize the dialogue
        if (outcome.stepOutcome === DialogueStepOutcomeEnum.DIALOGUE_ENDED) {
            await this.finalizeDialogue(dialogueId);
        }

        return { requestId, dialogueStep };
    }




    async getAiDialogueOptionDecision(
        playerStep: PlayerCharacterStep,
        dialogueState: DialogueState,
        quantity = defaultConsideredAiCharacterOptionsQuantity,
    ): Promise<{ selectedAiDialogueOption: ChanceDialogueOption, allAiDialogueOptions: ChanceDialogueOption[] }> {
        const { playerCharacter, aiCharacters } = this.getPlayerAndAiCharacters(dialogueState.playerCharacterId, dialogueState.dialogueParticipants);

        const prompt: string = this.promptService.assembleGetAiDialogueOptionsPrompt(
            playerCharacter,
            aiCharacters,
            playerStep,
            dialogueState.dialogueHistory,
            dialogueState.knowledgeBase,
            dialogueState.worldContext,
            quantity,
        );
        console.log(`[DialogueService - getAiDialogueDirectionDecision] Prompt: ${prompt}`);
        const aiDialogueOptionsString: string = await this.aiService.processPrompt(
            prompt,
            aiConfig.useCases.getAiDialogueOptions,
        );
        console.log(`[DialogueService - getAiDialogueDirectionDecision] AiDialogueOptionsString: ${aiDialogueOptionsString}`);
        try {
            const aiDialogueOptionsRaw: any[] = JSON.parse(aiDialogueOptionsString);
            const aiDialogueOptions: ChanceDialogueOption[] = aiDialogueOptionsRaw.map((option: any) => ChanceDialogueOption.build(option));
            const selectedAiDialogueOption: ChanceDialogueOption = ChanceDialogueOption.selectOptionByProbability(aiDialogueOptions);
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
        playerStep: PlayerCharacterStep,
        aiStep: AiCharacterStep,
        dialogueState: DialogueState,
    ): Promise<StepOutcome> {
        const prompt = this.promptService.assembleAnalyzeDialogueStepForOutcomePrompt(
            playerStep,
            aiStep,
            dialogueState.dialogueHistory,
            dialogueState.knowledgeBase,
            dialogueState.worldContext,
            dialogueState.dialogueParticipants,
        );
        const outcomeString: string = await this.aiService.processPrompt(
            prompt,
            aiConfig.useCases.analyzeDialogueStepForOutcome,
        );
        try {
            const outcomeRaw: any = JSON.parse(outcomeString);
            const outcome: StepOutcome = StepOutcome.build(outcomeRaw);
            return outcome;
        } catch (error) {
            throw new Error(`[DialogueService - analyzeDialogueStepForOutcome] Failed to parse ai generated outcome: ${error}; outcomeString: ${outcomeString}`);
        }
    }




    private async summarizeDialogue(dialogueState: DialogueState): Promise<string> {
        const prompt: string = this.promptService.assembleSummarizeDialoguePrompt(dialogueState.dialogueHistory);
        const summary: string = await this.aiService.processPrompt(
            prompt,
            aiConfig.useCases.summarizeDialogue,
        );
        return summary;
    }




    public async interrupt(requestId: string, provider: AiServiceEnum): Promise<void> {
        this.logger.debug(`Interrupting dialogue id: ${requestId}`);
        await this.aiService.interrupt(requestId, provider);
        // TODO: decide what to do with an interrupted response - I don't store chunks on the state, so I would simply treat this as if nothing even happened and reset to the situation prior to launching the stream?
    }




    public async finalizeDialogue(
        dialogueId: string,
    ): Promise<{ summary: string, dialogueParticipants: CharacterProfile[], worldContext: WorldContext, dialogueHistory: DialogueHistory }> {
        this.logger.debug(`Ending dialogue id: ${dialogueId}`);

        const dialogueState: DialogueState = await this.getDialogueState(dialogueId);

        const summary: string = await this.summarizeDialogue(dialogueState);
        console.log(`[DialogueService - finalizeDialogue] Summary: ${summary}`);

        await this.dialogueStateService.removeState(dialogueId);

        // TODO Get all dialogue data as of the end of the dialogue, and emit an event into a queue so that a worker could process it and store the outcomes in the content database

        // return modified data to the client
        return {
            summary,
            dialogueParticipants: dialogueState.dialogueParticipants,
            worldContext: dialogueState.worldContext,
            dialogueHistory: dialogueState.dialogueHistory,
        }
    }
}