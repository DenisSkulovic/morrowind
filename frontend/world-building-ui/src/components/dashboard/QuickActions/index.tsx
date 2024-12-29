import React from 'react';
import { Box, Button, Typography, Grid2 } from '@mui/material';
import { PresetDialog } from './PresetDialog';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../../store/store';
import { quickActionsConfig } from '../../../config/dashboardWorld';
import { QuickActionConfig } from '../../../config/dashboardWorld/QuickActionConfig';
import { useRouter } from 'next/router';

interface QuickActionsProps {
    worldId: string | null;
}

export const QuickActions = ({ worldId }: QuickActionsProps): JSX.Element => {
    const dispatch = useDispatch();
    const router = useRouter();
    const isPresetDialogOpen = useSelector((state: RootState) => state.ui.isPresetDialogOpen);

    const quickActions: QuickActionConfig[] = quickActionsConfig.getQuickActions(dispatch, router);

    return (
        <Box>
            <Typography variant="h6" gutterBottom>
                Quick Actions
            </Typography>
            <Grid2 container spacing={1}>
                {quickActions.map((quickAction, index) => (
                    <Grid2 key={index}>
                        <Button
                            variant="outlined"
                            fullWidth
                            startIcon={React.createElement(quickAction.icon)}
                            onClick={quickAction.callback}
                            sx={{
                                justifyContent: 'flex-start',
                                textAlign: 'left',
                                py: 1
                            }}
                        >
                            {quickAction.title}
                        </Button>
                    </Grid2>
                ))}
            </Grid2>

            <PresetDialog open={isPresetDialogOpen} worldId={worldId} />
        </Box>
    );
};
