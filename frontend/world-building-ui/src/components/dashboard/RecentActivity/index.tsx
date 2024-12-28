import { Card, CardContent, Typography, List, ListItem, ListItemText, Link } from '@mui/material';
import { ActivityRecord } from '../../../class/entities/ActivityRecord';
import { routes } from '../../../routes';
import { getCreatedAtRelativeTime } from '../../../utils/getCreatedAtRelativeTime';


interface RecentActivityProps {
    activityRecords: ActivityRecord[] | null
    worldId: string | null
    userId: string
}

export const RecentActivity = ({ activityRecords, worldId, userId }: RecentActivityProps): JSX.Element => {
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
        const link = <Link href={href}>{linkText}</Link>
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