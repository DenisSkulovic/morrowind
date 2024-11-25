import "reflect-metadata";
import { DataSourceEnum } from "../enum/DataSourceEnum";
import { WorldDataSource } from "./WorldDataSource";
import { CampaignDataSource } from "./CampaignDataSource";

export const sourcesMap = new Map([
    [DataSourceEnum.WORLD, WorldDataSource],
    [DataSourceEnum.CAMPAIGN, CampaignDataSource]
])