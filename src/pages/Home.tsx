import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingBag, Truck, CreditCard, Package } from 'lucide-react';

const Home = () => {
  return (
    <div className="space-y-16">
      <section className="text-center py-20 bg-gradient-to-r from-blue-800 to-green-700 rounded-3xl">
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
          Welcome to ShopSphere
        </h1>
        <p className="text-xl text-white/90 mb-8">
          Your one-stop shop for all your needs
        </p>
        <Link
          to="/products"
          className="bg-white text-indigo-600 px-8 py-3 rounded-full font-semibold hover:bg-opacity-90 transition"
        >
          Shop Now
        </Link>
      </section>

      <section className="grid md:grid-cols-4 gap-8">
        {[
          {
            icon: <ShoppingBag className="h-8 w-8" />,
            title: "Quality Products",
            description: "Curated selection of premium items",
          },
          {
            icon: <Truck className="h-8 w-8" />,
            title: "Fast Delivery",
            description: "Quick and reliable shipping",
          },
          {
            icon: <CreditCard className="h-8 w-8" />,
            title: "Secure Payments",
            description: "Safe and easy UPI transactions",
          },
          {
            icon: <Package className="h-8 w-8" />,
            title: "Easy Returns",
            description: "Hassle-free return policy",
          },
        ].map((feature, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-xl shadow-sm text-center"
          >
            <div className="text-indigo-600 mb-4 flex justify-center">
              {feature.icon}
            </div>
            <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
            <p className="text-gray-600">{feature.description}</p>
          </div>
        ))}
      </section>

      <section className="grid md:grid-cols-2 gap-8">
        <img
          src="https://images.unsplash.com/photo-1441986300917-64674bd600d8"
          alt="Shopping"
          className="rounded-xl object-cover h-[400px] w-full"
        />
        <div className="flex flex-col justify-center space-y-4">
          <h2 className="text-3xl font-bold text-gray-100">
            Why Choose ShopSphere?
          </h2>
          <p className="text-white">
            We offer a carefully curated selection of products, ensuring quality
            and satisfaction. With our secure UPI payment system and reliable
            delivery, shopping has never been easier.
          </p>
          <Link
            to="/products"
            className="bg-indigo-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-indigo-700 transition w-fit"
          >
            Explore Products
          </Link>
        </div>
      </section>
    </div>
  );
}

export default Home;