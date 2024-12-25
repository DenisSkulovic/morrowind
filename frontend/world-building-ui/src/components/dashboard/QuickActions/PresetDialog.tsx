import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Dialog, DialogTitle, DialogContent, Select, MenuItem, DialogActions, Button, SelectChangeEvent } from '@mui/material';
import { usePresets } from '../../../hooks/usePresets';
import { PresetEnum } from '../../../enum/entityEnums';
import { RequestStatusEnum } from '../../../enum/RequestStatusEnum';
import { useAccount } from '../../../hooks/useAccount';
import { Account } from '../../../class/entities/Account';
import { AppDispatch } from '../../../store/store';

interface PresetDialogProps {
    open: boolean;
    onClose: () => void;
    worldId: string | null;
}

export const PresetDialog = ({ open, onClose, worldId }: PresetDialogProps): JSX.Element => {
    const account: Account | null = useAccount()
    const { presets, selectedPreset, setSelectedPreset, getPresetsStatus, loadPresetsStatus, loadWorldPresetThunk, resetPresetLoading } = usePresets();
    const dispatch = useDispatch<AppDispatch>();
    const handlePresetChange = (event: SelectChangeEvent<PresetEnum>) => {
        setSelectedPreset(event.target.value as PresetEnum);
    };

    const handleLoadPreset = () => {
        if (!worldId) throw new Error('World ID not found');
        if (!account) throw new Error('Account not found');
        if (!selectedPreset) return;
        dispatch(loadWorldPresetThunk({ preset: selectedPreset, userId: account.user, worldId }));
    };

    useEffect(() => {
        if (loadPresetsStatus === RequestStatusEnum.SUCCEEDED) {
            dispatch(resetPresetLoading());
            onClose();
        }
    }, [loadPresetsStatus]);

    return (
        <Dialog open={open} onClose={onClose}>
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
                <Button onClick={onClose} color="primary">
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