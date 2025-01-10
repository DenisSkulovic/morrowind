import { DialogueServiceClient } from "../proto/DialogueServiceClientPb";
import { Context } from "../../class/Context";
import Serializer from "../../serialize/serializer";
import { ContextDTO } from "../proto/common_pb";
import {
    InitializeDialogueRequest,
    InitializeDialogueResponse,
    MessageChunk,
    GeneratePlayerDialogueOptionsRequest,
    GeneratePlayerDialogueOptionsResponse,
    FinalizeDialogueRequest,
    FinalizeDialogueResponse,
    ResponseSelectionDTO
} from "../../proto/dialogue_pb";
import { dialogueBackendURL } from "../../config";
import { io, Socket } from "socket.io-client";

export class DialogueService {
    private client: DialogueServiceClient;
    private socket: Socket;

    constructor() {
        this.client = new DialogueServiceClient(dialogueBackendURL);
        this.socket = io(dialogueBackendURL);
    }

    // gRPC method
    async initializeDialogue(initiatingParticipantId: string, dialogueParticipants: string[], context: Context): Promise<InitializeDialogueResponse> {
        const request = new InitializeDialogueRequest();
        request.setInitiatingparticipantid(initiatingParticipantId);
        request.setDialogueparticipantsList(dialogueParticipants);
        request.setInitialcontext(Serializer.toDTO(context, new ContextDTO()));

        return new Promise((resolve, reject) => {
            this.client.initializeDialogue(request, {}, (err, response) => {
                if (err) reject(err);
                else if (!response) reject(new Error('No response from server'));
                else resolve(response);
            });
        });
    }

    // gRPC method
    async generatePlayerDialogueOptions(dialogueId: string, directionsQuantity: number, context: any): Promise<GeneratePlayerDialogueOptionsResponse> {
        const request = new GeneratePlayerDialogueOptionsRequest();
        request.setDialogueid(dialogueId);
        request.setDirectionsquantity(directionsQuantity);
        request.setContext(context);

        return new Promise((resolve, reject) => {
            this.client.generatePlayerDialogueOptions(request, {}, (err, response) => {
                if (err) reject(err);
                else if (!response) reject(new Error('No response from server'));
                else resolve(response);
            });
        });
    }

    // WebSocket connection
    progressDialogue(dialogueId: string, responseSelection: ResponseSelectionDTO): Promise<MessageChunk[]> {
        const request = new ProgressDialogueRequest();
        request.setDialogueid(dialogueId);
        request.setResponseselection(responseSelection);

        return new Promise((resolve, reject) => {
            const chunks: MessageChunk[] = [];
            const stream = this.client.sendMessage(request, {});

            stream.on('data', (chunk: MessageChunk) => {
                chunks.push(chunk);
            });

            stream.on('end', () => {
                resolve(chunks);
            });

            stream.on('error', (err) => {
                reject(err);
            });
        });
    }

    // gRPC method
    async finalizeDialogue(dialogueId: string, context: Context): Promise<FinalizeDialogueResponse> {
        const request = new FinalizeDialogueRequest();
        request.setDialogueid(dialogueId);
        request.setContext(Serializer.toDTO(context, new ContextDTO()));

        return new Promise((resolve, reject) => {
            this.client.finalizeDialogue(request, {}, (err, response) => {
                if (err) reject(err);
                else if (!response) reject(new Error('No response from server'));
                else resolve(response);
            });
        });
    }
}
