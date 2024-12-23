import { Box, Typography } from '@mui/material';
import * as MaterialIcons from '@mui/icons-material';

interface StatCardProps {
    title: string;
    value: number;
    icon: string;
}

const StatCard = ({ title, value, icon }: StatCardProps) => {
    const getIcon = (iconName: string) => {
        const Icon = (MaterialIcons as any)[iconName];
        return Icon ? <Icon /> : null;
    };
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
                {getIcon(icon)}
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