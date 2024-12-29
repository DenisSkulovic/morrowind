import { useSelector, useDispatch } from "react-redux";
import { AppDispatch, RootState } from "../store/store";
import { useEffect, useState } from "react";
import { getPresetsThunk, loadWorldPresetThunk, resetPresetLoading } from "../store/slices/worldSlice";
import { RequestStatusEnum } from "../enum/RequestStatusEnum";
import { PresetEnum } from "../enum/entityEnums";
import { useLoading } from "./useLoading";

export const usePresets = () => {
    const dispatch = useDispatch<AppDispatch>();
    const { addLoadingKey, removeLoadingKey } = useLoading();
    const { data, status: getPresetsStatus, error } = useSelector((state: RootState) => state.worlds.presets);
    const isPresetDialogOpen = useSelector((state: RootState) => state.ui.isPresetDialogOpen);
    const { status: loadPresetsStatus, error: loadPresetsError } = useSelector((state: RootState) => state.worlds.presetLoading);
    const [selectedPreset, setSelectedPreset] = useState<PresetEnum | null>(null);

    useEffect(() => {
        if (getPresetsStatus === RequestStatusEnum.IDLE && isPresetDialogOpen) {
            const key = 'presets-getPresets'
            addLoadingKey(key)
            dispatch(getPresetsThunk()).finally(() => {
                removeLoadingKey(key)
            });
        }
    }, [dispatch, isPresetDialogOpen, getPresetsStatus]);

    return { presets: data, selectedPreset, setSelectedPreset, getPresetsStatus, loadPresetsStatus, loadWorldPresetThunk, resetPresetLoading };
}