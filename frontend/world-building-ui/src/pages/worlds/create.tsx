import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../../store/store';
import { createWorld } from '../../store/slices/worldSlice';
import { useRouter } from 'next/router';
import { Box, Button, Container, TextField, Typography } from '@mui/material';
import { Account } from '../../dto/Account';
import { World } from '../../dto/World';

const CreateWorldPage = () => {
    const dispatch = useDispatch<AppDispatch>();
    const router = useRouter();

    const [name, setName] = useState('');
    const [description, setDescription] = useState('');

    const account: Account | null = useSelector((state: RootState) => state.account.data);
    if (!account) throw new Error('Account not found');
    const userId: string = account.user;

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        const world: World = { name, description } as World;
        await dispatch(createWorld({ world, userId }));
        router.push('/worlds');
    };

    return (
        <Container maxWidth="lg">
            <Box py={4}>
                <Typography variant="h4" component="h1" gutterBottom>
                    Create New World
                </Typography>
                <Box component="form" onSubmit={handleSubmit} sx={{ maxWidth: 600 }}>
                    <Box mb={3}>
                        <TextField
                            fullWidth
                            label="World Name"
                            variant="outlined"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            required
                        />
                    </Box>
                    <Box mb={3}>
                        <TextField
                            fullWidth
                            label="Description"
                            variant="outlined"
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                            multiline
                            rows={4}
                        />
                    </Box>
                    <Button
                        type="submit"
                        variant="contained"
                        color="primary"
                        size="large"
                    >
                        Create World
                    </Button>
                </Box>
            </Box>
        </Container>
    );
};

export default CreateWorldPage;
