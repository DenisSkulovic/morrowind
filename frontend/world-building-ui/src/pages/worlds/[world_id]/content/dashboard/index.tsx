import { useEffect } from 'react';
import { Box, Typography, Paper, Grid2 } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { DashboardOverview } from '../../../../../components/dashboard/DashboardOverview';
import { GlobalSearch } from '../../../../../components/dashboard/GlobalSearch';
import { QuickActions } from '../../../../../components/dashboard/QuickActions';
import { RecentActivity } from '../../../../../components/dashboard/RecentActivity';
import { RootState } from '../../../../../store/store';
import { useRouter } from 'next/router';
import { Account } from '../../../../../class/entities/Account';
import { World } from '../../../../../class/entities/World';
import { loadDashboardData } from '../../../../../store/slices/dashboardSlice';
import { ContentStat } from '../../../../../class/ContentStat';
import { RequestStatusEnum } from '../../../../../enum/RequestStatusEnum';
import { useWorld } from '../../../../../hooks/useWorld';
import { useAccount } from '../../../../../hooks/useAccount';

export default function Dashboard() {
    const router = useRouter();
    const { world_id } = router.query;
    if (typeof world_id !== 'string') throw new Error('World ID is required');

    const account: Account | null = useAccount();
    const world: World | null = useWorld(world_id, account?.id || null);

    const { status, error } = useSelector((state: RootState) => state.dashboard);

    const dispatch = useDispatch();


    useEffect(() => {
        if (status === RequestStatusEnum.IDLE) {
            loadDashboardData({ world_id });
        }
    }, [dispatch, status]);
    const contentStats: ContentStat[] | null = useSelector((state: RootState) => state.dashboard.stats);

    return (
        <Box sx={{ flexGrow: 1, p: 3 }}>
            <Grid2 container spacing={3}>
                {/* Header */}
                <Grid2 container={false}>
                    <Typography variant="h4" gutterBottom>
                        World Building Dashboard
                    </Typography>
                </Grid2>

                {/* Global Search */}
                <Grid2 component="div">
                    <Paper sx={{ p: 2 }}>
                        <GlobalSearch />
                    </Paper>
                </Grid2>

                {/* Quick Actions */}
                <Grid2 component="div" >
                    <Paper sx={{ p: 2, height: '100%' }}>
                        <QuickActions worldId={world_id} />
                    </Paper>
                </Grid2>

                {/* Content Overview */}
                <Grid2 component="div">
                    <Paper sx={{ p: 2 }}>
                        <DashboardOverview stats={contentStats} />
                    </Paper>
                </Grid2>

                {/* Recent Activity */}
                <Grid2 component="div">
                    <Paper sx={{ p: 2 }}>
                        <RecentActivity />
                    </Paper>
                </Grid2>
            </Grid2>
        </Box>
    );
}
