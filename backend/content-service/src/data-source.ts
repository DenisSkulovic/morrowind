import "reflect-metadata";
import { DataSource } from "typeorm";
import {getEnvParam} from "./util/getEnvParam"

export const WorldDataSource = new DataSource({
    type: "postgres",
    host: process.env.DATABASE_HOST__WORLD,
    port: parseInt(getEnvParam("DATABASE_PORT__WORLD")),
    username: getEnvParam("DATABASE_USER"),
    password: getEnvParam("DATABASE_PASSWORD"),
    database: getEnvParam("DATABASE_NAME__WORLD"),
    synchronize: true, // For development only
    logging: true,
    entities: ["src/entities/**/*.ts"],
});
export const CampaignDataSource = new DataSource({
    type: "postgres",
    host: getEnvParam("DATABASE_HOST__CAMPAIGN"),
    port: parseInt(getEnvParam("DATABASE_PORT__CAMPAIGN")),
    username: getEnvParam("DATABASE_USER"),
    password: getEnvParam("DATABASE_PASSWORD"),
    database: getEnvParam("DATABASE_NAME__CAMPAIGN"),
    synchronize: true, // For development only
    logging: true,
    entities: ["src/entities/**/*.ts"],
});