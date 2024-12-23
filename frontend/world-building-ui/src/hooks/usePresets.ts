import { useSelector, useDispatch } from "react-redux";
import { AppDispatch, RootState } from "../store/store";
import { useEffect, useState } from "react";
import { getPresetsThunk, loadWorldPresetThunk, resetPresetLoading } from "../store/slices/worldSlice";
import { RequestStatusEnum } from "../enum/RequestStatusEnum";
import { PresetEnum } from "../enum/entityEnums";

export const usePresets = () => {
    const dispatch = useDispatch<AppDispatch>();
    const { data, status: getPresetsStatus, error } = useSelector((state: RootState) => state.worlds.presets);
    const isPresetDialogOpen = useSelector((state: RootState) => state.ui.isPresetDialogOpen);
    const { status: loadPresetsStatus, error: loadPresetsError } = useSelector((state: RootState) => state.worlds.presetLoading);
    const [selectedPreset, setSelectedPreset] = useState<PresetEnum | null>(null);

    useEffect(() => {
        if (getPresetsStatus === RequestStatusEnum.IDLE && isPresetDialogOpen) {
            dispatch(getPresetsThunk());
        }
    }, [dispatch, isPresetDialogOpen, getPresetsStatus]);

    return { presets: data, selectedPreset, setSelectedPreset, getPresetsStatus, loadPresetsStatus, loadWorldPresetThunk, resetPresetLoading };
}