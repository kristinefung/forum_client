import * as React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { ThemeProvider } from '@mui/material/styles';
import { CssBaseline } from '@mui/material';

import Layout from './component/navigation/Layout';
import Home from './page/Home';
import Thread from './page/Thread';

import theme from '../theme'

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline />

        <Router>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Home />} />
              <Route path="category" element={<Thread />} />
            </Route>
          </Routes>
        </Router>
      </ThemeProvider >
    </>
  )
}

export default App
