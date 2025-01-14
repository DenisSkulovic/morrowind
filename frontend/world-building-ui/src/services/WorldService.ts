import { Context } from "../class/Context";
import { SearchQuery } from "../class/search/grpc/SearchQuery";
import { World } from "../class/entities/World";
import { PresetEnum } from "../enum/entityEnums";
import { deserializeEnum, serializeEnum } from "../enum/util";
import { WorldServiceClient } from "../proto/WorldServiceClientPb";
import {
    CreateWorldRequest, CreateWorldResponse, GetWorldRequest,
    GetWorldResponse, UpdateWorldRequest, UpdateWorldResponse, SearchWorldRequest,
    SearchWorldResponse, DeleteWorldRequest, DropWorldContentRequest,
    DropWorldContentResponse, LoadWorldPresetRequest, LoadWorldPresetResponse,
    GetPresetsResponse,
    GetPresetsRequest
} from "../proto/world_pb";
import Serializer from "../serialize/serializer";
import { ContextDTO, PresetEnumDTO, SearchQueryDTO, WorldDTO } from "../proto/entities_pb";
import { contentBackendURL } from "../config";

export class WorldService {
    private client: WorldServiceClient;

    constructor() {
        this.client = new WorldServiceClient(contentBackendURL);
    }

    async createWorld(worldObj: World, userId: string): Promise<World> {
        worldObj.user = userId;
        const request = new CreateWorldRequest();
        request.setWorld(Serializer.toDTO(worldObj, new WorldDTO()));
        return new Promise((resolve, reject) => {
            this.client.createWorld(request, {}, (err, response: CreateWorldResponse) => {
                if (err) reject(err);
                else if (!response) reject(new Error('No response from server'));
                else {
                    const worldDTO = response.getWorld();
                    const worldResp = Serializer.fromDTO(worldDTO, new World())
                    resolve(worldResp);
                };
            });
        });
    }

    async getWorld(worldId: string): Promise<World> {
        const request = new GetWorldRequest();
        request.setWorldid(worldId);
        return new Promise((resolve, reject) => {
            this.client.getWorld(request, {}, (err, response: GetWorldResponse) => {
                if (err) reject(err);
                else if (!response) reject(new Error('No response from server'));
                else {
                    const worldDTO = response.getWorld();
                    const worldResp = Serializer.fromDTO(worldDTO, new World())
                    resolve(worldResp);
                }
            });
        });
    }

    async updateWorld(worldObj: World): Promise<World> {
        const request = new UpdateWorldRequest();
        request.setWorld(Serializer.toDTO(worldObj, new WorldDTO()));
        return new Promise((resolve, reject) => {
            this.client.updateWorld(request, {}, (err, response: UpdateWorldResponse) => {
                if (err) reject(err);
                else if (!response) reject(new Error('No response from server'));
                else {
                    const worldDTO = response.getWorld();
                    const worldResp = Serializer.fromDTO(worldDTO, new World())
                    resolve(worldResp);
                }
            });
        });
    }

    async search(query: SearchQuery, context: Context): Promise<World[]> {
        console.log('[WorldService] search query', query);
        const request: SearchWorldRequest = new SearchWorldRequest();
        console.log('[WorldService] instantiated search request');
        request.setEntityname("World");
        console.log('[WorldService] set entity name');
        const queryDTO: SearchQueryDTO = Serializer.toDTO(query, new SearchQueryDTO())
        console.log('[WorldService] serialized search query', queryDTO);
        request.setQuery(queryDTO);
        console.log('[WorldService] set search query');
        const contextDTO = Serializer.toDTO(context, new ContextDTO())
        console.log('[WorldService] serialized search context', contextDTO);
        request.setContext(contextDTO);
        console.log('[WorldService] set search context');
        console.log('[WorldService] search request', request);
        return new Promise((resolve, reject) => {
            this.client.search(request, {}, (err, response: SearchWorldResponse) => {
                if (err) reject(err);
                else if (!response) reject(new Error('No response from server'));
                else {
                    const worlds = response.getWorldsList().map(worldDTO => {
                        return Serializer.fromDTO(worldDTO, new World())
                    }
                    );
                    resolve(worlds);
                }
            });
        });
    }

    async deleteWorld(worldId: string): Promise<void> {
        const request = new DeleteWorldRequest();
        request.setWorldid(worldId);
        return new Promise((resolve, reject) => {
            this.client.deleteWorld(request, {}, (err, response) => {
                if (err) reject(err);
                else if (!response) reject(new Error('No response from server'));
                else resolve();
            });
        });
    }

    async dropWorldContent(worldId: string): Promise<void> {
        const request = new DropWorldContentRequest();
        request.setWorldid(worldId);
        return new Promise((resolve, reject) => {
            this.client.dropWorldContent(request, {}, (err, response: DropWorldContentResponse) => {
                if (err) reject(err);
                else if (!response) reject(new Error('No response from server'));
                else resolve();
            });
        });
    }

    async loadWorldPreset(preset: PresetEnum, userId: string, worldId: string): Promise<void> {
        const context = new ContextDTO();
        context.setUser(userId);
        context.setWorld(worldId);
        context.setCampaign("");

        const request = new LoadWorldPresetRequest();
        request.setPreset(serializeEnum(PresetEnum, PresetEnumDTO, preset));
        request.setContext(context);
        return new Promise((resolve, reject) => {
            this.client.loadWorldPreset(request, {}, (err, response: LoadWorldPresetResponse) => {
                if (err) reject(err);
                else if (!response) reject(new Error('No response from server'));
                else resolve();
            });
        });
    }

    async getPresets(): Promise<PresetEnum[]> {
        console.log('[WorldService] Getting presets');
        const request = new GetPresetsRequest();
        return new Promise((resolve, reject) => {
            this.client.getPresets(request, {}, (err, response: GetPresetsResponse) => {
                console.log('Response:', response);
                if (err) reject(err);
                else if (!response) reject(new Error('No response from server'));
                else resolve(response.getPresetsList().map(presetDTO => deserializeEnum(PresetEnumDTO, PresetEnum, presetDTO)));
            });
        });
    }
}