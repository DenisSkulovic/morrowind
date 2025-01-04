import { Controller, Inject, Logger } from '@nestjs/common';
import { GrpcMethod } from '@nestjs/microservices';
import { DialogueService } from './dialogue.service';
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
    EndDialogueResponse
} from '../../proto/dialogue';

@Controller()
export class DialogueController {
    private readonly logger = new Logger(DialogueController.name);

    constructor(
        @Inject('IDialogueService') private readonly dialogueService: DialogueService,
    ) { }

    @GrpcMethod('DialogueService', 'startDialogue')
    public async startDialogue(request: StartDialogueRequest): Promise<StartDialogueResponse> {
        this.logger.debug(`Received gRPC request:
            Method: DialogueService.startDialogue
            Request: ${JSON.stringify(request)}
        `);
        const response = await this.dialogueService.startDialogue(request);
        console.log('[DialogueController] StartDialogue response', response);
        return response;
    }

    @GrpcMethod('DialogueService', 'generateResponseOptions')
    public async generateResponseOptions(request: GenerateResponseOptionsRequest): Promise<GenerateResponseOptionsResponse> {
        this.logger.debug(`Received gRPC request:
            Method: DialogueService.generateResponseOptions
            Request: ${JSON.stringify(request)}
        `);
        const response = await this.dialogueService.generateResponseOptions(request);
        console.log('[DialogueController] GenerateResponseOptions response', response);
        return response;
    }

    @GrpcMethod('DialogueService', 'sendMessage')
    public async sendMessage(request: SendMessageRequest): Promise<MessageChunk> {
        this.logger.debug(`Received gRPC request:
            Method: DialogueService.sendMessage
            Request: ${JSON.stringify(request)}
        `);
        const response = await this.dialogueService.sendMessage(request);
        console.log('[DialogueController] SendMessage response', response);
        return response;
    }

    @GrpcMethod('DialogueService', 'interruptDialogue')
    public async interruptDialogue(request: InterruptDialogueRequest): Promise<InterruptDialogueResponse> {
        this.logger.debug(`Received gRPC request:
            Method: DialogueService.interruptDialogue
            Request: ${JSON.stringify(request)}
        `);
        const response = await this.dialogueService.interruptDialogue(request);
        console.log('[DialogueController] InterruptDialogue response', response);
        return response;
    }

    @GrpcMethod('DialogueService', 'endDialogue')
    public async endDialogue(request: EndDialogueRequest): Promise<EndDialogueResponse> {
        this.logger.debug(`Received gRPC request:
            Method: DialogueService.endDialogue
            Request: ${JSON.stringify(request)}
        `);
        const response = await this.dialogueService.endDialogue(request);
        console.log('[DialogueController] EndDialogue response', response);
        return response;
    }
}
