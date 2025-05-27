import React, { useState, useContext } from 'react';
import { CiSearch } from "react-icons/ci";
import { IoPerson } from "react-icons/io5";
import { FaShoppingCart } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { CartContext } from '../context/CartContext';

const Navbar = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const { cartItems } = useContext(CartContext);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const totalQuantity = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <div>
      <div className='bg-[#1e4e9d] flex flex-col md:flex-row md:justify-between md:gap-10 px-4 md:px-20 py-2'>
        <h1 className='text-xs text-white font-family p-3 text-center md:text-left'>
          Winter-Season Sale Up To <span className='text-yellow-300'>25%</span> OFF Use Coupon Code <span className='text-yellow-300 border-2 p-1 border-dotted border-yellow-300'>“SALEON”</span>
        </h1>
        <h1 className='p-3 text-xs text-white text-center md:text-right'>Call Us : +11 222 3333</h1>
      </div>
      <div className='fixed top-0 left-0 right-0 z-50 flex flex-col md:flex-row justify-between gap-4 md:gap-10 bg-[#2557aa] p-4 px-4 md:px-20'>
        <Link to='/' className='text-3xl mt-2 flex text-white font-sand justify-center md:justify-start'>
          Hard<p className='text-yellow-300 ml-1'>ware</p>
        </Link>
        <div className="flex items-center border border-white bg-white rounded-2xl overflow-hidden w-full max-w-xl shadow-sm">
          <input
            type="text"
            placeholder="Search for hardware tools..."
            className="flex-1 px-4 py-2 focus:outline-none"
          />
          <button className="bg-gray-100 px-4 py-2 text-sm text-gray-700 border-r">
            All Categories
          </button>
          <CiSearch className="ml-3 mr-3 text-3xl font-bold text-black bg-yellow-300 rounded-full p-1" />
        </div>
        <div className='flex gap-6 justify-center md:justify-end'>
          <div className='flex gap-2 font-extralight text-white text-sm items-center'>
            <p>Wishlist(0)</p>
          </div>
          <div className='flex gap-2 font-extralight text-white text-sm items-center'>
            Language
          </div>
        </div>
      </div>

      <nav className="fixed top-[72px] left-0 right-0 z-50 bg-[#1e4e9d] py-3 px-4 md:px-20 flex justify-between items-center">
        <div className="flex justify-center gap-20 flex-1">
          <Link to="/" className="text-white hover:text-yellow-300 font-semibold">Home</Link>
          <Link to="/about" className="text-white hover:text-yellow-300 font-semibold">About Us</Link>
          <Link to="/shop" className="text-white hover:text-yellow-300 font-semibold">Shop</Link>
          <Link to="/contact" className="text-white hover:text-yellow-300 font-semibold">Contact Us</Link>
        </div>
        <div className="flex gap-6 justify-end flex-1 relative">
          <div className="relative">
            <button
              onClick={toggleDropdown}
              className="text-white hover:text-yellow-300 font-semibold flex items-center cursor-pointer focus:outline-none"
            >
              Sign In <IoPerson className="ml-2" />
            </button>
            {dropdownOpen && (
              <div className="absolute right-0 mt-2 w-40 bg-white rounded-md shadow-lg z-50">
                <Link
                  to="/signin"
                  className="block px-4 py-2 text-gray-800 hover:bg-yellow-300 hover:text-white"
                  onClick={() => setDropdownOpen(false)}
                >
                  Log In
                </Link>
                <Link
                  to="/register"
                  className="block px-4 py-2 text-gray-800 hover:bg-yellow-300 hover:text-white"
                  onClick={() => setDropdownOpen(false)}
                >
                  Register
                </Link>
                <button
                  className="w-full text-left px-4 py-2 text-gray-800 hover:bg-yellow-300 hover:text-white"
                  onClick={() => {
                    setDropdownOpen(false);
                    // Add logout logic here if needed
                  }}
                >
                  Logout
                </button>
              </div>
            )}
          </div>
          <Link
            to="/cart"
            className="relative text-white hover:text-yellow-300 font-semibold flex items-center"
          >
            My Cart <FaShoppingCart className="ml-2" />
            {totalQuantity > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-600 text-white rounded-full text-xs w-5 h-5 flex items-center justify-center">
                {totalQuantity}
              </span>
            )}
          </Link>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
