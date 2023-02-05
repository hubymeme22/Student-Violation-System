import React from 'react';
import { Routes, Route } from 'react-router-dom';

// Pages
import Login from './pages/Login';
import NotFound from './pages/NotFound';

function App() {
  return (
    <div>
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
