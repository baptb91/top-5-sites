
import { useLocation, Link, Navigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { Helmet } from "react-helmet";

const NotFound = () => {
  const location = useLocation();
  const [shouldRedirect, setShouldRedirect] = useState(false);
  const path = location.pathname;

  useEffect(() => {
    // Log the 404 error for monitoring
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );

    // Check if the path contains 'blog/' but the specific blog page wasn't found
    // This helps with recovering from potentially mistyped blog URLs
    if (path.includes('/blog/') && !shouldRedirect) {
      // Set a timeout to redirect to the blog main page after a few seconds
      const timer = setTimeout(() => {
        setShouldRedirect(true);
      }, 5000);
      
      return () => clearTimeout(timer);
    }
  }, [location.pathname, path, shouldRedirect]);

  // If we determined it's a blog-related URL, redirect to blog main page
  if (shouldRedirect && path.includes('/blog/')) {
    return <Navigate to="/blog" replace />;
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <Helmet>
        <title>Page non trouvée | RencontreCoquine.info</title>
        <meta name="robots" content="noindex, follow" />
        <link rel="canonical" href="https://rencontrecoquine.info" />
      </Helmet>
      
      <div className="text-center px-4 py-10 bg-white rounded-lg shadow-md max-w-lg w-full">
        <h1 className="text-4xl font-bold mb-4 text-gray-900">404</h1>
        <p className="text-xl text-gray-600 mb-6">Cette page n'existe pas</p>
        
        {path.includes('/blog/') && (
          <div className="mb-6">
            <p className="text-gray-600 mb-4">
              Vous serez redirigé vers notre blog dans quelques secondes...
            </p>
            <div className="h-1 bg-gray-200 w-full rounded-full overflow-hidden">
              <div className="bg-romance-500 h-full animate-progress"></div>
            </div>
          </div>
        )}
        
        <div className="space-y-3">
          <Link to="/" className="block w-full text-white bg-romance-600 hover:bg-romance-700 px-6 py-3 rounded transition-colors">
            Accueil
          </Link>
          <Link to="/blog" className="block w-full text-romance-600 bg-white hover:bg-gray-50 border border-romance-600 px-6 py-3 rounded transition-colors">
            Consulter le blog
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
