import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';

// Define the types for the product and cart item
interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
}

interface CartItem extends Product {
  quantity: number;
}

// Define the state and actions for the cart
interface CartState {
  cart: CartItem[];
  addToCart: (product: Product) => void;
  removeFromCart: (productId: number) => void;
  updateQuantity: (productId: number, quantity: number) => void;
  clearCart: () => void;
}

export const useCart = create<CartState>()(
  persist(
    (set, get) => ({
      cart: [],
      addToCart: (product) => {
        const cart = get().cart;
        const existingProduct = cart.find(item => item.id === product.id);
        if (existingProduct) {
          // If product exists, update its quantity
          const updatedCart = cart.map(item =>
            item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
          );
          set({ cart: updatedCart });
        } else {
          // If product is new, add it to the cart
          set({ cart: [...cart, { ...product, quantity: 1 }] });
        }
      },
      removeFromCart: (productId) => {
        set({ cart: get().cart.filter(item => item.id !== productId) });
      },
      updateQuantity: (productId, quantity) => {
        if (quantity < 1) {
          get().removeFromCart(productId);
        } else {
          set({ 
            cart: get().cart.map(item => 
              item.id === productId ? { ...item, quantity } : item
            )
          });
        }
      },
      clearCart: () => {
        set({ cart: [] });
      },
    }),
    {
      name: 'zuri-cart-storage', // name of the item in the storage (must be unique)
      storage: createJSONStorage(() => localStorage), // (optional) by default, 'localStorage' is used
    }
  )
);
