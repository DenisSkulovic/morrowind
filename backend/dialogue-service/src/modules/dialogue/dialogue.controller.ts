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
import { OnGatewayConnection, OnGatewayDisconnect, SubscribeMessage, WebSocketGateway, WebSocketServer } from '@nestjs/websockets';
import { Server, Socket } from 'socket.io';
import { Observable } from 'rxjs';

@Controller()
@WebSocketGateway({
    cors: {
        origin: "*"
    }
})
export class DialogueController implements OnGatewayConnection, OnGatewayDisconnect {
    @WebSocketServer()
    private server: Server;

    private readonly logger = new Logger(DialogueController.name);

    constructor(
        @Inject('IDialogueService') private readonly dialogueService: DialogueService,
    ) { }

    // Handle new WebSocket connections
    handleConnection(client: Socket) {
        console.log(`Client connected: ${client.id}`);
    }

    // Handle WebSocket disconnections
    handleDisconnect(client: Socket) {
        console.log(`Client disconnected: ${client.id}`);
    }

    @SubscribeMessage('startDialogue')
    public async handleStartDialogue(
        client: Socket,
        request: StartDialogueRequest
    ): Promise<StartDialogueResponse> {
        this.logger.debug(`Received gRPC request:
            Method: DialogueService.startDialogue
            Request: ${JSON.stringify(request)}
        `);

        await this.dialogueService.startDialogue(request, (chunk) => {
            client.emit('replyChunk', chunk); // Relay chunks to the client
        });

        client.emit('replyComplete', { message: 'Reply completed.' });
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

    @SubscribeMessage('sendMessage')
    public async sendMessage(
        client: Socket,
        request: SendMessageRequest
    ): Promise<MessageChunk> {
        this.logger.debug(`Received gRPC request:
            Method: DialogueService.sendMessage
            Request: ${JSON.stringify(request)}
        `);
        await this.dialogueService.sendMessage(request, (chunk) => {
            client.emit('replyChunk', chunk); // Relay chunks to the client
        });

        client.emit('replyComplete', { message: 'Reply completed.' });
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
