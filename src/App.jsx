import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { GlobalStyles } from './theme/globalStyles';
import { ThemeProvider } from 'styled-components';

// Pages
import NotFound from './pages/NotFound';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';

// Theme
import { theme } from './theme/theme';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Routes>
        {/* Login Route */}
        <Route path="/login" element={<Login />} />

        {/* Pages Route */}
        <Route path="/" element={<Dashboard />} />
        <Route path="/students" element={<Dashboard />} />
        <Route path="/records" element={<Dashboard />} />

        {/* Invalid Route */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </ThemeProvider>
  );
}

export default App;
