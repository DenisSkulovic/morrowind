import { useEffect, useState } from 'react';
import { Box, Grid, Typography, Paper, Button } from '@mui/material';
import { useDispatch } from 'react-redux';
import { DashboardOverview } from './components/DashboardOverview';
import { RecentActivity } from './components/RecentActivity';
import { QuickActions } from './components/QuickActions';
import { GlobalSearch } from './components/GlobalSearch';
import { ContentService } from '../../../services/ContentService';

export default function Dashboard() {
    const dispatch = useDispatch();
    const [contentStats, setContentStats] = useState({
        characters: 0,
        items: 0,
        traits: 0,
        factions: 0,
        religions: 0
    });

    useEffect(() => {
        // Load initial dashboard data
        const loadDashboardData = async () => {
            const contentService = new ContentService();
            // Fetch content stats
            // This would be implemented in the ContentService
            const stats = await contentService.getContentStats();
            setContentStats(stats);
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
