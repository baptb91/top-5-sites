
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="flex items-center justify-between py-6 mb-12">
      <Link to="/" className="text-2xl font-bold text-gray-900">
        Top5 Rencontres
      </Link>
      <nav>
        <ul className="flex space-x-8">
          <li>
            <Link 
              to="/" 
              className="text-gray-600 hover:text-romance-600 transition-colors"
            >
              Accueil
            </Link>
          </li>
          <li>
            <Link 
              to="/blog" 
              className="text-gray-600 hover:text-romance-600 transition-colors"
            >
              Blog
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
