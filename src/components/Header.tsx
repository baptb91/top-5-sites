
import { Link } from "react-router-dom";
import { Menu } from "lucide-react";
import { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="py-4 mb-8 md:py-6 md:mb-12">
      <div className="flex items-center justify-between">
        <div className="flex-1">
          <Link to="/" className="text-xl md:text-2xl font-bold text-romance-600">
            {/* Texte supprimé comme demandé */}
          </Link>
        </div>
        
        {/* Navigation desktop */}
        <nav className="hidden md:flex space-x-8">
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
        </nav>

        {/* Mobile menu button */}
        <button 
          className="md:hidden p-2 text-gray-600" 
          onClick={toggleMenu}
          aria-label="Menu"
        >
          <Menu size={24} />
        </button>
      </div>

      {/* Mobile navigation */}
      {isMenuOpen && (
        <nav className="md:hidden mt-4 flex flex-col space-y-4 bg-white py-4 px-2 rounded-md shadow-md">
          <Link 
            to="/" 
            className="text-gray-600 hover:text-romance-600 transition-colors font-medium"
            onClick={() => setIsMenuOpen(false)}
          >
            Accueil
          </Link>
          <Link 
            to="/blog" 
            className="text-gray-600 hover:text-romance-600 transition-colors font-medium"
            onClick={() => setIsMenuOpen(false)}
          >
            Blog
          </Link>
        </nav>
      )}
    </header>
  );
};

export default Header;
