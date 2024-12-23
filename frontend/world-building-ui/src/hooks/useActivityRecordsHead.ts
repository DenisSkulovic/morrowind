import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { AppDispatch, RootState } from "../store/store"
import { ActivityRecord } from "../class/entities/ActivityRecord"
import { getActivityRecordsHead } from "../store/slices/worldSlice"
import { activityRecordsHeadLimit } from "../config/worldDashboard"
import { RequestStatusEnum } from "../enum/RequestStatusEnum"

export const useActivityRecordsHead = (worldId: string, userId: string): {
    activities: ActivityRecord[] | null;
    status: RequestStatusEnum;
    error: string | null;
} => {
    const dispatch = useDispatch<AppDispatch>()
    const { data, error, status } = useSelector((state: RootState) => state.worlds.activityRecordsHead)
    const activities: ActivityRecord[] | null = data
    const limit = activityRecordsHeadLimit

    useEffect(() => {
        if (status === RequestStatusEnum.IDLE) {
            dispatch(getActivityRecordsHead({ worldId, userId, limit }))
        }
    }, [dispatch, worldId, userId, status])

    return { activities, status, error }
}