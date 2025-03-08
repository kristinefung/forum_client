import React from 'react';

import { Card, Box, IconButton, Tooltip, Button, Typography, Divider } from '@mui/material';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import ReplyIcon from '@mui/icons-material/Reply';

import WarningIcon from '@mui/icons-material/Warning';
import ShareIcon from '@mui/icons-material/Share';

import MoreMenu from '../navigation/MoreMenu';

import { convertDatetimeToString } from '../../utils/common';

interface PostCardProps {
    index: number;
    content: string;
    createdBy: string;
    createdAt: Date;
}

const PostCard: React.FC<PostCardProps> = (props) => {

    const moreMenuItems = [
        {
            icon: <ShareIcon />,
            text: '分享',
            onClick: () => console.log('分享 clicked'),
        },
        {
            icon: <WarningIcon />,
            text: '檢舉',
            onClick: () => console.log('檢舉 clicked'),
        },
    ];

    return (
        <Card variant="outlined" sx={{
            bgcolor: 'primary.main',
            p: 2,
        }}
        >
            <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', gap: '25px' }}>
                <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
                    <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                        <Box> {`#${props.index} ${props.createdBy}`} </Box>
                        <Box>{`發表於 ${convertDatetimeToString(props.createdAt)}`}</Box>
                    </Box>
                    <Box>
                        <MoreMenu items={moreMenuItems} />
                    </Box>
                </Box>
                <Box sx={{ display: 'flex', flexDirection: 'row' }}>
                    <Box> {props.content} </Box>
                </Box>
                <Divider sx={{ bgcolor: "#525252" }} />
                <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: "space-between" }}>
                    <Box>
                        <Button variant="text" startIcon={<FavoriteBorderIcon />} sx={{ margin: 0 }}>
                            <Typography fontSize={'small'} >
                                0讚好
                            </Typography>
                        </Button>
                        <Button variant="text" startIcon={<ChatBubbleOutlineIcon />} sx={{ margin: 0 }}>
                            <Typography fontSize={'small'} sx={{ color: 'white' }}>
                                1回覆
                            </Typography>
                        </Button>

                    </Box>
                    <Box>

                        <Button variant="text" startIcon={<ReplyIcon sx={{ color: 'white' }} />} sx={{ margin: 0 }}>
                            <Typography fontSize={'small'} sx={{ color: 'white' }}>
                                引用
                            </Typography>
                        </Button>
                    </Box>
                </Box>
            </Box>
        </Card>
    );
}

export default PostCard;