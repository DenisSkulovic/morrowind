import { User } from '../dto/User';
import { World } from '../dto/World';
import { PresetEnum } from '../enum/entityEnums';
import { serializeEnum } from '../enum/util';
import { ContextDTO, PresetEnumDTO } from '../proto/common';
import {
    CreateWorldRequest, CreateWorldResponse, DeleteWorldRequest,
    DeleteWorldResponse, DropWorldContentRequest, DropWorldContentResponse,
    GetWorldRequest, GetWorldResponse, GetWorldsForUserRequest, GetWorldsForUserResponse,
    LoadWorldPresetRequest, LoadWorldPresetResponse, WorldServiceClientImpl
} from '../proto/world';
import { rpc } from '../rpc';

export class WorldService {
    private client: WorldServiceClientImpl;

    constructor() {
        this.client = new WorldServiceClientImpl(rpc);
    }

    async createWorld(world: World, user: User): Promise<CreateWorldResponse> {
        const request: CreateWorldRequest = {
            name: world.name,
            description: world.description,
            userId: user.id
        };
        return await this.client.createWorld(request);
    }

    async getWorld(worldId: string): Promise<GetWorldResponse> {
        const request: GetWorldRequest = { worldId };
        return await this.client.getWorld(request);
    }

    async getWorldsForUser(userId: string): Promise<GetWorldsForUserResponse> {
        const request: GetWorldsForUserRequest = { userId };
        return await this.client.getWorldsForUser(request);
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