import React from 'react';
import { useNavigate } from "react-router-dom";

import { Drawer as MuiDrawer, List, ListSubheader, ListItem, ListItemButton, ListItemText, Box, Typography } from '@mui/material';

import theme from '../../../theme';
const drawerWidth = 220;


const categoryGroups = [
    {
        name: '新聞',
        categories: [
            { name: "時事台" },
            { name: "政事台" },
            { name: "娛樂台" },
        ]
    },
    {
        name: '生活',
        categories: [
            { name: "創意台" },
            { name: "感情台" },
            { name: "健康台" },
            { name: "家庭台" },
            { name: "飲食台" },
        ]
    },
    {
        name: '其他',
        categories: [
            { name: "站務台" },
        ]
    }
]


interface DrawerProps {
    mobileOpen: boolean
    handleDrawerTransitionEnd: () => void
    handleDrawerClose: () => void
}

const Drawer: React.FC<DrawerProps> = (props) => {
    const navigate = useNavigate();

    const handleOnClickHome = () => {
        const path = `/`;
        navigate(path);
        props.handleDrawerClose();
    }

    const handleOnClickThread = () => {
        const path = `/category`;
        navigate(path);
        props.handleDrawerClose();
    }

    const drawer = (
        <div>
            {
                <>
                    <Typography
                        onClick={handleOnClickHome}
                        variant="h5"
                        component="h5"
                        sx={{ mt: 2, ml: 3, cursor: 'pointer', color: theme.palette.secondary.light }} >
                        Forum
                    </Typography>

                    <List sx={{ ml: 1 }}>
                        {categoryGroups.map((categoryGroup) => (
                            <>
                                <ListSubheader sx={{ bgcolor: 'transparent', color: theme.palette.text.secondary }}>
                                    {categoryGroup.name}
                                </ListSubheader>
                                {categoryGroup.categories.map((category) => (
                                    <ListItem disablePadding>
                                        <ListItemButton
                                            onClick={handleOnClickThread}>
                                            <ListItemText primary={category.name} />
                                        </ListItemButton>
                                    </ListItem>
                                ))}
                            </>
                        ))}
                    </List>
                </>

            }

        </div>
    );

    return (

        <Box
            component="nav"
            sx={{ bgcolor: 'primary.main', width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
            aria-label="mailbox folders"
        >
            <MuiDrawer
                variant="temporary"
                open={props.mobileOpen}
                onTransitionEnd={props.handleDrawerTransitionEnd}
                onClose={props.handleDrawerClose}
                sx={{
                    display: { xs: 'block', sm: 'none' },
                    '& .MuiDrawer-paper': {
                        backgroundColor: theme.palette.background.default,
                        boxSizing: 'border-box',
                        width: drawerWidth
                    },
                }}
                slotProps={{
                    root: {
                        keepMounted: true, // Better open performance on mobile.
                    },
                }}
            >
                {drawer}
            </MuiDrawer>
            <MuiDrawer
                variant="permanent"
                sx={{
                    display: { xs: 'none', sm: 'block' },
                    '& .MuiDrawer-paper': {
                        borderColor: theme.palette.primary.light,
                        backgroundColor: theme.palette.background.default,
                        boxSizing: 'border-box',
                        width: drawerWidth
                    },
                }}
                open
            >
                {drawer}
            </MuiDrawer>
        </Box>
    );
}

export default Drawer;