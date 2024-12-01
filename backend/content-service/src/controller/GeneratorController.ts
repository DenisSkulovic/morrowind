import { sourcesMap, WorldDataSource } from "../data-source";
import { DataSourceEnum } from "../enum/DataSourceEnum";
import { sendUnaryData, ServerUnaryCall } from '@grpc/grpc-js';
import { GenerateItemsRequest, GenerateItemsResponse, GenerateCharactersRequest, GenerateCharactersResponse, GenerateCharacterGroupsRequest, GenerateCharacterGroupsResponse } from "../proto/generator";
import { ItemGenerator } from "../layer_2_and_3/generator/ItemGenerator";
import { deserializeEnum } from "../enum/util";
import { deserializeGenerationInstructions } from "../class/blueprint_id_and_prob";
import { GenerationInstruction } from "../types";
import { Item } from "../entities/Content/Item/Item";
import { DataSourceEnumDTO } from "../proto/common";

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
            const dataSource = sourcesMap.get(source)
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

    public async generateCharacters(
        call: ServerUnaryCall<GenerateCharactersRequest, GenerateCharactersResponse>,
        callback: sendUnaryData<GenerateCharactersResponse>
    ): Promise<void> {
        try {
            // callback(null, response)
        } catch (err: any) {
            console.error(`[GeneratorController - generateCharacters] error:`, err)
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