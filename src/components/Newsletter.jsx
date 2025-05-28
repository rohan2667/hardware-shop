import React from 'react';

const Newsletter = () => {
  return (
<section className="bg-gray-400 text-white w-screen mt-6 py-8">
      <div className="w-full text-center">
        <h2 className="text-2xl font-semibold mb-4">Subscribe to our Newsletter</h2>
        <p className="mb-6">Get the latest updates and offers.</p>
        <form className="flex flex-col  sm:flex-row justify-center gap-4 max-w-md mx-auto">
          <input
            type="email"
            placeholder="Enter your email"
            className="p-3 rounded text-gray-900 bg-amber-50 focus:outline-none flex-grow"
            required
          />
          <button
            type="submit"
            className="bg-yellow-400 text-gray-900 font-semibold px-6 py-3 rounded hover:bg-yellow-300 transition"
          >
            Subscribe
          </button>
        </form>
      </div>
    </section>
  );
};

export default Newsletter;
