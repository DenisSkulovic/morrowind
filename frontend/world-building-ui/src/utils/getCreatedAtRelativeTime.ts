

export const getCreatedAtRelativeTime = (date: Date) => {
    if (!date) return '';

    const timestamp = date.getTime()

    const now = Date.now();
    const diffInSeconds = Math.floor((timestamp - now) / 1000);
    const absDiff = Math.abs(diffInSeconds);

    // Time constants in seconds
    const SECONDS_IN_MINUTE = 60;
    const SECONDS_IN_HOUR = 3600;
    const SECONDS_IN_DAY = 86400;
    const SECONDS_IN_MONTH = 2592000;
    const SECONDS_IN_YEAR = 31536000;

    // Format with appropriate granularity
    if (absDiff < SECONDS_IN_MINUTE) {
        return `${Math.abs(Math.floor(diffInSeconds))} seconds ${diffInSeconds < 0 ? 'ago' : 'from now'}`;
    } else if (absDiff < SECONDS_IN_HOUR) {
        const minutes = Math.floor(absDiff / SECONDS_IN_MINUTE);
        const seconds = absDiff % SECONDS_IN_MINUTE;
        return `${minutes}m ${seconds}s ${diffInSeconds < 0 ? 'ago' : 'from now'}`;
    } else if (absDiff < SECONDS_IN_DAY) {
        const hours = Math.floor(absDiff / SECONDS_IN_HOUR);
        const minutes = Math.floor((absDiff % SECONDS_IN_HOUR) / SECONDS_IN_MINUTE);
        return `${hours}h ${minutes}m ${diffInSeconds < 0 ? 'ago' : 'from now'}`;
    } else if (absDiff < SECONDS_IN_MONTH) {
        const days = Math.floor(absDiff / SECONDS_IN_DAY);
        const hours = Math.floor((absDiff % SECONDS_IN_DAY) / SECONDS_IN_HOUR);
        return `${days}d ${hours}h ${diffInSeconds < 0 ? 'ago' : 'from now'}`;
    } else if (absDiff < SECONDS_IN_YEAR) {
        const months = Math.floor(absDiff / SECONDS_IN_MONTH);
        const days = Math.floor((absDiff % SECONDS_IN_MONTH) / SECONDS_IN_DAY);
        return `${months}mo ${days}d ${diffInSeconds < 0 ? 'ago' : 'from now'}`;
    } else {
        const years = Math.floor(absDiff / SECONDS_IN_YEAR);
        const months = Math.floor((absDiff % SECONDS_IN_YEAR) / SECONDS_IN_MONTH);
        return `${years}y ${months}mo ${diffInSeconds < 0 ? 'ago' : 'from now'}`;
    }
};