import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState, AppDispatch } from '../../store/store';
import { fetchWorlds, deleteWorld } from '../../store/slices/worldSlice';
import Link from 'next/link';
import { RequestStatusEnum } from '../../enum/RequestStatusEnum';
import { Box, Button, Card, CardActions, CardContent, CircularProgress, Container, Grid, Typography } from '@mui/material';
import { Add as AddIcon, Edit as EditIcon, Delete as DeleteIcon } from '@mui/icons-material';
import { Account } from '../../dto/Account';
import { World } from '../../dto/World';

const WorldsPage = () => {
    const dispatch = useDispatch<AppDispatch>();
    const { data: worlds, status, error } = useSelector((state: RootState) => state.worlds);
    const account: Account | null = useSelector((state: RootState) => state.account.data);
    if (!account) throw new Error('Account not found');
    const userId: string = account.user;
    useEffect(() => {
        if (status === RequestStatusEnum.IDLE) {
            dispatch(fetchWorlds(userId));
        }
    }, [dispatch, status]);

    const handleDelete = (id: string) => {
        dispatch(deleteWorld(id));
    };

    if (status === RequestStatusEnum.LOADING) {
        return (
            <Box display="flex" justifyContent="center" alignItems="center" minHeight="100vh">
                <CircularProgress />
            </Box>
        );
    }

    if (status === RequestStatusEnum.FAILED) {
        return (
            <Box display="flex" justifyContent="center" alignItems="center" minHeight="100vh">
                <Typography color="error">Error: {error}</Typography>
            </Box>
        );
    }

    return (
        <Container maxWidth="lg">
            <Box py={4}>
                <Box display="flex" justifyContent="space-between" alignItems="center" mb={4}>
                    <Typography variant="h4" component="h1">
                        Worlds
                    </Typography>
                    <Button
                        component={Link}
                        href="/worlds/create"
                        variant="contained"
                        color="primary"
                        startIcon={<AddIcon />}
                    >
                        Create New World
                    </Button>
                </Box>

                <Grid container spacing={3}>
                    {worlds.map((world: World) => (
                        <Grid item xs={12} sm={6} md={4} key={world.id}>
                            <Card>
                                <CardContent>
                                    <Typography variant="h5" component="h2" gutterBottom>
                                        {world.name}
                                    </Typography>
                                    <Typography variant="body2" color="textSecondary">
                                        {world.description}
                                    </Typography>
                                </CardContent>
                                <CardActions>
                                    <Button
                                        component={Link}
                                        href={`/worlds/${world.id}/edit`}
                                        size="small"
                                        startIcon={<EditIcon />}
                                    >
                                        Edit
                                    </Button>
                                    <Button
                                        size="small"
                                        color="error"
                                        startIcon={<DeleteIcon />}
                                        onClick={() => handleDelete(world.id)}
                                    >
                                        Delete
                                    </Button>
                                </CardActions>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
            </Box>
        </Container>
    );
};

export default WorldsPage;
