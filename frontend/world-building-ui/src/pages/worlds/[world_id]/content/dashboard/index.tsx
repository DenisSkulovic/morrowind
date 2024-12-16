import { useEffect, useState } from 'react';
import { Box, Grid, Typography, Paper, Grid2 } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { DashboardOverview } from '../../../../../components/dashboard/DashboardOverview';
import { GlobalSearch } from '../../../../../components/dashboard/GlobalSearch';
import { QuickActions } from '../../../../../components/dashboard/QuickActions';
import { RecentActivity } from '../../../../../components/dashboard/RecentActivity';
import { ContentService } from '../../../../../services/ContentService';
import { Context } from '../../../../../class/Context';
import { RootState } from '../../../../../store/store';
import { useRouter } from 'next/router';
import { ContentStat } from '../../../../../class/ContentStat';
import { Account } from '../../../../../class/entities/Account';
import { User } from '../../../../../class/entities/User';
import { World } from '../../../../../class/entities/World';
import { GetContentStatsResponse } from '../../../../../proto/content_pb';
import { useSelectorAndBuilder } from '../../../../../hooks/useSelectorAndBuilder';
import { LooseObject } from '../../../../../types';


export default function Dashboard() {
    const router = useRouter();
    const { id } = router.query;
    const worlds: World[] | null = useSelectorAndBuilder<World[] | null>((state: RootState) => state.worlds.data, worlds => worlds.map((w: LooseObject) => World.build(w)));
    if (!worlds) throw new Error('Worlds not found');
    const world: World | undefined = worlds.find((w) => w.id === id);
    if (!world) throw new Error('World not found');

    const account: Account | null = useSelectorAndBuilder<Account | null>((state: RootState) => state.account.data, account => account ? Account.build(account) : null);
    if (!account) throw new Error('Account not found');

    const dispatch = useDispatch();
    const [contentStats, setContentStats] = useState<ContentStat[]>([]);

    useEffect(() => {
        const context: Context = new Context(
            { id: account.user } as User,
            world,
        );
        const loadDashboardData = async () => {
            const contentService = new ContentService();
            const entityNames: string[] | null = null // TODO limit this to specific entities initially, and full as needed
            const stats: GetContentStatsResponse = await contentService.getContentStats(entityNames, context);
            setContentStats(stats.stats);
        };

        loadDashboardData();
    }, []);

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
