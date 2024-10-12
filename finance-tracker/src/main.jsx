import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { ThemeProvider } from './contexts/ThemeContext'; // Import ThemeProvider
import './SCSS/styles.scss';
import './assets/modernizr-custom.js';
import AppRouter from './Router'; // Import your Router

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemeProvider> {/* Wrap App with ThemeProvider */}
      <AppRouter /> {/* Use AppRouter instead of App */}
    </ThemeProvider>
  </StrictMode>
);
