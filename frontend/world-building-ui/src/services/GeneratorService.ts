import { Context } from "../class/Context";
import { GenerationInstruction, serializeInstruction } from "../class/GenerationInstruction";
import { CharacterGenInstruction } from "../dto/content/CharacterGenInstruction";
import { CharacterGroupGenInstruction } from "../dto/content/CharacterGroupGenInstruction";
import { common } from "../proto/common";
import { generator } from "../proto/generator";
import { grpc } from '@improbable-eng/grpc-web';

export class GeneratorService {
    private client: generator.GeneratorServiceClient;

    constructor() {
        this.client = new generator.GeneratorServiceClient("localhost:8080", grpc.credentials.createInsecure());
    }

    async generateItems(instructions: GenerationInstruction[], context: Context): Promise<generator.GenerateItemsResponse> {
        const instructionsDTO: common.GenerationInstructionDTO[] = instructions.map(instruction => serializeInstruction(instruction));
        const request = new generator.GenerateItemsRequest();
        request.source = common.DataSourceEnumDTO.DATA_SOURCE_WORLD;
        request.arr = instructionsDTO;
        request.context = context.toDTO();
        return new Promise((resolve, reject) => {
            this.client.generateItems(request, (err, response) => {
                if (err) reject(err);
                else if (!response) reject(new Error('No response from server'));
                else resolve(response);
            });
        });
    }

    async generateCharactersCustom(instructions: CharacterGenInstruction[], context: Context): Promise<generator.GenerateCharactersResponse> {
        const instructionsDTO: common.CharacterGenInstructionDTO[] = instructions.map(instruction => instruction.toDTO());
        const request = new generator.GenerateCharactersRequestCustom();
        request.source = common.DataSourceEnumDTO.DATA_SOURCE_WORLD;
        request.arr = instructionsDTO;
        request.context = context.toDTO();
        return new Promise((resolve, reject) => {
            this.client.generateCharactersCustom(request, (err, response) => {
                if (err) reject(err);
                else if (!response) reject(new Error('No response from server'));
                else resolve(response);
            });
        });
    }

    async generateCharactersDB(instructionIds: string[], context: Context): Promise<generator.GenerateCharactersResponse> {
        const request = new generator.GenerateCharactersRequestDB();
        request.source = common.DataSourceEnumDTO.DATA_SOURCE_WORLD;
        request.charGenInstructionIds = instructionIds;
        request.context = context.toDTO();
        return new Promise((resolve, reject) => {
            this.client.generateCharactersDB(request, (err, response) => {
                if (err) reject(err);
                else if (!response) reject(new Error('No response from server'));
                else resolve(response);
            });
        });
    }

    async generateCharacterGroups(instructions: CharacterGroupGenInstruction[], context: Context): Promise<generator.GenerateCharacterGroupsResponse> {
        const request = new generator.GenerateCharacterGroupsRequest();
        request.source = common.DataSourceEnumDTO.DATA_SOURCE_WORLD;
        request.arr = instructions.map(instruction => instruction.toDTO());
        request.context = context.toDTO();
        return new Promise((resolve, reject) => {
            this.client.generateCharacterGroups(request, (err, response) => {
                if (err) reject(err);
                else if (!response) reject(new Error('No response from server'));
                else resolve(response);
            });
        });
    }
}
