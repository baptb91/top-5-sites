
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="flex items-center justify-between py-6 mb-12">
      <div className="flex-1">
        <Link to="/" className="text-2xl font-bold text-romance-600">
          {/* Texte supprimé comme demandé */}
        </Link>
      </div>
      
      <nav className="flex space-x-8">
        <Link 
          to="/" 
          className="text-gray-600 hover:text-romance-600 transition-colors font-medium"
        >
          Accueil
        </Link>
        <Link 
          to="/blog" 
          className="text-gray-600 hover:text-romance-600 transition-colors font-medium"
        >
          Blog
        </Link>
        <Link 
          to="/mentions-legales" 
          className="text-gray-600 hover:text-romance-600 transition-colors font-medium"
        >
          Mentions Légales
        </Link>
      </nav>
    </header>
  );
};

export default Header;
