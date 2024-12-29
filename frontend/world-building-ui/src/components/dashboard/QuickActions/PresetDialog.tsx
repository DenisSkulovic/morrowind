import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Dialog, DialogTitle, DialogContent, Select, MenuItem, DialogActions, Button, SelectChangeEvent } from '@mui/material';
import { usePresets } from '../../../hooks/usePresets';
import { PresetEnum } from '../../../enum/entityEnums';
import { RequestStatusEnum } from '../../../enum/RequestStatusEnum';
import { useAccount } from '../../../hooks/useAccount';
import { Account } from '../../../class/entities/Account';
import { AppDispatch } from '../../../store/store';
import { useLoading } from '../../../hooks/useLoading';
import { setIsPresetDialogOpen } from '../../../store/slices/uiSlice';

interface PresetDialogProps {
    open: boolean;
    worldId: string | null;
}

export const PresetDialog = ({ open, worldId }: PresetDialogProps): JSX.Element => {
    const account: Account | null = useAccount()
    const { addLoadingKey, removeLoadingKey } = useLoading();
    const { presets, selectedPreset, setSelectedPreset, getPresetsStatus, loadPresetsStatus, loadWorldPresetThunk, resetPresetLoading } = usePresets();
    const dispatch = useDispatch<AppDispatch>();
    const handlePresetChange = (event: SelectChangeEvent<PresetEnum>) => {
        setSelectedPreset(event.target.value as PresetEnum);
    };

    const close = () => {
        dispatch(setIsPresetDialogOpen(false))
    }

    const handleLoadPreset = () => {
        if (!worldId) throw new Error('World ID not found');
        if (!account) throw new Error('Account not found');
        if (!selectedPreset) return;
        const key = `presets-loadWorldPreset-${worldId}-${selectedPreset}`
        addLoadingKey(key)
        dispatch(loadWorldPresetThunk({ preset: selectedPreset, userId: account.user, worldId })).finally(() => {
            removeLoadingKey(key)
        });
        close();
    };

    useEffect(() => {
        if (loadPresetsStatus === RequestStatusEnum.SUCCEEDED) {
            dispatch(resetPresetLoading());
        }
    }, [loadPresetsStatus]);

    return (
        <Dialog open={open} onClose={close}>
            <DialogTitle>Select a Preset</DialogTitle>
            <DialogContent>
                <Select
                    value={selectedPreset || ''}
                    onChange={handlePresetChange}
                    fullWidth
                >
                    {presets.map((preset) => (
                        <MenuItem key={preset} value={preset}>
                            {preset}
                        </MenuItem>
                    ))}
                </Select>
            </DialogContent>
            <DialogActions>
                <Button onClick={close} color="primary">
                    Cancel
                </Button>
                <Button
                    disabled={!selectedPreset || loadPresetsStatus === RequestStatusEnum.LOADING}
                    onClick={handleLoadPreset}
                    color="primary"
                >
                    Load
                </Button>
            </DialogActions>
        </Dialog>
    );
};