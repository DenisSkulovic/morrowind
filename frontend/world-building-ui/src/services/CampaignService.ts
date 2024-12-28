import { Context } from "../class/Context";
import { SearchQuery } from "../class/search/SearchQuery";
import { Campaign } from "../class/entities/Campaign";
import { CampaignServiceClient } from "../proto/CampaignServiceClientPb";
import {
    CreateCampaignRequest, CreateCampaignResponse, GetCampaignRequest,
    GetCampaignResponse, UpdateCampaignRequest, UpdateCampaignResponse, SearchCampaignRequest,
    SearchCampaignResponse, DeleteCampaignRequest
} from "../proto/campaign_pb";
import Serializer from "../serialize/serializer";
import { CampaignDTO, ContextDTO, SearchQueryDTO } from "../proto/common_pb";
import { User } from "../class/entities/User";
import { backendURL } from "../config";

export class CampaignService {
    private client: CampaignServiceClient;

    constructor() {
        this.client = new CampaignServiceClient(backendURL);
    }

    async createCampaign(campaignObj: Campaign, userId: string): Promise<Campaign> {
        campaignObj.user = User.build({ id: userId });
        const request = new CreateCampaignRequest();
        request.setCampaign(Serializer.toDTO(campaignObj, new CampaignDTO()));
        return new Promise((resolve, reject) => {
            this.client.createCampaign(request, {}, (err, response: CreateCampaignResponse) => {
                if (err) reject(err);
                else if (!response) reject(new Error('No response from server'));
                else {
                    const campaignDTO = response.getCampaign();
                    const campaignResp = Serializer.fromDTO(campaignDTO, new Campaign())
                    resolve(campaignResp);
                };
            });
        });
    }

    async getCampaign(campaignId: string): Promise<Campaign> {
        const request = new GetCampaignRequest();
        request.setCampaignid(campaignId);
        return new Promise((resolve, reject) => {
            this.client.getCampaign(request, {}, (err, response: GetCampaignResponse) => {
                if (err) reject(err);
                else if (!response) reject(new Error('No response from server'));
                else {
                    const campaignDTO = response.getCampaign();
                    const campaignResp = Serializer.fromDTO(campaignDTO, new Campaign())
                    resolve(campaignResp);
                }
            });
        });
    }

    async updateCampaign(campaignObj: Campaign): Promise<Campaign> {
        const request = new UpdateCampaignRequest();
        request.setCampaign(Serializer.toDTO(campaignObj, new CampaignDTO()));
        return new Promise((resolve, reject) => {
            this.client.updateCampaign(request, {}, (err, response: UpdateCampaignResponse) => {
                if (err) reject(err);
                else if (!response) reject(new Error('No response from server'));
                else {
                    const campaignDTO = response.getCampaign();
                    const campaignResp = Serializer.fromDTO(campaignDTO, new Campaign())
                    resolve(campaignResp);
                }
            });
        });
    }

    async search(query: SearchQuery, context: Context): Promise<Campaign[]> {
        const request: SearchCampaignRequest = new SearchCampaignRequest();
        request.setEntityname("Campaign");
        request.setQuery(Serializer.toDTO(query, new SearchQueryDTO()));
        request.setContext(Serializer.toDTO(context, new ContextDTO()));
        return new Promise((resolve, reject) => {
            this.client.search(request, {}, (err, response: SearchCampaignResponse) => {
                if (err) reject(err);
                else if (!response) reject(new Error('No response from server'));
                else {
                    const campaigns = response.getCampaignsList().map(campaignDTO =>
                        Serializer.fromDTO(campaignDTO, new Campaign())
                    );
                    resolve(campaigns);
                }
            });
        });
    }

    async deleteCampaign(campaignId: string): Promise<void> {
        const request = new DeleteCampaignRequest();
        request.setCampaignid(campaignId);
        return new Promise((resolve, reject) => {
            this.client.deleteCampaign(request, {}, (err, response) => {
                if (err) reject(err);
                else if (!response) reject(new Error('No response from server'));
                else resolve();
            });
        });
    }
}
