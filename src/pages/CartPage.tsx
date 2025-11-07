import { Link } from 'react-router-dom';
import { Trash2, Plus, Minus } from 'lucide-react';
import { useCart } from '../hooks/useCart';

const CartPage = () => {
  const { cart, removeFromCart, updateQuantity, clearCart } = useCart();

  const subtotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const shipping = subtotal > 0 ? 10 : 0; // Example shipping cost
  const total = subtotal + shipping;

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-center mb-8">Votre Panier</h1>
      
      {cart.length === 0 ? (
        <div className="text-center">
          <p className="text-xl mb-4">Votre panier est vide.</p>
          <Link to="/shop" className="bg-gold text-black font-bold py-3 px-8 rounded-full hover:bg-opacity-80 transition-transform duration-300 ease-in-out transform hover:scale-105">Continuer vos achats</Link>
        </div>
      ) : (
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="flex justify-end mb-4">
                  <button onClick={clearCart} className="text-sm text-red-500 hover:text-red-700 font-semibold">Vider le panier</button>
              </div>
              {cart.map(item => (
                <div key={item.id} className="flex items-center justify-between border-b pb-4 mb-4">
                  <div className="flex items-center gap-4">
                    <img src={item.image} alt={item.name} className="w-24 h-24 object-cover rounded-md" />
                    <div>
                      <h3 className="font-semibold text-lg">{item.name}</h3>
                      <p className="text-gray-600">{item.price} €</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="flex items-center border rounded-md">
                      <button onClick={() => updateQuantity(item.id, item.quantity - 1)} className="p-2"><Minus size={16}/></button>
                      <input type="text" value={item.quantity} className="w-12 p-2 text-center border-l border-r" readOnly />
                      <button onClick={() => updateQuantity(item.id, item.quantity + 1)} className="p-2"><Plus size={16}/></button>
                    </div>
                    <button onClick={() => removeFromCart(item.id)} className="text-red-500 hover:text-red-700">
                      <Trash2 size={20} />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Order Summary */}
          <div className="bg-white rounded-lg shadow-md p-6 h-fit sticky top-24">
            <h2 className="text-2xl font-bold mb-6 border-b pb-4">Résumé de la commande</h2>
            <div className="space-y-4">
              <div className="flex justify-between">
                <span>Sous-total</span>
                <span>{subtotal.toFixed(2)} €</span>
              </div>
              <div className="flex justify-between text-gray-600">
                <span>Livraison</span>
                <span>{shipping.toFixed(2)} €</span>
              </div>
              <div className="flex justify-between font-bold text-xl border-t pt-4 mt-4">
                <span>Total</span>
                <span>{total.toFixed(2)} €</span>
              </div>
            </div>
            <button className="w-full bg-black text-white mt-6 py-3 rounded-full text-lg font-bold hover:bg-gray-800 transition-colors">Passer la commande</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default CartPage;