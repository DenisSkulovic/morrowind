import React from 'react';
import { Breadcrumbs as MuiBreadcrumbs, Link, Typography } from '@mui/material';
import { useLocation, Link as RouterLink } from 'react-router-dom';

interface BreadcrumbsProps {
    // Optional custom breadcrumbs to override default path-based ones
    customBreadcrumbs?: {
        label: string;
        path?: string;
    }[];
}

export const Breadcrumbs: React.FC<BreadcrumbsProps> = ({ customBreadcrumbs }) => {
    const location = useLocation();

    // Generate breadcrumbs from current path if no custom ones provided
    const getBreadcrumbs = () => {
        if (customBreadcrumbs) {
            return customBreadcrumbs;
        }

        const pathnames = location.pathname.split('/').filter(x => x);

        return pathnames.map((value, index) => {
            const path = `/${pathnames.slice(0, index + 1).join('/')}`;
            const label = value.charAt(0).toUpperCase() + value.slice(1).replace(/-/g, ' ');

            return {
                label,
                path
            };
        });
    };

    const breadcrumbs = getBreadcrumbs();

    return (
        <MuiBreadcrumbs aria-label="breadcrumb">
            <Link
                component={RouterLink}
                to="/"
                color="inherit"
                underline="hover"
            >
                Dashboard
            </Link>

            {breadcrumbs.map((crumb, index) => {
                const isLast = index === breadcrumbs.length - 1;

                if (isLast) {
                    return (
                        <Typography
                            key={crumb.label}
                            color="textPrimary"
                        >
                            {crumb.label}
                        </Typography>
                    );
                }

                return (
                    <Link
                        key={crumb.label}
                        component={RouterLink}
                        to={crumb.path || '#'}
                        color="inherit"
                        underline="hover"
                    >
                        {crumb.label}
                    </Link>
                );
            })}
        </MuiBreadcrumbs>
    );
};
