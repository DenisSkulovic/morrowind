import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../../store/store';
import { Account } from '../../dto/Account';

const AccountPage = () => {
    const dispatch = useDispatch<AppDispatch>();
    const account: Account | null = useSelector((state: RootState) => state.account.data);
    const [email, setEmail] = useState(account?.email || '');
    const [username, setUsername] = useState(account?.username || '');

    if (!account) {
        return <div>Please log in to view account settings</div>;
    }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        // TODO: Implement account update logic
    };

    return (
        <div>
            <h1>Account Settings</h1>

            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="email">Email</label>
                    <input
                        id="email"
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>

                <div>
                    <label htmlFor="username">Username</label>
                    <input
                        id="username"
                        type="text"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                </div>

                <button type="submit">Save Changes</button>
            </form>

            <div>
                <h2>Account Information</h2>
                <p>Account ID: {account.id}</p>
                <p>Created: {new Date(account.createdAt).toLocaleDateString()}</p>
            </div>

            <div>
                <h2>Danger Zone</h2>
                <button
                    onClick={() => {
                        // TODO: Implement account deletion logic
                        if (confirm('Are you sure you want to delete your account? This action cannot be undone.')) {
                            // Delete account
                        }
                    }}
                    style={{ backgroundColor: '#dc3545', color: 'white' }}
                >
                    Delete Account
                </button>
            </div>
        </div>
    );
};

export default AccountPage;
