import { Card, CardContent, Typography, List, ListItem, ListItemText } from '@mui/material';
import { useEffect, useState } from 'react';

interface RecentActivity {
    id: string;
    entityType: string; // 'character', 'item', etc
    entityId: string;
    action: 'created' | 'updated' | 'deleted';
    timestamp: Date;
    entityName: string;
}

export const RecentActivity = () => {
    const [activities, setActivities] = useState<RecentActivity[]>([]);

    // In a real implementation, this would come from Redux/API
    // Mocked for now
    const mockActivities: RecentActivity[] = [
        {
            id: '1',
            entityType: 'character',
            entityId: 'char1',
            action: 'created',
            timestamp: new Date(),
            entityName: 'Gandalf the Grey'
        },
        {
            id: '2',
            entityType: 'item',
            entityId: 'item1',
            action: 'updated',
            timestamp: new Date(Date.now() - 3600000),
            entityName: 'Glamdring'
        }
    ];

    useEffect(() => {
        // In real implementation, fetch from API
        setActivities(mockActivities);
    }, []);

    const formatTimestamp = (date: Date) => {
        return new Intl.RelativeTimeFormat('en', { numeric: 'auto' }).format(
            Math.floor((date.getTime() - Date.now()) / (1000 * 60)),
            'minute'
        );
    };

    const getActionText = (activity: RecentActivity) => {
        switch (activity.action) {
            case 'created':
                return 'Created new';
            case 'updated':
                return 'Updated';
            case 'deleted':
                return 'Deleted';
            default:
                return 'Modified';
        }
    };

    return (
        <Card>
            <CardContent>
                <Typography variant="h6" gutterBottom>
                    Recent Activity
                </Typography>
                <List>
                    {activities.map((activity) => (
                        <ListItem key={activity.id}>
                            <ListItemText
                                primary={
                                    <Typography>
                                        {getActionText(activity)} {activity.entityType}: {activity.entityName}
                                    </Typography>
                                }
                                secondary={formatTimestamp(activity.timestamp)}
                            />
                        </ListItem>
                    ))}
                </List>
            </CardContent>
        </Card>
    );
};