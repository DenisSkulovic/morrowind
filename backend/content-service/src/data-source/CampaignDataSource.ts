import { DataSource } from "typeorm";
import { campaignDbOptions } from "./datasource-config";

export const CampaignDataSource = new DataSource(campaignDbOptions); // should not be used in the code itself, but necessary to run TypeORM migrations
