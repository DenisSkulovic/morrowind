import { Controller, Inject } from "@nestjs/common"
import { GrpcMethod } from "@nestjs/microservices"
import { DataSource } from "typeorm"
import { DataSourceEnum } from "../../../common/enum/DataSourceEnum"
import { deserializeEnum } from "../../../common/enum/util"
import { DataSourceEnumDTO, CharacterGenInstructionDTO } from "../../../proto/common"
import { GenerateItemsRequest, GenerateItemsResponse, GenerateCharactersRequestCustom, GenerateCharactersResponse, GenerateCharactersRequestDB, GenerateCharacterGroupsRequest, GenerateCharacterGroupsResponse } from "../../../proto/generator"
import { Character } from "../entities/Character"
import { CharacterGenInstruction } from "../entities/CharacterGenInstruction"
import { Item } from "../entities/Item/Item"
import { CacheKeyEnum, CharacterGeneratorService } from "./character/character-generator.service"
import { ItemGeneratorService } from "./item/item-generator.service"
import { GenerationInstruction, deserializeGenerationInstructions } from "../../../class/GenerationInstruction"

@Controller()
export class GeneratorController {
    constructor(
        @Inject('ICharacterGeneratorService') private characterGeneratorService: CharacterGeneratorService,
        @Inject('IItemGeneratorService') private itemGeneratorService: ItemGeneratorService,
    ) { }

    @GrpcMethod('GeneratorService', 'generateItems')
    public async generateItems(
        request: GenerateItemsRequest,
    ): Promise<GenerateItemsResponse> {
        console.log(`[GeneratorController - generateItems] request`, request)

        const instructions: GenerationInstruction[] = deserializeGenerationInstructions(request)
        console.log(`[GeneratorController - generateItems] received instructions`, instructions)

        const source: DataSourceEnum = deserializeEnum(DataSourceEnumDTO, DataSourceEnum, request.source)

        const generatedItems: Item[] = await this.itemGeneratorService.generateMany(instructions, source)
        console.log(`[GeneratorController - generateItems] generatedItems`, generatedItems)

        return { arr: generatedItems.map(item => item.toDTO()) }
    };

    @GrpcMethod('GeneratorService', 'generateCharactersCustom')
    public async generateCharactersCustom(
        request: GenerateCharactersRequestCustom,
    ): Promise<GenerateCharactersResponse> {
        console.log(`[GeneratorController - generateCharacters] request`, request)

        const arr: CharacterGenInstructionDTO[] = request.arr
        const instructions: CharacterGenInstruction[] = arr.map((chGenInstr) => CharacterGenInstruction.fromDTO(chGenInstr))
        console.log(`[GeneratorController - generateCharacters] received instructions`, instructions)

        const source: DataSourceEnum = deserializeEnum(DataSourceEnumDTO, DataSourceEnum, request.source)

        // set the custom instructions into the cache, so that when the code checks the id, the instruction will be retrieved from the cache
        const ids: string[] = []
        for (const instruction of instructions) {
            ids.push(instruction.blueprint_id)
            await this.characterGeneratorService.cacheBlueprint(CacheKeyEnum.CHARACTER_INSTRUCTION, instruction.blueprint_id, instruction)
        }
        console.log(`[GeneratorController - generateCharacters] ids`, ids)

        const characters: Character[] = await this.characterGeneratorService.generateMany(ids, source)
        return { arr: characters.map((char) => char.toDTO()) }
    };

    @GrpcMethod('GeneratorService', 'generateCharactersDB')
    public async generateCharactersDB(
        request: GenerateCharactersRequestDB,
    ): Promise<GenerateCharactersResponse> {
        console.log(`[GeneratorController - generateCharactersDB] request`, request)
        const ids: string[] = request.charGenInstructionIds
        console.log(`[GeneratorController - generateCharactersDB] received ids`, ids)
        const source: DataSourceEnum = deserializeEnum(DataSourceEnumDTO, DataSourceEnum, request.source)
        const characters: Character[] = await this.characterGeneratorService.generateMany(ids, source)
        return { arr: characters.map((char) => char.toDTO()) }
    };

    @GrpcMethod('GeneratorService', 'generateCharacterGroups')
    public async generateCharacterGroups(
        request: GenerateCharacterGroupsRequest,
    ): Promise<GenerateCharacterGroupsResponse> {
        throw new Error("NOT IMPLEMENTED")
    };

}
