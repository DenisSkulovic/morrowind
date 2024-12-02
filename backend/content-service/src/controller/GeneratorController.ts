import { sourcesMap, WorldDataSource } from "../data-source";
import { DataSourceEnum } from "../enum/DataSourceEnum";
import { sendUnaryData, ServerUnaryCall } from '@grpc/grpc-js';
import { ItemGenerator } from "../layer_2_and_3/generator/ItemGenerator";
import { deserializeEnum } from "../enum/util";
import { deserializeGenerationInstructions } from "../class/blueprint_id_and_prob";
import { GenerationInstruction } from "../types";
import { Item } from "../entities/Content/Item/Item";
import { CharacterGenInstructionDTO, DataSourceEnumDTO } from "../proto/common";
import { CharacterGenInstruction } from "../entities/Content/CharacterGenInstruction";
import { CacheKeyEnum, CharacterGenerator } from "../layer_2_and_3/generator/CharacterGenerator";
import { Character } from "../entities/Content/Character";
import { DataSource } from "typeorm";
import { GenerateItemsRequest, GenerateItemsResponse, GenerateCharactersResponse, GenerateCharacterGroupsRequest, GenerateCharacterGroupsResponse, GenerateCharactersRequestCustom, GenerateCharactersRequestDB } from "../proto/generator";

export class GeneratorController {
    [key: string]: any

    public async generateItems(
        call: ServerUnaryCall<GenerateItemsRequest, GenerateItemsResponse>,
        callback: sendUnaryData<GenerateItemsResponse>
    ): Promise<void> {
        try {
            console.log(`\n\n\n\n\n##########################################################################`)
            console.log(`[GeneratorController - generateItems] call.request`, call.request)
            const instructions: GenerationInstruction[] = deserializeGenerationInstructions(call.request)
            console.log(`[GeneratorController - generateItems] received instructions`, instructions)
            const source: DataSourceEnum = deserializeEnum(DataSourceEnumDTO, call.request.source) as DataSourceEnum
            const dataSource: DataSource | undefined = sourcesMap.get(source)
            if (!dataSource) throw new Error(`could not get data source for source: "${source}"`)
            const itemGenerator: ItemGenerator = new ItemGenerator(dataSource)
            const generatedItems: Item[] = await itemGenerator.generateMany(instructions)
            console.log(`[GeneratorController - generateItems] generatedItems`, generatedItems)
            const itemsSerialized = Item.serializeEntityArray(generatedItems, i => Item.toDTO(i))
            if (!itemsSerialized) throw new Error("no generated items after serialization")

            callback(null, itemsSerialized)
        } catch (err: any) {
            console.error(`[GeneratorController - generateItems] error:`, err)
            callback(err)
        }
    };

    public async generateCharactersCustom(
        call: ServerUnaryCall<GenerateCharactersRequestCustom, GenerateCharactersResponse>,
        callback: sendUnaryData<GenerateCharactersResponse>
    ): Promise<void> {
        try {
            console.log(`\n\n\n\n\n##########################################################################`)
            console.log(`[GeneratorController - generateCharacters] call.request`, call.request)
            const arr: CharacterGenInstructionDTO[] = call.request.arr
            const context = undefined; // no context needed for a simple generation; context is used to set user/world/campaign on entities to save them in db.
            const instructions: CharacterGenInstruction[] = arr.map((chGenInstr) => CharacterGenInstruction.fromDTO(chGenInstr, context))
            console.log(`[GeneratorController - generateCharacters] received instructions`, instructions)
            const source: DataSourceEnum = deserializeEnum(DataSourceEnumDTO, call.request.source) as DataSourceEnum
            const dataSource = sourcesMap.get(source)
            if (!dataSource) throw new Error(`could not get data source for source: "${source}"`)
            const charGenerator: CharacterGenerator = new CharacterGenerator(dataSource, context)

            // set the custom instructions into the cache, so that when the code checks the id, the instruction will be retrieved from the cache
            const ids: string[] = []
            for (const instruction of instructions) {
                ids.push(instruction.blueprint_id)
                await charGenerator.cacheBlueprint(CacheKeyEnum.CHARACTER_INSTRUCTION, instruction.blueprint_id, instruction)
            }
            console.log(`[GeneratorController - generateCharacters] ids`, ids)
            const characters: Character[] = await charGenerator.generateMany(ids)
            callback(null, {
                arr: characters.map((char) => Character.toDTO(char))
            })
        } catch (err: any) {
            console.error(`[GeneratorController - generateCharacters] error:`, err)
            callback(err)
        }
    };

    public async generateCharactersDB(
        call: ServerUnaryCall<GenerateCharactersRequestDB, GenerateCharactersResponse>,
        callback: sendUnaryData<GenerateCharactersResponse>
    ): Promise<void> {
        try {
            console.log(`\n\n\n\n\n##########################################################################`)
            console.log(`[GeneratorController - generateCharactersDB] call.request`, call.request)
            const ids: string[] = call.request.charGenInstructionIds
            const context = undefined; // no context needed for a simple generation; context is used to set user/world/campaign on entities to save them in db.
            console.log(`[GeneratorController - generateCharactersDB] received ids`, ids)
            const source: DataSourceEnum = deserializeEnum(DataSourceEnumDTO, call.request.source) as DataSourceEnum
            const dataSource = sourcesMap.get(source)
            if (!dataSource) throw new Error(`could not get data source for source: "${source}"`)
            const charGenerator: CharacterGenerator = new CharacterGenerator(dataSource, context)
            const characters: Character[] = await charGenerator.generateMany(ids)
            callback(null, {
                arr: characters.map((char) => Character.toDTO(char))
            })
        } catch (err: any) {
            console.error(`[GeneratorController - generateCharactersDB] error:`, err)
            callback(err)
        }
    };

    public async generateCharacterGroups(
        call: ServerUnaryCall<GenerateCharacterGroupsRequest, GenerateCharacterGroupsResponse>,
        callback: sendUnaryData<GenerateCharacterGroupsResponse>
    ): Promise<void> {
        try {
            // callback(null, response)
        } catch (err: any) {
            console.error(`[GeneratorController - generateCharacterGroups] error:`, err)
            callback(err)
        }
    };

}