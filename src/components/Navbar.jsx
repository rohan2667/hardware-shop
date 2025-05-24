import React from 'react'
import { CiSearch } from "react-icons/ci";
import { IoPerson } from "react-icons/io5";
import { FaShoppingCart } from "react-icons/fa";

const Navbar = () => {
  return (
    <div className=''>
    <div className='bg-[#1e4e9d] flex gap-40 '>
        <div className='mx-20 flex gap-[42rem]'>
<h1 className='text-xs text-white font-family p-3'>Winter-Season Sale Up To <span className='text-yellow-300'>25%</span> OFF Use Coupon Code <span className='text-yellow-300 border-2 p-1 border-dotted border-yellow-300'>“SALEON”</span></h1>
<h1 className='p-3 text-xs text-white '>Call Us : +11 222 3333</h1></div>
    </div>
    <div className='flex   justify-between gap-10 bg-[#2557aa] p-4'>
        <div className='mx-20 flex gap-72 items-center justify-between '>
  <h1 className='text-xl flex text-white'>
            Hard<p className='text-yellow-300'>ware</p>
            
        </h1>

<div className="flex items-center border border-white bg-white rounded-2xl overflow-hidden w-full max-w-xl shadow-sm">
  {/* All Categories button */}
 

  {/* Input field */}
  <input
    type="text"
    placeholder="Search for hardware tools..."
    className="flex-1 px-4 py-2 focus:outline-none"
  />

   <button className="bg-gray-100 px-4 py-2 text-sm text-gray-700 border-r">
    All Categories
  </button>

  {/* Search button */}
  
  <CiSearch  className="ml-3 mr-3 text-3xl font-bold text-black bg-yellow-300 rounded-full p-1" />
   </div>

<div className='flex gap-6'>

<div className='flex gap-2 font-extralight text-white text-sm '>
        {/* <h1 className=' text-white'>Sign in</h1>
            <IoPerson className='mt- text-xl text-white ' /> */}
            <p>Wishlist(0)</p>
</div>


<div className='flex gap-2 font-extralight text-white text-sm'>
        {/* <h1 className=' text-white'>My Cart</h1>
        <FaShoppingCart  className='mt- text-xl text-white '/></div> */}
        Language
        </div> 
        </div>
    </div>
    </div>
    </div>
  )
}

export default Navbar