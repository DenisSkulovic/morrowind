import { User } from "../user/entities/User";
import {
    CreateWorldRequest, CreateWorldResponse, DeleteWorldRequest,
    DeleteWorldResponse, DropWorldContentRequest, DropWorldContentResponse,
    GetPresetsRequest,
    GetPresetsResponse,
    GetWorldRequest, GetWorldResponse,
    LoadWorldPresetRequest, LoadWorldPresetResponse,
    SearchWorldRequest,
    SearchWorldResponse,
    UpdateWorldRequest, UpdateWorldResponse
} from "../../proto/world";
import { World } from "./entities/World";
import { DataSourceEnum } from "../../common/enum/DataSourceEnum";
import { PresetEnum } from "../../common/enum/entityEnums";
import { ContextDTO, PresetEnumDTO, WorldDTO } from "../../proto/common";
import { deserializeEnum, serializeEnum } from "../../common/enum/util";
import { Controller, Inject, Logger } from '@nestjs/common';
import { GrpcMethod } from '@nestjs/microservices';
import { WorldService } from "./world.service";
import { UserService } from "../user/user.service";
import { SearchQuery } from "../../class/search/SearchQuery";
import { Context } from "../../class/Context";
import { ActivityService } from "../activity/activity.service";
import { ActivityRecord } from "../activity/entities/ActivityRecord";

@Controller()
export class WorldController {
    private readonly logger = new Logger(WorldController.name);

    constructor(
        @Inject('IWorldService') private readonly worldService: WorldService,
        @Inject('IUserService') private readonly userService: UserService,
        @Inject('IActivityService') private readonly activityService: ActivityService,
    ) { }

    async processContextDTO(contextDTO: ContextDTO, source: DataSourceEnum): Promise<Context> {
        const [user, world] = await Promise.all([
            this.userService.findUser(contextDTO.user, source),
            this.worldService.findWorld(contextDTO.world, contextDTO.user, source),
        ])
        if (!user) throw new Error(`failed to find User for userId: "${contextDTO.user}"`)
        if (!world) throw new Error(`failed to find World for worldId: "${contextDTO.world}"`)
        console.log(`user`, user)
        console.log(`world`, world)
        return new Context(user, world)
    }

    @GrpcMethod('WorldService', 'createWorld')
    public async createWorld(
        request: CreateWorldRequest
    ): Promise<CreateWorldResponse> {
        console.log(`[WorldController - createWorld] request:`, request)
        const worldDTO: WorldDTO | undefined = request.world
        if (!worldDTO) throw new Error(`failed to find WorldDTO in request`)
        const userId: string | undefined = worldDTO.user
        if (!userId) throw new Error(`failed to find User in WorldDTO`)
        const user: User | null = await this.userService.findUser(userId, DataSourceEnum.DATA_SOURCE_WORLD)
        if (!user) throw new Error(`failed to find User for userId: "${userId}"`)

        const world: World = await this.worldService.createWorld(worldDTO.name, worldDTO.description, user)
        console.log(`[WorldController - createWorld] world:`, world)
        const response: CreateWorldResponse = { world: world.toDTO() }
        console.log(`[WorldController - createWorld] response:`, response)
        return response
    };

    @GrpcMethod('WorldService', 'getWorld')
    public async getWorld(
        request: GetWorldRequest,
    ): Promise<GetWorldResponse> {
        console.log(`[WorldController - getWorld] request:`, request)
        const { worldId } = request
        const world = await this.worldService.getWorld(worldId)
        if (!world) throw new Error(`failed to find World for dowldId: "${world}"`)
        const response: GetWorldResponse = { world: world.toDTO() }
        return response
    }

    @GrpcMethod('WorldService', 'updateWorld')
    public async updateWorld(
        request: UpdateWorldRequest
    ): Promise<UpdateWorldResponse> {
        const worldDTO: WorldDTO | undefined = request.world
        if (!worldDTO) throw new Error(`failed to find WorldDTO in request`)
        const world: World = World.fromDTO(worldDTO)
        const worldRes: World = await this.worldService.updateWorld(world)
        return { world: worldRes.toDTO() }
    }
    @GrpcMethod('WorldService', 'search')
    public async search(
        request: SearchWorldRequest, metadata: any
    ): Promise<SearchWorldResponse> {
        this.logger.debug(`Received gRPC request:
            Method: WorldService.search
            Metadata: ${JSON.stringify(metadata)}
            Request: ${JSON.stringify(request)}
        `);
        console.log(`[WorldController - search] request:`, request)
        const { entityName, query, context } = request;
        if (!context) throw new Error(`context cannot be undefined`);
        if (!query) throw new Error(`query cannot be undefined`);

        const searchQuery = SearchQuery.fromDTO(query);
        const result = await this.worldService.searchWorlds(searchQuery);

        const response = {
            worlds: result.worlds.map(world => world.toDTO()),
            totalResults: result.totalResults,
            totalPages: result.totalPages,
            currentPage: result.currentPage
        }
        console.log(`[WorldController - search] response:`, response)
        return response;
    }

    @GrpcMethod('WorldService', 'deleteWorld')
    public async deleteWorld(
        request: DeleteWorldRequest,
    ): Promise<DeleteWorldResponse> {
        const worldId: string = request.worldId
        await this.worldService.dropWorldContents(worldId)
        await this.worldService.deleteWorld(worldId)
        const response = {} // status 200
        return response
    };

    @GrpcMethod('WorldService', 'dropWorldContent')
    public async dropWorldContent(
        request: DropWorldContentRequest,
    ): Promise<DropWorldContentResponse> {
        const worldId: string = request.worldId
        await this.worldService.dropWorldContents(worldId)
        const response = {} // status 200
        return response
    }

    @GrpcMethod('WorldService', 'loadWorldPreset')
    public async loadWorldPreset(
        request: LoadWorldPresetRequest,
    ): Promise<LoadWorldPresetResponse> {
        console.log(`[WorldController - loadWorldPreset] request.preset`, request.preset)
        if (request.preset === PresetEnumDTO.UNRECOGNIZED) throw new Error(`no preset found for preset identifier: ${request.preset}`)
        const source: DataSourceEnum = DataSourceEnum.DATA_SOURCE_WORLD
        const contextDTO: ContextDTO | undefined = request.context
        const context: Context | undefined = contextDTO ? await this.processContextDTO(contextDTO, source) : undefined
        console.log(`[WorldController - loadWorldPreset] context`, context)
        const worldId: string | undefined = context?.world?.id // TODO these fields should come from middleware
        const userId: string | undefined = context?.user?.id // TODO these fields should come from middleware, especially this one
        if (!worldId) throw new Error(`unidentified world id: "${contextDTO?.world}"`)
        if (!userId) throw new Error(`unidentified user id: "${contextDTO?.user}"`)
        const preset: PresetEnum = deserializeEnum(PresetEnumDTO, PresetEnum, request.preset)
        console.log(`[WorldController - loadWorldPreset] preset`, preset)
        await this.worldService.loadPresetIntoWorld(preset, worldId, userId)

        // record activity
        const newActivityRecord: ActivityRecord = ActivityRecord.build({
            eventName: "WORLD_PRESET_LOADED",
            label: `Loaded world preset: ${preset}`,
            world: { id: worldId },
            user: { id: userId }
        })
        await this.activityService.create(
            newActivityRecord,
            userId,
            worldId,
            source
        )

        const response = {} // status 200
        return response
    }

    @GrpcMethod('WorldService', 'getPresets')
    public async getPresets(
        request: GetPresetsRequest,
    ): Promise<GetPresetsResponse> {
        const presets: PresetEnum[] = Object.values(PresetEnum)
        const response: GetPresetsResponse = { presets: presets.map(preset => serializeEnum(PresetEnum, PresetEnumDTO, preset)) }
        return response
    }

}