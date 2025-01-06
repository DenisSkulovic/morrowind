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
import { DialoguePromptData } from '../../class/DialoguePromptData';
import { PromptService } from '../prompt/prompt.service';
import { DialogueState } from '../../class/DialogueState';
import { DialogueStateService } from '../dialogueState/dialogueState.service';



export interface IDialogueService {
    startDialogue(request: StartDialogueRequest, onChunkReceived: (chunk: any) => void): Promise<StartDialogueResponse>;
    generateResponseOptions(request: GenerateResponseOptionsRequest): Promise<GenerateResponseOptionsResponse>;
    sendMessage(request: SendMessageRequest, onChunkReceived: (chunk: any) => void): Promise<MessageChunk>;
    interruptDialogue(request: InterruptDialogueRequest): Promise<InterruptDialogueResponse>;
    endDialogue(request: EndDialogueRequest): Promise<EndDialogueResponse>;
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

    async streamDialogue(
        dialoguePromptData: DialoguePromptData,
        aiProvider: AiProviderImplementationEnum,
        options: {
            aiModel: string,
            temperature: string,
            maxTokens: string,
            timeout: number,
        },
        onChunkReceived: (chunk: any) => void,
    ): Promise<void> {
        const aiRequest: AiRequest = {
            requestId: "",
            prompt: JSON.stringify(dialoguePromptData),
            metadata: {
                timestamp: Date.now(),
                useCase: "DIALOGUE",
                context: "DIALOGUE"
            },
            options
        }
        const grpcStream: Observable<any> = this.aiService.streamProcessRequest(aiRequest, aiProvider);

        return new Promise((resolve, reject) => {
            grpcStream.subscribe({
                next: (chunk) => {
                    console.log('Received chunk from AI service:', chunk);
                    onChunkReceived(chunk);
                },
                error: (err) => {
                    console.error('Error from AI service:', err);
                    reject(err);
                },
                complete: () => {
                    console.log('AI service stream complete');
                    resolve();
                },
            });
        });
    }

    async startDialogue(
        request: StartDialogueRequest,
        onChunkReceived: (chunk: any) => void
    ): Promise<StartDialogueResponse> {
        this.logger.debug(`Starting dialogue with request: ${JSON.stringify(request)}`);

        const dialogueState = DialogueState.build({
            // TODO: Build dialogue state
        })
        await this.dialogueStateService.cacheState(request.sessionId, "DIALOGUE_STATE", dialogueState);

        const dialoguePromptData = await this.promptService.assembleDialoguePrompt(request.sessionId, dialogueState, "DIALOGUE", request.context);

        const aiProvider = AiProviderImplementationEnum.OPENAI_V1;
        const options = {
            aiModel: "gpt-4o",
            temperature: "0.5",
            maxTokens: "1000",
            timeout: 10000,
        };

        return this.streamDialogue(
            dialoguePromptData,
            aiProvider,
            options,
            onChunkReceived,
        );
    }

    async generateResponseOptions(request: GenerateResponseOptionsRequest): Promise<GenerateResponseOptionsResponse> {
        this.logger.debug(`Generating response options for session: ${request.sessionId}`);

        // TODO: Implement response options generation logic
        // TODO: Implement context-aware processing
        // TODO: Implement character personality influence

        return {
            // TODO: Return proper response structure
            responseOptions: [],
            updatedState: {} as DialogueStateDTO
        };
    }

    async sendMessage(
        request: SendMessageRequest,
        onChunkReceived: (chunk: any) => void
    ): Promise<MessageChunk> {
        this.logger.debug(`Processing message for session: ${request.sessionId}`);

        const dialogueState = await this.dialogueStateService.getState(request.sessionId);
        if (!dialogueState) throw new Error(`DialogueState not found for session ${request.sessionId}`);

        const dialoguePromptData = await this.promptService.assembleDialoguePrompt(request.sessionId, dialogueState, "DIALOGUE", request.context);

        const aiProvider = AiProviderImplementationEnum.OPENAI_V1;
        const options = {
            aiModel: "gpt-4o",
            temperature: "0.5",
            maxTokens: "1000",
            timeout: 10000,
        };

        return this.streamDialogue(
            dialoguePromptData,
            aiProvider,
            options,
            onChunkReceived,
        );
    }

    async interruptDialogue(request: InterruptDialogueRequest): Promise<InterruptDialogueResponse> {
        this.logger.debug(`Interrupting dialogue session: ${request.sessionId}`);

        const cachedState: DialogueState | null = await this.dialogueStateService.getState(request.sessionId);
        if (!cachedState) throw new Error(`DialogueState not found for session ${request.sessionId}`);

        // TODO: Implement dialogue interruption logic
        // TODO: Implement state cleanup

        // TODO: decide what to do with an interrupted dialogue - terminate it and treat as endDialogue? Or provide options to continue somehow?

        return {
            sessionId: request.sessionId
        };
    }

    async endDialogue(request: EndDialogueRequest): Promise<EndDialogueResponse> {
        this.logger.debug(`Ending dialogue session: ${request.sessionId}`);

        const cachedState: DialogueState | null = await this.dialogueStateService.getState(request.sessionId);

        // TODO: Implement dialogue conclusion logic
        // TODO: Implement final state processing
        // TODO: Implement dialogue summary generation

        await this.dialogueStateService.removeState(request.sessionId);

        return {
            success: true,
            summary: '',
            revealedInformation: [] as RevealedInformationDTO[],
            updatedParticipants: []
        };
    }
}
