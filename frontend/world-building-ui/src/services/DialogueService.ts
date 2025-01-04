import { DialogueServiceClient } from "../proto/DialogueServiceClientPb";
import { Context } from "../class/Context";
import Serializer from "../serialize/serializer";
import { ContextDTO } from "../proto/common_pb";
import {
    StartDialogueRequest,
    StartDialogueResponse,
    SendMessageRequest,
    MessageChunk,
    GenerateResponseOptionsRequest,
    GenerateResponseOptionsResponse,
    EndDialogueRequest,
    EndDialogueResponse,
    ResponseSelectionDTO
} from "../proto/dialogue_pb";
import { backendURL } from "../config";
import { io, Socket } from "socket.io-client";

export class DialogueService {
    private client: DialogueServiceClient;
    private socket: Socket;

    constructor() {
        this.client = new DialogueServiceClient(backendURL);
        this.socket = io(backendURL);
    }

    async startDialogue(initiatorCharacterId: string, targetCharacterIds: string[], context: Context): Promise<StartDialogueResponse> {
        const request = new StartDialogueRequest();
        request.setInitiatorcharacterid(initiatorCharacterId);
        request.setTargetcharacteridsList(targetCharacterIds);
        request.setInitialcontext(Serializer.toDTO(context, new ContextDTO()));

        return new Promise((resolve, reject) => {
            this.client.startDialogue(request, {}, (err, response) => {
                if (err) reject(err);
                else if (!response) reject(new Error('No response from server'));
                else resolve(response);
            });
        });
    }

    async generateResponseOptions(sessionId: string, playerGoal: any, context: any): Promise<GenerateResponseOptionsResponse> {
        const request = new GenerateResponseOptionsRequest();
        request.setSessionid(sessionId);
        request.setPlayergoal(playerGoal);
        request.setContext(context);

        return new Promise((resolve, reject) => {
            this.client.generateResponseOptions(request, {}, (err, response) => {
                if (err) reject(err);
                else if (!response) reject(new Error('No response from server'));
                else resolve(response);
            });
        });
    }

    sendMessage(sessionId: string, responseSelection: ResponseSelectionDTO): Promise<MessageChunk[]> {
        const request = new SendMessageRequest();
        request.setSessionid(sessionId);
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

    async endDialogue(sessionId: string, context: Context): Promise<EndDialogueResponse> {
        const request = new EndDialogueRequest();
        request.setSessionid(sessionId);
        request.setContext(Serializer.toDTO(context, new ContextDTO()));

        return new Promise((resolve, reject) => {
            this.client.endDialogue(request, {}, (err, response) => {
                if (err) reject(err);
                else if (!response) reject(new Error('No response from server'));
                else resolve(response);
            });
        });
    }
}
