import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { AppDispatch, RootState } from '../../../store/store';
import { searchWorldsThunk, updateWorldThunk, WorldPlain } from '../../../store/slices/worldSlice';
import { useRouter } from 'next/router';
import { Account } from '../../../class/entities/Account';
import { World } from '../../../class/entities/World';
import { useSelectorAndBuilder } from '../../../hooks/useSelectorAndBuilder';
import { LooseObject } from '../../../types';
import { routes } from '../../../routes';
import { Box, Container, Typography } from '@mui/material';
import { User } from '../../../class/entities/User';
import { Context } from '../../../class/Context';
import { SearchQuery } from '../../../class/search/SearchQuery';
import { QueryFilter } from '../../../class/search/QueryFilter';
import { FormFieldDefinition, getFormFields } from '../../../decorator/form-field.decorator';
import DynamicForm from '../../../components/common/DynamicForm';
import PageWrapper from '../../../components/common/PageWrapper';
import { BreadcrumbItem } from '../../../components/common/PageWrapper/Breadcrumbs';
import { useWorldId } from '../../../hooks/query';

const EditWorldPage = () => {
    const router = useRouter();
    const worldId: string | null = useWorldId(router.query);

    const dispatch = useDispatch<AppDispatch>();

    const worlds: World[] | null = useSelectorAndBuilder((state: RootState) => state.worlds.searchedWorlds.data, worlds => worlds ? worlds.map((world: LooseObject) => World.build(world)) : null);
    const world: World | undefined = worlds?.find((w) => w.id === worldId);

    const account: Account | null = useSelectorAndBuilder((state: RootState) => state.account.currentAccount.data, account => account ? Account.build(account) : null);
    if (!account) throw new Error('Account not found');
    const userId: string = account.user;

    useEffect(() => {
        if (!worldId) return;
        const user: User = User.build({ id: userId });
        const context: Context = Context.build({ user });
        const userFilter: QueryFilter = QueryFilter.build({ field: "user", operator: "eq", value: userId });
        const worldFilter: QueryFilter = QueryFilter.build({ field: "id", operator: "eq", value: worldId });
        const query = SearchQuery.build({ page: 1, pageSize: 100, filters: [userFilter, worldFilter] });
        dispatch(searchWorldsThunk({ query, context }));
    }, [worldId, dispatch, userId]);

    const formFields: FormFieldDefinition[] = getFormFields(World.prototype);

    const handleSubmit = async (worldPlain: WorldPlain) => {
        if (!world) throw new Error('World not found');
        await dispatch(updateWorldThunk({ ...world.toPlainObj(), ...worldPlain }));
        router.push(routes.worlds());
    };

    const [customBreadcrumbs, setCustomBreadcrumbs] = useState<BreadcrumbItem[]>([])
    useEffect(() => {
        setCustomBreadcrumbs([
            BreadcrumbItem.build({ label: 'Home', path: routes.home() }),
            BreadcrumbItem.build({ label: 'Worlds', path: routes.worlds() }),
            BreadcrumbItem.build({ label: 'Edit World' }),
        ]);
    }, [worldId]);

    return (
        <PageWrapper customBreadcrumbs={customBreadcrumbs} accountId={account?.id} worldId={worldId || ''}>
            <Container maxWidth="lg">
                <Box py={4}>
                    <Typography variant="h4" component="h1" gutterBottom>
                        Edit World
                    </Typography>
                    <Box sx={{ maxWidth: 600 }}>
                        {world && (
                            <DynamicForm
                                fields={formFields}
                                initialValues={world.toPlainObj()}
                                onSubmit={handleSubmit}
                            />
                        )}
                    </Box>
                </Box>
            </Container>
        </PageWrapper>
    );
};

export default EditWorldPage;
