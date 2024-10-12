// src/components/Header.jsx
import React from 'react';
import { useTheme } from '../contexts/ThemeContext';

const Header = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <header>
      <h1>Finance Tracker</h1>

    </header>
  );
};

export default Header;
