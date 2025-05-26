import React, { useState } from 'react'
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdSettings } from "react-icons/io";
import { IoPerson } from "react-icons/io5";
import { FaShoppingCart, FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";
import { Link } from 'react-router-dom';

const topProducts = [
  { id: 1, name: "Product 5", price: "$19.99", rating: 4.5, image: "/images/5-76x84.jpg" },
  { id: 5, name: "Product 9", price: "$29.99", rating: 3.5, image: "/images/9-76x84.jpg" },
  { id: 11, name: "Product 16", price: "$34.99", rating: 4.8, image: "/images/16-76x84.jpg" }
];

const otherProducts = [
  { id: 2, name: "Product 6", price: "$14.99", rating: 3, image: "/images/6-76x84.jpg", category:[ "new", "featured"] },
  { id: 3, name: "Product 7", price: "$22.99", rating: 4.2, image: "/images/7-76x84.jpg", category:[ "new", "featured"]  },
  { id: 4, name: "Product 8", price: "$18.99", rating: 3.8, image: "/images/8-76x84.jpg", category: [ "new", "featured"]  },
  { id: 6, name: "Product 10", price: "$25.99", rating: 4.1, image: "/images/10-76x84.jpg", category:[ "new", "top-rated"]  },
  { id: 7, name: "Product 11", price: "$27.99", rating: 4.7, image: "/images/11-76x84.jpg", category:[ "new", "top-rated"] },
  { id: 8, name: "Product 12", price: "$30.99", rating: 4.9, image: "/images/12-76x84.jpg", category:[ "new", "top-rated"] },
 { id: 9, name: "Product 13", price: "$39.99", rating: 5, image: "/images/13-76x84.jpg", category:[ "featured", "top-rated"]  },
  { id: 10, name: "Product 14", price: "$24.99", rating: 4, image: "/images/14-76x84.jpg", category:[  "featured", "top-rated"]  },
  { id: 12, name: "Product 18", price: "$20.99", rating: 3.9, image: "/images/18-76x84.jpg", category: [ "new", "featured", "top-rated"]  },
  { id: 13, name: "Product 20", price: "$21.99", rating: 4.3, image: "/images/20-76x84.jpg", category:[  "featured", "top-rated"]  },
  { id: 14, name: "Product 20", price: "$23.99", rating: 4.6, image: "/images/20-267x296.jpg", category:[ "new", "featured", "top-rated"] }
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
          <div className='flex justify-between md:justify-start'>
            <button className="p-1 text-md text-gray-700 border-r">
              All Categories
            </button>
            <GiHamburgerMenu className='mt-2 text-lg ml-1 font-extralight' />
          </div>
          <div className='flex flex-wrap gap-6 md:gap-20 justify-center md:justify-start'>
            <h1 className=' mt-1'>HOME</h1>
            <h1 className=' mt-1'>ABOUT US</h1>
            <h1 className=' mt-1'>SHOP</h1>
            <h1 className=' mt-1'>BRANDS</h1>
            <h1 className=' mt-1'>CONTACT US</h1>
          </div>
          <div className='flex gap-12 justify-center md:justify-start'>
            <div className='flex gap-2'>
              <h1>Sign in</h1>
              <IoPerson className='mt-1' />
            </div>
            <div className='flex gap-2 '>
              <h1>My Cart</h1>
              <FaShoppingCart className='mt-1' />
            </div>
          </div>
        </div>
          <div className='flex flex-col mt-2 gap-6'>
          <img src='/images/main-banner-01-1920x660.png' className='h-[28rem] p-2 w-full object-cover' />
          <div className='flex flex-col md:flex-row gap-6'>
            <img src='/images/subbanner_img1.jpg' className='h-[20rem] p-2 w-full md:w-1/2 object-cover' />
            <img src='/images/subbanner_img2.jpg' className='h-[20rem] p-2 w-full md:w-1/2 object-cover' />
          </div>
          <div className='flex flex-col md:flex-row gap-6'>
            <div className='border border-gray-200 p-6 w-full md:w-1/3 rounded-lg'>
              <h1 className='mb-6 text-2xl font-semibold'>Top Products</h1>
              <hr className='border-1 border-gray-200 mb-6'></hr>
              <div className='flex flex-col gap-8'>
                {topProducts.map(product => (
                  <Link key={product.id} to={`/product/${product.id}`} className='flex flex-col items-center gap-6 border border-gray-200 p-6 rounded-lg hover:shadow-lg w-full'>
                    <img src={product.image} alt={product.name} className='h-[120px] w-[110px] object-cover flex-shrink-0' />
                    <div className='flex flex-col items-center'>
                      <span className='font-semibold text-lg'>{product.name}</span>
                      <span className='font-semibold text-lg'>{product.price}</span>
                      <div className='flex items-center gap-2 mt-2'>
                        {renderStars(product.rating)}
                        <span className='text-sm text-gray-600'>{product.rating.toFixed(1)}</span>
                      </div>
                      <div className='flex gap-4 mt-4'>
                        <button className='bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700'>Add to Cart</button>
                        <button className='bg-gray-300 text-gray-800 px-4 py-2 rounded hover:bg-gray-400'>Add to Wishlist</button>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
            <div className='border border-gray-200 p-6 w-full md:w-2/3 rounded-lg'>
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
              <div className='flex gap-6 flex-wrap'>
                {filteredProducts.map(product => (
                  <Link key={product.id} to={`/product/${product.id}`} className='flex flex-col items-center gap-6 border border-gray-200 p-6 rounded-lg hover:shadow-lg w-full sm:w-auto'>
                    <img src={product.image} alt={product.name} className='h-[120px] w-[110px] object-cover flex-shrink-0' />
                    <div className='flex flex-col items-center'>
                      <span className='font-semibold text-lg'>{product.name}</span>
                      <span className='font-semibold text-lg'>{product.price}</span>
                      <div className='flex items-center gap-2 mt-2'>
                        {renderStars(product.rating)}
                        <span className='text-sm text-gray-600'>{product.rating.toFixed(1)}</span>
                      </div>
                      <div className='flex gap-4 mt-4'>
                        <button className='bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700'>Add to Cart</button>
                        <button className='bg-gray-300 text-gray-800 px-4 py-2 rounded hover:bg-gray-400'>Add to Wishlist</button>
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
          {/* New Best Seller Products Section */}
          <div className='border border-gray-200 p-6 mt-8 rounded-lg'>
            <h1 className='mb-6 text-2xl font-semibold'>Best Seller Products</h1>
            <hr className='border-1 border-gray-200 mb-6'></hr>
            <div className='flex gap-6 flex-wrap'>
              {[...topProducts, ...otherProducts].map(product => (
                <Link key={product.id} to={`/product/${product.id}`} className='flex flex-col items-center gap-6 border border-gray-200 p-6 rounded-lg hover:shadow-lg w-full sm:w-auto'>
                  <img src={product.image} alt={product.name} className='h-[120px] w-[110px] object-cover flex-shrink-0' />
                  <div className='flex flex-col items-center'>
                    <span className='font-semibold text-lg'>{product.name}</span>
                    <span className='font-semibold text-lg'>{product.price}</span>
                    <div className='flex items-center gap-2 mt-2'>
                      {renderStars(product.rating)}
                      <span className='text-sm text-gray-600'>{product.rating.toFixed(1)}</span>
                    </div>
                    <div className='flex gap-4 mt-4'>
                      <button className='bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700'>Add to Cart</button>
                      <button className='bg-gray-300 text-gray-800 px-4 py-2 rounded hover:bg-gray-400'>Add to Wishlist</button>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
          {/* Newsletter Signup Section */}
          <div className='p-6 mt-12 rounded text-center'>
            <p className='mb-4'>Get e-mail updates about our latest shop and special offers.</p>
            <h2 className='text-2xl font-semibold mb-4'>Sign up for our Newsletter</h2>
            <form className='flex flex-col sm:flex-row gap-4 justify-center mx-4 sm:mx-40'>
              <input
                type='email'
                placeholder='Enter your email'
                className='flex-grow p-2 border border-gray-400 rounded'
                required
              />
              <button type='submit' className='bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700'>
                Subscribe
              </button>
            </form>
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
    </div>
  )
}

export default Home;
