import React, { useState } from 'react';
import { useStore } from '../store/useStore';
import { QrCode } from 'lucide-react';

const Checkout = () => {
  const { cart, total, clearCart } = useStore();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
  });
  const [showUPI, setShowUPI] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setShowUPI(true);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handlePaymentComplete = () => {
    alert('Order placed successfully!');
    clearCart();
  };

  if (cart.length === 0) {
    return (
      <div className="text-center py-16">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">
          No items to checkout
        </h2>
        <a href="/products" className="text-indigo-600 hover:text-indigo-700">
          Continue Shopping
        </a>
      </div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto space-y-8">
      <h1 className="text-3xl font-bold text-gray-300">Checkout</h1>
      
      {!showUPI ? (
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="bg-gray-300 rounded-xl shadow-sm p-6 space-y-4">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">
              Shipping Information
            </h2>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Full Name
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-2 border rounded-lg bg-gray-200 focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Email
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-2 border bg-gray-200 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
              />
            </div>
            <div>
              <label className="block text-sm font-medium bg-gray text-gray-700 mb-1">
                Phone
              </label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-2 border rounded-lg bg-gray-200 focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Address
              </label>
              <textarea
                name="address"
                value={formData.address}
                onChange={handleInputChange}
                required
                rows={3}
                className="w-full px-4 py-2 border rounded-lg bg-gray-200 focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
              />
            </div>
          </div>

          <div className="bg-gray-300 rounded-xl shadow-sm p-6">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">
              Order Summary
            </h2>
            <div className="space-y-2">
              {cart.map((item) => (
                <div key={item.id} className="flex justify-between text-gray-800">
                  <span>{item.name} x {item.quantity}</span>
                  <span>₹{(item.price * item.quantity).toFixed(2)}</span>
                </div>
              ))}
              <div className="border-t pt-2 mt-4">
                <div className="flex justify-between font-semibold text-lg">
                  <span>Total</span>
                  <span>₹{total.toFixed(2)}</span>
                </div>
              </div>
            </div>
          </div>

          <button
            type="submit"
            className="w-full bg-indigo-600 text-white px-6 py-3 rounded-lg hover:bg-indigo-700 transition"
          >
            Proceed to Payment
          </button>
        </form>
      ) : (
        <div className="bg-white rounded-xl shadow-sm p-6 text-center">
          <h2 className="text-xl font-semibold text-gray-100 mb-6">
            Complete Payment
          </h2>
          <div className="mb-6">
            <QrCode className="h-48 w-48 mx-auto mb-4" />
            <p className="text-gray-60 mb-2">
              Scan the QR code with your UPI app to pay
            </p>
            <p className="font-semibold text-lg">₹{total.toFixed(2)}</p>
          </div>
          <button
            onClick={handlePaymentComplete}
            className="w-full bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition"
          >
            Confirm Payment
          </button>
        </div>
      )}
    </div>
  );
}

export default Checkout;