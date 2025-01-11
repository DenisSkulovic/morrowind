import { DialogueServiceClient } from "../../../proto/DialogueServiceClientPb";
import { Context } from "../../../class/Context";
import Serializer from "../../../serialize/serializer";
import { ContextDTO } from "../../../proto/entities_pb";
import {
    InitializeDialogueRequest,
    InitializeDialogueResponse,
    GeneratePlayerDialogueOptionsRequest,
    GeneratePlayerDialogueOptionsResponse,
    FinalizeDialogueRequest,
    FinalizeDialogueResponse,
    WorldContextDTO,
    KnowledgeBaseDTO,
    CharacterProfilesDTO,
    CharacterProfileDTO,
} from "../../../proto/dialogue_pb";
import { dialogueBackendURL } from "../../../config";
import { io, Socket } from "socket.io-client";
import { Character } from "../../../class/entities/content/Character";



export class DialogueService {
    private client: DialogueServiceClient;
    private socket: Socket;

    constructor() {
        this.client = new DialogueServiceClient(dialogueBackendURL);
        this.socket = io(dialogueBackendURL);
    }

    // gRPC method
    async initializeDialogue(
        initiatingParticipantId: string,
        characters: Character[],
        context: Context,
    ): Promise<InitializeDialogueResponse> {
        // extract data from db
        const dialogueParticipants: CharacterProfile[] = [];
        const dialogueHistory = new DialogueHistory();
        const worldContext

        // build request
        const characterProfilesDTO = new CharacterProfilesDTO();
        characterProfilesDTO.setArrList(dialogueParticipants.map(character => Serializer.toDTO(character, new CharacterProfileDTO())));
        const request = new InitializeDialogueRequest();
        request.setInitiatingparticipantid(initiatingParticipantId);
        request.setDialogueparticipants(characterProfilesDTO);
        request.setWorldcontext(Serializer.toDTO(context, new WorldContextDTO()));
        request.setKnowledgebase(new KnowledgeBaseDTO());
        request.setContext(new ContextDTO());

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

    // WebSocket connection // TODO this for sure needs to be a gRPC stream, not websocket
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
