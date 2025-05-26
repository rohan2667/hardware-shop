import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';

const CartOverlay = () => {
  const { cartItems, isCartOpen, toggleCart, removeFromCart } = useContext(CartContext);

  if (!isCartOpen) return null;

  return (
    <div className="fixed inset-0 z-60 flex justify-center items-start pt-20 backdrop-blur-sm">
      <div className="bg-white rounded shadow-lg w-96 max-h-[80vh] overflow-y-auto p-4 relative">
        <button
          onClick={toggleCart}
          className="absolute top-2 right-2 text-gray-600 hover:text-gray-900 font-bold text-xl"
          aria-label="Close cart"
        >
          &times;
        </button>
        <h2 className="text-2xl font-semibold mb-4">My Cart</h2>
        {cartItems.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          <ul className="space-y-4">
            {cartItems.map(item => (
              <li key={item.id} className="flex justify-between items-center border-b pb-2">
                <div>
                  <p className="font-semibold">{item.name}</p>
                  <p className="text-sm text-gray-600">Quantity: {item.quantity}</p>
                </div>
                <button
                  onClick={() => removeFromCart(item.id)}
                  className="text-red-600 hover:text-red-800 font-bold"
                  aria-label={`Remove ${item.name} from cart`}
                >
                  Remove
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default CartOverlay;
