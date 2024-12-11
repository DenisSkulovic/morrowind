import { Context } from "../class/Context";
import { SearchQuery } from "../class/search/SearchQuery";
import { User } from "../dto/User";
import { World } from "../dto/World";
import { PresetEnum } from "../enum/entityEnums";
import { serializeEnum } from "../enum/util";
import { common } from "../proto/common";
import { world } from "../proto/world";
import { grpc } from '@improbable-eng/grpc-web';

export class WorldService {
    private client: world.WorldServiceClient;

    constructor() {
        this.client = new world.WorldServiceClient("localhost:8080", grpc.credentials.createInsecure());
    }

    async createWorld(worldObj: World, userId: string): Promise<world.CreateWorldResponse> {
        worldObj.user = userId;
        const request = new world.CreateWorldRequest();
        request.world = worldObj.toDTO();
        return new Promise((resolve, reject) => {
            this.client.createWorld(request, (err, response) => {
                if (err) reject(err);
                else if (!response) reject(new Error('No response from server'));
                else resolve(response);
            });
        });
    }

    async getWorld(worldId: string): Promise<world.GetWorldResponse> {
        const request = new world.GetWorldRequest();
        request.worldId = worldId;
        return new Promise((resolve, reject) => {
            this.client.getWorld(request, (err, response) => {
                if (err) reject(err);
                else if (!response) reject(new Error('No response from server'));
                else resolve(response);
            });
        });
    }

    async updateWorld(worldObj: World): Promise<world.UpdateWorldResponse> {
        const request = new world.UpdateWorldRequest();
        request.world = worldObj.toDTO();
        return new Promise((resolve, reject) => {
            this.client.updateWorld(request, (err, response) => {
                if (err) reject(err);
                else if (!response) reject(new Error('No response from server'));
                else resolve(response);
            });
        });
    }

    async search(entityName: string, query?: SearchQuery, context?: Context): Promise<world.SearchWorldResponse> {
        const request = new world.SearchWorldRequest();
        request.entityName = entityName;
        if (query) {
            request.query = query.toDTO();
        }
        if (context) {
            request.context = context.toDTO();
        }
        return new Promise((resolve, reject) => {
            this.client.search(request, (err, response) => {
                if (err) reject(err);
                else if (!response) reject(new Error('No response from server'));
                else resolve(response);
            });
        });
    }

    async deleteWorld(worldId: string): Promise<world.DeleteWorldResponse> {
        const request = new world.DeleteWorldRequest();
        request.worldId = worldId;
        return new Promise((resolve, reject) => {
            this.client.deleteWorld(request, (err, response) => {
                if (err) reject(err);
                else if (!response) reject(new Error('No response from server'));
                else resolve(response);
            });
        });
    }

    async dropWorldContent(worldId: string): Promise<world.DropWorldContentResponse> {
        const request = new world.DropWorldContentRequest();
        request.worldId = worldId;
        return new Promise((resolve, reject) => {
            this.client.dropWorldContent(request, (err, response) => {
                if (err) reject(err);
                else if (!response) reject(new Error('No response from server'));
                else resolve(response);
            });
        });
    }

    async loadWorldPreset(preset: PresetEnum, user: User, worldObj: World): Promise<world.LoadWorldPresetResponse> {
        const context = new common.ContextDTO();
        context.userId = user.id;
        context.worldId = worldObj.id;
        context.campaignId = "";

        const request = new world.LoadWorldPresetRequest();
        request.preset = serializeEnum(PresetEnum, common.PresetEnumDTO, preset);
        request.context = context;
        return new Promise((resolve, reject) => {
            this.client.loadWorldPreset(request, (err, response) => {
                if (err) reject(err);
                else if (!response) reject(new Error('No response from server'));
                else resolve(response);
            });
        });
    }
}
