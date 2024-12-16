import { Context } from "../class/Context";
import { GenerationInstruction, serializeInstruction } from "../class/GenerationInstruction";
import { CharacterGenInstruction } from "../class/entities/content/CharacterGenInstruction";
import { CharacterGroupGenInstruction } from "../class/entities/content/CharacterGroupGenInstruction";
import { GeneratorServiceClient } from "../proto/GeneratorServiceClientPb";
import { Serializer } from "../serialize/serializer";
import { Item } from "../class/entities/content/Item/Item";
import { Character } from "../class/entities/content/Character";
import { CharacterDTO, CharacterGenInstructionDTO, CharacterGroupGenInstructionDTO, ContextDTO, DataSourceEnumDTO } from "../proto/common_pb";
import { GenerateItemsRequest, GenerateCharactersRequestCustom, GenerateCharactersRequestDB, GenerateCharacterGroupsRequest, GenerateCharacterGroupsResponse, GenerateCharactersResponse, GenerateItemsResponse } from "../proto/generator_pb";

export class GeneratorService {
    private client: GeneratorServiceClient;

    constructor() {
        this.client = new GeneratorServiceClient("http://localhost:8080");
    }

    async generateItems(instructions: GenerationInstruction[], context: Context): Promise<Item[]> {
        const instructionsDTO = instructions.map(instruction => serializeInstruction(instruction));
        const request = new GenerateItemsRequest();
        request.setSource(DataSourceEnumDTO.DATA_SOURCE_WORLD);
        request.setArrList(instructionsDTO);
        request.setContext(Serializer.toDTO(context, new ContextDTO()));
        return new Promise((resolve, reject) => {
            this.client.generateItems(request, {}, (err, response: GenerateItemsResponse) => {
                if (err) reject(err);
                else if (!response) reject(new Error('No response from server'));
                else {
                    const items = response.getArrList().map(itemDTO =>
                        Serializer.fromDTO(itemDTO, new Item())
                    );
                    resolve(items);
                }
            });
        });
    }

    async generateCharactersCustom(instructions: CharacterGenInstruction[], context: Context): Promise<Character[]> {
        const instructionsDTO = instructions.map(instruction => Serializer.toDTO(instruction, new CharacterGenInstructionDTO()));
        const request = new GenerateCharactersRequestCustom();
        request.setSource(DataSourceEnumDTO.DATA_SOURCE_WORLD);
        request.setArrList(instructionsDTO);
        request.setContext(Serializer.toDTO(context, new ContextDTO()));
        return new Promise((resolve, reject) => {
            this.client.generateCharactersCustom(request, {}, (err, response: GenerateCharactersResponse) => {
                if (err) reject(err);
                else if (!response) reject(new Error('No response from server'));
                else {
                    const characters = response.getArrList().map(characterDTO =>
                        Serializer.fromDTO(characterDTO, new Character())
                    );
                    resolve(characters);
                }
            });
        });
    }

    async generateCharactersDB(instructionIds: string[], context: Context): Promise<Character[]> {
        const request = new GenerateCharactersRequestDB();
        request.setSource(DataSourceEnumDTO.DATA_SOURCE_WORLD);
        request.setChargeninstructionidsList(instructionIds);
        request.setContext(Serializer.toDTO(context, new ContextDTO()));
        return new Promise((resolve, reject) => {
            this.client.generateCharactersDB(request, {}, (err, response: GenerateCharactersResponse) => {
                if (err) reject(err);
                else if (!response) reject(new Error('No response from server'));
                else {
                    const characters = response.getArrList().map(characterDTO =>
                        Serializer.fromDTO(characterDTO, new Character())
                    );
                    resolve(characters);
                }
            });
        });
    }

    async generateCharacterGroups(instructions: CharacterGroupGenInstruction[], context: Context): Promise<Character[][]> {
        const request = new GenerateCharacterGroupsRequest();
        request.setSource(DataSourceEnumDTO.DATA_SOURCE_WORLD);
        request.setArrList(instructions.map(instruction => Serializer.toDTO(instruction, new CharacterGroupGenInstructionDTO())));
        request.setContext(Serializer.toDTO(context, new ContextDTO()));
        return new Promise((resolve, reject) => {
            this.client.generateCharacterGroups(request, {}, (err, response: GenerateCharacterGroupsResponse) => {
                if (err) reject(err);
                else if (!response) reject(new Error('No response from server'));
                else {
                    const groups = response.getArrList().map(groupDTO =>
                        groupDTO.getArrList().map((characterDTO: CharacterDTO) =>
                            Serializer.fromDTO(characterDTO, new Character())
                        )
                    );
                    resolve(groups);
                }
            });
        });
    }
}
