import { Box, Grid2, Typography } from '@mui/material';
import StatCard from './StatCard';
import { ContentStat } from '../../../class/ContentStat';
import { entityToIcon } from '../../../config/worldDashboard';

interface DashboardOverviewProps {
    stats: ContentStat[] | null
}

export const DashboardOverview = ({ stats }: DashboardOverviewProps) => {
    return (
        <Box>
            <Typography variant="h6" gutterBottom>
                Content Overview
            </Typography>
            <Grid2 container spacing={2}>
                {stats && stats.map((stat, index) => (
                    <Grid2 key={index}>
                        <StatCard
                            title={stat.title}
                            value={stat.count || 0}
                            Icon={entityToIcon[stat.title as keyof typeof entityToIcon]}
                        />
                    </Grid2>
                ))}
            </Grid2>
        </Box>
    );
};
