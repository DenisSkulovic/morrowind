import { Box, Typography, Paper, Grid2 } from '@mui/material';
import { DashboardOverview } from '../../../../../components/dashboard/DashboardOverview';
import { GlobalSearch } from '../../../../../components/dashboard/GlobalSearch';
import { QuickActions } from '../../../../../components/dashboard/QuickActions';
import { RecentActivity } from '../../../../../components/dashboard/RecentActivity';
import { useRouter } from 'next/router';
import { Account } from '../../../../../class/entities/Account';
import { useAccount } from '../../../../../hooks/useAccount';
import { useDashboardData } from '../../../../../hooks/useDashboardData';
import { BreadcrumbItem } from '../../../../../components/common/PageWrapper/Breadcrumbs';
import PageWrapper from '../../../../../components/common/PageWrapper';
import { routes } from '../../../../../routes';
import { sanitizeWorldId } from '../../../../../utils/sanitize';

export default function Dashboard() {
    const router = useRouter();
    const worldId: string = sanitizeWorldId(router.query.world_id);

    const account: Account | null = useAccount();
    const userId: string = account?.user || '';

    const {
        stats,
        activityRecords,
    } = useDashboardData(worldId, userId);

    const customBreadcrumbs: BreadcrumbItem[] = [
        BreadcrumbItem.build({ label: 'Worlds', path: routes.worlds() }),
        BreadcrumbItem.build({ label: 'Dashboard' })
    ];

    return (
        <PageWrapper customBreadcrumbs={customBreadcrumbs}>
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
                            <QuickActions worldId={worldId} />
                        </Paper>
                    </Grid2>

                    {/* Content Overview */}
                    <Grid2 component="div">
                        <Paper sx={{ p: 2 }}>
                            <DashboardOverview stats={stats} />
                        </Paper>
                    </Grid2>

                    {/* Recent Activity */}
                    <Grid2 component="div">
                        <Paper sx={{ p: 2 }}>
                            <RecentActivity activityRecords={activityRecords} worldId={worldId} userId={userId} />
                        </Paper>
                    </Grid2>
                </Grid2>
            </Box>
        </PageWrapper>
    );
}
