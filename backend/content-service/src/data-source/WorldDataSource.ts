import "reflect-metadata";
import { DataSource, DataSourceOptions } from "typeorm";
import { getEnvParam } from "../util/getEnvParam"

const env = {
    host_world: getEnvParam("DATABASE_HOST__WORLD"),
    port_world: getEnvParam("DATABASE_PORT__WORLD"),
    db_user: getEnvParam("DATABASE_USER"),
    db_password: getEnvParam("DATABASE_PASSWORD"),
    db_name_world: getEnvParam("DATABASE_NAME__WORLD"),
}

const worldOptions: DataSourceOptions = {
    type: "postgres",
    host: env.host_world,
    port: parseInt(env.port_world),
    username: env.db_user,
    password: env.db_password,
    database: env.db_name_world,
    synchronize: false, // For development only
    logging: ['error'],
    entities: ["src/entities/**/*.ts"],
    migrations: [
        "src/migration/world/*.ts"
    ]
}

export const WorldDataSource = new DataSource(worldOptions);