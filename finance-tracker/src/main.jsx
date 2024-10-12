import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import { ThemeProvider } from './contexts/ThemeContext'; // Import ThemeProvider
import './SCSS/styles.scss';
import './assets/modernizr-custom.js';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemeProvider> {/* Wrap App with ThemeProvider */}
      <App />
    </ThemeProvider>
  </StrictMode>
);
