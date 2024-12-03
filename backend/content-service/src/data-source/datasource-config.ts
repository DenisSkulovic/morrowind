import { DataSource, DataSourceOptions } from 'typeorm';
import { DataSourceEnum } from '../common/enum/DataSourceEnum';
import { getEnvParam } from '../common/util/getEnvParam';
import { join } from 'path';

const env = {
    db_user: getEnvParam("DATABASE_USER"),
    db_password: getEnvParam("DATABASE_PASSWORD"),
    host_world: getEnvParam("DATABASE_HOST__WORLD"),
    port_world: getEnvParam("DATABASE_PORT__WORLD"),
    db_name_world: getEnvParam("DATABASE_NAME__WORLD"),
    host_campaign: getEnvParam("DATABASE_HOST__CAMPAIGN"),
    port_campaign: getEnvParam("DATABASE_PORT__CAMPAIGN"),
    db_name_campaign: getEnvParam("DATABASE_NAME__CAMPAIGN")
}

const entityPaths = [
    join(__dirname, '../modules/content/entities/**/*.{js,ts}'),
    join(__dirname, '../modules/account/entities/*.{js,ts}'),
    join(__dirname, '../modules/user/entities/*.{js,ts}'),
    join(__dirname, '../modules/world/entities/*.{js,ts}'),
    join(__dirname, '../modules/campaign/entities/*.{js,ts}'),
]

export const worldDbOptions: DataSourceOptions = {
    type: "postgres",
    host: env.host_world,
    port: parseInt(env.port_world),
    username: env.db_user,
    password: env.db_password,
    database: env.db_name_world,
    synchronize: false, // For development only
    logging: ['error'],
    entities: entityPaths,
    migrations: [
        join(__dirname, '../migration/world/*.{js,ts}'),
    ],
}


export const campaignDbOptions: DataSourceOptions = {
    type: "postgres",
    host: env.host_campaign,
    port: parseInt(env.port_campaign),
    username: env.db_user,
    password: env.db_password,
    database: env.db_name_campaign,
    synchronize: false, // For development only
    logging: ['error'],
    entities: entityPaths,
    migrations: [
        join(__dirname, '../campaign/world/*.{js,ts}'),
    ],
}


export function getDataSourceOptions(source: DataSourceEnum): DataSourceOptions {
    switch (source) {
        case DataSourceEnum.DATA_SOURCE_WORLD:
            return worldDbOptions;
        case DataSourceEnum.DATA_SOURCE_CAMPAIGN:
            return campaignDbOptions;
        default:
            throw new Error(`Unknown data source: ${source}`);
    }
}