
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="flex items-center justify-between py-6 mb-12">
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
      </nav>
    </header>
  );
};

export default Header;
