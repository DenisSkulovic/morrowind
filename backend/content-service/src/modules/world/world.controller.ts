import { User } from "../user/entities/User";
import {
    CreateWorldRequest, CreateWorldResponse, DeleteWorldRequest,
    DeleteWorldResponse, DropWorldContentRequest, DropWorldContentResponse,
    GetWorldRequest, GetWorldResponse, GetWorldsForUserRequest,
    GetWorldsForUserResponse, LoadWorldPresetRequest, LoadWorldPresetResponse
} from "../../proto/world";
import { World } from "./entities/World";
import { DataSourceEnum } from "../../common/enum/DataSourceEnum";
import { PresetEnum } from "../../common/enum/entityEnums";
import { ContextDTO, PresetEnumDTO } from "../../proto/common";
import { deserializeEnum } from "../../common/enum/util";

import { Controller, Inject } from '@nestjs/common';
import { GrpcMethod } from '@nestjs/microservices';
import { WorldService } from "./world.service";
import { UserService } from "../user/user.service";
import { Context } from "../../types";

@Controller()
export class WorldController {

    constructor(
        @Inject('IWorldService') private readonly worldService: WorldService,
        @Inject('IUserService') private readonly userService: UserService,
    ) { }

    async processContextDTO(contextDTO: ContextDTO, source: DataSourceEnum): Promise<Context> {
        const [user, world] = await Promise.all([
            this.userService.findUser(contextDTO.userId, source),
            this.worldService.findWorld(contextDTO.worldId, contextDTO.userId, source),
        ])
        console.log(`user`, user)
        console.log(`world`, world)
        return { user, world }
    }

    @GrpcMethod('WorldService', 'createWorld')
    public async createWorld(
        request: CreateWorldRequest
    ): Promise<CreateWorldResponse> {
        console.log(`[WorldController - createWorld] request:`, request)
        const { name, description, userId } = request
        const user: User | null = await this.userService.findUser(userId, DataSourceEnum.DATA_SOURCE_WORLD)
        if (!user) throw new Error(`cannot create world - failed to find user for userId: "${userId}"`)
        const world: World = await this.worldService.createWorld(name, description, user)
        console.log(`[WorldController - createWorld] world:`, world)
        const response: CreateWorldResponse = { worldId: world.id }
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



    @GrpcMethod('WorldService', 'getWorldsForUser')
    public async getWorldsForUser(
        request: GetWorldsForUserRequest
    ): Promise<GetWorldsForUserResponse> {
        const { userId } = request
        const worlds: World[] = await this.worldService.searchWorlds({ userId })
        const response = { worlds: worlds.map((world) => world.toDTO()) } // TODO I need to introduce pagination later
        return response
    };

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
        if (typeof request.preset !== "number" || request.preset === PresetEnumDTO.UNRECOGNIZED) throw new Error(`no preset found for preset identifier: ${request.preset}`)
        const source: DataSourceEnum = DataSourceEnum.DATA_SOURCE_WORLD
        const contextDTO: ContextDTO | undefined = request.context
        const context: Context | undefined = contextDTO ? await this.processContextDTO(contextDTO, source) : undefined
        console.log(`@@@context`, context)
        const worldId: string | undefined = context?.world?.id // TODO these fields should come from middleware
        const userId: string | undefined = context?.user?.id // TODO these fields should come from middleware, especially this one
        if (!worldId) throw new Error(`unidentified world id: "${contextDTO?.worldId}"`)
        if (!userId) throw new Error(`unidentified user id: "${contextDTO?.userId}"`)
        const preset: PresetEnum = deserializeEnum(PresetEnumDTO, PresetEnum, request.preset)
        // check preset for existence in the enum
        await this.worldService.loadPresetIntoWorld(preset, worldId, userId)
        const response = {} // status 200
        return response
    }

}