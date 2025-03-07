import * as React from 'react';

import { ThemeProvider } from '@mui/material/styles';
import { CssBaseline } from '@mui/material';
import { AppBar, Box, Typography, Paper, IconButton, Toolbar, BottomNavigation, BottomNavigationAction } from '@mui/material';
import { Menu as MenuIcon } from '@mui/icons-material';
import PersonIcon from '@mui/icons-material/Person';
import RestoreIcon from '@mui/icons-material/Restore';
import FavoriteIcon from '@mui/icons-material/Favorite';
import LocationOnIcon from '@mui/icons-material/LocationOn';

import ThreadCard from './component/data_display/ThreadCard';
import Drawer from './component/navigation/Drawer';
import LoginDialog from './component/data_display/LoginDialog';

import './App.css'
import theme from '../theme'

const drawerWidth = 220;
const appbarHeight = 60;
const bottomNavigationHeight = 60;

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

function App() {
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [isClosing, setIsClosing] = React.useState(false);
  const [loginDialogopen, setLoginDialogOpen] = React.useState(false);

  const handleClickLoginDialogOpen = () => {
    setLoginDialogOpen(true);
  };

  const handleLoginDialogClose = () => {
    setLoginDialogOpen(false);
  };

  const handleDrawerClose = () => {
    setIsClosing(true);
    setMobileOpen(false);
  };

  const handleDrawerTransitionEnd = () => {
    setIsClosing(false);
  };

  const handleDrawerToggle = () => {
    if (!isClosing) {
      setMobileOpen(!mobileOpen);
    }
  };

  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <LoginDialog
          open={loginDialogopen}
          handleClose={handleLoginDialogClose} />

        <AppBar
          position="fixed"
          sx={{
            width: { sm: `calc(100% - ${drawerWidth}px)` },
            height: appbarHeight,
            ml: { sm: `${drawerWidth}px` }
          }}
        >
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ mr: 2, display: { sm: 'none' } }}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" noWrap component="div">
              健康台
            </Typography>
          </Toolbar>
        </AppBar>

        <Box sx={{ display: 'flex' }}>
          <Drawer
            mobileOpen={mobileOpen}
            handleDrawerTransitionEnd={handleDrawerTransitionEnd}
            handleDrawerClose={handleDrawerClose} />
          <Box
            component="main"
            sx={{ flexGrow: 1, p: 3, mt: `${appbarHeight}px`, mb: `${bottomNavigationHeight}px`, width: { sm: `calc(100% - ${drawerWidth}px)` } }}>

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
            <Paper sx={{
              position: 'fixed', bottom: 0, right: 0,
              height: `${bottomNavigationHeight}px`,
              width: `calc(100% - ${drawerWidth}px)`, [theme.breakpoints.down('sm')]: { width: '100%' },
              backgroundColor: theme.palette.primary.main
            }} elevation={3}>
              <BottomNavigation value={'recents'} onChange={() => { }} sx={{ backgroundColor: theme.palette.primary.main }}>
                <BottomNavigationAction
                  label="Recents"
                  value="recents"
                  icon={<RestoreIcon />}
                  sx={{
                    '&.Mui-selected': {
                      color: theme.palette.secondary.main,
                    },
                  }}
                />
                <BottomNavigationAction
                  label="Favorites"
                  value="favorites"
                  icon={<FavoriteIcon />}
                />
                <BottomNavigationAction
                  label="Nearby"
                  value="nearby"
                  icon={<LocationOnIcon />}
                />
                <BottomNavigationAction
                  label="Profile"
                  value="profile"
                  icon={<PersonIcon />}
                  onClick={handleClickLoginDialogOpen} />
              </BottomNavigation>
            </Paper>

          </Box>
        </Box>
      </ThemeProvider >
    </>
  )
}

export default App
