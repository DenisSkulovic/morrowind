import { usePresets } from '../../../hooks/usePresets';
import { PresetEnum } from '../../../enum/entityEnums';
import { Dialog, DialogTitle, DialogContent, Select, MenuItem, DialogActions, Button, SelectChangeEvent } from '@mui/material';
import React, { useEffect } from 'react';
import { RequestStatusEnum } from '../../../enum/RequestStatusEnum';
import { useAccount } from '../../../hooks/useAccount';
import { useWorld } from '../../../hooks/useWorld';
import { Account } from '../../../class/entities/Account';
import { World } from '../../../class/entities/World';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../../../store/store';

interface PresetDialogProps {
    open: boolean;
    onClose: () => void;
    worldId: string;
}

export const PresetDialog = ({ open, onClose, worldId }: PresetDialogProps): JSX.Element => {
    const account: Account | null = useAccount()
    const world: World | null = useWorld(worldId, account?.user || null)
    const { presets, selectedPreset, setSelectedPreset, getPresetsStatus, loadPresetsStatus, loadWorldPresetThunk, resetPresetLoading } = usePresets();
    const dispatch = useDispatch<AppDispatch>();
    const handlePresetChange = (event: SelectChangeEvent<PresetEnum>) => {
        setSelectedPreset(event.target.value as PresetEnum);
    };

    const handleLoadPreset = () => {
        if (!account) throw new Error('Account not found');
        if (!selectedPreset) return;
        dispatch(loadWorldPresetThunk({ preset: selectedPreset, userId: account.user, worldId: worldId }));
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