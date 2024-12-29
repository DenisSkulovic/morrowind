import React from 'react';
import { useLoading } from '../../../hooks/useLoading';
import { Backdrop, CircularProgress, Box } from '@mui/material';

export const LoadingOverlay: React.FC = () => {
    const { isLoading } = useLoading();

    if (!isLoading) return null;

    return (
        <Backdrop
            open={true}
            sx={{
                color: '#fff',
                zIndex: (theme) => theme.zIndex.drawer + 1,
                backgroundColor: 'rgba(0, 0, 0, 0.7)'
            }}
        >
            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <CircularProgress
                    size={60}
                    thickness={4}
                    sx={{
                        color: '#fff'
                    }}
                />
            </Box>
        </Backdrop>
    );
};
