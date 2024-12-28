import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { AppDispatch, RootState } from '../../store/store';
import { createWorldThunk, WorldPlain } from '../../store/slices/worldSlice';
import { useRouter } from 'next/router';
import { Box, Container, Typography } from '@mui/material';
import { Account } from '../../class/entities/Account';
import { World } from '../../class/entities/World';
import { useSelectorAndBuilder } from '../../hooks/useSelectorAndBuilder';
import { routes } from '../../routes';
import { FormFieldDefinition, getFormFields } from '../../decorator/form-field.decorator';
import DynamicForm from '../../components/common/DynamicForm';
import PageWrapper from '../../components/common/PageWrapper';
import { BreadcrumbItem } from '../../components/common/PageWrapper/Breadcrumbs';

const CreateWorldPage = () => {
    const dispatch = useDispatch<AppDispatch>();
    const router = useRouter();

    const account: Account | null = useSelectorAndBuilder((state: RootState) => state.account.currentAccount.data, account => account ? Account.build(account) : null);
    if (!account) throw new Error('Account not found');
    const userId: string = account.user;

    const formFields: FormFieldDefinition[] = getFormFields(World);

    const handleSubmit = async (worldPlain: WorldPlain) => {
        await dispatch(createWorldThunk({ worldPlain, userId }));
        router.push(routes.worlds());
    };

    const initialWorld: WorldPlain = World.build({
        name: '',
        description: '',
        campaigns: []
    }).toPlainObj();

    const [customBreadcrumbs, setCustomBreadcrumbs] = useState<BreadcrumbItem[]>([])
    useEffect(() => {
        setCustomBreadcrumbs([
            BreadcrumbItem.build({ label: 'Home', path: routes.home() }),
            BreadcrumbItem.build({ label: 'Worlds', path: routes.worlds() }),
            BreadcrumbItem.build({ label: 'Create World' })
        ]);
    }, []);

    return (
        <PageWrapper customBreadcrumbs={customBreadcrumbs} accountId={account?.id}>
            <Container maxWidth="lg">
                <Box py={4}>
                    <Typography variant="h4" component="h1" gutterBottom>
                        Create New World
                    </Typography>
                    <Box sx={{ maxWidth: 600 }}>
                        <DynamicForm
                            fields={formFields}
                            initialValues={initialWorld}
                            onSubmit={handleSubmit}
                        />
                    </Box>
                </Box>
            </Container>
        </PageWrapper >
    );
};

export default CreateWorldPage;
