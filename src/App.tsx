import * as React from 'react';

import { ThemeProvider } from '@mui/material/styles';
import { CssBaseline } from '@mui/material';
import { AppBar, Drawer, List, ListSubheader, ListItem, ListItemButton, ListItemText, Box, Typography, Card, CardContent, IconButton, Toolbar } from '@mui/material';
import { Menu as MenuIcon } from '@mui/icons-material';

import ThreadCard from './component/ThreadCard';

import './App.css'
import theme from '../theme'

const drawerWidth = 240;
const appbarHeight = 60;

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

const threads = [
  { title: "MH 武器使用心得集中討論區", createdBy: "元朗吉夫藥", createdAt: new Date("2025-3-3"), replies: 10 },
  { title: "電車迷思 - 冇位差電？折舊快過油車？", createdBy: "ミニクーパーF55", createdAt: new Date("2025-3-3"), replies: 1 },
  { title: "點樣解決迴旋處右轉關口", createdBy: "海狐", createdAt: new Date("2025-3-3"), replies: 42 },
  { title: "救命！屋企隻貓成隻狗咁", createdBy: "元朗吉夫藥", createdAt: new Date("2025-3-3"), replies: 3 },
  { title: "MH 武器使用心得集中討論區", createdBy: "元朗吉夫藥", createdAt: new Date("2025-3-3"), replies: 8 },
  { title: "MH 武器使用心得集中討論區", createdBy: "元朗吉夫藥", createdAt: new Date("2025-3-3"), replies: 12 },
  { title: "MH 武器使用心得集中討論區", createdBy: "元朗吉夫藥", createdAt: new Date("2025-3-3"), replies: 24 },
  { title: "MH 武器使用心得集中討論區", createdBy: "元朗吉夫藥", createdAt: new Date("2025-3-3"), replies: 10 },
  { title: "MH 武器使用心得集中討論區", createdBy: "元朗吉夫藥", createdAt: new Date("2025-3-3"), replies: 11 },
]

function App() {
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [isClosing, setIsClosing] = React.useState(false);

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

  const drawer = (
    <div>
      {
        <>
          <Typography variant="h5" component="h5" sx={{ mt: 2, ml: 2 }} >
            Forum
          </Typography>

          <List>
            {categoryGroups.map((categoryGroup) => (
              <>
                <ListSubheader sx={{ bgcolor: 'transparent', color: theme.palette.text.secondary }}>
                  {categoryGroup.name}
                </ListSubheader>
                {categoryGroup.categories.map((category) => (
                  <ListItem disablePadding>
                    <ListItemButton>
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
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <AppBar
          position="fixed"
          sx={{
            width: { sm: `calc(100% - ${drawerWidth}px)` },
            height: appbarHeight,
            ml: { sm: `${drawerWidth}px` },
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
          <Box
            component="nav"
            sx={{ bgcolor: 'primary.main', width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
            aria-label="mailbox folders"
          >
            <Drawer
              variant="temporary"
              open={mobileOpen}
              onTransitionEnd={handleDrawerTransitionEnd}
              onClose={handleDrawerClose}
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
            </Drawer>
            <Drawer
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
            </Drawer>
          </Box>
          <Box
            component="main"
            sx={{ flexGrow: 1, p: 3, mt: `${appbarHeight}px`, width: { sm: `calc(100% - ${drawerWidth}px)` } }}>

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

          </Box>
        </Box>
      </ThemeProvider>
    </>
  )
}

export default App
