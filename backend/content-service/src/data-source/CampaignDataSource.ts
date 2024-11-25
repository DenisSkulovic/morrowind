import "reflect-metadata";
import { DataSource, DataSourceOptions } from "typeorm";
import { getEnvParam } from "../util/getEnvParam"

const env = {
    db_user: getEnvParam("DATABASE_USER"),
    db_password: getEnvParam("DATABASE_PASSWORD"),
    host_campaign: getEnvParam("DATABASE_HOST__CAMPAIGN"),
    port_campaign: getEnvParam("DATABASE_PORT__CAMPAIGN"),
    db_name_campaign: getEnvParam("DATABASE_NAME__CAMPAIGN")
}

const campaignOptions: DataSourceOptions = {
    type: "postgres",
    host: env.host_campaign,
    port: parseInt(env.port_campaign),
    username: env.db_user,
    password: env.db_password,
    database: env.db_name_campaign,
    synchronize: false, // For development only
    logging: ['error'],
    entities: ["src/entities/**/*.ts"],
    migrations: [
        "src/migration/campaign/*.ts"
    ]
}

export const CampaignDataSource = new DataSource(campaignOptions);