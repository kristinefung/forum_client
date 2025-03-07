import React from 'react';

import ThreadCard from '../component/data_display/ThreadCard';

interface ThreadProps {
}

const Thread: React.FC<ThreadProps> = (props) => {

    const threads = [
        { title: "MH 武器使用心得集中討論區", createdBy: "元朗吉夫藥", createdAt: new Date("2025-3-4 00:02:30"), replies: 10 },
        { title: "電車迷思 - 冇位差電？折舊快過油車？", createdBy: "ミニクーパーF55", createdAt: new Date("2025-3-3"), replies: 1 },
        { title: "點樣解決迴旋處右轉關口", createdBy: "海狐", createdAt: new Date("2025-3-3"), replies: 42 },
        { title: "救命！屋企隻貓成隻狗咁", createdBy: "元朗吉夫藥", createdAt: new Date("2025-3-3"), replies: 3 },
        { title: "MH 武器使用心得集中討論區", createdBy: "元朗吉夫藥", createdAt: new Date("2025-3-3"), replies: 8 },
        { title: "MH 武器使用心得集中討論區", createdBy: "元朗吉夫藥", createdAt: new Date("2025-3-3"), replies: 12 },
        { title: "MH 武器使用心得集中討論區", createdBy: "元朗吉夫藥", createdAt: new Date("2025-3-3"), replies: 24 },
        { title: "MH 武器使用心得集中討論區", createdBy: "元朗吉夫藥", createdAt: new Date("2025-3-3"), replies: 10 },
        { title: "MH 武器使用心得集中討論區", createdBy: "元朗吉夫藥", createdAt: new Date("2024-3-3"), replies: 11 },
    ]

    return (
        <>
            {
                threads.map(thread => (
                    <ThreadCard
                        title={thread.title}
                        createdBy={thread.createdBy}
                        createdAt={thread.createdAt}
                        replies={thread.replies}
                    />
                ))
            }
        </>
    );
}

export default Thread;