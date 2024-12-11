import { GeneratorServiceClientImpl, GenerateItemsRequest, GenerateItemsResponse, GenerateCharactersRequestCustom, GenerateCharactersRequestDB, GenerateCharactersResponse, GenerateCharacterGroupsRequest, GenerateCharacterGroupsResponse } from '../proto/generator';
import { DataSourceEnumDTO, GenerationInstructionDTO, CharacterGenInstructionDTO, CharacterGroupGenInstructionDTO, ContextDTO } from '../proto/common';
import { rpc } from '../rpc';
import { Context } from '../class/Context';

export class GeneratorService {
    private client: GeneratorServiceClientImpl;

    constructor() {
        this.client = new GeneratorServiceClientImpl(rpc);
    }

    async generateItems(instructions: GenerationInstructionDTO[], context: Context): Promise<GenerateItemsResponse> {
        const request: GenerateItemsRequest = {
            source: DataSourceEnumDTO.DATA_SOURCE_WORLD,
            arr: instructions,
            context: context.toDTO()
        };
        return await this.client.generateItems(request);
    }

    async generateCharactersCustom(instructions: CharacterGenInstructionDTO[], context: Context): Promise<GenerateCharactersResponse> {
        const request: GenerateCharactersRequestCustom = {
            source: DataSourceEnumDTO.DATA_SOURCE_WORLD,
            arr: instructions,
            context: context.toDTO()
        };
        return await this.client.generateCharactersCustom(request);
    }

    async generateCharactersDB(instructionIds: string[], context: Context): Promise<GenerateCharactersResponse> {
        const request: GenerateCharactersRequestDB = {
            source: DataSourceEnumDTO.DATA_SOURCE_WORLD,
            charGenInstructionIds: instructionIds,
            context: context.toDTO()
        };
        return await this.client.generateCharactersDB(request);
    }

    async generateCharacterGroups(instructions: CharacterGroupGenInstructionDTO[], context: Context): Promise<GenerateCharacterGroupsResponse> {
        const request: GenerateCharacterGroupsRequest = {
            source: DataSourceEnumDTO.DATA_SOURCE_WORLD,
            arr: instructions,
            context: context.toDTO()
        };
        return await this.client.generateCharacterGroups(request);
    }
}
