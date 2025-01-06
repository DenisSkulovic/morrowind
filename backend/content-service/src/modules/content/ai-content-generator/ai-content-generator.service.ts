import { Injectable, Inject, Logger } from '@nestjs/common';
import { ClientGrpc } from '@nestjs/microservices';
import { Observable, catchError, firstValueFrom, map } from 'rxjs';

interface InterruptRequest {
    requestId: string;
}

interface InterruptResponse {
    requestId: string;
    success: boolean;
}

interface CheckStatusRequest {
    requestId: string;
}

interface CheckStatusResponse {
    requestId: string;
    status: string;
}

interface AiRequest {
    requestId: string;
    prompt: string;
    metadata?: {
        timestamp: number;
        useCase: string;
        context: string;
    };
    options?: {
        model: string;
        temperature: string;
        maxTokens: string;
        timeout: number;
    };
}

interface AiResponse {
    requestId: string;
    success: boolean;
    status: string;
    output: string;
    errorMessage?: string;
    metadata?: {
        timestamp: number;
        useCase: string;
        context: string;
    };
    isLast: boolean;
    chunkId?: number;
}

export interface IAiService {
    processRequest(request: AiRequest): Promise<AiResponse>;
    streamProcessRequest(request: AiRequest): Observable<AiResponse>;
    interrupt(request: InterruptRequest): Promise<InterruptResponse>;
    checkStatus(request: CheckStatusRequest): Promise<CheckStatusResponse>;
}

@Injectable()
export class AiContentGeneratorService {
    private readonly logger = new Logger(AiContentGeneratorService.name);
    private aiService!: IAiService;

    constructor(
        @Inject('AI_SERVICE') private readonly aiServiceClient: ClientGrpc
    ) { }

    onModuleInit() {
        this.aiService = this.aiServiceClient.getService<IAiService>('AiServiceOpenAIv1');
    }

    private async processAiRequest(prompt: string, metadata: any = {}, options: any = {}): Promise<AiResponse> {
        try {
            const aiRequest: AiRequest = {
                requestId: `content-${Date.now()}`,
                prompt,
                metadata: {
                    timestamp: Date.now(),
                    useCase: metadata.useCase || 'content_generation',
                    context: metadata.context || ''
                },
                options: {
                    model: options.model || 'gpt-4',
                    temperature: options.temperature || '0.7',
                    maxTokens: options.maxTokens || '2000',
                    timeout: options.timeout || 30
                }
            };

            const response = this.aiService.processRequest(aiRequest);
            return firstValueFrom(response);
        } catch (error) {
            this.logger.error(`Error processing AI request: ${error instanceof Error ? error.message : 'Unknown error'}`);
            throw error;
        }
    }

    async generateContent(request: {
        contentType: string;
        parameters: any;
        requestId: string;
    }): Promise<any> {
        this.logger.debug(`Generating content with request: ${JSON.stringify(request)}`);

        try {
            const response = await this.processAiRequest(
                this.buildPrompt(request.contentType, request.parameters),
                {
                    useCase: 'content_generation',
                    context: request.contentType
                }
            );

            if (!response.success) {
                throw new Error(response.errorMessage || 'Content generation failed');
            }

            return {
                success: true,
                content: JSON.parse(response.output),
                requestId: response.requestId
            };
        } catch (error) {
            const errorMessage = error instanceof Error ? error.message : 'Unknown error';
            return {
                success: false,
                error: errorMessage,
                requestId: request.requestId
            };
        }
    }

    generateContentStream(request: {
        contentType: string;
        parameters: any;
        requestId: string;
    }): Observable<any> {
        this.logger.debug(`Generating content stream with request: ${JSON.stringify(request)}`);

        try {
            // Create the AI service request
            const aiRequest = {
                requestId: request.requestId,
                prompt: this.buildPrompt(request.contentType, request.parameters),
                metadata: {
                    timestamp: Date.now(),
                    useCase: 'content_generation',
                    context: request.contentType
                },
                options: {
                    model: 'gpt-4',
                    temperature: 0.7,
                    maxTokens: 2000,
                    stream: true // Enable streaming response
                }
            };

            // Return the stream from AI service
            return this.aiService.streamProcessRequest(aiRequest).pipe(
                map(chunk => ({
                    content: chunk.content,
                    requestId: request.requestId,
                    timestamp: Date.now()
                })),
                catchError(error => {
                    this.logger.error(`Error in content stream: ${error instanceof Error ? error.message : 'Unknown error'}`);
                    throw error;
                })
            );
        } catch (error) {
            this.logger.error(`Error setting up content stream: ${error instanceof Error ? error.message : 'Unknown error'}`);
            throw error;
        }
    }

    private buildPrompt(contentType: string, parameters: any): string {
        return `Generate ${contentType} content with the following parameters: ${JSON.stringify(parameters)}`;
    }
}