import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import Home from './pages/home';
import Login from './pages/login';
import Register from './pages/register';
import ResetPassword from './pages/resetPassword';
import NoPage from './pages/noPage';

const App = () => {
  const [useAlternateRoutes, setUseAlternateRoutes] = useState(true);

  const toggleRoutes = () => {
    setUseAlternateRoutes(!useAlternateRoutes);
  };

  return (
    <div>
      <Router>
        <Routes>
          {useAlternateRoutes ? (
            <>
              <Route path="/" element={<Home />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
              <Route path="/reset-password" element={<ResetPassword />} />
              <Route path="*" element={<NoPage />} />
            </>
          ) : (
            <>
              <Route path="/" element={<Home />} />
              <Route path="*" element={<NoPage />} />
            </>
          )}
        </Routes>
      </Router>
    </div>
  );
};

export default App;
