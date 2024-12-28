import { Context } from "../class/Context";
import { GenerationInstruction, serializeInstruction } from "../class/GenerationInstruction";
import { CharacterGenInstruction } from "../class/entities/content/CharacterGenInstruction";
import { CharacterGroupGenInstruction } from "../class/entities/content/CharacterGroupGenInstruction";
import { GeneratorServiceClient } from "../proto/GeneratorServiceClientPb";
import Serializer from "../serialize/serializer";
import { Item } from "../class/entities/content/Item/Item";
import { Character } from "../class/entities/content/Character";
import { CharacterDTO, CharacterGenInstructionDTO, CharacterGroupGenInstructionDTO, ContextDTO, DataSourceEnumDTO, GenerationInstructionDTO } from "../proto/common_pb";
import { GenerateItemsRequest, GenerateCharactersRequestCustom, GenerateCharactersRequestDB, GenerateCharacterGroupsRequest, GenerateCharacterGroupsResponse, GenerateCharactersResponse, GenerateItemsResponse } from "../proto/generator_pb";
import { EquipmentSlot } from "../class/entities/content/Slot/EquipmentSlot";
import { StorageSlot } from "../class/entities/content/Slot/StorageSlot";
import { EntityEnum } from "../enum/EntityEnum";
import { backendURL } from "../config";

export type GenerationResult = {
    [EntityEnum.Item]?: {
        array: Item[] | null;
        map: { [id: string]: Item } | null;
    }
    [EntityEnum.EquipmentSlot]?: {
        array: EquipmentSlot[] | null;
        map: { [id: string]: EquipmentSlot } | null;
    }
    [EntityEnum.StorageSlot]?: {
        array: StorageSlot[] | null;
        map: { [id: string]: StorageSlot } | null;
    }
    characterGroups?: {
        array: Character[] | null;
        map: { [id: string]: Character } | null;
    }[]
}

// TODO these 4 endpoints will be unified into one, so please ignore the repetition for now

export class GeneratorService {
    private client: GeneratorServiceClient;

    constructor() {
        this.client = new GeneratorServiceClient(backendURL);
    }

    private createEntityMaps<T extends { id: string }>(entities: T[]) {
        const map: { [id: string]: T } = {};
        entities.forEach(entity => {
            map[entity.id] = entity;
        });
        return {
            array: entities,
            map: map
        };
    }

    private createGenerationResponse(params: {
        characters?: Character[][],
        items?: Item[],
        equipmentSlots?: EquipmentSlot[],
        storageSlots?: StorageSlot[],
    }): GenerationResult {
        const { characters, items = [], equipmentSlots = [], storageSlots = [] } = params;

        const response: GenerationResult = {};

        if (items.length) {
            response[EntityEnum.Item] = this.createEntityMaps(items);
        }

        if (equipmentSlots.length) {
            response[EntityEnum.EquipmentSlot] = this.createEntityMaps(equipmentSlots);
        }

        if (storageSlots.length) {
            response[EntityEnum.StorageSlot] = this.createEntityMaps(storageSlots);
        }

        if (characters) {
            response.characterGroups = (characters).map(group =>
                this.createEntityMaps(group)
            );
        }

        return response;
    }

    async generateItems(instructions: GenerationInstruction[], context: Context): Promise<GenerationResult> {
        const instructionsDTO: GenerationInstructionDTO[] = [];
        instructions.forEach(instruction => {
            const instructionDTO = serializeInstruction(instruction);
            if (instructionDTO) instructionsDTO.push(instructionDTO);
        });
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
                    resolve(this.createGenerationResponse({
                        items,
                        storageSlots: [] // TODO backend needs to return these
                    }));
                }
            });
        });
    }

    async generateCharactersCustom(instructions: CharacterGenInstruction[], context: Context): Promise<GenerationResult> {
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
                    resolve(this.createGenerationResponse({
                        characters,
                        equipmentSlots: [], // TODO backend needs to return these
                        storageSlots: [],
                        items: []
                    }));
                }
            });
        });
    }

    async generateCharactersDB(instructionIds: string[], context: Context): Promise<GenerationResult> {
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
                    resolve(this.createGenerationResponse({
                        characters,
                        equipmentSlots: [], // TODO backend needs to return these
                        storageSlots: [],
                        items: []
                    }));
                }
            });
        });
    }

    async generateCharacterGroups(instructions: CharacterGroupGenInstruction[], context: Context): Promise<GenerationResult> {
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
                    resolve(this.createGenerationResponse({
                        characters: groups,
                        equipmentSlots: [], // TODO backend needs to return these
                        storageSlots: [],
                        items: [],
                    }));
                }
            });
        });
    }
}
