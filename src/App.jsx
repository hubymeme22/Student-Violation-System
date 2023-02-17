import React, { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { GlobalStyles } from './theme/globalStyles';
import { ThemeProvider } from 'styled-components';

// Pages
import NotFound from './pages/NotFound';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';

// Theme
import { theme } from './theme/theme';

// Context
import { AuthProvider } from './hooks/useAuth';

function App() {
  useEffect(() => {
    // CHECK TOKEN (in cookies & localstorage)
    // If token is valid => isLoggedIn to true
    // Else, Go to login, page
  }, []);

  return (
    <AuthProvider>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <Routes>
          {/* Login Route */}
          <Route path="/login" element={<Login />} />

          {/* Pages Route */}
          <Route path="/" element={<Dashboard />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/students" element={<Dashboard />} />
          <Route path="/records" element={<Dashboard />} />

          {/* Invalid Route */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </ThemeProvider>
    </AuthProvider>
  );
}

export default App;
