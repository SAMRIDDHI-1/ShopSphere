import React from 'react';
import { useStore } from '../store/useStore';
import { ShoppingCart } from 'lucide-react';

const products = [
  {
    id: 1,
    name: "Premium Wireless Headphones",
    price: 199.99,
    description: "High-quality wireless headphones with noise cancellation",
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e",
    category: "Electronics"
  },
  {
    id: 2,
    name: "Smart Watch Pro",
    price: 299.99,
    description: "Advanced smartwatch with health tracking features",
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30",
    category: "Electronics"
  },
  {
    id: 3,
    name: "Leather Laptop Bag",
    price: 79.99,
    description: "Stylish and durable leather laptop bag",
    image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62",
    category: "Accessories"
  },
  {
    id: 4,
    name: "Premium Coffee Maker",
    price: 159.99,
    description: "Professional grade coffee maker for perfect brews",
    image: "https://images.unsplash.com/photo-1517668808822-9ebb02f2a0e6",
    category: "Home"
  },
  {
    id: 5,
    name: "Bluetooth Speaker",
    price: 49.99,
    description: "Portable speaker with deep bass and waterproof design",
    image: "data:image/webp;base64,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",
    category: "Electronics"
  },
  {
    id: 6,
    name: "Fitness Tracker Band",
    price: 69.99,
    description: "Tracks activity, sleep, and heart rate",
    image: "https://images.unsplash.com/photo-1579586337278-3befd40fd17a",
    category: "Fitness"
  },
  {
    id: 7,
    name: "Gaming Mouse",
    price: 39.99,
    description: "Ergonomic design with RGB lighting and high DPI",
    image: "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcStQhDTKxe7ElBl9gl7UMJz4WJWQY2p5rR_AkG1UXQDGFxS3UnU9qfl1YH4pK3hoXqX-rjMToDEtu3TtID-VoRZXwQkn5zJTDJffPPmliEv6AKNloJ-JzwWXw",
    category: "Electronics"
  },
  {
    id: 8,
    name: "Noise Cancelling Earbuds",
    price: 89.99,
    description: "True wireless earbuds with active noise cancellation",
    image: "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcRJU0zg-OsAtEGQnDMyPYHcCVQgwT4VL0JcYC3Q3x0bvfeeu2aSzFtbwXGEfEC0imtHlO47P7xpbL3TJE4oO_7zSVfzVFVpxx41nZCOqXkcdfL-6bGEkq_ieWxDDrMSpIlWVU7EcfM&usqp=CAc",
    category: "Electronics"
  },
  {
    id: 9,
    name: "Stainless Steel Water Bottle",
    price: 25.99,
    description: "Insulated bottle that keeps drinks cold or hot for hours",
    image: "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcTMt0L-trIUOrXiL4YfPJ-1FIMK5JgnwN9H6EM0G9Y5KNBQ6jWlT4xY0pKe-uTqIFVjXsIXJ9JKbnblStqUfPemqsXu2smHyns90JtFUbTi83u9bOixR6MbmzOyJqci0rPlsB0RqI8&usqp=CAc",
    category: "Lifestyle"
  },
  {
    id: 10,
    name: "4K Action Camera",
    price: 119.99,
    description: "Capture adventures with this waterproof 4K camera",
    image: "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcRgPtX-fFop-yTAeNR4Y4_uuliQKUmWhOEsINiu5c5UeBkRoGB-db22-l9lHAMBlCdtBCk2yibtKrK6Y3lZXRFWZDJng0KlNFwAoqp0y3Sm8oF42eyoCMJQ-AE",
    category: "Electronics"
  },
  {
    id: 11,
    name: "Minimalist Desk Lamp",
    price: 45.00,
    description: "Sleek LED desk lamp with adjustable brightness",
    image: "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcSicAnYF35psJgfy_1i22oEyWnwSxsvMX-ZAck9Sac_Yr-uqjH4l5pnw_NLHniUlaDgNt7HMXXLFHs9kBiaUWNw_gFzzQlcAsWQjzbTiistahQdgidNSMiT9g&usqp=CAc",
    category: "Home"
  },
  {
    id: 12,
    name: "Mechanical Keyboard",
    price: 109.99,
    description: "Tactile switches with customizable RGB lighting",
    image: "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcTtjGmAOF7jcXJApHEtU-I18H8vIwzI6NHn3aZYnacJDuYhBeme4NEeHsjPYySjrD7DHxEgnDuIoH0nDKB7sr0dpwMM2YufKKe_vu4_XVDu3zHBefs782ELxvY",
    category: "Electronics"
  },
  {
    id: 13,
    name: "Leather Wallet",
    price: 29.99,
    description: "Genuine leather wallet with multiple compartments",
    image: "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcTWtLme62_4rQor8PCZq0VSCoVp25ZERG1AHUdHX4mijgc1fUw256J7mEFChB0eYqXq1WDO2gwILobmNfX2Ftp1Dbt_zbqWJFXN7zGXkCtOorb7G8iwksnqUcA",
    category: "Accessories"
  },
  {
    id: 14,
    name: "Yoga Mat Pro",
    price: 39.99,
    description: "Non-slip, eco-friendly yoga mat for daily practice",
    image: "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcQ2wG-Khd_Ds6Ccw-QksZhGZG0NuULYIa5s55dcDFfGlG-k-Zv11WvJHSABZ0w-qznS40KHxY0tnWHqfBMetmCbySz6SAqhMIFTY-doAJwQdEyBChI41-YjrQ",
    category: "Fitness"
  },
  {
    id: 15,
    name: "Ceramic Dinner Set",
    price: 89.99,
    description: "Elegant dinnerware set for 4 people",
    image: "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcTdMvHGaPo5EVkJrmslVM8k328BsPOh9PtIxCogjh0xBRQmu5eXiX5wkjbGuWhk5Qb9xvFkzjmn7jKepKUAFnkItPa1IN7HMQuYFXvs1lQ",
    category: "Home"
  },
  {
    id: 16,
    name: "USB-C Charging Dock",
    price: 34.99,
    description: "Multi-port dock compatible with laptops and tablets",
    image: "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcTamlFaVOfrLtlZ-BQQ4T4CoJTQN5cpdEz12wwbur0h04szaM7agSiVZvdKy1eBEVIFFGeAWUrJLcqNeu8X9uM6yUXRb1_-ld_HU1f6XXZ1",
    category: "Electronics"
  },
  {
    id: 17,
    name: "Scented Candles Set",
    price: 24.99,
    description: "Relaxing aromatherapy candle pack",
    image: "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcQMr_-W_2NUB9ZIRw_qCNLcv6naLtHgmlP3kaRjrr5wAg8UEpoVVoqgHRwdP69R9zeF3-KAB0sAVeyXBY2bpNGN5zpJrJDKXAc3eU8ypbKg",
    category: "Lifestyle"
  },
  {
    id: 19,
    name: "Smart LED Light Bulbs",
    price: 49.99,
    description: "Voice-controlled color-changing LED bulbs (4 pack)",
    image: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308",
    category: "Home"
  },
  {
    id: 20,
    name: "Adjustable Dumbbells",
    price: 149.99,
    description: "Space-saving adjustable dumbbell set for home workouts",
    image: "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcSdnw7d8rg8v3Ca3T4tFkc8VutmYiYnOYG5trXZ4U8Zm44DWy51GAcfBvugODQ6gMPfag3yrxevSaN-bZOv6V6A1nK6NTuHI2ELgaa0l5P8qVKBYCQSePobCg",
    category: "Fitness"
  },
  {
    id: 21,
    name: "Silicone AirPods Case",
    price: 9.99,
    description: "Shockproof and dust-resistant case for AirPods",
    image: "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcQQD1hVW8rS2EZ2zTTiyo3Fi88H3m-q9GphsKr5lPB5TBMXqYcprms4CQqfyEIZXKAS74wXjTc7rC6UBRkMaS92DaHpK4yEEh8Q2IKmrKrKF0ACz0CwDjggzg",
    category: "Accessories"
  },
  {
    id: 22,
    name: "Compact Power Bank",
    price: 39.99,
    description: "Fast-charging 10000mAh portable battery",
    image: "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcSNbGtLGuqQseJsaFlowa53WFxlXOI5oa_ZHFEehQjLYc9_5AvvF3GKEcw1dpKxeX6ib3Eo2ACLhlI1Q28_ot3iIkf7NH0Q-7d65UujGa6A7eYvW6unu1HqVfg",
    category: "Electronics"
  },
  {
    id: 23,
    name: "Wooden Phone Stand",
    price: 14.99,
    description: "Eco-friendly phone holder for desks",
    image: "https://m.media-amazon.com/images/I/71vMEOYL6xL.jpg",
    category: "Accessories"
  },
  {
    id: 24,
    name: "Luxury Throw Blanket",
    price: 59.99,
    description: "Ultra-soft fleece blanket for cozy evenings",
    image: "https://m.media-amazon.com/images/I/51XkJNDfZaL.jpg",
    category: "Home"
  },
  {
    id: 25,
    name: "Minimal Analog Watch",
    price: 129.99,
    description: "Elegant wristwatch with minimalist design",
    image: "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcQEZrofd1tsj9fY6V8pLFLtH5zpyqS2yHAK8QDlq-RpjcIJUl4SlZ2O9k5syzmzeHKy2m56LT4qGiinr-gWqIQCbVPoeiDFSoZ5t30cewCD3gw-P0vuJEpqNg",
    category: "Accessories"
  }
];


const Products = () => {
  const addToCart = useStore((state) => state.addToCart);

  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold text-gray-200">Our Products</h1>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {products.map((product) => (
          <div key={product.id} className="bg-gray-400 rounded-xl shadow-sm overflow-hidden">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">
                    {product.name}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4">
                    {product.description}
                  </p>
                </div>
                <span className="text-lg font-bold text-indigo-600">
                  ₹{product.price}
                </span>
              </div>
              <button
                onClick={() => addToCart(product)}
                className="w-full bg-indigo-600 text-white px-4 py-2 rounded-lg flex items-center justify-center space-x-2 hover:bg-indigo-700 transition"
              >
                <ShoppingCart className="h-5 w-5" />
                <span>Add to Cart</span>
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Products;