import { useState } from 'react';
import { Link } from 'react-router-dom';
import products from '../data/products.json';
import { Search } from 'lucide-react';
import { useCart } from '../hooks/useCart';
import { toast } from 'sonner';

const ShopPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [category, setCategory] = useState('All');
  const { addToCart } = useCart();

  const handleAddToCart = (product) => {
    addToCart(product);
    toast.success(`${product.name} a été ajouté au panier !`);
  }

  const filteredProducts = products.filter(product => {
    return (
      (product.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
       product.category.toLowerCase().includes(searchTerm.toLowerCase())) &&
      (category === 'All' || product.category === category)
    );
  });

  const categories = ['All', ...new Set(products.map(p => p.category))];

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-center mb-8">Notre Boutique</h1>
      
      {/* Filters and Search */}
      <div className="flex flex-col md:flex-row justify-between items-center mb-8 gap-4">
        <div className="relative w-full md:w-1/3">
          <input 
            type="text"
            placeholder="Rechercher un produit..."
            className="w-full p-3 pl-10 border rounded-full focus:outline-none focus:ring-2 focus:ring-gold"
            onChange={e => setSearchTerm(e.target.value)}
          />
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
        </div>
        <div className="flex space-x-2 overflow-x-auto pb-2">
          {categories.map(cat => (
            <button 
              key={cat}
              onClick={() => setCategory(cat)}
              className={`px-4 py-2 rounded-full text-sm font-semibold transition-colors whitespace-nowrap ${category === cat ? 'bg-gold text-black' : 'bg-white text-gray-700 hover:bg-gray-100'}`}>
              {cat === 'All' ? 'Tous' : cat}
            </button>
          ))}
        </div>
      </div>

      {/* Products Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {filteredProducts.map(product => (
          <div key={product.id} className="bg-white rounded-lg shadow-md overflow-hidden group">
            <Link to={`/product/${product.id}`} className="block">
              <img src={product.image} alt={product.name} className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300" />
            </Link>
            <div className="p-4 text-center">
              <h3 className="text-lg font-semibold mb-2">{product.name}</h3>
              <p className="text-xl font-bold text-gold mb-4">{product.price} €</p>
              <button onClick={() => handleAddToCart(product)} className="w-full bg-black text-white py-2 rounded-full hover:bg-gray-800 transition-colors">Ajouter au panier</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ShopPage;