import { DataSource } from "typeorm";
import { worldDbOptions } from "./datasource-config";

export const WorldDataSource = new DataSource(worldDbOptions); // should not be used in the code itself, but necessary to run TypeORM migrations
