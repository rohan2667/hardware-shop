import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const SignIn = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    rememberMe: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Signed in as ' + formData.email + (formData.rememberMe ? ' (Remember Me checked)' : ''));
    setFormData({ email: '', password: '', rememberMe: false });
  };

  return (
    <div className="   rounded  bg-white flex flex-col md:flex-row ">
      {/* New Customer Section */}
      <div>
        <img src='/public/images/signinn.png' className='w-[65rem]'/>
      </div>
      {/* <div className="flex-1 flex flex-col justify-center p-6  rounded-lg">
        <h2 className="text-3xl font-semibold mb-4 text-[#1e4e9d]">New Customer?</h2>
        <p className="text-gray-700 mb-6">
          Create an account to enjoy faster checkout, track your orders, and receive exclusive offers.
        </p>
        <Link to="/register" className='bg-[#fdc800] text-black px-6 py-3  rounded hover:bg-yellow-300 font-semibold w-max'>
          Create Account
        </Link>
      </div> */}

      {/* Sign In Form */}
      <div className='flex flex-col mr-[8rem]'>

      
      <div className="flex-1">
        <h1 className="text-3xl font-bold mb-6 text-center text-[#1e4e9d]">Sign In</h1>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="email" className="block mb-2 font-semibold text-gray-700">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#1e4e9d]"
            />
          </div>
          <div>
            <label htmlFor="password" className="block mb-2 font-semibold text-gray-700">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
              className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#1e4e9d]"
            />
          </div>
          <div className="flex items-center justify-between">
            <label className="flex items-center gap-2">
              <input
                type="checkbox"
                name="rememberMe"
                checked={formData.rememberMe}
                onChange={handleChange}
                className="form-checkbox"
              />
              Remember Me
            </label>
            <Link to="/forgot-password" className="text-blue-600 hover:underline text-sm">
              Forgot Password?
            </Link>
          </div>
          <button
            type="submit"
            className="bg-[#1e4e9d] text-white px-6 py-3 rounded hover:bg-[#163d7a] w-full"
          >
            Sign In
          </button>
        </form>
      </div>
      
      <div className="flex-1 flex flex-col mt-8 justify-center p-6  rounded-lg">
        <h2 className="text-3xl font-semibold mb-4 text-[#1e4e9d]">New Customer?</h2>
        <p className="text-gray-700 mb-6">
          Create an account to enjoy faster checkout, track your orders, and receive exclusive offers.
        </p>
        <Link to="/register" className='bg-[#fdc800] text-black px-6 py-3  rounded hover:bg-yellow-300 font-semibold w-max'>
          Create Account
        </Link>
      </div> 
      </div>
    </div>
  );
};

export default SignIn;
