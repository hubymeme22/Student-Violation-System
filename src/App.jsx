import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { GlobalStyles } from './theme/globalStyles';
import { ThemeProvider } from 'styled-components';

// Pages
import Login from './pages/Login';
import NotFound from './pages/NotFound';

// Theme
import { theme } from './theme/theme';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Routes>
        {/* Login Route */}
        <Route path="/" element={<Login />} />

        {/* Invalid Route */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </ThemeProvider>
  );
}

export default App;
