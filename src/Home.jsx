import React, { useState } from 'react'
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdSettings } from "react-icons/io";
import { IoPerson } from "react-icons/io5";
import { TbChecklist } from "react-icons/tb";
import { FaShoppingCart, FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";
import { Link } from 'react-router-dom';

const topProducts = [
  { id: 1, name: "Product 5", price: "$19.99", rating: 4.5, image: "/images/image_5_1024x1024.jpg" },
  { id: 5, name: "Product 9", price: "$29.99", rating: 3.5, image: "/images/image_7_14482163-4d07-497f-a8fb-708688de4bb6.jpg" },
  { id: 11, name: "Product 16", price: "$34.99", rating: 4.8, image: "/images/image_14_1461b7a8-a921-4bbf-845c-51e6c2da9e8a.jpg" }
];

const bestSellerProducts = [
  { id: 15, name: "Product 21", price: "$39.99", rating: 4.9, image: "/images/image_14_314888b1-545d-4ed7-b2c1-ef05736b5351.jpg" },
  { id: 16, name: "Product 22", price: "$44.99", rating: 4.7, image: "/images/image_15_8dbf766f-213b-4729-bdbe-014fd14321aa.jpg" },
  { id: 17, name: "Product 23", price: "$49.99", rating: 5.0, image: "/images/image_18.jpg" }
];

const otherProducts = [
  { id: 2, name: "Product 6", price: "$14.99", rating: 3, image: "/images/image_1.jpg", category:[ "new", "featured"] },
  { id: 3, name: "Product 7", price: "$22.99", rating: 4.2, image: "/images/image_4.jpg", category:[ "new", "featured"]  },
  { id: 4, name: "Product 8", price: "$18.99", rating: 3.8, image: "/images/image_6_1024x1024.jpg", category: [ "new", "featured"]  },
  { id: 6, name: "Product 10", price: "$25.99", rating: 4.1, image: "/images/image_11.jpg", category:[ "new", "top-rated"]  },
  { id: 7, name: "Product 11", price: "$27.99", rating: 4.7, image: "/images/image_14_314888b1-545d-4ed7-b2c1-ef05736b5351.jpg", category:[ "new", "top-rated"] },
  { id: 8, name: "Product 12", price: "$30.99", rating: 4.9, image: "/images/image_15_8dbf766f-213b-4729-bdbe-014fd14321aa.jpg", category:[ "new", "top-rated"] },
 { id: 9, name: "Product 13", price: "$39.99", rating: 5, image: "/images/image_18.jpg", category:[ "featured", "top-rated"]  },
  { id: 10, name: "Product 14", price: "$24.99", rating: 4, image: "/images/image_14_1461b7a8-a921-4bbf-845c-51e6c2da9e8a.jpg", category:[  "featured", "top-rated"]  },
  { id: 12, name: "Product 18", price: "$20.99", rating: 3.9, image: "/images/image_18.jpg", category: [ "new", "featured", "top-rated"]  },
  { id: 13, name: "Product 20", price: "$21.99", rating: 4.3, image: "/images/image_20_76x84.jpg", category:[  "featured", "top-rated"]  },
  { id: 14, name: "Product 20", price: "$23.99", rating: 4.6, image: "/images/banner-1.png", category:[ "new", "featured", "top-rated"] }
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

const Home = () => {
  const [selectedFilter, setSelectedFilter] = useState("new");

  const filteredProducts = otherProducts.filter(product => product.category.includes(selectedFilter));

  return (
    <div className='flex flex-col'>
      <div className='mx-4 md:mx-12'>
        <div className='flex flex-col md:flex-row md:justify-between md:items-center gap-4 md:gap-28 p-4'>
        </div>
          <div>
            <img src='/images/slider_banner1.png' className='h-[25rem] p-2 w-full object-cover' />
          </div>
          {/* Two side banners below main banner */}
          <div className='flex gap-4 my-6'>
            <img src='/images/slider_banner1.png' alt='Side Banner 1' className='w-1/2 object-cover rounded-lg' />
            <img src='/images/slider_banner2.png' alt='Side Banner 2' className='w-1/2 object-cover rounded-lg' />
          </div>
         
          {/* Best Seller Product Section */}
          <div className='border border-gray-200 p-6 rounded-lg mb-12'>
            <h1 className='mb-6 text-2xl font-semibold'>Best Sellers</h1>
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8'>
              {bestSellerProducts.map(product => (
                <Link key={product.id} to={`/product/${product.id}`} className='flex flex-col items-center gap-6 border border-gray-200 p-6 rounded-lg hover:shadow-lg w-full sm:w-auto'>
                  <img src={product.image} alt={product.name} className='h-[160px] w-[220px] object-cover flex-shrink-0' />
                  <div className='flex flex-col items-center'>
                    <span className='font-semibold text-lg'>{product.name}</span>
                    <span className='font-semibold text-lg'>{product.price}</span>
                    <div className='flex items-center gap-2 mt-2'>
                      {renderStars(product.rating)}
                      <span className='text-sm text-gray-600'>{product.rating.toFixed(1)}</span>
                    </div>
                    <div className='flex gap-4 mt-4'>
                      <button className='bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700'>Add to Cart</button>
                      <button className='bg-yellow-400 text-white px-4 py-2 rounded hover:bg-yellow-300'>Buy now</button>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>

          {/* Banner above best seller section */}
          <div className='my-8'>
            <img src='/images/slider_banner1.png' alt='Best Seller Banner' className='w-full h-[25rem] object-cover rounded-lg' />
          </div>

          {/* New Customer Section */}
          <div className='flex flex-col md:flex-row items-center justify-between border border-gray-200 p-6 rounded-lg mb-12 gap-6'>
            <div className='flex-1'>
              <h2 className='text-2xl font-semibold mb-2'>New Customer?</h2>
              <p className='text-gray-700'>Create an account to enjoy faster checkout, track orders, and receive exclusive offers.</p>
            </div>
            <div>
              <Link to="/register" className='bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-700 font-semibold'>
                Create Account
              </Link>
            </div>
          </div>

          <div className='flex flex-col md:flex-row gap-6'>
            <div className='border border-gray-200 p-6 w-full md:w-[30rem] rounded-lg'>
              <h1 className='mb-6 text-2xl font-semibold'>Top Products</h1>
              <hr className='border-1 border-gray-200 mb-6'></hr>
              <div className='flex flex-col gap-8'>
                {topProducts.map(product => (
                  <Link key={product.id} to={`/product/${product.id}`} className='flex flex-col items-center gap-6 border border-gray-200 p-6 rounded-lg hover:shadow-lg w-full'>
                    <img src={product.image} alt={product.name} className='h-[160px] w-[220px] object-cover flex-shrink-0' />
                    <div className='flex flex-col items-center'>
                      <span className='font-semibold text-lg'>{product.name}</span>
                      <span className='font-semibold text-lg'>{product.price}</span>
                      <div className='flex items-center gap-2 mt-2'>
                        {renderStars(product.rating)}
                        <span className='text-sm text-gray-600'>{product.rating.toFixed(1)}</span>
                      </div>
                      <div className='flex gap-4 mt-4'>
                        <button className='bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700'>Add to Cart</button>
                        <button className='bg-yellow-400 text-white px-4 py-2 rounded hover:bg-yellow-300'>Buy now</button>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
            <div className='border border-gray-200 p-6 w-full md:w-full rounded-lg'>
              <h1 className='mb-6 text-2xl font-semibold'>Products</h1>
              <div className='flex gap-6 mb-4 flex-wrap'>
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
              <hr className='border-1 border-gray-200 mb-6'></hr>
              <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8  '>
                {filteredProducts.map(product => (
                  <Link key={product.id} to={`/product/${product.id}`} className='flex flex-col items-center gap-6 border border-gray-200 p-6 rounded-lg hover:shadow-lg w-full sm:w-auto'>
                    <div className='flex'>
                    <img src={product.image} alt={product.name} className='h-[160px] w-[220px] object-cover flex-shrink-0' />
                    <TbChecklist   className='size-8 text-gray-500 hover:ease-in-out'/>
                    </div>
                    <div className='flex flex-col items-center'>
                      <span className='font-semibold text-lg'>{product.name}</span>
                      <span className='font-semibold text-lg'>{product.price}</span>
                      <div className='flex items-center gap-2 mt-2'>
                        {renderStars(product.rating)}
                        <span className='text-sm text-gray-600'>{product.rating.toFixed(1)}</span>
                      </div>
                      <div className='flex gap-4 mt-4'>
                        <button className='bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700'>Add to Cart</button>
                        <button className='bg-yellow-400 text-white px-4 py-2 rounded hover:bg-yellow-300'>Buy now</button>
                      </div>
                    </div>
                  </Link>
                ))}
                {filteredProducts.length === 0 && (
                  <p className='text-gray-500'>No products found for this category.</p>
                )}
              </div>
            </div>
          </div>
          {/* Footer Section */}
          <footer className='mt-12 bg-gray-800 text-white p-8 rounded'>
            <div className='max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8'>
              <div>
                <h3 className='text-lg font-semibold mb-4'>Hardware Shop</h3>
                <p className='text-sm mb-2'>1234 Main Street</p>
                <p className='text-sm mb-2'>City, State, ZIP</p>
                <p className='text-sm mb-2'>Phone: (123) 456-7890</p>
                <p className='text-sm mb-2'>Email: support@hardwareshop.com</p>
              </div>
              <div>
                <h3 className='text-lg font-semibold mb-4'>Quick Links</h3>
                <ul className='text-sm space-y-2'>
                  <li><a href='#' className='hover:underline'>Home</a></li>
                  <li><a href='#' className='hover:underline'>Shop</a></li>
                  <li><a href='#' className='hover:underline'>About Us</a></li>
                  <li><a href='#' className='hover:underline'>Contact Us</a></li>
                  <li><a href='#' className='hover:underline'>FAQ</a></li>
                </ul>
              </div>
              <div>
                <h3 className='text-lg font-semibold mb-4'>Support</h3>
                <ul className='text-sm space-y-2'>
                  <li><a href='#' className='hover:underline'>Help Center</a></li>
                  <li><a href='#' className='hover:underline'>Returns</a></li>
                  <li><a href='#' className='hover:underline'>Shipping</a></li>
                  <li><a href='#' className='hover:underline'>Terms of Service</a></li>
                  <li><a href='#' className='hover:underline'>Privacy Policy</a></li>
                </ul>
              </div>
              <div>
                <h3 className='text-lg font-semibold mb-4'>Follow Us</h3>
                <div className='flex space-x-4 text-xl'>
                  <a href='#' aria-label='Facebook' className='hover:text-blue-600'></a>
                  <a href='#' aria-label='Twitter' className='hover:text-blue-400'></a>
                  <a href='#' aria-label='Instagram' className='hover:text-pink-600'></a>
                  <a href='#' aria-label='LinkedIn' className='hover:text-blue-700'></a>
                </div>
              </div>
            </div>
            <div className='mt-8 text-center text-sm text-gray-400'>
              &copy; 2024 Hardware Shop. All rights reserved.
            </div>
          </footer>
        </div>
      </div>
  
  )
}

export default Home;
