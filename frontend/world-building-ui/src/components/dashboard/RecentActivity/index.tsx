import { Card, CardContent, Typography, List, ListItem, ListItemText, Link } from '@mui/material';
import { useActivityRecordsHead } from '../../../hooks/useActivityRecordsHead';
import { ActivityRecord } from '../../../class/entities/ActivityRecord';
import { routes } from '../../../routes';


interface RecentActivityProps {
    worldId: string,
    userId: string
}

export const RecentActivity = ({ worldId, userId }: RecentActivityProps): JSX.Element => {
    const { activities, status, error } = useActivityRecordsHead(worldId, userId)

    const formatTimestamp = (date: Date) => {
        return new Intl.RelativeTimeFormat('en', { numeric: 'auto' }).format(
            Math.floor((date.getTime() - Date.now()) / (1000 * 60)),
            'minute'
        );
    };

    const getActionText = (activity: ActivityRecord) => {
        const label: string | undefined = activity.label
        const getLinkTextAndHref = (): { href: string, linkText: string } => {
            if (activity.relatedTargetId && activity.relatedEntityName && activity.relatedTargetEntity) {
                return {
                    linkText: `${activity.relatedEntityName} (${activity.relatedTargetEntity})`,
                    href: routes.contentDetail(worldId, activity.relatedTargetId, activity.relatedTargetEntity)
                }
            }
            else if (activity.relatedTargetEntity) {
                return {
                    linkText: activity.relatedTargetEntity,
                    href: routes.contentEntity(worldId, activity.relatedTargetEntity)
                }
            } else return { href: "", linkText: "" }
        }
        const { linkText, href } = getLinkTextAndHref()
        const link = <Link href={href}>{linkText}</Link>
        return <Typography>{label} {link}</Typography>
    };

    return (
        <Card>
            <CardContent>
                <Typography variant="h6" gutterBottom>
                    Recent Activity
                </Typography>
                <List>
                    {activities && activities.map((activity) => (
                        <ListItem key={activity.id}>
                            <ListItemText
                                primary={
                                    <Typography>
                                        {getActionText(activity)}
                                    </Typography>
                                }
                                secondary={formatTimestamp(activity.createdAt)}
                            />
                        </ListItem>
                    ))}
                </List>
            </CardContent>
        </Card>
    );
};