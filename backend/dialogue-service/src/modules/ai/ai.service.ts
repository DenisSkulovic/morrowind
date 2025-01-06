import { Injectable, Inject, OnModuleInit } from '@nestjs/common';
import { ClientGrpc } from '@nestjs/microservices';
import { firstValueFrom, Observable } from 'rxjs';
import {
    AiRequest,
    AiResponse,
    InterruptRequest,
    InterruptResponse,
    CheckStatusRequest,
    CheckStatusResponse
} from '../../proto/ai_service_openai_v1';

export enum AiProviderImplementationEnum {
    OPENAI_V1 = 'openai_v1',
    CLAUDE_V1 = 'claude_v1',
}

// methods that exist on the service in each proto file for each ai provider (example: ai_service_openai_v1.proto). Each provider implementation proto should follow the same interface
interface IAiGRPCService {
    processRequest(request: any): Promise<any>;
    streamProcessRequest(request: any): Observable<any>;
    interrupt(request: any): Promise<any>;
    checkStatus(request: any): Promise<any>;
}

@Injectable()
export class AiService implements OnModuleInit {
    private aiServices: Map<AiProviderImplementationEnum, IAiGRPCService> = new Map();

    constructor(
        @Inject('AI_SERVICE_OPEN_AI_V1') private grpcOpenAiV1Client: ClientGrpc,
        // @Inject('AI_SERVICE_CLAUDE_V1') private grpcClaudeClient: ClientGrpc,
    ) { }

    onModuleInit() {
        this.aiServices.set(AiProviderImplementationEnum.OPENAI_V1, this.grpcOpenAiV1Client.getService<IAiGRPCService>('AiServiceOpenAIv1'));
        // this.aiServices.set( AiProvider.CLAUDE_V1, this.grpcClaudeClient.getService<IAiService>('AiServiceClaudeV1') );
    }

    private getService(provider: AiProviderImplementationEnum): IAiGRPCService {
        const service = this.aiServices.get(provider);
        if (!service) {
            throw new Error(`AI provider ${provider} not configured`);
        }
        return service;
    }

    async processRequest(request: AiRequest, provider: AiProviderImplementationEnum): Promise<AiResponse> {
        const service = this.getService(provider);
        const response = await service.processRequest(request);
        return firstValueFrom(response);
    }

    streamProcessRequest(request: AiRequest, provider: AiProviderImplementationEnum): Observable<any> {
        const service = this.getService(provider);
        return service.streamProcessRequest(request);
    }

    async interrupt(request: InterruptRequest, provider: AiProviderImplementationEnum): Promise<InterruptResponse> {
        const service = this.getService(provider);
        const response = await service.interrupt(request);
        return firstValueFrom(response);
    }

    async checkStatus(request: CheckStatusRequest, provider: AiProviderImplementationEnum): Promise<CheckStatusResponse> {
        const service = this.getService(provider);
        const response = await service.checkStatus(request);
        return firstValueFrom(response);
    }
}
