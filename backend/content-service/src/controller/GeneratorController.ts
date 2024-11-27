import { sourcesMap } from "../data-source";
import { DataSourceEnum } from "../enum/DataSourceEnum";
import { sendUnaryData, ServerUnaryCall } from '@grpc/grpc-js';
import { GenerateItemsRequest, GenerateItemsResponse, GenerateCharactersRequest, GenerateCharactersResponse, GenerateCharacterGroupsRequest, GenerateCharacterGroupsResponse } from "../proto/generator";

export class GeneratorController {
    [key: string]: any

    public async generateItems(
        call: ServerUnaryCall<GenerateItemsRequest, GenerateItemsResponse>,
        callback: sendUnaryData<GenerateItemsResponse>
    ): Promise<void> {
        try {
            // callback(null, response)
        } catch (err: any) {
            console.error(`[AccountController - createAccount] error:`, err)
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
            console.error(`[AccountController - createAccount] error:`, err)
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
            console.error(`[AccountController - createAccount] error:`, err)
            callback(err)
        }
    };

}