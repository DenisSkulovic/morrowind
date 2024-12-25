import React from 'react';
import { Breadcrumbs as MuiBreadcrumbs, Link, Typography } from '@mui/material';

export class BreadcrumbItem {
    label!: string;
    path?: string;
    icon?: React.ReactNode;

    static build(body: any) {
        if (!body) throw new Error('Body is required to build BreadcrumbItem');
        if (!body.label) throw new Error('Label is required for BreadcrumbItem');
        if (body.path && typeof body.path !== 'string') throw new Error('Path must be a string if provided');
        if (body.icon && typeof body.icon !== 'object') throw new Error('Icon must be a React node if provided');
        const breadcrumbItem = new BreadcrumbItem();
        Object.assign(breadcrumbItem, body);
        return breadcrumbItem;
    }
}

interface BreadcrumbsProps {
    customBreadcrumbs?: BreadcrumbItem[];
}

export const Breadcrumbs: React.FC<BreadcrumbsProps> = ({ customBreadcrumbs }) => {
    const location = typeof window !== 'undefined' ? window.location : { pathname: '' };

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
                        href={crumb.path || '#'}
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
