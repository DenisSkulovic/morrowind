import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../../store/store';
import { updateAccount } from '../../store/slices/accountSlice';
import {
    Container,
    Paper,
    Typography,
    TextField,
    Button,
    Box,
    Grid2,
    Divider,
    Alert
} from '@mui/material';
import PageWrapper from '../../components/common/PageWrapper';
import { BreadcrumbItem } from '../../components/common/PageWrapper/Breadcrumbs';
import { routes } from '../../routes';
import { Account } from '../../class/entities/Account';
import { cloneDeep } from 'lodash';
import { useAccount } from '../../hooks/useAccount';

const AccountPage = () => {
    const dispatch = useDispatch<AppDispatch>();
    const account: Account | null = useAccount();
    const [email, setEmail] = useState(account?.email || '');
    const [username, setUsername] = useState(account?.username || '');

    if (!account) {
        return (
            <Container maxWidth="sm">
                <Alert severity="warning">
                    Please log in to view account settings
                </Alert>
            </Container>
        );
    }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        const accountClone: Account = cloneDeep(account)
        accountClone.email = email;
        accountClone.username = username;
        await dispatch(updateAccount(accountClone));
    };

    const [customBreadcrumbs, setCustomBreadcrumbs] = useState<BreadcrumbItem[]>([])
    useEffect(() => {
        setCustomBreadcrumbs([
            BreadcrumbItem.build({ label: 'Home', path: routes.home() }),
            BreadcrumbItem.build({ label: 'Account' })
        ]);
    }, []);

    return (
        <PageWrapper accountId={account?.id} customBreadcrumbs={customBreadcrumbs}>
            <Container maxWidth="md">
                <Box sx={{ py: 4 }}>
                    <Typography variant="h4" component="h1" gutterBottom>
                        Account Settings
                    </Typography>

                    <Grid2 container spacing={4}>
                        <Grid2>
                            <Paper sx={{ p: 3, mb: 3 }}>
                                <form onSubmit={handleSubmit}>
                                    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                                        <TextField
                                            id="email"
                                            label="Email"
                                            type="email"
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)}
                                            fullWidth
                                            variant="outlined"
                                        />

                                        <TextField
                                            id="username"
                                            label="Username"
                                            type="text"
                                            value={username}
                                            onChange={(e) => setUsername(e.target.value)}
                                            fullWidth
                                            variant="outlined"
                                        />

                                        <Button
                                            type="submit"
                                            variant="contained"
                                            color="primary"
                                            sx={{ mt: 2 }}
                                        >
                                            Save Changes
                                        </Button>
                                    </Box>
                                </form>
                            </Paper>

                            <Paper sx={{ p: 3, mb: 3 }}>
                                <Typography variant="h6" gutterBottom>
                                    Account Information
                                </Typography>
                                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
                                    <Typography>
                                        Account ID: {account.id}
                                    </Typography>
                                    <Typography>
                                        Role: {account.role}
                                    </Typography>
                                </Box>
                            </Paper>
                        </Grid2>

                        <Grid2>
                            <Paper
                                sx={{
                                    p: 3,
                                    bgcolor: 'error.light',
                                    color: 'error.contrastText'
                                }}
                            >
                                <Typography variant="h6" gutterBottom>
                                    Danger Zone
                                </Typography>
                                <Divider sx={{ my: 2 }} />
                                <Button
                                    onClick={() => {
                                        if (confirm('Are you sure you want to delete your account? This action cannot be undone.')) {
                                            // Delete account
                                        }
                                    }}
                                    variant="contained"
                                    color="error"
                                    fullWidth
                                >
                                    Delete Account
                                </Button>
                            </Paper>
                        </Grid2>
                    </Grid2>
                </Box>
            </Container>
        </PageWrapper>
    );
};

export default AccountPage;
