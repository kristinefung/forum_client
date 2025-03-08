import React from 'react';

import { Card, Box, IconButton, Tooltip, Button, Typography, Divider } from '@mui/material';
import PostCard from '../component/data_display/PostCard';

interface ThreadProps {
}


// TODO: Temp value
const posts = [
    { content: "MH 武器使用心得集中討論區", createdBy: "元朗吉夫藥", createdAt: new Date("2025-3-4 00:02:30"), replies: 10 },
    { content: "電車迷思 - 冇位差電？折舊快過油車？", createdBy: "ミニクーパーF55", createdAt: new Date("2025-3-3"), replies: 1 },
    { content: "點樣解決迴旋處右轉關口", createdBy: "海狐", createdAt: new Date("2025-3-3"), replies: 42 },
    { content: "救命！屋企隻貓成隻狗咁", createdBy: "元朗吉夫藥", createdAt: new Date("2025-3-3"), replies: 3 },
    { content: "MH 武器使用心得集中討論區", createdBy: "元朗吉夫藥", createdAt: new Date("2025-3-3"), replies: 8 },
    { content: "MH 武器使用心得集中討論區", createdBy: "元朗吉夫藥", createdAt: new Date("2025-3-3"), replies: 12 },
    { content: "MH 武器使用心得集中討論區", createdBy: "元朗吉夫藥", createdAt: new Date("2025-3-3"), replies: 24 },
    { content: "MH 武器使用心得集中討論區", createdBy: "元朗吉夫藥", createdAt: new Date("2025-3-3"), replies: 10 },
    { content: "MH 武器使用心得集中討論區", createdBy: "元朗吉夫藥", createdAt: new Date("2024-3-3"), replies: 11 },
]

const Thread: React.FC<ThreadProps> = (props) => {
    return (
        <Box display="flex" flexDirection="column" gap="15px">
            {
                posts.map((post, index) => (

                    <PostCard
                        index={index + 1}
                        content={post.content}
                        createdBy={post.createdBy}
                        createdAt={post.createdAt}
                    />
                ))
            }
        </Box>
    );
}

export default Thread;