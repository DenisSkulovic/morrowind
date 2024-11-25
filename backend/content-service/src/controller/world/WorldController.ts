import { Request, response, Response } from "express";
import { sourcesMap } from "../../data-source";
import { sendUnaryData, ServerUnaryCall } from '@grpc/grpc-js';
import { Account, AccountRoleEnum } from "../../entities/Account";
import { WorldService } from "../../layer_2/service/WorldManager";
import { UserService } from "../../layer_2_and_3/service/UserService";
import { WorldDataSource } from "../../data-source";
import { User } from "../../entities/User";
import { Repository } from "typeorm";
import { CreateWorldRequest, CreateWorldResponse, GetWorldRequest, GetWorldResponse } from "../../proto/world";
import { World } from "../../entities/World";

export class WorldController {
    [key: string]: any

    public async createWorld(
        call: ServerUnaryCall<CreateWorldRequest, CreateWorldResponse>,
        callback: sendUnaryData<CreateWorldResponse>
    ): Promise<void> {
        try {
            console.log(`[WorldController - createWorld] request:`, call.request)
            const { name, description, userId } = call.request
            const userRepository: Repository<User> = WorldDataSource.getRepository(User)
            const users: User[] = await userRepository.find({ where: { id: userId } })
            const user: User | undefined = users[0]
            const worldService = new WorldService({ sourcesMap })

            const world: World = await worldService.createWorld(name, description, user)
            console.log(`[WorldController - createWorld] world:`, world)

            const response: CreateWorldResponse = {
                worldId: world.id,
            }
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
            const worldRepository = WorldDataSource.getRepository(World)
            const worlds: World[] = await worldRepository.find({ where: { id: worldId } })
            const world: World | undefined = worlds[0]
            const response: GetWorldResponse = { world }
            callback(null, response)
        } catch (err: any) {
            console.error(`[WorldController - getWorld] error:`, err)
            callback(err)
        }
    };


    public static async getWorldsForUser(req: Request, res: Response): Promise<void> {
        try {

        } catch (err: any) {
            res.status(400).json({ error: err.message });
        }
    };

    public static async deleteWorld(req: Request, res: Response): Promise<void> {
        try {

        } catch (err: any) {
            res.status(400).json({ error: err.message });
        }
    };

    public static async dropWorldContent(req: Request, res: Response): Promise<void> {
        try {

        } catch (err: any) {
            res.status(400).json({ error: err.message });
        }
    }

    public static async loadWorldPreset(req: Request, res: Response): Promise<void> {
        try {

        }
        catch (err: any) {
            res.status(400).json({ error: err.message });
        }
    }

}