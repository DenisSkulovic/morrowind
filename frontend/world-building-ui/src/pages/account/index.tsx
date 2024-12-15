import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../../store/store';
import { Account } from '../../entities/Account';
import { updateAccount } from '../../store/slices/accountSlice';
import {
    Container,
    Paper,
    Typography,
    TextField,
    Button,
    Box,
    Grid,
    Divider,
    Alert
} from '@mui/material';

const AccountPage = () => {
    const dispatch = useDispatch<AppDispatch>();
    const account: Account | null = useSelector((state: RootState) => state.account.data);
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
        const accountClone: Account = Account.fromDTO(account.toDTO());
        accountClone.email = email;
        accountClone.username = username;
        await dispatch(updateAccount(accountClone));
    };

    return (
        <Container maxWidth="md">
            <Box sx={{ py: 4 }}>
                <Typography variant="h4" component="h1" gutterBottom>
                    Account Settings
                </Typography>

                <Grid container spacing={4}>
                    <Grid item xs={12} md={8}>
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
                    </Grid>

                    <Grid item xs={12} md={4}>
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
                    </Grid>
                </Grid>
            </Box>
        </Container>
    );
};

export default AccountPage;
