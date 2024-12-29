import { Box, Grid2, Typography } from '@mui/material';
import StatCard from './StatCard';
import { ContentStat } from '../../../class/ContentStat';
import { dashboardConfig } from '../../../config/dashboardWorld';
import { routes } from '../../../routes';
import { ContentOverviewConfig } from '../../../config/dashboardWorld/DashboardConfig';

interface DashboardOverviewProps {
    stats: ContentStat[] | null
    showAll: boolean
    toggleShowAll: () => void
    worldId: string | null
}

export const DashboardOverview = ({ stats, showAll, toggleShowAll, worldId }: DashboardOverviewProps) => {

    return (
        <Box>
            <Typography variant="h6" gutterBottom>
                Content Overview
            </Typography>
            <Grid2 container spacing={2}>
                {stats && stats.map((stat: ContentStat, index: number) => {
                    const config: ContentOverviewConfig = dashboardConfig.getContentOverviewConfig(stat.entity);
                    return (
                        <Grid2 key={index}>
                            <StatCard
                                title={stat.title}
                                value={stat.count || 0}
                                Icon={config.icon}
                                link={worldId ? routes.contentEntity(worldId, stat.entity) : '#'}
                            />
                        </Grid2>
                    )
                })}
                <Grid2>
                    <Box display="flex" justifyContent="center" mt={2}>
                        <Typography
                            variant="button"
                            sx={{
                                cursor: 'pointer',
                                color: 'primary.main',
                                '&:hover': {
                                    textDecoration: 'underline'
                                }
                            }}
                            onClick={() => toggleShowAll()}
                        >
                            {showAll ? 'Show Less' : 'Show More'}
                        </Typography>
                    </Box>
                </Grid2>
            </Grid2>
        </Box>
    );
};
