import { Box, Grid, Grid2, Typography } from '@mui/material';
import * as MaterialIcons from '@mui/icons-material';
import StatCard from './StatCard';
import { ContentStat } from '../../../class/ContentStat';

interface DashboardOverviewProps {
    stats: ContentStat[] | null
}

export const DashboardOverview = ({ stats }: DashboardOverviewProps) => {
    const getIcon = (iconName: string) => {
        const Icon = (MaterialIcons as any)[iconName];
        return Icon ? <Icon /> : null;
    };

    return (
        <Box>
            <Typography variant="h6" gutterBottom>
                Content Overview
            </Typography>
            <Grid2 container spacing={2}>
                {stats && stats.map((stat, index) => (
                    <Grid item xs={12} sm={6} md={4} key={index}>
                        <StatCard
                            title={stat.title}
                            value={stat.count}
                            icon={getIcon(stat.icon)}
                        />
                    </Grid>
                ))}
            </Grid2>
        </Box>
    );
};
