import { Box, Typography } from '@mui/material';

interface StatCardProps {
    title: string;
    value: number;
    Icon: React.ComponentType;
}

const StatCard = ({ title, value, Icon }: StatCardProps) => {
    return (
        <Box sx={{
            p: 2,
            bgcolor: 'background.paper',
            borderRadius: 1,
            boxShadow: 1,
            display: 'flex',
            alignItems: 'center'
        }}>
            <Box sx={{
                mr: 2,
                display: 'flex',
                alignItems: 'center',
                color: 'primary.main'
            }}>
                {Icon && <Icon />}
            </Box>
            <Box>
                <Typography variant="h6" component="div">
                    {value}
                </Typography>
                <Typography color="text.secondary" variant="body2">
                    {title}
                </Typography>
            </Box>
        </Box>
    );
};

export default StatCard;