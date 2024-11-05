import React from 'react';
import Slider from "react-slick";


function Product_page() { 


  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear"
  };

  
  return (
<>

 <div className='max-w-screen-2xl container mx-auto mx:px-20 px-5 ' >
 <Slider {...settings}>

        <div>
          <img src="https://www.shutterstock.com/image-vector/colorful-discount-sale-podium-special-260nw-2055955985.jpg" alt="" className='mt-20 px-5 py-5' />
        </div>
        <div>
          <img src="https://www.beiersdorf.com/~/media/Beiersdorf/brands/overview/Beiersdorf-nivea-body-range.jpg?rx=0&ry=0&rw=940&rh=528" alt="" className='mt-20 px-5 py-5' />
        </div>
        <div>
         <img src="https://img.freepik.com/premium-vector/special-offer-poster-shopping-banner-with-blank-product-podium-scene_297886-602.jpg" alt="" className='mt-20 px-5 py-5'/>
        </div>
        <div>
        <img src="https://images.apollo247.in/pub/media/magestore/bannerslider/images/r/e/revital_app_web_8.jpg?tr=q-80,f-webp,w-450,dpr-1,c-at_max" alt="" className='mt-20 px-5 py-5 '/>
        </div>
        <div>
        <img src="https://images.apollo247.in/pub/media/magestore/bannerslider/images/r/i/rivela_app_web_2.jpg?tr=q-80,f-webp,w-450,dpr-1,c-at_max" alt="" className='mt-20 px-5 py-5 '/>
        </div>
        <div>
          <img src="https://images.apollo247.in/pub/media/magestore/bannerslider/images/n/u/nutrigro_app_web.jpg?tr=q-80,f-webp,w-450,dpr-1,c-at_max" alt="" className='mt-20 px-5 py-5 '/>
        </div>
       
      </Slider>
      
 </div> 

 <div >
     
     <div><h1 className='font-bold text-2xl pb-2 mt-28 px-23 py-34' > Nivea  Complete  SkinCare</h1>
   </div>
</div>
{/* ...................card1......................... */}
<div className='flex flex-row justify-start md:items-center md:gap-20 gap-8 flex-wrap dark:bg-slate-900 dark:text-white'>
<div className="card bg-base-100 w-80 shadow-xl ">
  <figure className="px-10 pt-10">
    <img
      src="https://m.media-amazon.com/images/I/51etqNAxhZL.jpg"
      alt="Shoes"
      className="rounded-xl" />
  </figure>
  <div className="card-body items-center text-center dark:bg-slate-900 dark:text-white">
    <h2 className="card-title ">Nivea Cocoa Nourish Moisturising Body Lotion, 400 ml</h2>
    <p className='font-bold text-xl'>₹ 275 </p>
    <span className='text-green-500  font-bold'>50%OFF</span>
    <div className="card-actions">
      <button className="btn btn-primary">ADD</button>
    </div>
  </div>
</div>
{/* ...................card2......................... */}
<div className="card bg-base-100 w-80 shadow-xl dark:bg-slate-900 dark:text-white ">
  <figure className="px-10 pt-10">
    <img
      src="https://m.media-amazon.com/images/I/51cXkIfVBtL._AC_UF1000,1000_QL80_.jpg"
      alt="Shoes"
      className="rounded-xl" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title">Nivea Soft Light Moisturiser Cream, 300 ml</h2>
    <p className='font-bold text-xl'>₹ 275 </p>
    <span className='text-green-500  font-bold'>50%OFF</span>
    <div className="card-actions">
      <button className="btn btn-primary">ADD</button>
    </div>
  </div>
</div>
{/* ...................card3......................... */}
<div className="card bg-base-100 w-80 shadow-xl  dark:bg-slate-900 dark:text-white">
  <figure className="px-10 pt-10">
    <img
      src="https://www.jiomart.com/images/product/original/490052703/nivea-fresh-natural-deodorant-150-ml-product-images-o490052703-p490052703-0-202309201920.jpg?im=Resize=(1000,1000)"
      alt="Shoes"
      className="rounded-xl" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title">Nivea Fresh Natural Deodorant Spray, 150 ml</h2>
    <p className='font-bold text-xl'>₹ 142.4</p>
    <span className='text-green-500  font-bold'>20%OFF</span>
    <div className="card-actions">
      <button className="btn btn-primary">ADD</button>
    </div>
  </div>
</div>
{/* ...................card4......................... */}
<div className="card bg-base-100 w-80 shadow-xl dark:bg-slate-900 dark:text-white ">
  <figure className="px-10 pt-10">
    <img
      src="https://www.jiomart.com/images/product/original/490180140/nivea-24-hour-melt-in-moisture-caring-lip-balm-cherry-shine-4-8-g-product-images-o490180140-p490180140-0-202203170330.jpg?im=Resize=(420,420)"
      alt="Shoes"
      className="rounded-xl" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title">Nivea Cherry Shine Caring Lip Balm, 4.8 gm</h2>
    <p className='font-bold text-xl'>₹ 208.0</p>
    <span className='text-green-500  font-bold'>20%OFF</span>
    <div className="card-actions">
      <button className="btn btn-primary">ADD</button>
    </div>
  </div>
</div>
{/* ...................card5......................... */}
<div className="card bg-base-100 w-80 shadow-xl dark:bg-slate-900 dark:text-white ">
  <figure className="px-10 pt-10">
    <img
      src="https://m.media-amazon.com/images/I/413vqVyE5rL.jpg"
      alt="Shoes"
      className="rounded-xl" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title">Nivea Shea Smooth Milk Moisturising Body Lotion 400 ml | Shea Butter With Deep</h2>
    <p className='font-bold text-xl'>₹ 440.0</p>
    <span className='text-green-500  font-bold'>20%OFF</span>
    <div className="card-actions">
      <button className="btn btn-primary">ADD</button>
    </div>
  </div>
</div>
{/* .................card6....................... */}
<div className="card bg-base-100 w-80 shadow-xl  dark:bg-slate-900 dark:text-white">
  <figure className="px-10 pt-10">
    <img
      src="https://images.apollo247.in/pub/media/catalog/product/n/i/niv0123_2_1.jpg?tr=q-60,f-webp,w-150,dpr-1,c-at_max"
      alt="Shoes"
      className="rounded-xl" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title">Nivea Men Fresh Active Deodorant Spray, 150 ml</h2>
    <p className='font-bold'>₹ 142.0</p>
    <span className='text-green-500  font-bold'>50%OFF</span>
    <div className="card-actions">
      <button className="btn btn-primary">ADD</button>
    </div>
  </div>
</div>
</div>



<div >
    {/* ...............................Auyvadic cards............................  */}
     <div><h1 className='font-bold text-2xl pb-2 mt-28 px-23 py-34' > Best of Ayuvadic Wellnes</h1>
   </div>
</div>

<div className='flex flex-row justify-start md:items-center md:gap-20 gap-8 flex-wrap '>
<div className="card bg-base-100 w-80 shadow-xl dark:bg-slate-900 dark:text-white">
  <figure className="px-10 pt-10">
    <img
      src="https://images.apollo247.in/pub/media/catalog/product/D/H/DHO0101_1-JULY23_1.jpg?tr=q-60,f-webp,w-150,dpr-1,c-at_max"
      alt="Shoes"
      className="rounded-xl" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title">Dhootapapeshwar Asthiposhak, 60 Tablets</h2>
    <p className='font-bold'>₹ 238 </p>
    <span className='text-green-500  font-bold'>15%OFF</span>
    <div className="card-actions">
      <button className="btn btn-primary">ADD</button>
    </div>
  </div>
</div>
{/* ...................card2......................... */}
<div className="card bg-base-100 w-80 shadow-xl dark:bg-slate-900 dark:text-white">
  <figure className="px-10 pt-10">
    <img
      src="https://images.apollo247.in/pub/media/catalog/product/K/O/KOT0056_1-AUG23_1.jpg?tr=q-60,f-webp,w-150,dpr-1,c-at_max"
      alt="Shoes"
      className="rounded-xl" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title">Kottakkal Ayurveda Chyavanaprasam, 500 gm</h2>
    <p className='font-bold'>₹ 242 </p>
    <span className='text-green-500  font-bold'>5%OFF</span>
    <div className="card-actions">
      <button className="btn btn-primary">ADD</button>
    </div>
  </div>
</div>
{/* ...................card3......................... */}
<div className="card bg-base-100 w-80 shadow-xl dark:bg-slate-900 dark:text-white">
  <figure className="px-10 pt-10">
    <img
      src="https://images.apollo247.in/pub/media/catalog/product/A/V/AVP0239_1.jpg?tr=q-60,f-webp,w-150,dpr-1,c-at_max"
      alt="Shoes"
      className="rounded-xl" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title">AVP D-Nil, 30 Capsules</h2>
    <p className='font-bold'>₹ 137</p>
    <span className='text-green-500  font-bold'>17%OFF</span>
    <div className="card-actions">
      <button className="btn btn-primary">ADD</button>
    </div>
  </div>
</div>
{/* ...................card4......................... */}
<div className="card bg-base-100 w-80 shadow-xl dark:bg-slate-900 dark:text-white">
  <figure className="px-10 pt-10">
    <img
      src="https://images.apollo247.in/pub/media/catalog/product/K/O/KOT0060_1-AUG23_1.jpg?tr=q-60,f-webp,w-150,dpr-1,c-at_max"
      alt="Shoes"
      className="rounded-xl" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title">Kottakkal Ayurveda Murivenna, 200 ml</h2>
    <p className='font-bold'>₹ 152.0</p>
    <span className='text-green-500  font-bold'>5%OFF</span>
    <div className="card-actions">
      <button className="btn btn-primary">ADD</button>
    </div>
  </div>
</div>
{/* ...................card5......................... */}
<div className="card bg-base-100 w-80 shadow-xl dark:bg-slate-900 dark:text-white">
  <figure className="px-10 pt-10">
    <img
      src="https://images.apollo247.in/pub/media/catalog/product/K/O/KOT0055_1-AUG23_1.jpg?tr=q-60,f-webp,w-150,dpr-1,c-at_max"
      alt="Shoes"
      className="rounded-xl" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title">Kottakkal Ayurveda Brahmarasayanam Paste, 500 gm</h2>
    <p className='font-bold'>₹ 204.0</p>
    <span className='text-green-500  font-bold'>5%OFF</span>
    <div className="card-actions">
      <button className="btn btn-primary">ADD</button>
    </div>
  </div>
</div>
{/* ...........................card6............................ */}
<div className="card bg-base-100 w-80 shadow-xl dark:bg-slate-900 dark:text-white">
  <figure className="px-10 pt-10">
    <img
      src="https://images.apollo247.in/pub/media/catalog/product/D/H/DHO0085_1-JULY23_1.jpg?tr=q-60,f-webp,w-150,dpr-1,c-at_max"
      alt="Shoes"
      className="rounded-xl" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title">Dhootapapeshwar Kanchanar Guggul, 60 Tablets</h2>
    <p className='font-bold'>₹ 146.0</p>
    <span className='text-green-500  font-bold'>15%OFF</span>
    <div className="card-actions">
      <button className="btn btn-primary">ADD</button>
    </div>
  </div>
</div>
</div>

</>

  );
}

export default Product_page;
