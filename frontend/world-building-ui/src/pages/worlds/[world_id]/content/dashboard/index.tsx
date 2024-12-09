import { useEffect, useState } from 'react';
import { Box, Grid, Typography, Paper, Button } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { DashboardOverview } from '../../../../../components/dashboard/DashboardOverview';
import { GlobalSearch } from '../../../../../components/dashboard/GlobalSearch';
import { QuickActions } from '../../../../../components/dashboard/QuickActions';
import { RecentActivity } from '../../../../../components/dashboard/RecentActivity';
import { ContentService } from '../../../../../services/ContentService';
import { Context } from '../../../../../class/Context';
import { RootState } from '../../../../../store/store';
import { useRouter } from 'next/router';
import { World } from '../../../../../dto/World';
import { User } from '../../../../../dto/User';
import { Account } from '../../../../../dto/Account';
import { GetContentStatsResponse } from '../../../../../proto/content';
import { ContentStat } from '../../../../../class/ContentStat';


export default function Dashboard() {
    const router = useRouter();
    const { id } = router.query;
    const worlds: World[] = useSelector((state: RootState) => state.worlds.data);
    const world: World | undefined = worlds.find((w) => w.id === id);
    if (!world) throw new Error('World not found');

    const account: Account | null = useSelector((state: RootState) => state.account.data);
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
            <Grid container spacing={3}>
                {/* Header */}
                <Grid item xs={12}>
                    <Typography variant="h4" gutterBottom>
                        World Building Dashboard
                    </Typography>
                </Grid>

                {/* Global Search */}
                <Grid item xs={12}>
                    <Paper sx={{ p: 2 }}>
                        <GlobalSearch />
                    </Paper>
                </Grid>

                {/* Quick Actions */}
                <Grid item xs={12} md={4}>
                    <Paper sx={{ p: 2, height: '100%' }}>
                        <QuickActions />
                    </Paper>
                </Grid>

                {/* Content Overview */}
                <Grid item xs={12} md={8}>
                    <Paper sx={{ p: 2 }}>
                        <DashboardOverview stats={contentStats} />
                    </Paper>
                </Grid>

                {/* Recent Activity */}
                <Grid item xs={12}>
                    <Paper sx={{ p: 2 }}>
                        <RecentActivity />
                    </Paper>
                </Grid>
            </Grid>
        </Box>
    );
}
