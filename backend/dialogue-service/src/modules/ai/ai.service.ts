import { Injectable, Inject, OnModuleInit } from '@nestjs/common';
import { ClientGrpc } from '@nestjs/microservices';
import { Observable } from 'rxjs';
import {
    AiRequestV1,
    AiResponseV1,
    CheckStatusResponse,
} from '../../proto/ai_service_common';
import { AiRequestMetadataV1 } from '../../class/AiRequestMetadataV1';
import { v4 as uuidv4 } from 'uuid';
import { AiTaskStatusEnum } from '../../enum/AiTaskStatusEnum';
import { deserializeEnum } from '../../common/enum/util';
import { encoding_for_model, TiktokenModel } from 'tiktoken';
import { modelMaxTokensConfig } from './modelMaxTokensConfig';
import { AiUseCaseConfig } from '../../config/aiConfig';

export enum AiProviderImplementationEnum {
    OPENAI_V1 = 'openai_v1',
    CLAUDE_V1 = 'claude_v1',
}



interface IAiGRPCService {
    processPrompt(request: any): Promise<any>;
    streamProcessPrompt(request: any): Observable<any>;
    interrupt(request: any): Promise<any>;
    checkStatus(request: any): Promise<any>;
}

interface IAiService {
    processPrompt(
        prompt: string,
        options: AiUseCaseConfig,
        throwOnExceed?: boolean,
        customMaxTokens?: number,
    ): Promise<string>;
    streamProcessPrompt(
        prompt: string,
        options: AiUseCaseConfig,
    ): { requestId: string, stream: Observable<any> };
    interrupt(requestId: string, provider: AiProviderImplementationEnum): Promise<boolean>;
    checkStatus(requestId: string, provider: AiProviderImplementationEnum): Promise<AiTaskStatusEnum>;
}

@Injectable()
export class AiService implements IAiService, OnModuleInit {
    private aiServices: Map<AiProviderImplementationEnum, IAiGRPCService> = new Map();

    constructor(
        @Inject('AI_SERVICE_OPEN_AI_V1') private grpcOpenAiV1Client: ClientGrpc
    ) { }

    onModuleInit() {
        this.aiServices.set(AiProviderImplementationEnum.OPENAI_V1, this.grpcOpenAiV1Client.getService<IAiGRPCService>('AiServiceOpenAIv1'));
    }

    /**
     * Gets the AI service for a given provider.
     * @param provider - The AI provider implementation to use.
     * @returns The AI service for the given provider.
     */
    private _getService(provider: AiProviderImplementationEnum): IAiGRPCService {
        const service = this.aiServices.get(provider);
        if (!service) throw new Error(`[AiService - _getService] AI provider ${provider} not configured`);
        return service;
    }

    /**
     * Estimates the number of tokens in a prompt.
     * @param prompt - The prompt to estimate the tokens for.
     * @param model - The AI model to use.
     * @returns The number of tokens in the prompt.
     */
    private estimateTokens(
        prompt: string,
        model: TiktokenModel
    ): number {
        const encoding = encoding_for_model(model);
        return encoding.encode(prompt).length;
    }

    /**
     * Truncates the prompt if it exceeds the maximum token limit.
     * @param prompt - The prompt to truncate.
     * @param maxTokens - The maximum number of tokens to allow.
     * @param model - The AI model to use.
     * @returns The truncated prompt.
     */
    private truncatePrompt(
        prompt: string,
        maxTokens: number,
        model: TiktokenModel
    ): string {
        const encoding = encoding_for_model(model);
        const tokens = encoding.encode(prompt);
        const truncatedTokens = tokens.slice(0, maxTokens);
        return new TextDecoder().decode(encoding.decode(truncatedTokens));
    }

    /**
     * Truncates the prompt if it exceeds the maximum token limit.
     * @param aiModel - The AI model to use.
     * @param prompt - The prompt to truncate.
     * @param throwOnExceed - Whether to throw an error if the prompt exceeds the maximum token limit.
     * @param customMaxInputTokens - The custom maximum input tokens to use.
     * @returns The truncated prompt.
     */
    private truncatePromptIfNeeded(
        aiModel: TiktokenModel,
        prompt: string,
        throwOnExceed?: boolean,
        customMaxInputTokens?: number,
    ): string {
        // ensure custom max tokens does not exceed the model max tokens
        const modelMaxTokens: number = modelMaxTokensConfig[aiModel];
        let maxInputTokens: number;
        if (customMaxInputTokens && customMaxInputTokens <= modelMaxTokens) {
            maxInputTokens = customMaxInputTokens;
        } else {
            console.warn(`[AiService - processPrompt] Custom max tokens ${customMaxInputTokens} exceeds the model max tokens ${modelMaxTokens}. Using model max tokens instead.`);
            maxInputTokens = modelMaxTokens;
        }

        // ensure prompt does not exceed max token count
        const inputTokenCount: number = this.estimateTokens(prompt, aiModel);
        console.log(`[AiService - processPrompt] Token count: ${inputTokenCount}`);
        if (inputTokenCount > maxInputTokens) {
            if (throwOnExceed) throw new Error(`[AiService - processPrompt] Prompt exceeds the maximum token limit of ${maxInputTokens}. Current token count: ${inputTokenCount}`);
            console.warn(`[AiService - processPrompt] Prompt exceeds the maximum token limit of ${maxInputTokens}. Truncating the prompt. Current token count: ${inputTokenCount}`);
            return this.truncatePrompt(prompt, maxInputTokens, aiModel);
        }
        return prompt;
    }

    /**
     * Processes the prompt and returns the AI response.
     * @param provider - The AI provider implementation to use.
     * @param prompt - The prompt to send to the AI.
     * @param options - The options for the AI request.
     * @param throwOnExceed - Whether to throw an error if the prompt exceeds the maximum token limit.
     * @param customMaxInputTokens - The custom maximum input tokens to use.
     * @returns The AI response.
     */
    public async processPrompt(
        prompt: string,
        options: AiUseCaseConfig,
        throwOnExceed?: boolean,
        customMaxInputTokens?: number,
    ): Promise<string> {
        const service: IAiGRPCService = this._getService(options.aiProvider);
        const requestId: string = uuidv4();
        const metadata: AiRequestMetadataV1 = {
            timestamp: Date.now(),
            useCase: "DIALOGUE",
        };

        const truncatedPrompt: string = this.truncatePromptIfNeeded(options.aiModel, prompt, throwOnExceed, customMaxInputTokens);

        const request: AiRequestV1 = {
            requestId,
            prompt: truncatedPrompt,
            metadata,
            options,
        };

        const response: AiResponseV1 = await service.processPrompt(request);
        if (response.errorMessage) throw new Error(response.errorMessage);
        return response.output;
    }


    /**
     * Streams the AI response to the prompt.
     * @param provider - The AI provider implementation to use.
     * @param prompt - The prompt to send to the AI.
     * @param options - The options for the AI request.
     * @param throwOnExceed - Whether to throw an error if the prompt exceeds the maximum token limit.
     * @param customMaxInputTokens - The custom maximum input tokens to use.
     * @returns An object containing the requestId and the stream of the AI response.
     */
    public streamProcessPrompt(
        prompt: string,
        options: AiUseCaseConfig,
        throwOnExceed?: boolean,
        customMaxInputTokens?: number,
    ): {
        requestId: string,
        stream: Observable<any>
    } {
        const service: IAiGRPCService = this._getService(options.aiProvider);
        const requestId: string = uuidv4();
        const metadata: AiRequestMetadataV1 = {
            timestamp: Date.now(),
            useCase: "DIALOGUE",
        };

        const truncatedPrompt: string = this.truncatePromptIfNeeded(options.aiModel, prompt, throwOnExceed, customMaxInputTokens);

        const request: AiRequestV1 = {
            requestId,
            prompt,
            metadata,
            options
        };
        return {
            requestId,
            stream: service.streamProcessPrompt(request)
        };
    }


    /**
     * Interrupts the AI request.
     * @param provider - The AI provider implementation to use.
     * @param requestId - The requestId of the AI request to interrupt.
     * @returns Whether the request was interrupted successfully.
     */
    public async interrupt(
        requestId: string,
        provider: AiProviderImplementationEnum,
    ): Promise<boolean> {
        const service: IAiGRPCService = this._getService(provider);
        const request = { requestId };
        await service.interrupt(request);
        return true;
    }



    public async checkStatus(
        requestId: string,
        provider: AiProviderImplementationEnum,
    ): Promise<AiTaskStatusEnum> {
        const service: IAiGRPCService = this._getService(provider);
        const response: CheckStatusResponse = await service.checkStatus(requestId);
        return deserializeEnum(AiTaskStatusEnum, AiTaskStatusEnum, response.status);
    }
}
