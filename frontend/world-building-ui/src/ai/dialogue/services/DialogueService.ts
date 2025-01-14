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
    GetDialogueStateRequest,
    DialogueStateFieldsEnumDTO,
    GetDialogueStateResponse,
} from "../../../proto/dialogue_pb";
import { dialogueBackendURL } from "../../../config";
import { io, Socket } from "socket.io-client";
import { Character } from "../../../class/entities/content/Character";
import { DialogueStateFieldsEnum } from "../enum/DialogueStateFieldsEnum";
import { serializeEnum } from "../../../enum/util";
import { ProgressDialogueRequest } from "../class/ProgressDialogueRequest";
import { ScaleTypeEnum } from "../enum/ScaleTypeEnum";
import { MessageChunk } from "../class/MessageChunk";
import { DialogueOption } from "../class/DialogueOption";
import { CharacterProfile } from "../class/CharacterProfile";
import { WorldContext } from "../class/WorldContext";
import { SceneContext } from "../class/WorldContext/SceneContext";
import { WeatherContext } from "../class/WorldContext/WeatherContext";
import { LocationContext } from "../class/WorldContext/LocationContext";
import { TimeContext } from "../class/WorldContext/TimeContext";
import { KnowledgeBase } from "../class/KnowledgeBase";
import { AiServiceEnum } from "../enum/AiServiceEnum";



export class DialogueService {
    private client: DialogueServiceClient;

    constructor() {
        this.client = new DialogueServiceClient(dialogueBackendURL);
    }



    // gRPC method
    async initializeDialogue(
        initiatingParticipantId: string,
        playerCharacterId: string,
        aiProvider: AiServiceEnum,
        dialogueParticipants: CharacterProfile[],
        worldContext?: WorldContext,
        knowledgeBase?: KnowledgeBase
    ): Promise<InitializeDialogueResponse> {
        // build request
        const request = new InitializeDialogueRequest();
        request.setInitiatingparticipantid(initiatingParticipantId);
        request.setPlayercharacterid(playerCharacterId);
        request.setAiprovider(aiProvider);

        const characterProfilesDTO = new CharacterProfilesDTO();
        characterProfilesDTO.setArrList(dialogueParticipants.map(character => Serializer.toDTO(character, new CharacterProfileDTO())));
        request.setDialogueparticipants(characterProfilesDTO);

        if (worldContext) request.setWorldcontext(Serializer.toDTO(worldContext, new WorldContextDTO()));
        if (knowledgeBase) request.setKnowledgebase(Serializer.toDTO(knowledgeBase, new KnowledgeBaseDTO()));
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

        return new Promise((resolve, reject) => {
            this.client.generatePlayerDialogueOptions(request, {}, (err, response) => {
                if (err) reject(err);
                else if (!response) reject(new Error('No response from server'));
                else resolve(response);
            });
        });
    }



    // WebSocket connection
    progressDialogue(
        dialogueId: string,
        responseSelection: DialogueOption,
        onChunk: (chunk: MessageChunk) => void,
    ): Promise<void> {
        return new Promise((resolve, reject) => {
            // Establish WebSocket connection
            const socket: Socket = io(dialogueBackendURL);

            const request = ProgressDialogueRequest.build({
                dialogueId: dialogueId,
                selectedPlayerDialogueOption: responseSelection,
            });

            socket.emit('progressDialogue', request);

            socket.on('replyChunk', (chunk: MessageChunk) => {
                onChunk(chunk);
            });

            socket.on('replyComplete', (message: any) => {
                socket.close(); // Close the WebSocket connection
                resolve();
            });

            socket.on('error', (err: any) => {
                socket.close(); // Close the WebSocket connection on error
                reject(err);
            });
        });
    }



    // gRPC method
    getDialogueState(
        dialogueId: string,
        fields: DialogueStateFieldsEnum[]
    ): Promise<GetDialogueStateResponse> {
        const dialogueStateFieldsEnumDTO = fields.map(field => serializeEnum(DialogueStateFieldsEnum, DialogueStateFieldsEnumDTO, field));
        const request = new GetDialogueStateRequest();
        request.setDialogueid(dialogueId);
        request.setFieldsList(dialogueStateFieldsEnumDTO);

        return new Promise((resolve, reject) => {
            this.client.getDialogueState(request, {}, (err, response) => {
                if (err) reject(err);
                else if (!response) reject(new Error('No response from server'));
                else resolve(response);
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