import { Controller, Inject, Logger } from '@nestjs/common';
import { GrpcMethod } from '@nestjs/microservices';
import { DialogueService } from './dialogue.service';
import {
    InitializeDialogueRequest,
    InitializeDialogueResponse,
    GeneratePlayerDialogueOptionsRequest,
    GeneratePlayerDialogueOptionsResponse,
    InterruptDialogueRequest,
    InterruptDialogueResponse,
    FinalizeDialogueRequest,
    FinalizeDialogueResponse,
    CharacterProfileDTO,
    WorldContextDTO,
    DialogueHistoryDTO,
} from '../../proto/dialogue';
import { OnGatewayConnection, OnGatewayDisconnect, SubscribeMessage, WebSocketGateway, WebSocketServer } from '@nestjs/websockets';
import { Server, Socket } from 'socket.io';
import { DialogueHistory } from '../../class/DialogueHistory';
import { Context } from './content/class/Context';
import { KnowledgeBase } from '../../class/KnowledgeBase';
import { WorldContext } from '../../class/WorldContext';
import { CharacterProfile } from '../../class/CharacterProfile';
import { ProgressDialogueRequest } from '../../class/ProgressDialogueRequest';
import { AiServiceEnum } from '../../enum/AiServiceEnum';
import { DialogueOption } from '../../class/DialogueOption';
import { Serializer } from '../../common/serializer/serializer';
import { ScaleTypeEnum } from '../../dnd/enum/ScaleTypeEnum';

@Controller()
@WebSocketGateway({
    cors: {
        origin: "*"
    }
})
export class DialogueController implements OnGatewayConnection, OnGatewayDisconnect {

    @WebSocketServer()
    private server!: Server;

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




    @GrpcMethod('DialogueService', 'InitializeDialogue')
    public async initializeDialogue(
        request: InitializeDialogueRequest,
    ): Promise<InitializeDialogueResponse> {
        this.logger.debug(`
            Received gRPC request:
                Method: DialogueService.startDialogue
                Request: ${JSON.stringify(request)}
        `);
        // validate request
        if (!request.initiatingParticipantId) throw new Error('The request is missing the initiating participant ID.');
        if (!request.playerCharacterId) throw new Error('The request is missing the player character ID.');
        if (!request.aiProvider) throw new Error('The request is missing the AI provider.');
        if (!Object.values(AiServiceEnum).includes(request.aiProvider as any)) throw new Error(`The AI provider ${request.aiProvider} is not supported.`);
        if (!request.dialogueParticipants) throw new Error('The request is missing the dialogue participants.');
        if (!request.worldContext) throw new Error('The request is missing the world context.');
        if (!request.knowledgeBase) throw new Error('The request is missing the knowledge base.');

        // deserialize request
        const aiProvider: AiServiceEnum = request.aiProvider as AiServiceEnum; // can safely cast because we validated the enum in the request
        const dialogueParticipants: CharacterProfile[] = request.dialogueParticipants.arr.map((participant: any) => Serializer.fromDTO(participant, new CharacterProfile()));
        const worldContext: WorldContext = Serializer.fromDTO(request.worldContext, new WorldContext());
        const knowledgeBase: KnowledgeBase = Serializer.fromDTO(request.knowledgeBase, new KnowledgeBase());
        const context: Context = request.context ? Serializer.fromDTO(request.context, new Context()) : undefined;

        // initialize dialogue
        const { dialogueId } = await this.dialogueService.initializeDialogue(
            request.initiatingParticipantId,
            request.playerCharacterId,
            aiProvider,
            dialogueParticipants,
            worldContext,
            new DialogueHistory(),
            knowledgeBase,
            context,
        );

        return { dialogueId };
    }




    @GrpcMethod('DialogueService', 'GeneratePlayerDialogueOptions')
    public async generatePlayerDialogueOptions(
        request: GeneratePlayerDialogueOptionsRequest
    ): Promise<GeneratePlayerDialogueOptionsResponse> {
        this.logger.debug(`
            Received gRPC request:
                Method: DialogueService.generateResponseOptions
                Request: ${JSON.stringify(request)}
        `);
        if (!request.dialogueId) throw new Error('The request is missing the dialogue ID.');
        if (!request.scaleType) throw new Error('The request is missing the scale type.');
        if (!Object.values(ScaleTypeEnum).includes(request.scaleType as any)) throw new Error(`The scale type ${request.scaleType} is not supported.`);
        if (!request.directionsQuantity) throw new Error('The request is missing the directions quantity.');
        if (!request.variations) throw new Error('The request is missing the variations.');
        const dialogueId: string = request.dialogueId;
        const scaleType: ScaleTypeEnum = request.scaleType as ScaleTypeEnum; // can safely cast because we validated the enum in the request
        const directionsQuantity: number = request.directionsQuantity;
        const variations: number = request.variations;

        const dialogueOptions: DialogueOption[] = await this.dialogueService.generatePlayerDialogueOptions(
            dialogueId,
            directionsQuantity,
            variations,
            scaleType,
        );
        console.log('[DialogueController] GenerateResponseOptions response', dialogueOptions);
        return {
            dialogueOptions
        };
    }




    @SubscribeMessage('progressDialogue')
    public async progressDialogue(
        client: Socket,
        payload: any
    ): Promise<void> {
        this.logger.debug(`
            Received websocket request (progressDialogue):
                Payload: ${JSON.stringify(payload)}
        `);
        const request = ProgressDialogueRequest.build(payload);
        const dialogueId: string = request.dialogueId;
        await this.dialogueService.progressDialogue(
            dialogueId,
            request.selectedPlayerDialogueOption,
            (chunk) => client.emit('replyChunk', chunk), // Relay chunks to the client
        );
        client.emit('replyComplete', { message: 'Reply completed.' });
        client.disconnect();
    }



    @GrpcMethod('DialogueService', 'InterruptDialogue')
    public async interruptDialogue(request: InterruptDialogueRequest): Promise<InterruptDialogueResponse> {
        this.logger.debug(`
            Received gRPC request:
                Method: DialogueService.interruptDialogue
                Request: ${JSON.stringify(request)}
        `);
        if (!request.requestId) throw new Error('The request is missing the request ID.');
        if (!request.aiProvider) throw new Error('The request is missing the AI provider.');
        if (!Object.values(AiServiceEnum).includes(request.aiProvider as any)) throw new Error(`The AI provider ${request.aiProvider} is not supported.`);
        const provider: AiServiceEnum = request.aiProvider as AiServiceEnum; // can safely cast because we validated the enum in the request
        await this.dialogueService.interrupt(request.requestId, provider);
        return { requestId: request.requestId };
    }



    @GrpcMethod('DialogueService', 'FinalizeDialogue')
    public async finalizeDialogue(request: FinalizeDialogueRequest): Promise<FinalizeDialogueResponse> {
        this.logger.debug(`
            Received gRPC request:
                Method: DialogueService.finalizeDialogue
                Request: ${JSON.stringify(request)}
        `);
        const dialogueId = request.dialogueId;
        console.log('[DialogueController] FinalizeDialogue dialogueId', dialogueId);
        const { summary, dialogueParticipants, worldContext, dialogueHistory } = await this.dialogueService.finalizeDialogue(dialogueId);
        console.log('[DialogueController] FinalizeDialogue dialogueParticipants', dialogueParticipants);
        console.log('[DialogueController] FinalizeDialogue worldContext', worldContext);
        console.log('[DialogueController] FinalizeDialogue dialogueHistory', dialogueHistory);
        // serialize response
        const dialogueParticipantsDTO: CharacterProfileDTO[] = dialogueParticipants.map((participant: CharacterProfile) => Serializer.toDTO(participant));
        const worldContextDTO: WorldContextDTO = Serializer.toDTO(worldContext);
        const dialogueHistoryDTO: DialogueHistoryDTO = Serializer.toDTO(dialogueHistory);
        const response: FinalizeDialogueResponse = {
            dialogueId,
            summary,
            dialogueParticipants: dialogueParticipantsDTO,
            worldContext: worldContextDTO,
            dialogueHistory: dialogueHistoryDTO
        }
        console.log('[DialogueController] FinalizeDialogue response', response);
        return response;
    }



}
