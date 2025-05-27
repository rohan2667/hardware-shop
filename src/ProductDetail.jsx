import React, { useContext, useState, useRef } from 'react';
import { useParams, Link } from 'react-router-dom';
import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";
import { TbChecklist } from "react-icons/tb";
import { CartContext } from './context/CartContext';

const allProducts = [
  { id: 1, name: "Cordless Drill", price: "$19.99", rating: 4.5, image: "/images/image_5_1024x1024.jpg", stock: 10 },
  { id: 5, name: "Adjustable Wrench", price: "$29.99", rating: 3.5, image: "/images/image_7_14482163-4d07-497f-a8fb-708688de4bb6.jpg", stock: 5 },
  { id: 9, name: "Handsaw", price: "$39.99", rating: 5, image: "/images/image_18.jpg", stock: 0 },
  { id: 10, name: "Pliers", price: "$24.99", rating: 4, image: "/images/image_14_1461b7a8-a921-4bbf-845c-51e6c2da9e8a.jpg", stock: 7 },
  { id: 11, name: "Electric Sander", price: "$34.99", rating: 4.8, image: "/images/image_14_1461b7a8-a921-4bbf-845c-51e6c2da9e8a.jpg", stock: 3 },
  { id: 2, name: "Hammer", price: "$14.99", rating: 3, image: "/images/image_1.jpg", category: "new", stock: 15 },
  { id: 3, name: "Tape Measure", price: "$22.99", rating: 4.2, image: "/images/image_4.jpg", category: "featured", stock: 8 },
  { id: 4, name: "Screwdriver Set", price: "$18.99", rating: 3.8, image: "/images/image_6_1024x1024.jpg", category: "top-rated", stock: 12 },
  { id: 6, name: "Level", price: "$25.99", rating: 4.1, image: "/images/image_11.jpg", category: "new", stock: 6 },
  { id: 7, name: "Utility Knife", price: "$27.99", rating: 4.7, image: "/images/image_14_314888b1-545d-4ed7-b2c1-ef05736b5351.jpg", category: "featured", stock: 9 },
  { id: 8, name: "Chisel", price: "$30.99", rating: 4.9, image: "/images/image_15_8dbf766f-213b-4729-bdbe-014fd14321aa.jpg", category: "top-rated", stock: 4 },
  { id: 12, name: "Pipe Wrench", price: "$20.99", rating: 3.9, image: "/images/image_18.jpg", category: "new", stock: 11 },
  { id: 13, name: "Nail Gun", price: "$21.99", rating: 4.3, image: "/images/image_20_76x84.jpg", category: "featured", stock: 7 },
  { id: 14, name: "Air Compressor", price: "$23.99", rating: 4.6, image: "/images/banner-1.png", category: "top-rated", stock: 5 }
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
  const { addToCart } = useContext(CartContext);

  const [zoomStyle, setZoomStyle] = React.useState({});
  const imgRef = React.useRef(null);

  if (!product) {
    return <div className="p-8">Product not found.</div>;
  }

  const relatedProducts = allProducts.filter(p => p.category === product.category && p.id !== product.id).slice(0, 4);

  const handleMouseMove = (e) => {
    const { left, top, width, height } = imgRef.current.getBoundingClientRect();
    const x = ((e.pageX - left) / width) * 100;
    const y = ((e.pageY - top) / height) * 100;
    setZoomStyle({
      backgroundImage: `url(${product.image})`,
      backgroundPosition: `${x}% ${y}%`,
      backgroundRepeat: 'no-repeat',
      backgroundSize: '200%',
    });
  };

  const handleMouseLeave = () => {
    setZoomStyle({});
  };

  return (
    <div className="p-4 max-w-5xl mx-auto">
      <div className="flex flex-col md:flex-row gap-8">
        <div
          className="w-full md:w-64 h-auto md:h-64 rounded overflow-hidden cursor-zoom-in"
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          style={zoomStyle}
          ref={imgRef}
        >
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover rounded"
            style={{ opacity: zoomStyle.backgroundImage ? 0 : 1 }}
          />
        </div>
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
            <button
              onClick={() => addToCart(product)}
              className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
            >
              Add to Cart
            </button>
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
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
              {relatedProducts.length > 0 ? relatedProducts.map(rp => (
                <Link key={rp.id} to={`/product/${rp.id}`} className="flex flex-col items-center gap-6 border border-gray-200 p-6 rounded-lg hover:shadow-lg w-full sm:w-auto">
                  <img src={rp.image} alt={rp.name} className="h-[160px] w-[220px] object-cover flex-shrink-0" />
                  <div className="flex flex-col items-center">
                    <span className="font-semibold text-lg">{rp.name}</span>
                    <span className="font-semibold text-lg">{rp.price}</span>
                    <div className="flex items-center gap-2 mt-2">
                      {renderStars(rp.rating)}
                      <span className="text-sm text-gray-600">{rp.rating.toFixed(1)}</span>
                    </div>
                    <div className="flex gap-4 mt-4">
                      <button
                        onClick={() => addToCart(rp)}
                        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
                      >
                        Add to Cart
                      </button>
                      <button className="bg-yellow-400 text-white px-4 py-2 rounded hover:bg-yellow-300">Buy now</button>
                    </div>
                  </div>
                </Link>
              )) : <p className="text-gray-600">No related products found.</p>}
            </div>
          </div>
    </div>
  );
};

export default ProductDetail;
