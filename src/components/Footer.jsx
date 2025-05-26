import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-[#1e4e9d] text-white py-6 mt-12">
      <div className="max-w-7xl mx-auto px-4 md:px-20 flex flex-col md:flex-row justify-between items-center">
        <p className="text-sm">&copy; {new Date().getFullYear()} My Hardware Shop. All rights reserved.</p>
        <div className="flex gap-6 mt-4 md:mt-0">
          <Link to="/" className="hover:text-yellow-300">Home</Link>
          <Link to="/about" className="hover:text-yellow-300">About Us</Link>
          <Link to="/shop" className="hover:text-yellow-300">Shop</Link>
          <Link to="/contact" className="hover:text-yellow-300">Contact Us</Link>
          <Link to="/signin" className="hover:text-yellow-300">Sign In</Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
