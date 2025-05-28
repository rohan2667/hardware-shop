import React, { useContext, useState } from 'react';
import { CartContext } from './context/CartContext';
import { Link } from 'react-router-dom';
import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";
import Newsletter from './components/Newsletter';

const topProducts = [
  { id: 1, name: "Cordless Drill", price: "$19.99", rating: 4.5, image: "/images/image_5_1024x1024.jpg" },
  { id: 5, name: "Adjustable Wrench", price: "$29.99", rating: 3.5, image: "/images/image_7_14482163-4d07-497f-a8fb-708688de4bb6.jpg" },
  { id: 11, name: "Electric Sander", price: "$34.99", rating: 4.8, image: "/images/image_14_1461b7a8-a921-4bbf-845c-51e6c2da9e8a.jpg" }
];

const otherProducts = [
  { id: 2, name: "Hammer", price: "$14.99", rating: 3, image: "/images/image_1.jpg", category: ["new", "featured"] },
  { id: 3, name: "Tape Measure", price: "$22.99", rating: 4.2, image: "/images/image_4.jpg", category: ["new", "featured"] },
  { id: 4, name: "Screwdriver Set", price: "$18.99", rating: 3.8, image: "/images/image_6_1024x1024.jpg", category: ["new", "featured"] },
  { id: 6, name: "Level", price: "$25.99", rating: 4.1, image: "/images/image_11.jpg", category: ["new", "top-rated"] },
  { id: 7, name: "Utility Knife", price: "$27.99", rating: 4.7, image: "/images/image_14_314888b1-545d-4ed7-b2c1-ef05736b5351.jpg", category: ["new", "top-rated"] },
  { id: 8, name: "Chisel", price: "$30.99", rating: 4.9, image: "/images/image_15_8dbf766f-213b-4729-bdbe-014fd14321aa.jpg", category: ["new", "top-rated"] },
  { id: 9, name: "Handsaw", price: "$39.99", rating: 5, image: "/images/image_18.jpg", category: ["featured", "top-rated"] },
  { id: 10, name: "Pliers", price: "$24.99", rating: 4, image: "/images/image_14_1461b7a8-a921-4bbf-845c-51e6c2da9e8a.jpg", category: ["featured", "top-rated"] },
  { id: 12, name: "Pipe Wrench", price: "$20.99", rating: 3.9, image: "/images/image_18.jpg", category: ["new", "featured", "top-rated"] },
  { id: 13, name: "Nail Gun", price: "$21.99", rating: 4.3, image: "/images/image_20_76x84.jpg", category: ["featured", "top-rated"] },
  { id: 14, name: "Air Compressor", price: "$23.99", rating: 4.6, image: "/images/banner-1.png", category: ["new", "featured", "top-rated"] }
];

const filters= [
  { key: "new", label: "New Arrival" },
  { key: "featured", label: "Featured" },
  { key: "top-rated", label: "Top Rated" }
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

const Shop = () => {
  const { addToCart } = useContext(CartContext);
  const [selectedFilter, setSelectedFilter] = useState("new");

  const filteredProducts = otherProducts.filter(product => product.category.includes(selectedFilter));
  const allProducts = [...topProducts, ...filteredProducts];

  return (
    <div>
    <div className="p-6 px-4 md:px-20">
      <h1 className="text-3xl font-bold mb-6">Shop</h1>
      <div className="mb-4 flex gap-4">
        {filters.map(filter => (
          <button
            key={filter.key}
            onClick={() => setSelectedFilter(filter.key)}
            className={`px-4 py-2 border rounded ${
              selectedFilter === filter.key ? "bg-blue-500 text-white" : "bg-white text-gray-700"
            }`}
          >
            {filter.label}
          </button>
        ))}
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
        {allProducts.length === 0 && (
          <p className="text-gray-500">No products found for this category.</p>
        )}
        {allProducts.map(product => (
          <Link
            key={product.id}
            to={`/product/${product.id}`}
            className="flex flex-col items-center gap-6 border border-gray-200 p-6 rounded-lg hover:shadow-lg w-full sm:w-auto"
          >
            <img
              src={product.image}
              alt={product.name}
              className="h-[160px] w-[220px] object-cover flex-shrink-0"
            />
            <div className="flex flex-col items-center">
              <span className="font-semibold text-lg">{product.name}</span>
              <span className="font-semibold text-lg">{product.price}</span>
              <div className="flex items-center gap-2 mt-2">
                {renderStars(product.rating)}
                <span className="text-sm text-gray-600">{product.rating.toFixed(1)}</span>
              </div>
              <div className="flex gap-4 mt-4">
                <button
                  onClick={(e) => {
                    e.preventDefault();
                    addToCart(product);
                  }}
                  className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
                >
                  Add to Cart
                </button>
                <button className="bg-[#fdc800] text-black px-4 py-2 rounded hover:bg-yellow-300">
                  Buy now
                </button>
              </div>
            </div>
          </Link>
        ))}
      
      </div>
        
    </div>
<Newsletter/>  </div>
);

};

export default Shop;
