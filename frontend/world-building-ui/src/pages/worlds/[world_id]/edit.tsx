import { useEffect } from 'react';
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

const EditWorldPage = () => {
    const router = useRouter();
    const { world_id } = router.query;

    const dispatch = useDispatch<AppDispatch>();

    const worlds: World[] | null = useSelectorAndBuilder((state: RootState) => state.worlds.searchedWorlds.data, worlds => worlds ? worlds.map((world: LooseObject) => World.build(world)) : null);
    const world: World | undefined = worlds?.find((w) => w.id === world_id);

    const account: Account | null = useSelectorAndBuilder((state: RootState) => state.account.currentAccount.data, account => account ? Account.build(account) : null);
    if (!account) throw new Error('Account not found');
    const userId: string = account.user;

    useEffect(() => {
        if (!world_id) return;
        const user: User = User.build({ id: userId });
        const context: Context = Context.build({ user });
        const userFilter: QueryFilter = QueryFilter.build({ field: "user", operator: "eq", value: userId });
        const worldFilter: QueryFilter = QueryFilter.build({ field: "id", operator: "eq", value: world_id });
        const query = SearchQuery.build({ page: 1, pageSize: 100, filters: [userFilter, worldFilter] });
        dispatch(searchWorldsThunk({ query, context }));
    }, [world_id, dispatch, userId]);

    const formFields: FormFieldDefinition[] = getFormFields(World.prototype);

    const handleSubmit = async (worldPlain: WorldPlain) => {
        if (!world) throw new Error('World not found');
        await dispatch(updateWorldThunk({ ...world.toPlainObj(), ...worldPlain }));
        router.push(routes.worlds());
    };

    return (
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
    );
};

export default EditWorldPage;
