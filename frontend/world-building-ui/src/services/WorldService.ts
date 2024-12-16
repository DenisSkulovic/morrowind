import { Context } from "../class/Context";
import { SearchQuery } from "../class/search/SearchQuery";
import { User } from "../class/entities/User";
import { World } from "../class/entities/World";
import { PresetEnum } from "../enum/entityEnums";
import { serializeEnum } from "../enum/util";
import { WorldServiceClient } from "../proto/WorldServiceClientPb";
import {
    CreateWorldRequest, CreateWorldResponse, GetWorldRequest,
    GetWorldResponse, UpdateWorldRequest, UpdateWorldResponse, SearchWorldRequest,
    SearchWorldResponse, DeleteWorldRequest, DropWorldContentRequest,
    DropWorldContentResponse, LoadWorldPresetRequest, LoadWorldPresetResponse
} from "../proto/world_pb";
import { Serializer } from "../serialize/serializer";
import { ContextDTO, PresetEnumDTO, SearchQueryDTO, WorldDTO } from "../proto/common_pb";

export class WorldService {
    private client: WorldServiceClient;

    constructor() {
        this.client = new WorldServiceClient("http://localhost:8080");
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
        console.log(`[WorldService] search`, query, context)
        const request: SearchWorldRequest = new SearchWorldRequest();
        request.setEntityname("World");
        const queryDTO: SearchQueryDTO = Serializer.toDTO(query, new SearchQueryDTO())
        console.log(`[WorldService] search queryDTO`, queryDTO)
        request.setQuery(queryDTO);
        console.log(`[WorldService] search context`, context)
        const contextDTO = Serializer.toDTO(context, new ContextDTO())
        console.log(`[WorldService] search contextDTO`, contextDTO)
        request.setContext(contextDTO);
        console.log(`[WorldService] search request`, request)
        return new Promise((resolve, reject) => {
            this.client.search(request, {}, (err, response: SearchWorldResponse) => {
                console.log(`[WorldService] search response`, response)
                if (err) reject(err);
                else if (!response) reject(new Error('No response from server'));
                else {
                    console.log(`[WorldService] search response worlds`, response.getWorldsList())
                    const worlds = response.getWorldsList().map(worldDTO => {
                        console.log(`[WorldService] search worldDTO`, worldDTO)
                        return Serializer.fromDTO(worldDTO, new World())
                    }
                    );
                    console.log(`[WorldService] search resolve`, worlds)
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

    async loadWorldPreset(preset: PresetEnum, user: User, worldObj: World): Promise<void> {
        const context = new ContextDTO();
        context.setUser(user.id);
        context.setWorld(worldObj.id);
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
}
