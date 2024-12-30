import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../../store/store';
import { createWorldThunk, WorldPlain } from '../../store/slices/worldSlice';
import { useRouter } from 'next/router';
import { Box, Container, Typography } from '@mui/material';
import { World } from '../../class/entities/World';
import { routes } from '../../routes';
import { DynamicFormErrors, FormFieldDefinition, getFormFields, validateForm } from '../../decorator/form-field.decorator';
import DynamicForm from '../../components/common/DynamicForm';
import PageWrapper from '../../components/common/PageWrapper';
import { BreadcrumbItem } from '../../components/common/PageWrapper/Breadcrumbs';
import { useAccount } from '../../hooks/useAccount';
import { useLoading } from '../../hooks/useLoading';

const CreateWorldPage = () => {
    const dispatch = useDispatch<AppDispatch>();
    const router = useRouter();

    const { addLoadingKey, removeLoadingKey } = useLoading();

    const account = useAccount();
    if (!account) throw new Error('Account not found');
    const userId: string = account.user;

    const formFields: FormFieldDefinition[] = getFormFields(World);

    const [formData, setFormData] = useState<WorldPlain>({});
    const [errors, setErrors] = useState<DynamicFormErrors>({});
    const [showErrors, setShowErrors] = useState<boolean>(false);

    const handleChange = (newFormData: WorldPlain) => {
        setFormData(newFormData);
    };
    const handleSubmit = async () => {
        const errors = validateForm(formFields, formData);
        setErrors(errors);
        if (Object.keys(errors).length > 0) {
            setShowErrors(true);
            return;
        }
        setShowErrors(false);

        const loadingKey = 'createWorld';
        addLoadingKey(loadingKey);
        dispatch(createWorldThunk({ worldPlain: formData, userId })).finally(() => {
            removeLoadingKey(loadingKey);
            router.push(routes.worlds());
        });
    };

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
                            formData={formData}
                            onChange={handleChange}
                            onSubmit={handleSubmit}
                            errors={errors}
                            showErrors={showErrors}
                        />
                    </Box>
                </Box>
            </Container>
        </PageWrapper >
    );
};

export default CreateWorldPage;
