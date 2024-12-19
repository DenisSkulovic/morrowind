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
import { useSelectorAndBuilder } from '../../../../../hooks/useSelectorAndBuilder';
import { LooseObject } from '../../../../../types';
import { loadDashboardData } from '../../../../../store/slices/dashboardSlice';
import { ContentStat } from '../../../../../class/ContentStat';
import { RequestStatusEnum } from '../../../../../enum/RequestStatusEnum';


export default function Dashboard() {
    const router = useRouter();
    const { world_id } = router.query;
    const worlds: World[] | null = useSelectorAndBuilder<World[] | null>((state: RootState) => state.worlds.data, worlds => worlds.map((w: LooseObject) => World.build(w)));
    if (!worlds) throw new Error('Worlds not found');
    const world: World | undefined = worlds.find((w) => w.id === world_id);
    if (!world) throw new Error('World not found');

    const account: Account | null = useSelectorAndBuilder<Account | null>((state: RootState) => state.account.currentAccount.data, account => account ? Account.build(account) : null);
    if (!account) throw new Error('Account not found');

    const { status, error } = useSelector((state: RootState) => state.dashboard);

    const dispatch = useDispatch();

    const contentStats: ContentStat[] | null = useSelector((state: RootState) => state.dashboard.stats);

    useEffect(() => {
        if (status === RequestStatusEnum.IDLE) {
            dispatch(loadDashboardData({ world_id }));
        }
    }, [dispatch, status]);

    return (
        <Box sx={{ flexGrow: 1, p: 3 }}>
            <Grid2 container spacing={3}>
                {/* Header */}
                <Grid2 item xs={12}>
                    <Typography variant="h4" gutterBottom>
                        World Building Dashboard
                    </Typography>
                </Grid2>

                {/* Global Search */}
                <Grid2 item xs={12}>
                    <Paper sx={{ p: 2 }}>
                        <GlobalSearch />
                    </Paper>
                </Grid2>

                {/* Quick Actions */}
                <Grid2 item xs={12} md={4}>
                    <Paper sx={{ p: 2, height: '100%' }}>
                        <QuickActions />
                    </Paper>
                </Grid2>

                {/* Content Overview */}
                <Grid2 item xs={12} md={8}>
                    <Paper sx={{ p: 2 }}>
                        <DashboardOverview stats={contentStats} />
                    </Paper>
                </Grid2 >

                {/* Recent Activity */}
                <Grid2 item xs={12}>
                    <Paper sx={{ p: 2 }}>
                        <RecentActivity />
                    </Paper>
                </Grid2>
            </Grid2>
        </Box>
    );
}
