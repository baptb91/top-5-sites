
import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App.tsx';
import './index.css';

// Add React to window for libraries that expect it to be globally available
window.React = React;

// Pour aider au débogage en production
const debugProd = true;

// Create a container for our app
const container = document.getElementById('root');

// Ensure the container exists
if (!container) {
  console.error('Failed to find the root element');
} else {
  const root = createRoot(container);
  
  // Ajout d'un gestionnaire d'erreurs global pour éviter les écrans blancs
  window.addEventListener('error', (event) => {
    if (debugProd) {
      console.error('Uncaught error:', event.error);
      
      // Afficher un message d'erreur lisible dans le DOM si possible
      const errorContainer = document.createElement('div');
      errorContainer.style.padding = '20px';
      errorContainer.style.margin = '20px';
      errorContainer.style.border = '1px solid red';
      errorContainer.innerHTML = `
        <h2>Une erreur s'est produite</h2>
        <p>L'application est en cours de chargement. Veuillez patienter ou recharger la page.</p>
        <pre>${event.error?.message || 'Erreur inconnue'}</pre>
      `;
      
      // Ajouter uniquement si le container n'a pas d'enfants
      if (container.childElementCount === 0) {
        container.appendChild(errorContainer);
      }
    }
  });
  
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
    
    // Afficher un message d'erreur plus descriptif en cas d'échec du rendu
    if (debugProd) {
      container.innerHTML = `
        <div style="padding: 20px; margin: 20px; border: 1px solid red;">
          <h2>Erreur lors du chargement de l'application</h2>
          <p>Veuillez recharger la page ou contacter le support.</p>
          <pre>${error instanceof Error ? error.message : 'Erreur inconnue'}</pre>
        </div>
      `;
    }
  }
}
