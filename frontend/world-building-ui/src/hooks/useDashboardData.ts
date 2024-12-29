import { useSelector, useDispatch } from "react-redux";
import { ContentStat } from "../class/ContentStat";
import { ActivityRecord } from "../class/entities/ActivityRecord";
import { RequestStatusEnum } from "../enum/RequestStatusEnum";

import { useEffect } from "react";
import { ContentStatPlain, refreshActivities, refreshStats, loadDashboardData } from "../store/slices/dashboardSlice";
import { ActivityRecordPlain } from "../store/slices/worldSlice";
import { RootState, AppDispatch } from "../store/store";
import { useSelectorAndBuilder } from "./useSelectorAndBuilder";
import { useLoading } from "./useLoading";

export const useDashboardData = (worldId: string | null, userId: string, showAllStats: boolean) => {
    const dispatch = useDispatch<AppDispatch>();

    const { addLoadingKey, removeLoadingKey } = useLoading();

    const { status: dashboardStatus, error: dashboardError } = useSelector((state: RootState) => state.dashboard);
    const { crud } = useSelector((state: RootState) => state.content)
    const contentCrudStatus: RequestStatusEnum = crud.status
    const { status: presetLoadingStatus } = useSelector((state: RootState) => state.worlds.presetLoading)
    const stats: ContentStat[] | null = useSelectorAndBuilder((state: RootState) => state.dashboard.stats.data, (stats) => stats.map((stat: ContentStatPlain) => ContentStat.build(stat)));
    const { status: statsStatus, error: statsError } = useSelector((state: RootState) => state.dashboard.stats);
    const activityRecords: ActivityRecord[] | null = useSelectorAndBuilder((state: RootState) => state.dashboard.activityRecordsHead.data, (activities) => activities.map((activity: ActivityRecordPlain) => ActivityRecord.build(activity)));
    const { status: activityRecordsStatus, error: activityRecordsError } = useSelector((state: RootState) => state.dashboard.activityRecordsHead);


    // Re-request activities head whenever anything entry-creating happens
    const statusesToWatch_activities: RequestStatusEnum[] = [contentCrudStatus, presetLoadingStatus]
    const statusesToWatch_stats: RequestStatusEnum[] = [contentCrudStatus, presetLoadingStatus]
    statusesToWatch_activities.forEach((watchedStatus: RequestStatusEnum) => {
        useEffect(() => {
            if (dashboardStatus === RequestStatusEnum.SUCCEEDED && worldId) {
                const key = 'dashboard-refreshActivities'
                addLoadingKey(key)
                dispatch(refreshActivities({ worldId, userId: userId })).finally(() => {
                    removeLoadingKey(key)
                })
            }
        }, [dispatch, watchedStatus, worldId, showAllStats])
    })
    statusesToWatch_stats.forEach((watchedStatus: RequestStatusEnum) => {
        useEffect(() => {
            if (dashboardStatus === RequestStatusEnum.SUCCEEDED && worldId) {
                const key = 'dashboard-refreshStats'
                addLoadingKey(key)
                dispatch(refreshStats({ worldId, userId: userId, showAllStats })).finally(() => {
                    removeLoadingKey(key)
                })
            }
        }, [dispatch, watchedStatus, worldId, showAllStats])
    })

    useEffect(() => {
        if (dashboardStatus === RequestStatusEnum.IDLE && worldId) {
            const key = 'dashboard-loadDashboardData'
            addLoadingKey(key)
            dispatch(loadDashboardData({ worldId, userId: userId, showAllStats })).finally(() => {
                removeLoadingKey(key)
            });
        }
    }, [dispatch, dashboardStatus, worldId, showAllStats]);

    return {
        stats,
        statsStatus,
        statsError,
        activityRecords,
        activityRecordsStatus,
        activityRecordsError,
        dashboardStatus,
        dashboardError,
    }
}