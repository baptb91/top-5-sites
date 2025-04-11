
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { ErrorBoundary } from 'react-error-boundary';
import App from './App';
import './index.css';

// Composant de secours en cas d'erreur
const ErrorFallback = ({ error, resetErrorBoundary }) => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
      <div className="max-w-md w-full bg-white p-6 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold text-red-600 mb-4">Une erreur est survenue</h2>
        <p className="text-gray-700 mb-4">
          Nous sommes désolés, mais une erreur s'est produite lors du chargement de la page.
        </p>
        <div className="bg-gray-100 p-4 rounded mb-4 overflow-auto">
          <p className="text-red-500 font-mono text-sm">{error.message}</p>
        </div>
        <button
          onClick={resetErrorBoundary}
          className="w-full bg-romance-600 hover:bg-romance-700 text-white font-bold py-2 px-4 rounded"
        >
          Réessayer
        </button>
      </div>
    </div>
  );
};

// Ajouter un gestionnaire d'erreurs global pour attraper les erreurs non gérées
window.addEventListener('error', (event) => {
  console.error('Erreur globale:', event.error);
});

// Ajouter un gestionnaire pour les rejets de promesses non gérés
window.addEventListener('unhandledrejection', (event) => {
  console.error('Promesse rejetée non gérée:', event.reason);
});

const rootElement = document.getElementById("root");

if (!rootElement) {
  console.error("Élément racine non trouvé!");
} else {
  const root = createRoot(rootElement);
  
  try {
    root.render(
      <ErrorBoundary FallbackComponent={ErrorFallback}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </ErrorBoundary>
    );
    console.log("Application React rendue avec succès");
  } catch (error) {
    console.error("Erreur lors du rendu de l'application:", error);
  }
}
