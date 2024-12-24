import React, { useState } from 'react';
import { Box } from '@mui/material';
import Topbar from './Topbar';
import Sidebar from './Sidebar';
import { BreadcrumbItem, Breadcrumbs } from './Breadcrumbs';

interface PageWrapperProps {
    children: React.ReactNode;
    customBreadcrumbs?: BreadcrumbItem[];
}

const PageWrapper = ({ children, customBreadcrumbs }: PageWrapperProps) => {
    const [sidebarOpen, setSidebarOpen] = useState(true);

    const handleMenuClick = () => setSidebarOpen(!sidebarOpen);

    return (
        <Box sx={{ display: 'flex' }}>
            <Topbar onMenuClick={handleMenuClick} />
            <Sidebar />
            <Box
                component="main"
                sx={{
                    flexGrow: 1,
                    p: 3,
                    mt: 8,
                    ml: '240px', // Match DRAWER_WIDTH from Sidebar
                }}
            >
                <Breadcrumbs customBreadcrumbs={customBreadcrumbs} />
                {children}
            </Box>
        </Box>
    );
};

export default PageWrapper;
