import { Context } from '../class/Context';
import { SearchQuery } from '../class/search/SearchQuery';
import { User } from '../dto/User';
import { World } from '../dto/World';
import { PresetEnum } from '../enum/entityEnums';
import { serializeEnum } from '../enum/util';
import { ContextDTO, PresetEnumDTO, SearchQueryDTO } from '../proto/common';
import {
    CreateWorldRequest, CreateWorldResponse, DeleteWorldRequest,
    DeleteWorldResponse, DropWorldContentRequest, DropWorldContentResponse,
    GetWorldRequest, GetWorldResponse, GetWorldsForUserRequest, GetWorldsForUserResponse,
    LoadWorldPresetRequest, LoadWorldPresetResponse, SearchWorldRequest, SearchWorldResponse, UpdateWorldRequest, UpdateWorldResponse, WorldServiceClientImpl
} from '../proto/world';
import { rpc } from '../rpc';

export class WorldService {
    private client: WorldServiceClientImpl;

    constructor() {
        this.client = new WorldServiceClientImpl(rpc, {
            service: "WorldService"
        });
    }

    async createWorld(world: World, userId: string): Promise<CreateWorldResponse> {
        world.user = userId;
        const request: CreateWorldRequest = { world: world.toDTO() };
        return await this.client.createWorld(request);
    }

    async getWorld(worldId: string): Promise<GetWorldResponse> {
        const request: GetWorldRequest = { worldId };
        return await this.client.getWorld(request);
    }

    async updateWorld(world: World): Promise<UpdateWorldResponse> {
        const request: UpdateWorldRequest = { world: world.toDTO() };
        return await this.client.updateWorld(request);
    }

    async search(entityName: string, query?: SearchQuery, context?: Context): Promise<SearchWorldResponse> {
        console.log(`[WorldService - search] query:`, query)
        // const request: SearchWorldRequest = {
        //     entityName,
        //     query: query?.toDTO(),
        //     context: context?.toDTO()
        // };
        const request: SearchWorldRequest = {
            "entityName": "World",
            "query": {
                "filters": [
                    {
                        "field": "user",
                        "operator": "eq",
                        "value": {
                            "stringValue": "USER_df3bd4a7c1334138a9edd3c953f93840"
                        }
                    }
                ],
                "page": 1,
                "pageSize": 100,
                "sortBy": {
                    "field": "name",
                    "direction": "asc"
                }
            },
            "context": {
                "userId": "USER_df3bd4a7c1334138a9edd3c953f93840",
                "worldId": "",
                "campaignId": ""
            }
        }
        console.log(`[WorldService - search] request:`, request)
        return await this.client.search(request);
    }

    async deleteWorld(worldId: string): Promise<DeleteWorldResponse> {
        const request: DeleteWorldRequest = { worldId };
        return await this.client.deleteWorld(request);
    }

    async dropWorldContent(worldId: string): Promise<DropWorldContentResponse> {
        const request: DropWorldContentRequest = { worldId };
        return await this.client.dropWorldContent(request);
    }

    async loadWorldPreset(preset: PresetEnum, user: User, world: World): Promise<LoadWorldPresetResponse> {
        const context: ContextDTO = {
            userId: user.id,
            worldId: world.id,
            campaignId: ""
        }
        const request: LoadWorldPresetRequest = {
            preset: serializeEnum(PresetEnum, PresetEnumDTO, preset),
            context,
        };
        return await this.client.loadWorldPreset(request);
    }
}