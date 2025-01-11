import { Context } from "../class/Context";
import { ActivityRecord } from "../class/entities/ActivityRecord";
import { SearchQuery } from "../class/search/SearchQuery";
import { contentBackendURL } from "../config";
import { activityRecordsHeadLimit } from "../config/dashboardWorld";
import { ActivityClearAllRequest, ActivityClearAllResponse, ActivityCreateRequest, ActivityCreateResponse, ActivityDTO, ActivityHeadRequest, ActivityHeadResponse, ActivitySearchRequest, ActivitySearchResponse, } from "../proto/activity_pb";
import { ActivityServiceClient } from "../proto/ActivityServiceClientPb";
import { ContextDTO, SearchQueryDTO } from "../proto/entities_pb";
import Serializer from "../serialize/serializer";

export class ActivityRecordsService {
    private client: ActivityServiceClient

    constructor() {
        this.client = new ActivityServiceClient(contentBackendURL);
    }

    async search(query: SearchQuery, context: Context): Promise<{
        activities: ActivityRecord[],
        totalResults: number,
        totalPages: number,
        currentPage: number
    }> {
        const request: ActivitySearchRequest = new ActivitySearchRequest();
        request.setContext(Serializer.toDTO(context, new ContextDTO()));
        const queryDTO: SearchQueryDTO = Serializer.toDTO(query, new SearchQueryDTO())
        request.setSearch(queryDTO);
        return new Promise((resolve, reject) => {
            this.client.search(request, {}, (err, response: ActivitySearchResponse) => {
                if (err) reject(err);
                else if (!response) reject(new Error('No response from server'));
                else {
                    const activities: ActivityRecord[] = response.getActivitiesList().map(dto => {
                        return Serializer.fromDTO(dto, new ActivityRecord())
                    });
                    resolve({
                        activities,
                        totalResults: response.getTotalresults(),
                        totalPages: response.getTotalpages(),
                        currentPage: response.getCurrentpage()
                    });
                }
            });
        });
    }

    async clearAll(context: Context): Promise<boolean> {
        const request: ActivityClearAllRequest = new ActivityClearAllRequest()
        request.setContext(Serializer.toDTO(context, new ContextDTO()))
        return new Promise((resolve, reject) => {
            this.client.clearAll(request, {}, (err, response: ActivityClearAllResponse) => {
                if (err) reject(err)
                else if (!response) reject(new Error("No response from server"))
                else {
                    const bool: boolean = response.getSuccess()
                    resolve(bool)
                }
            })
        })
    };

    async create(activityRecord: ActivityRecord, context: Context): Promise<boolean> {
        const request: ActivityCreateRequest = new ActivityCreateRequest()
        request.setData = Serializer.toDTO(activityRecord, new ActivityDTO)
        return new Promise((resolve, reject) => {
            this.client.create(request, {}, (err, response: ActivityCreateResponse) => {
                if (err) reject(err)
                else if (!response) throw new Error("No response from server")
                else {
                    const success: boolean = response.getSuccess()
                    resolve(success)
                }
            })
        })

    }

    async head(context: Context, limit = activityRecordsHeadLimit): Promise<ActivityRecord[]> {
        const request: ActivityHeadRequest = new ActivityHeadRequest()
        request.setContext(Serializer.toDTO(context, new ContextDTO()))
        request.setLimit(limit)
        return new Promise((resolve, reject) => {
            this.client.head(request, {}, (err, response: ActivityHeadResponse) => {
                if (err) reject(err)
                else if (!response) reject(new Error("No response from server"))
                else {
                    const activityRecords: ActivityRecord[] = response.getActivitiesList().map((dto) => Serializer.fromDTO(dto, new ActivityRecord()))
                    resolve(activityRecords)
                }
            })
        })
    }
}