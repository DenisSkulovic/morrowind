import React from 'react';
import { Drawer, List, ListItem, ListItemIcon, ListItemText, Collapse, Box, ListItemButton } from '@mui/material';
import { Link } from 'react-router-dom';
import {
    ExpandLess,
    ExpandMore
} from '@mui/icons-material';
import { styled } from '@mui/material/styles';
import { getNavItems } from '../../../../config/navigation';

const DRAWER_WIDTH = 240;

const StyledDrawer = styled(Drawer)({
    width: DRAWER_WIDTH,
    flexShrink: 0,
    '& .MuiDrawer-paper': {
        width: DRAWER_WIDTH,
        boxSizing: 'border-box',
    },
});

export class NavItem {
    label!: string;
    path?: string;
    icon!: React.ComponentType;
    children?: NavItem[];

    static build(body: any) {
        if (!body.label) throw new Error('NavItem requires a label');
        if (!body.icon) throw new Error('NavItem requires an icon');
        if (body.children && !Array.isArray(body.children)) throw new Error('NavItem children must be an array');
        const navItem = new NavItem();
        Object.assign(navItem, body);
        return navItem;
    }
}

interface SidebarProps {
    accountId?: string;
    worldId?: string;
}

const Sidebar = ({ accountId, worldId }: SidebarProps) => {
    const [openItems, setOpenItems] = React.useState<{ [key: string]: boolean }>({});

    const handleClick = (label: string) => {
        setOpenItems(prev => ({
            ...prev,
            [label]: !prev[label]
        }));
    };

    const navItems: NavItem[] = getNavItems(accountId, worldId)

    const renderNavItem = (
        item: NavItem,
        depth = 0
    ) => {
        const hasChildren = item.children && item.children.length > 0;
        const Icon = item.icon;

        return (
            <React.Fragment key={item.path}>
                <ListItemButton
                    component={hasChildren ? 'div' : Link}
                    to={hasChildren ? undefined : item.path}
                    onClick={hasChildren ? () => handleClick(item.label) : undefined}
                    sx={{ pl: depth * 2 }}
                >
                    <ListItemIcon><Icon /></ListItemIcon>
                    <ListItemText primary={item.label} />
                    {hasChildren && (
                        openItems[item.label] ? <ExpandLess /> : <ExpandMore />
                    )}
                </ListItemButton>

                {hasChildren && item.children && (
                    <Collapse in={openItems[item.label]} timeout="auto" unmountOnExit>
                        <List component="div" disablePadding>
                            {item.children.map(child => renderNavItem(child, depth + 1))}
                        </List>
                    </Collapse>
                )}
            </React.Fragment>
        );
    };

    return (
        <StyledDrawer variant="permanent" anchor="left">
            <Box sx={{ overflow: 'auto' }}>
                <List>
                    {navItems.map(item => renderNavItem(item))}
                </List>
            </Box>
        </StyledDrawer>
    );
};

export default Sidebar;
