import { Card, CardContent, Typography, List, ListItem, ListItemText, Link } from '@mui/material';
import { ActivityRecord } from '../../../class/entities/ActivityRecord';
import { routes } from '../../../routes';
import { getCreatedAtRelativeTime } from '../../../utils/getCreatedAtRelativeTime';
import { useEffect, useState } from 'react';

interface RecentActivityProps {
    activityRecords: ActivityRecord[] | null
    worldId: string | null
    userId: string
}

const rerenderIntervalMs = 1000;

export const RecentActivity = ({ activityRecords, worldId, userId }: RecentActivityProps): JSX.Element => {
    // Force a re-render every second to update the relative timestamps (e.g. "2 minutes ago" -> "3 minutes ago")
    const [currentTime, setCurrentTime] = useState(new Date());

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentTime(new Date());
        }, rerenderIntervalMs);

        return () => clearInterval(timer);
    }, []);

    if (!activityRecords) return <></>

    const getActionText = (activity: ActivityRecord) => {
        const label: string | undefined = activity.label
        const getLinkTextAndHref = (): { href: string, linkText: string } => {
            if (activity.relatedTargetId && activity.relatedEntityName && activity.relatedTargetEntity) {
                return {
                    linkText: `${activity.relatedEntityName} (${activity.relatedTargetEntity})`,
                    href: routes.contentDetail(worldId || '', activity.relatedTargetId, activity.relatedTargetEntity)
                }
            }
            else if (activity.relatedTargetEntity) {
                return {
                    linkText: activity.relatedTargetEntity,
                    href: routes.contentEntity(worldId || '', activity.relatedTargetEntity)
                }
            } else return { href: "", linkText: "" }
        }
        const { linkText, href } = getLinkTextAndHref()
        const link = href && linkText ? <Link href={href}>{linkText}</Link> : ''
        return <Typography>{label} {link}</Typography>
    };

    const getCreatedAgo = (activity: ActivityRecord) => {
        if (!activity.createdAt) return ''
        return getCreatedAtRelativeTime(new Date(activity.createdAt))
    }

    return (
        <Card>
            <CardContent>
                <Typography variant="h6" gutterBottom>
                    Recent Activity
                </Typography>
                <List>
                    {activityRecords && activityRecords.map((activity) => (
                        <ListItem key={activity.id}>
                            <ListItemText
                                primary={
                                    <Typography>
                                        {getActionText(activity)}
                                    </Typography>
                                }
                                secondary={getCreatedAgo(activity)}
                            />
                        </ListItem>
                    ))}
                </List>
            </CardContent>
        </Card>
    );
};