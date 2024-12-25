import { Controller, Inject, Logger } from '@nestjs/common';
import { GrpcMethod } from '@nestjs/microservices';
import { ActivityService } from "./activity.service";
import { DataSourceEnum } from "../../common/enum/DataSourceEnum";
import { SearchQuery } from '../../class/search/SearchQuery';
import {
    ActivitySearchRequest,
    ActivitySearchResponse,
    ActivityClearAllRequest,
    ActivityClearAllResponse,
    ActivityHeadRequest,
    ActivityHeadResponse,
    ActivityCreateRequest,
    ActivityCreateResponse
} from '../../proto/activity';
import { ActivityRecord } from './entities/ActivityRecord';
import { Context } from '../../class/Context';
import { Serializer } from '../../serializer';

@Controller()
export class ActivityController {
    private readonly logger = new Logger(ActivityController.name);

    constructor(
        @Inject('IActivityService') private readonly activityService: ActivityService,
    ) { }

    @GrpcMethod('ActivityService', 'search')
    public async search(request: ActivitySearchRequest): Promise<ActivitySearchResponse> {
        const searchQuery: SearchQuery | undefined = request.search ? SearchQuery.fromDTO(request.search) : undefined;
        const context: Context = Serializer.fromDTO(request.context, new Context())
        const userId: string = context.user.id
        const worldId: string | undefined = context.world?.id
        if (!userId) throw new Error("did not find user id in request context")
        if (!worldId) throw new Error("did not find world id in request context")
        const result = await this.activityService.search(
            DataSourceEnum.DATA_SOURCE_WORLD,
            userId,
            worldId,
            searchQuery
        );
        const response = {
            activities: result.activities.map((activity: ActivityRecord) => activity.toDTO()),
            totalResults: result.totalResults,
            totalPages: result.totalPages,
            currentPage: result.currentPage
        }
        console.log('[ActivityController] Search response', response)
        return response;
    }

    @GrpcMethod('ActivityService', 'clearAll')
    public async clearAll(request: ActivityClearAllRequest): Promise<ActivityClearAllResponse> {
        const context: Context = Serializer.fromDTO(request.context, new Context())
        const userId: string = context.user.id
        const worldId: string | undefined = context.world?.id
        if (!userId) throw new Error("did not find user id in request context")
        if (!worldId) throw new Error("did not find world id in request context")
        await this.activityService.clearAll(DataSourceEnum.DATA_SOURCE_WORLD, userId, worldId);
        const response = { success: true }
        console.log('[ActivityController] ClearAll response', response)
        return response;
    }

    @GrpcMethod('ActivityService', 'head')
    public async head(request: ActivityHeadRequest): Promise<ActivityHeadResponse> {
        this.logger.debug(`Received gRPC request:
            Method: ActivityService.head
            Request: ${JSON.stringify(request)}
        `);
        console.log('[ActivityController] Head request.context', request.context)
        const context: Context = Serializer.fromDTO(request.context, new Context())
        console.log('[ActivityController] Context', context)
        const userId: string = context.user.id
        const worldId: string | undefined = context.world?.id
        if (!userId) throw new Error("did not find user id in request context")
        if (!worldId) throw new Error("did not find world id in request context")
        const result = await this.activityService.search(
            DataSourceEnum.DATA_SOURCE_WORLD,
            userId,
            worldId,
            SearchQuery.build({ page: 1, pageSize: request.limit || 10 })
        );
        const response = { activities: result.activities.map(activity => activity.toDTO()) }
        console.log('[ActivityController] Head response', response)
        return response;
    }

    @GrpcMethod('ActivityService', 'create')
    public async create(request: ActivityCreateRequest): Promise<ActivityCreateResponse> {
        this.logger.debug(`Received gRPC request:
            Method: ActivityService.create
            Request: ${JSON.stringify(request)}
        `);
        const context: Context = Serializer.fromDTO(request.context, new Context())
        const userId: string = context.user.id
        const worldId: string | undefined = context.world?.id
        if (!userId) throw new Error("did not find user id in request context")
        if (!worldId) throw new Error("did not find world id in request context")
        const result: ActivityRecord[] = await this.activityService.create(
            request.data,
            userId,
            worldId,
            DataSourceEnum.DATA_SOURCE_WORLD
        );
        const response = { success: result.length === 1 }
        console.log('[ActivityController] Create response', response)
        return response;
    }
}
