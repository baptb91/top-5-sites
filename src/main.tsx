
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App.tsx';
import './index.css';

// Fonction pour le rendu de l'application avec gestion d'erreur
const renderApp = () => {
  try {
    const rootElement = document.getElementById("root");
    
    if (!rootElement) {
      throw new Error("Root element not found");
    }
    
    createRoot(rootElement).render(
      <BrowserRouter>
        <App />
      </BrowserRouter>
    );
    
    console.log("Application mounted successfully");
  } catch (error) {
    console.error("Failed to render application:", error);
    
    // Afficher un message d'erreur visible pour l'utilisateur
    const errorDiv = document.createElement("div");
    errorDiv.style.padding = "20px";
    errorDiv.style.margin = "20px";
    errorDiv.style.backgroundColor = "#fff0f0";
    errorDiv.style.border = "1px solid #ffaaaa";
    errorDiv.style.borderRadius = "5px";
    errorDiv.innerHTML = `
      <h2>Désolé, une erreur est survenue</h2>
      <p>Veuillez rafraîchir la page ou réessayer plus tard.</p>
    `;
    
    document.body.appendChild(errorDiv);
  }
};

// Exécuter le rendu
renderApp();
