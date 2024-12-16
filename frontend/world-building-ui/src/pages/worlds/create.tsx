import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { AppDispatch, RootState } from '../../store/store';
import { createWorld } from '../../store/slices/worldSlice';
import { useRouter } from 'next/router';
import { Box, Container, Typography } from '@mui/material';
import { Account } from '../../class/entities/Account';
import { World } from '../../class/entities/World';
import { useSelectorAndBuilder } from '../../hooks/useSelectorAndBuilder';
import { routes } from '../../routes';
import { FormFieldDefinition, getFormFields } from '../../decorator/form-field.decorator';
import DynamicForm from '../../components/common/DynamicForm';

const CreateWorldPage = () => {
    const dispatch = useDispatch<AppDispatch>();
    const router = useRouter();

    const account: Account | null = useSelectorAndBuilder((state: RootState) => state.account.data, account => account ? Account.build(account) : null);
    if (!account) throw new Error('Account not found');
    const userId: string = account.user;

    const formFields: FormFieldDefinition[] = getFormFields(World.prototype);

    const handleSubmit = async (data: { [key: string]: any }) => {
        const world: World = World.build({ ...data });
        await dispatch(createWorld({ world, userId }));
        router.push(routes.worlds());
    };

    return (
        <Container maxWidth="lg">
            <Box py={4}>
                <Typography variant="h4" component="h1" gutterBottom>
                    Create New World
                </Typography>
                <Box sx={{ maxWidth: 600 }}>
                    <DynamicForm
                        fields={formFields}
                        initialValues={{
                            name: '',
                            description: '',
                            campaigns: []
                        }}
                        onSubmit={handleSubmit}
                    />
                </Box>
            </Box>
        </Container>
    );
};

export default CreateWorldPage;
