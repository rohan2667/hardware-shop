import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";

const allProducts = [
  { id: 1, name: "Product 5", price: "$19.99", rating: 4.5, image: "/images/5-76x84.jpg", stock: 10 },
  { id: 5, name: "Product 9", price: "$29.99", rating: 3.5, image: "/images/9-76x84.jpg", stock: 5 },
  { id: 9, name: "Product 13", price: "$39.99", rating: 5, image: "/images/13-76x84.jpg", stock: 0 },
  { id: 10, name: "Product 14", price: "$24.99", rating: 4, image: "/images/14-76x84.jpg", stock: 7 },
  { id: 11, name: "Product 16", price: "$34.99", rating: 4.8, image: "/images/16-76x84.jpg", stock: 3 },
  { id: 2, name: "Product 6", price: "$14.99", rating: 3, image: "/images/6-76x84.jpg", category: "new", stock: 15 },
  { id: 3, name: "Product 7", price: "$22.99", rating: 4.2, image: "/images/7-76x84.jpg", category: "featured", stock: 8 },
  { id: 4, name: "Product 8", price: "$18.99", rating: 3.8, image: "/images/8-76x84.jpg", category: "top-rated", stock: 12 },
  { id: 6, name: "Product 10", price: "$25.99", rating: 4.1, image: "/images/10-76x84.jpg", category: "new", stock: 6 },
  { id: 7, name: "Product 11", price: "$27.99", rating: 4.7, image: "/images/11-76x84.jpg", category: "featured", stock: 9 },
  { id: 8, name: "Product 12", price: "$30.99", rating: 4.9, image: "/images/12-76x84.jpg", category: "top-rated", stock: 4 },
  { id: 12, name: "Product 18", price: "$20.99", rating: 3.9, image: "/images/18-76x84.jpg", category: "new", stock: 11 },
  { id: 13, name: "Product 20", price: "$21.99", rating: 4.3, image: "/images/20-76x84.jpg", category: "featured", stock: 7 },
  { id: 14, name: "Product 20", price: "$23.99", rating: 4.6, image: "/images/20-267x296.jpg", category: "top-rated", stock: 5 }
];

const renderStars = (rating) => {
  const stars = [];
  const fullStars = Math.floor(rating);
  const halfStar = rating - fullStars >= 0.5;
  const emptyStars = 5 - fullStars - (halfStar ? 1 : 0);

  for (let i = 0; i < fullStars; i++) {
    stars.push(<FaStar key={"full" + i} className="text-yellow-400" />);
  }
  if (halfStar) {
    stars.push(<FaStarHalfAlt key="half" className="text-yellow-400" />);
  }
  for (let i = 0; i < emptyStars; i++) {
    stars.push(<FaRegStar key={"empty" + i} className="text-yellow-400" />);
  }
  return stars;
};

const ProductDetail = () => {
  const { id } = useParams();
  const productId = parseInt(id, 10);
  const product = allProducts.find(p => p.id === productId);

  if (!product) {
    return <div className="p-8">Product not found.</div>;
  }

  const relatedProducts = allProducts.filter(p => p.category === product.category && p.id !== product.id).slice(0, 4);

  return (
    <div className="p-4 max-w-5xl mx-auto">
      <div className="flex flex-col md:flex-row gap-8">
        <img src={product.image} alt={product.name} className="w-full md:w-64 h-auto md:h-64 object-cover rounded" />
        <div className="flex flex-col gap-4">
          <h1 className="text-3xl font-bold">{product.name}</h1>
          <div className="flex items-center gap-2">
            {renderStars(product.rating)}
            <span className="text-gray-600">{product.rating.toFixed(1)}</span>
          </div>
          <p className="text-xl font-semibold">{product.price}</p>
          <p className={`font-semibold ${product.stock > 0 ? 'text-green-600' : 'text-red-600'}`}>
            {product.stock > 0 ? 'In Stock' : 'Out of Stock'}
          </p>
          <p className="mt-4 text-gray-700">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mt-6">
            <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">Add to Cart</button>
            <button className="bg-gray-300 text-gray-800 px-4 py-2 rounded hover:bg-gray-400">Add to Wishlist</button>
            <button className="bg-gray-300 text-gray-800 px-4 py-2 rounded hover:bg-gray-400">Add to Compare</button>
          </div>
        </div>
      </div>
      <div className="mt-12">
        <h2 className="text-2xl font-semibold mb-4">Reviews</h2>
        <p className="text-gray-600">No reviews yet. Be the first to review this product!</p>
      </div>
      <div className="mt-12">
        <h2 className="text-2xl font-semibold mb-4">Related Products</h2>
        <div className="flex flex-col sm:flex-row gap-6 ">
          {relatedProducts.length > 0 ? relatedProducts.map(rp => (
            <Link key={rp.id} to={`/product/${rp.id}`} className="flex flex-col items-center gap-6 border border-gray-200 p-6 rounded-lg hover:shadow-lg w-full max-w-[340px] sm:w-full">
              <img src={rp.image} alt={rp.name} className="h-[120px] w-[110px] object-cover flex-shrink-0 " />
              <span className="font-semibold text-lg">{rp.name}</span>
              <span className="text-sm text-gray-600">{rp.price}</span>
              <div className='flex flex-col gap-4 mt-4 sm:flex-row  '>
                <button className='bg-blue-600 text-white px-4 py-2 sm: rounded hover:bg-blue-700'>Add to Cart</button>
                <button className='bg-gray-300 text-gray-800 px-4 py-2 rounded hover:bg-gray-400'>Add to Wishlist</button>
              </div>
            </Link>
          )) : <p className="text-gray-600">No related products found.</p>}
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
// This code defines a ProductDetail component that displays detailed information about a specific product.