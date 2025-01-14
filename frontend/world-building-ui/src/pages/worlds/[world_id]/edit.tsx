import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { AppDispatch, RootState } from '../../../store/store';
import { searchWorldsThunk, updateWorldThunk, WorldPlain } from '../../../store/slices/worldSlice';
import { useRouter } from 'next/router';
import { Account } from '../../../class/entities/Account';
import { World } from '../../../class/entities/World';
import { LooseObject } from '../../../types';
import { routes } from '../../../routes';
import { Box, Container, Typography } from '@mui/material';
import { User } from '../../../class/entities/User';
import { Context } from '../../../class/Context';
import { SearchQuery } from '../../../class/search/grpc/SearchQuery';
import { QueryFilter } from '../../../class/search/grpc/QueryFilter';
import { DynamicFormErrors, FormFieldDefinition, getFormFields, validateForm } from '../../../decorator/form-field.decorator';
import DynamicForm from '../../../components/common/DynamicForm';
import PageWrapper from '../../../components/common/PageWrapper';
import { BreadcrumbItem } from '../../../components/common/PageWrapper/Breadcrumbs';
import { useWorldId } from '../../../hooks/query';
import { useAccount } from '../../../hooks/useAccount';
import { useWorld } from '../../../hooks/useWorld';
import { useLoading } from '../../../hooks/useLoading';
const EditWorldPage = () => {
    const router = useRouter();
    const worldId: string | null = useWorldId(router.query);

    const { addLoadingKey, removeLoadingKey } = useLoading();

    const dispatch = useDispatch<AppDispatch>();

    const account: Account | null = useAccount();
    const world: World | null = useWorld(worldId, account?.user || null);

    const [formData, setFormData] = useState<WorldPlain>({});
    const [errors, setErrors] = useState<DynamicFormErrors>({});
    const [showErrors, setShowErrors] = useState<boolean>(false);

    useEffect(() => {
        const userId: string = account?.user || '';
        if (!userId) throw new Error('Account not found');
        if (!worldId) return;
        const user: User = User.build({ id: userId });
        const context: Context = Context.build({ user });
        const userFilter: QueryFilter = QueryFilter.build({ field: "user", operator: "eq", value: userId });
        const worldFilter: QueryFilter = QueryFilter.build({ field: "id", operator: "eq", value: worldId });
        const query = SearchQuery.build({ page: 1, pageSize: 100, filters: [userFilter, worldFilter] });
        addLoadingKey('searchWorlds');
        dispatch(searchWorldsThunk({ query, context })).finally(() => {
            removeLoadingKey('searchWorlds');
        });
    }, [worldId, dispatch, account?.user]);

    useEffect(() => {
        if (world) {
            setFormData(world.toPlainObj());
        }
    }, [world]);

    const formFields: FormFieldDefinition[] = getFormFields(World);

    const handleSubmit = async (worldPlain: WorldPlain) => {
        if (!world) throw new Error('World not found');
        const errors = validateForm(formFields, worldPlain);
        setErrors(errors);
        if (Object.keys(errors).length > 0) {
            setShowErrors(true);
            return;
        }
        setShowErrors(false);
        const loadingKey = 'updateWorld';
        addLoadingKey(loadingKey);
        await dispatch(updateWorldThunk({ ...world.toPlainObj(), ...worldPlain })).finally(() => {
            removeLoadingKey(loadingKey);
            router.push(routes.worlds());
        });
    };

    const handleChange = (newFormData: WorldPlain) => {
        setFormData(newFormData);
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
                                formData={formData}
                                onChange={handleChange}
                                onSubmit={handleSubmit}
                                errors={errors}
                                showErrors={showErrors}
                            />
                        )}
                    </Box>
                </Box>
            </Container>
        </PageWrapper>
    );
};

export default EditWorldPage;
