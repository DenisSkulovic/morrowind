import { sourcesMap } from "../../data-source";
import { sendUnaryData, ServerUnaryCall } from '@grpc/grpc-js';
import { WorldService } from "../../layer_2/service/WorldService";
import { User } from "../../entities/User";
import { CreateWorldRequest, CreateWorldResponse, DeleteWorldRequest, DeleteWorldResponse, DropWorldContentRequest, DropWorldContentResponse, GetWorldRequest, GetWorldResponse, GetWorldsForUserRequest, GetWorldsForUserResponse, LoadWorldPresetRequest, LoadWorldPresetResponse } from "../../proto/world";
import { World } from "../../entities/World";
import { UserService } from "../../layer_2_and_3/service/UserService";
import { DataSourceEnum } from "../../enum/DataSourceEnum";
import { PresetEnum } from "../../enum/PresetEnum";

export class WorldController {
    [key: string]: any

    public async createWorld(
        call: ServerUnaryCall<CreateWorldRequest, CreateWorldResponse>,
        callback: sendUnaryData<CreateWorldResponse>
    ): Promise<void> {
        try {
            console.log(`[WorldController - createWorld] request:`, call.request)
            const { name, description, userId } = call.request
            const userService: UserService = new UserService({ sourcesMap })
            const user: User | null = await userService.findUser(userId, DataSourceEnum.WORLD)
            if (!user) throw new Error(`cannot create world - failed to find user for userId: "${userId}"`)
            const worldService = new WorldService({ sourcesMap })
            const world: World = await worldService.createWorld(name, description, user)
            console.log(`[WorldController - createWorld] world:`, world)
            const response: CreateWorldResponse = { worldId: world.id }
            console.log(`[WorldController - createWorld] response:`, response)
            callback(null, response)
        } catch (err: any) {
            console.error(`[WorldController - createWorld] error:`, err)
            callback(err)
        }
    };

    public async getWorld(
        call: ServerUnaryCall<GetWorldRequest, GetWorldResponse>,
        callback: sendUnaryData<GetWorldResponse>
    ): Promise<void> {
        try {
            console.log(`[WorldController - getWorld] request:`, call.request)
            const { worldId } = call.request
            const worldService: WorldService = new WorldService({ sourcesMap })
            const world: World | null = await worldService.getWorld(worldId)
            if (!world) throw new Error(`failed to find World for dowldId: "${world}"`)
            const response: GetWorldResponse = { world }
            callback(null, response)
        } catch (err: any) {
            console.error(`[WorldController - getWorld] error:`, err)
            callback(err)
        }
    };


    public static async getWorldsForUser(
        call: ServerUnaryCall<GetWorldsForUserRequest, GetWorldsForUserResponse>,
        callback: sendUnaryData<GetWorldsForUserResponse>
    ): Promise<void> {
        try {
            const { userId } = call.request
            const worldService: WorldService = new WorldService({ sourcesMap })
            const worlds: World[] = await worldService.searchWorlds({ userId })
            const response = { worlds } // TODO I need to introduce pagination later
            callback(null, response)
        } catch (err: any) {
            console.error(`[WorldController - getWorldsForUser] error:`, err)
            callback(err)
        }
    };

    public static async deleteWorld(
        call: ServerUnaryCall<DeleteWorldRequest, DeleteWorldResponse>,
        callback: sendUnaryData<DeleteWorldResponse>
    ): Promise<void> {
        try {
            const worldId: string = call.request.worldId
            const worldService: WorldService = new WorldService({ sourcesMap })
            await worldService.dropWorldContents(worldId)
            await worldService.deleteWorld(worldId)
            const response = {} // status 200
            callback(null, response)
        } catch (err: any) {
            console.error(`[WorldController - deleteWorld] error:`, err)
            callback(err)
        }
    };

    public static async dropWorldContent(
        call: ServerUnaryCall<DropWorldContentRequest, DropWorldContentResponse>,
        callback: sendUnaryData<DropWorldContentResponse>
    ): Promise<void> {
        try {
            const worldId: string = call.request.worldId
            const worldService: WorldService = new WorldService({ sourcesMap })
            await worldService.dropWorldContents(worldId)
            const response = {} // status 200
            callback(null, response)
        } catch (err: any) {
            console.error(`[WorldController - dropWorldContent] error:`, err)
            callback(err)
        }
    }

    public static async loadWorldPreset(
        call: ServerUnaryCall<LoadWorldPresetRequest, LoadWorldPresetResponse>,
        callback: sendUnaryData<LoadWorldPresetResponse>
    ): Promise<void> {
        try {
            const preset = call.request.preset
            let presetName: PresetEnum | null = preset === 1 ? PresetEnum.default : preset === 2 ? PresetEnum.morrowind : null // TODO find an elegant solution to this issue
            if (!presetName) throw new Error(`no preset found for preset identifier: ${preset}`)
            const worldId: string = call.request.worldId // TODO these fields should come from middleware
            const userId: string = call.request.userId // TODO these fields should come from middleware, especially this one
            // check preset for existence in the enum
            if (!(preset in Object.values(PresetEnum))) throw new Error(`preset "${preset}" not recognized`)
            const worldService: WorldService = new WorldService({ sourcesMap })
            await worldService.loadPresetIntoWorld(presetName, worldId, userId)
            const response = {} // status 200
            callback(null, response)
        }
        catch (err: any) {
            console.error(`[WorldController - loadWorldPreset] error:`, err)
            callback(err)
        }
    }

}