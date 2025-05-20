import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingBag, ShoppingCart } from 'lucide-react';
import { useStore } from '../store/useStore';

const Navbar = () => {
  const cart = useStore((state) => state.cart);

  return (
    <nav className="bg-black shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center space-x-2">
            <ShoppingBag className="h-6 w-6 text-indigo-600" />
            <span className="text-xl font-bold text-gray-200">ShopSphere</span>
          </Link>
          <div className="flex items-center space-x-8">
            <Link to="/products" className="text-gray-100 hover:text-gray-400">
              Products
            </Link>
            <Link to="/cart" className="relative">
              <ShoppingCart className="h-6 w-6 text-gray-600" />
              {cart.length > 0 && (
                <span className="absolute -top-2 -right-2 bg-indigo-600 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  {cart.length}
                </span>
              )}
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;