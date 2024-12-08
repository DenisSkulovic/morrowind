import { Box, Button, Typography, Grid } from '@mui/material';
import {
    Person as PersonIcon,
    Inventory as InventoryIcon,
    Psychology as TraitsIcon,
    Groups as FactionsIcon,
    Church as ReligionsIcon
} from '@mui/icons-material';

export const QuickActions = () => {
    const actions = [
        {
            title: 'New Character',
            icon: <PersonIcon />,
            onClick: () => {
                // TODO: Implement navigation to character creation
                console.log('Create new character');
            }
        },
        {
            title: 'New Item',
            icon: <InventoryIcon />,
            onClick: () => {
                // TODO: Implement navigation to item creation
                console.log('Create new item');
            }
        },
        {
            title: 'New Trait',
            icon: <TraitsIcon />,
            onClick: () => {
                // TODO: Implement navigation to trait creation
                console.log('Create new trait');
            }
        },
        {
            title: 'New Faction',
            icon: <FactionsIcon />,
            onClick: () => {
                // TODO: Implement navigation to faction creation
                console.log('Create new faction');
            }
        },
        {
            title: 'New Religion',
            icon: <ReligionsIcon />,
            onClick: () => {
                // TODO: Implement navigation to religion creation
                console.log('Create new religion');
            }
        }
    ];

    return (
        <Box>
            <Typography variant="h6" gutterBottom>
                Quick Actions
            </Typography>
            <Grid container spacing={1}>
                {actions.map((action, index) => (
                    <Grid item xs={12} key={index}>
                        <Button
                            variant="outlined"
                            fullWidth
                            startIcon={action.icon}
                            onClick={action.onClick}
                            sx={{
                                justifyContent: 'flex-start',
                                textAlign: 'left',
                                py: 1
                            }}
                        >
                            {action.title}
                        </Button>
                    </Grid>
                ))}
            </Grid>
        </Box>
    );
};
