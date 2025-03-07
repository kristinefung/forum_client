import * as React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { ThemeProvider } from '@mui/material/styles';
import { CssBaseline } from '@mui/material';

import Layout from './component/navigation/Layout';
import Home from './page/Home';
import Category from './page/Category';

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
              <Route path="category" element={<Category />} />
            </Route>
          </Routes>
        </Router>
      </ThemeProvider >
    </>
  )
}

export default App
