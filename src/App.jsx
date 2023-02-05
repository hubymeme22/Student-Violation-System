import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { GlobalStyles } from './theme/globalStyles';

// Pages
import Login from './pages/Login';
import NotFound from './pages/NotFound';

function App() {
  return (
    <div>
      <GlobalStyles />
      <Routes>
        {/* Login Route */}
        <Route path="/" element={<Login />} />

        {/* Invalid Route */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
