import React from 'react';

import { Card, Box, IconButton } from '@mui/material';
import { ChatBubble as ChatBubbleIcon } from '@mui/icons-material';

interface ThreadCardProps {
    title: string;
    createdBy: string;
    createdAt: Date;
    replies: number;
}

const ThreadCard: React.FC<ThreadCardProps> = (props) => {

    return (

        <Card variant="outlined" sx={{
            bgcolor: 'primary.main',
            p: 2,
        }
        }>
            <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
                <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                    <Box>{props.title} </Box>
                    <Box> {props.createdBy} </Box>
                </Box>
                <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'end' }}>
                    <Box> {props.createdAt.toDateString()} </Box>
                    <Box>
                        <IconButton
                            color="inherit"
                            sx={{ p: 0, pr: 0.5 }}
                        >
                            <ChatBubbleIcon sx={{ fontSize: 16 }} />
                        </IconButton>
                        {props.replies.toString()}
                    </Box>
                </Box>

            </Box>
        </Card>
    );
}

export default ThreadCard;