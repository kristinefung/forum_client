export function convertDatetimeToString(dateTime: Date): string {
    const year = dateTime.getFullYear();
    const month = dateTime.getMonth() + 1;
    const day = dateTime.getDate();
    const hour = ('0' + dateTime.getHours()).slice(-2);;
    const minute = ('0' + dateTime.getMinutes()).slice(-2);
    const second = ('0' + dateTime.getSeconds()).slice(-2);

    return `${year}年${month}月${day}日 ${hour}:${minute}:${second}`
}

export function convertDatetimeToTimeAgoString(dateTime: Date): string {
    const now = new Date();
    const past = dateTime;
    const seconds = Math.floor((now.getTime() - past.getTime()) / 1000);

    if (seconds < 60) {
        return `${seconds} 秒前`;
    } else if (seconds < 3600) { // Less than 60 minutes
        const minutes = Math.floor(seconds / 60);
        return `${minutes} 分鐘前`;
    } else if (seconds < 86400) { // Less than 24 hours
        const hours = Math.floor(seconds / 3600);
        return `${hours} 小時前`;
    } else if (seconds < 31536000) { // Less than 365 days
        const days = Math.floor(seconds / 86400);
        return `${days} 日前`;
    } else {
        return convertDatetimeToString(dateTime); // Display date string for older dates
    }
}