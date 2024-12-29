import { Serializable } from "../../decorator/serializable.decorator";
import { CampaignService } from "../../services/CampaignService";
import { LooseObject } from "../../types";
import { Context } from "../Context";
import { SearchQuery } from "../search/SearchQuery";
import { Entity } from "../Entity";

export class Campaign extends Entity {
    @Serializable()
    id!: string;

    @Serializable()
    name!: string;

    @Serializable()
    description?: string;

    @Serializable()
    dynamicState?: any;

    @Serializable()
    world!: string;

    @Serializable()
    createdAt!: number;

    @Serializable()
    user!: string;

    public static build(obj: LooseObject): Campaign {
        const campaign = new Campaign();
        Object.assign(campaign, obj);
        return campaign;
    }

    public static async search(filter: SearchQuery, context: Context): Promise<Campaign[]> {
        const campaignService = new CampaignService();
        return campaignService.search(filter, context);
    }

}
