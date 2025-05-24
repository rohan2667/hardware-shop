import React from 'react'
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdSettings } from "react-icons/io";
import { IoPerson } from "react-icons/io5";
import { FaShoppingCart } from "react-icons/fa";

const Home = () => {
  return (
    <div className='flex flex-col'>
        <div className='mx-20'>
    <div className='flex gap-32 p-4 '>
        <div className=' flex'>
        <button className="p-1 text-md text-gray-700 border-r">
    All Categories
  </button>
  <GiHamburgerMenu className='mt-2 text-lg ml-1 font-extralight' />
         </div>
 <div className='flex gap-20'>
         <h1 className=' mt-1'>HOME</h1>
                 
         <h1 className=' mt-1'>ABOUT US</h1>

         <h1 className=' mt-1'>SHOP</h1>

                  <h1 className=' mt-1'>BRANDS</h1>


         <h1 className=' mt-1'>CONTACT US</h1>

         </div>
<div className='flex gap-12'>
<div className='flex gap-2'>
     <h1>Sign in</h1>
    <IoPerson className='mt-1'/>
   
</div>

<div className='flex gap-2 '>
    <h1>My Cart</h1>
    <FaShoppingCart className='mt-1'/>
</div>
       </div>

     
        </div>
 <div className ='flex flex-col mt-2 gap-6'>
    <img src='/public/images/main-banner-01-1920x660.png' className='h-[28rem] p-2 w-full'/>

    <div className='flex gap-5'>
    <img src='/public/images/subbanner_img1.jpg' className='h-[21rem] p-2' />
        <img src='/public/images/subbanner_img2.jpg' className='h-[21rem] p-2' />

     </div>
     </div>

     </div>
  </div>
  )
}

export default Home