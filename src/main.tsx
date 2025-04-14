
import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App.tsx';
import './index.css';

// Add React to window for libraries that expect it to be globally available
window.React = React;

// Create a container for our app
const container = document.getElementById('root');

// Ensure the container exists
if (!container) {
  console.error('Failed to find the root element');
} else {
  const root = createRoot(container);
  
  try {
    root.render(
      <React.StrictMode>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </React.StrictMode>
    );
    console.log('Application successfully rendered');
  } catch (error) {
    console.error('Failed to render the application:', error);
  }
}
