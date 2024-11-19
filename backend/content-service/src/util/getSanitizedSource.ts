import { DataSourceEnum } from "../enum/DataSourceEnum"

export const getSanitizedSource = (rawSource: any) => {
    if (!rawSource) throw new Error("source was not provided")
    if (rawSource === DataSourceEnum.WORLD) return DataSourceEnum.WORLD
    if (rawSource === DataSourceEnum.CAMPAIGN) return DataSourceEnum.CAMPAIGN
    throw new Error(`unrecognized data source: ${rawSource}`)
}