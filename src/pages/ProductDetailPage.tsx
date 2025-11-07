import { useParams, Link } from 'react-router-dom';
import products from '../data/products.json';
import { ChevronLeft } from 'lucide-react';
import { useCart } from '../hooks/useCart';
import { toast } from 'sonner';
import { useState } from 'react';

const ProductDetailPage = () => {
  const { id } = useParams();
  const product = products.find(p => p.id === Number(id));
  const { addToCart } = useCart();
  const [quantity, setQuantity] = useState(1);

  if (!product) {
    return (
      <div className="container mx-auto px-4 py-12 text-center">
        <h2 className="text-2xl font-bold">Produit non trouvé</h2>
        <Link to="/shop" className="text-gold hover:underline mt-4 inline-block">Retour à la boutique</Link>
      </div>
    );
  }

  const handleAddToCart = () => {
    for (let i = 0; i < quantity; i++) {
      addToCart(product);
    }
    toast.success(`${quantity} x ${product.name} a été ajouté au panier !`);
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <Link to="/shop" className="inline-flex items-center text-gray-600 hover:text-gold mb-8">
        <ChevronLeft size={20} />
        Retour à la boutique
      </Link>
      <div className="grid md:grid-cols-2 gap-12 items-start">
        {/* Image Gallery */}
        <div>
          <img src={product.image} alt={product.name} className="w-full rounded-lg shadow-lg mb-4" />
          <div className="grid grid-cols-4 gap-4">
            {(product.gallery.length > 0 ? product.gallery : [product.image, product.image, product.image]).map((img, index) => (
              <img key={index} src={img} alt={`${product.name} gallery ${index + 1}`} className="w-full rounded-md cursor-pointer hover:opacity-80" />
            ))}
          </div>
        </div>

        {/* Product Info */}
        <div>
          <h1 className="text-4xl font-bold mb-4">{product.name}</h1>
          <p className="text-3xl font-bold text-gold mb-6">{product.price} €</p>
          <p className="text-gray-700 leading-relaxed mb-8">{product.description}</p>
          
          <div className="flex items-center gap-4 mb-8">
            <label htmlFor="quantity" className="font-semibold">Quantité:</label>
            <input type="number" id="quantity" value={quantity} onChange={(e) => setQuantity(Math.max(1, parseInt(e.target.value)))} min="1" className="w-20 p-2 border rounded-md text-center" />
          </div>

          <button onClick={handleAddToCart} className="w-full bg-black text-white py-3 rounded-full text-lg font-bold hover:bg-gray-800 transition-colors">Ajouter au panier</button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailPage;