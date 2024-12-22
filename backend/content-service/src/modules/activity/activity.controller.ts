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

@Controller()
export class ActivityController {
    private readonly logger = new Logger(ActivityController.name);

    constructor(
        @Inject('IActivityService') private readonly activityService: ActivityService,
    ) { }

    @GrpcMethod('ActivityService', 'search')
    public async search(request: ActivitySearchRequest): Promise<ActivitySearchResponse> {
        const searchQuery: SearchQuery | undefined = request.search ? SearchQuery.fromDTO(request.search) : undefined;
        const result = await this.activityService.search(
            DataSourceEnum.DATA_SOURCE_WORLD,
            request.userId,
            request.worldId,
            searchQuery
        );
        return {
            activities: result.activities.map((activity: ActivityRecord) => activity.toDTO()),
            totalResults: result.totalResults,
            totalPages: result.totalPages,
            currentPage: result.currentPage
        };
    }

    @GrpcMethod('ActivityService', 'clearAll')
    public async clearAll(request: ActivityClearAllRequest): Promise<ActivityClearAllResponse> {
        await this.activityService.clearAll(DataSourceEnum.DATA_SOURCE_WORLD, request.userId, request.worldId);
        return { success: true };
    }

    @GrpcMethod('ActivityService', 'head')
    public async head(request: ActivityHeadRequest): Promise<ActivityHeadResponse> {
        this.logger.debug(`Received gRPC request:
            Method: ActivityService.head
            Request: ${JSON.stringify(request)}
        `);
        const result = await this.activityService.search(
            DataSourceEnum.DATA_SOURCE_WORLD,
            request.userId,
            request.worldId,
            new SearchQuery(1, request.limit || 10)
        );
        return { activities: result.activities.map(activity => activity.toDTO()) };
    }

    @GrpcMethod('ActivityService', 'create')
    public async create(request: ActivityCreateRequest): Promise<ActivityCreateResponse> {
        this.logger.debug(`Received gRPC request:
            Method: ActivityService.create
            Request: ${JSON.stringify(request)}
        `);
        const result: ActivityRecord[] = await this.activityService.create(
            request.data,
            request.userId,
            request.worldId,
            DataSourceEnum.DATA_SOURCE_WORLD
        );
        return { success: result.length === 1 };
    }
}