
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App.tsx';
import './index.css';

try {
  const rootElement = document.getElementById("root");

  if (!rootElement) {
    console.error("Failed to find the root element");
  } else {
    createRoot(rootElement).render(
      <BrowserRouter>
        <App />
      </BrowserRouter>
    );
    console.log("Application mounted successfully");
  }
} catch (error) {
  console.error("Fatal error during application initialization:", error);
  
  // Afficher un message d'erreur convivial à l'utilisateur
  const errorElement = document.createElement('div');
  errorElement.style.padding = '20px';
  errorElement.style.margin = '50px auto';
  errorElement.style.maxWidth = '600px';
  errorElement.style.textAlign = 'center';
  errorElement.style.fontFamily = 'sans-serif';
  errorElement.innerHTML = `
    <h2 style="color: #d32f2f;">Une erreur s'est produite</h2>
    <p>Nous sommes désolés, mais une erreur inattendue est survenue lors du chargement de la page.</p>
    <p>Veuillez rafraîchir la page ou réessayer plus tard.</p>
  `;
  
  document.body.appendChild(errorElement);
}
