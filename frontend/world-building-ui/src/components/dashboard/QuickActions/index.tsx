import React from 'react';
import { Box, Button, Typography, Grid2 } from '@mui/material';
import {
    Settings as PresetIcon,
    Person as PersonIcon,
    Inventory as InventoryIcon,
    Psychology as TraitsIcon,
    Groups as FactionsIcon,
    Church as ReligionsIcon
} from '@mui/icons-material';
import { PresetDialog } from './PresetDialog';
import { useDispatch, useSelector } from 'react-redux';
import { setIsPresetDialogOpen } from '../../../store/slices/uiSlice';
import { RootState } from '../../../store/store';

interface QuickActionsProps {
    worldId: string | null;
}

export const QuickActions = ({ worldId }: QuickActionsProps): JSX.Element => {
    const dispatch = useDispatch();
    const isPresetDialogOpen = useSelector((state: RootState) => state.ui.isPresetDialogOpen);

    const handleOpenPresetDialog = () => dispatch(setIsPresetDialogOpen(true));
    const handleClosePresetDialog = () => dispatch(setIsPresetDialogOpen(false));

    const actions = [
        {
            title: 'Load Preset',
            icon: <PresetIcon />,
            onClick: handleOpenPresetDialog
        },
        {
            title: 'New Character',
            icon: <PersonIcon />,
            onClick: () => {
                // TODO: Implement navigation to character creation
                console.log('Create new character');
            }
        },
        {
            title: 'New Item',
            icon: <InventoryIcon />,
            onClick: () => {
                // TODO: Implement navigation to item creation
                console.log('Create new item');
            }
        },
        {
            title: 'New Trait',
            icon: <TraitsIcon />,
            onClick: () => {
                // TODO: Implement navigation to trait creation
                console.log('Create new trait');
            }
        },
        {
            title: 'New Faction',
            icon: <FactionsIcon />,
            onClick: () => {
                // TODO: Implement navigation to faction creation
                console.log('Create new faction');
            }
        },
        {
            title: 'New Religion',
            icon: <ReligionsIcon />,
            onClick: () => {
                // TODO: Implement navigation to religion creation
                console.log('Create new religion');
            }
        }
    ];

    return (
        <Box>
            <Typography variant="h6" gutterBottom>
                Quick Actions
            </Typography>
            <Grid2 container spacing={1}>
                {actions.map((action, index) => (
                    <Grid2 key={index}>
                        <Button
                            variant="outlined"
                            fullWidth
                            startIcon={action.icon}
                            onClick={action.onClick}
                            sx={{
                                justifyContent: 'flex-start',
                                textAlign: 'left',
                                py: 1
                            }}
                        >
                            {action.title}
                        </Button>
                    </Grid2>
                ))}
            </Grid2>

            <PresetDialog open={isPresetDialogOpen} onClose={handleClosePresetDialog} worldId={worldId} />
        </Box>
    );
};
