import { Link } from 'react-router-dom';
import { ShoppingCart, User } from 'lucide-react';

const Header = () => {
  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold text-black">Zuri Accessories</Link>
        <nav className="hidden md:flex items-center space-x-8">
          <Link to="/" className="text-gray-600 hover:text-gold transition-colors">Accueil</Link>
          <Link to="/shop" className="text-gray-600 hover:text-gold transition-colors">Boutique</Link>
          <Link to="/about" className="text-gray-600 hover:text-gold transition-colors">À propos</Link>
          <Link to="/contact" className="text-gray-600 hover:text-gold transition-colors">Contact</Link>
        </nav>
        <div className="flex items-center space-x-4">
          <Link to="/cart" className="relative text-gray-600 hover:text-gold transition-colors">
            <ShoppingCart size={24} />
            {/* Add cart count here */}
          </Link>
          <Link to="/login" className="text-gray-600 hover:text-gold transition-colors">
            <User size={24} />
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;