import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Box, Button, Card, CardActions, CardContent, CircularProgress, Container, Grid2, Typography, Link } from '@mui/material';
import { Add as AddIcon, Edit as EditIcon, Delete as DeleteIcon } from '@mui/icons-material';
import { AppDispatch } from '../../store/store';
import { deleteWorldThunk } from '../../store/slices/worldSlice';
import { RequestStatusEnum } from '../../enum/RequestStatusEnum';
import { World } from '../../class/entities/World';
import { Account } from '../../class/entities/Account';
import { routes } from '../../routes';
import { QueryFilter } from '../../class/search/QueryFilter';
import { SearchQuery } from '../../class/search/SearchQuery';
import PageWrapper from '../../components/common/PageWrapper';
import { BreadcrumbItem } from '../../components/common/PageWrapper/Breadcrumbs';
import { useWorlds } from '../../hooks/useWorlds';
import { useAccount } from '../../hooks/useAccount';
import { useLoading } from '../../hooks/useLoading';

const WorldsPage = () => {
    const dispatch = useDispatch<AppDispatch>();
    const { addLoadingKey, removeLoadingKey } = useLoading();

    const account: Account | null = useAccount()
    const userId: string | null = account?.user || null;

    const query: SearchQuery = SearchQuery.build({
        page: 1, pageSize: 100, filters: [
            QueryFilter.build({ field: "user", operator: "eq", value: userId })
        ]
    });
    const { result } = useWorlds(query, userId)

    const handleDelete = (id: string) => {
        addLoadingKey('deleteWorld');
        dispatch(deleteWorldThunk(id)).finally(() => {
            removeLoadingKey('deleteWorld');
        });
    };


    const [customBreadcrumbs, setCustomBreadcrumbs] = useState<BreadcrumbItem[]>([])
    useEffect(() => {
        setCustomBreadcrumbs([
            BreadcrumbItem.build({ label: 'Home', path: routes.home() }),
            BreadcrumbItem.build({ label: 'Worlds' })
        ]);
    }, []);

    return result?.status === RequestStatusEnum.FAILED ? (
        <PageWrapper accountId={account?.id}>
            <Box display="flex" justifyContent="center" alignItems="center" minHeight="100vh">
                <Typography color="error">Error: {result?.error}</Typography>
            </Box>
        </PageWrapper>
    ) : (
        <PageWrapper customBreadcrumbs={customBreadcrumbs} accountId={account?.id}>
            <Container maxWidth="lg">
                <Box py={4}>
                    <Box display="flex" justifyContent="space-between" alignItems="center" mb={4}>
                        <Typography variant="h4" component="h1">
                            Worlds
                        </Typography>
                        <Link href={routes.worldCreate()} underline="none">
                            <Button
                                variant="contained"
                                color="primary"
                                startIcon={<AddIcon />}
                            >
                                Create New World
                            </Button>
                        </Link>
                    </Box>

                    <Grid2 container spacing={3}>
                        {result?.array.map((world: World) => (
                            <Grid2 key={world.id} container={false}>
                                <Card>
                                    <CardContent>
                                        <Link href={routes.worldDashboard(world.id)} underline="hover">
                                            <Typography variant="h5" component="h2" gutterBottom>
                                                {world.name}
                                            </Typography>
                                        </Link>
                                        <Typography variant="body2" color="textSecondary">
                                            {world.description}
                                        </Typography>
                                    </CardContent>
                                    <CardActions>
                                        <Link href={routes.worldEdit(world.id)} underline="none">
                                            <Button
                                                size="small"
                                                startIcon={<EditIcon />}
                                            >
                                                Edit
                                            </Button>
                                        </Link>
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
        </PageWrapper>
    )
};

export default WorldsPage;
