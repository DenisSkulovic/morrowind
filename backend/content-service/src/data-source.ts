import "reflect-metadata";
import { DataSource } from "typeorm";
import { getEnvParam } from "./util/getEnvParam"
import { DataSourceEnum } from "./enum/DataSourceEnum";

const env = {
    host_world: getEnvParam("DATABASE_HOST__WORLD"),
    port_world: getEnvParam("DATABASE_PORT__WORLD"),
    db_user: getEnvParam("DATABASE_USER"),
    db_password: getEnvParam("DATABASE_PASSWORD"),
    db_name_world: getEnvParam("DATABASE_NAME__WORLD"),
    host_campaign: getEnvParam("DATABASE_HOST__CAMPAIGN"),
    port_campaign: getEnvParam("DATABASE_PORT__CAMPAIGN"),
    db_name_campaign: getEnvParam("DATABASE_NAME__CAMPAIGN")
}

export const WorldDataSource = new DataSource({
    type: "postgres",
    host: env.host_world,
    port: parseInt(env.port_world),
    username: env.db_user,
    password: env.db_password,
    database: env.db_name_world,
    synchronize: true, // For development only
    logging: ['query', 'schema', 'error'],
    entities: ["src/entities/**/*.ts"],
});
export const CampaignDataSource = new DataSource({
    type: "postgres",
    host: env.host_campaign,
    port: parseInt(env.port_campaign),
    username: env.db_user,
    password: env.db_password,
    database: env.db_name_campaign,
    synchronize: true, // For development only
    logging: ['query', 'schema', 'error'],
    entities: ["src/entities/**/*.ts"],
});

export const sourcesMap = new Map([
    [DataSourceEnum.WORLD, WorldDataSource],
    [DataSourceEnum.CAMPAIGN, CampaignDataSource]
])