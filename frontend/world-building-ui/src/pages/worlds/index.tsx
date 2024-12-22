import Link from 'next/link';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState, AppDispatch } from '../../store/store';
import { deleteWorld, searchWorlds } from '../../store/slices/worldSlice';
import { RequestStatusEnum } from '../../enum/RequestStatusEnum';
import { Box, Button, Card, CardActions, CardContent, CircularProgress, Container, Grid2, Typography } from '@mui/material';
import { Add as AddIcon, Edit as EditIcon, Delete as DeleteIcon } from '@mui/icons-material';
import { World } from '../../class/entities/World';
import { Account } from '../../class/entities/Account';
import { routes } from '../../routes';
import { useSelectorAndBuilder } from '../../hooks/useSelectorAndBuilder';
import { Context } from '../../class/Context';
import { User } from '../../class/entities/User';
import { QueryFilter } from '../../class/search/QueryFilter';
import { SearchQuery } from '../../class/search/SearchQuery';

const WorldsPage = () => {
    const dispatch = useDispatch<AppDispatch>();
    const { status: searchedWorldsStatus, error: searchedWorldsError } = useSelector((state: RootState) => state.worlds.searchedWorlds);
    const worlds: World[] = useSelectorAndBuilder<World[]>((state: RootState) => state.worlds.searchedWorlds.data, worlds => worlds.map(World.build)) || [];
    const account: Account | null = useSelectorAndBuilder<Account>((state: RootState) => state.account.currentAccount.data, Account.build);
    if (!account) throw new Error("account cannot be null")
    const userId: string = account.user;
    useEffect(() => {
        if (searchedWorldsStatus === RequestStatusEnum.IDLE) {
            const user: User = User.build({ id: userId });
            const context: Context = Context.build({ user });
            const filter: QueryFilter = QueryFilter.build({ field: "user", operator: "eq", value: userId });
            const query: SearchQuery = SearchQuery.build({ page: 1, pageSize: 100, filters: [filter] });
            dispatch(searchWorlds({ query, context }));
        }
    }, [dispatch, searchedWorldsStatus]);

    const handleDelete = (id: string) => {
        dispatch(deleteWorld(id));
    };

    if (searchedWorldsStatus === RequestStatusEnum.LOADING) {
        return (
            <Box display="flex" justifyContent="center" alignItems="center" minHeight="100vh">
                <CircularProgress />
            </Box>
        );
    }

    if (searchedWorldsStatus === RequestStatusEnum.FAILED) {
        return (
            <Box display="flex" justifyContent="center" alignItems="center" minHeight="100vh">
                <Typography color="error">Error: {searchedWorldsError}</Typography>
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
                        href={routes.worldCreate()}
                        variant="contained"
                        color="primary"
                        startIcon={<AddIcon />}
                    >
                        Create New World
                    </Button>
                </Box>

                <Grid2 container spacing={3}>
                    {worlds.map((world: World) => (
                        <Grid2 key={world.id} container={false}>
                            <Card>
                                <CardContent>
                                    <Link href={routes.contentDashboard(world.id)}>
                                        <Typography variant="h5" component="h2" gutterBottom>
                                            {world.name}
                                        </Typography>
                                    </Link>
                                    <Typography variant="body2" color="textSecondary">
                                        {world.description}
                                    </Typography>
                                </CardContent>
                                <CardActions>
                                    <Button
                                        component={Link}
                                        href={routes.worldEdit(world.id)}
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
                        </Grid2>
                    ))}
                </Grid2>
            </Box>
        </Container>
    );
};

export default WorldsPage;
