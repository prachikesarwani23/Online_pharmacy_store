import React from 'react';
import banner from "../../public/Banner.jpeg";
function Banner() {
  return (
    <div className='max-w-screen-2xl container mx-auto mx:px-20 px-4 flex flex-col md:flex-row'>
      <div className=' order-2 md:order-1 w-full md:1/2  mt-12 md:mt-32'>
        <div className='space-y-12'>
        <h1 className='text-4xl font-bold text-black dark:bg-slate-900 dark:text-white' >
            Welcome to <span className='text-green-600'>MEDVITA </span> Pharmacy Store
          <br/>
        Your trusted partner in health and wellness</h1>
        <p className='text-32 text-bold '>
        Medvita Pharmacy is an online medicine store that provides a wide range of pharmaceutical products and healthcare solutions. It typically offers prescription medications, over-the-counter drugs, health supplements, and wellness products. Customers can easily browse the website, place orders, and have their medications delivered to their doorstep.
        </p>

        
        

        <label className="input input-bordered flex items-center gap-2">
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 16 16"
    fill="currentColor"
    className="h-4 w-4 opacity-70">
    <path
      d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
    <path
      d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
  </svg>
  <input type="text" className="grow" placeholder=" Enter your Email to login" />
</label>

<button className="btn btn-outline btn-secondary">Click!</button>
        </div>
        </div>
        <div className=' order-1 w-full md:w-1/2 ' >
    <img src={banner}  className="rounded-full size-80 mt-28 w-96 shadow-xxl  " alt="" />
        </div>
      
    </div>
  );
}

export default Banner;
