// src/Router.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './components/Login';
import Signup from './components/Signup';
import App from './App';
import MainPage from './components/MainPage'; // Import MainPage

const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainPage />} /> {/* Main Page Route */}
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/dashboard" element={<App />} /> {/* Route for the main app functionality */}
      </Routes>
    </Router>
  );
};

export default AppRouter;
