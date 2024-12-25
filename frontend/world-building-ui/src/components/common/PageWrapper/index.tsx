import React, { useState } from 'react';
import { Box } from '@mui/material';
import Topbar from './Topbar';
import Sidebar from './Sidebar';
import { BreadcrumbItem, Breadcrumbs } from './Breadcrumbs';

interface PageWrapperProps {
    children: React.ReactNode;
    customBreadcrumbs?: BreadcrumbItem[];
    accountId?: string;
    worldId?: string;
}

const PageWrapper = ({ children, customBreadcrumbs, accountId, worldId }: PageWrapperProps) => {
    const [sidebarOpen, setSidebarOpen] = useState(true);
    const handleMenuClick = () => setSidebarOpen(!sidebarOpen);

    return (
        <Box sx={{ display: 'flex' }}>
            <Topbar onMenuClick={handleMenuClick} />
            <Sidebar accountId={accountId} worldId={worldId} />
            <Box
                component="main"
                sx={{
                    flexGrow: 1,
                    p: 3,
                    mt: 8,
                }}
            >
                <Breadcrumbs customBreadcrumbs={customBreadcrumbs} />
                {children}
            </Box>
        </Box>
    );
};

export default PageWrapper;
