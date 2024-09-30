// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Box, CssBaseline } from '@mui/material';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import Dashboard from './pages/Dashboard';
import Users from './pages/Users';
import UserDetail from './pages/UserDetails';
import Settings from './pages/Settings';

function App() {
  return (
    <Router>
      <Box sx={{ display: 'flex' }}>
        <CssBaseline />
        <Header />
        <Sidebar />
        <Box component="main" sx={{ flexGrow: 1, p: 3, mt: 8, ml: 30 }}>
          <Routes>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/users" element={<Users />} />
            <Route path="/users/:id" element={<UserDetail />} /> {/* User Detail */}
            <Route path="/settings" element={<Settings />} />
            <Route path="/" element={<Dashboard />} />
          </Routes>
        </Box>
      </Box>
    </Router>
  );
}

export default App;
