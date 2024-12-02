import { DataSourceEnum } from "../enum/DataSourceEnum"

export const getSanitizedSource = (rawSource: any) => {
    if (!rawSource) throw new Error("source was not provided")
    if (rawSource === DataSourceEnum.DATA_SOURCE_WORLD) return DataSourceEnum.DATA_SOURCE_WORLD
    if (rawSource === DataSourceEnum.DATA_SOURCE_CAMPAIGN) return DataSourceEnum.DATA_SOURCE_CAMPAIGN
    throw new Error(`unrecognized data source: ${rawSource}`)
}