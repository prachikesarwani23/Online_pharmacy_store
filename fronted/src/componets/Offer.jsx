import React, { useEffect, useState } from 'react';
// import list_for_offer_card from '../../public/list_for_offer_card.json';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
 import Slider from "react-slick";
 import Offercard from './offercard';
 import axios from "axios"
function Offer() {
  const [up,setmedi]=useState([])
  useEffect(()=>{
    const getform=async()=>{
      try{
            const res= await axios.get("http://localhost:4001/Pharmacystore/right");
            console.log(res.data)
            setmedi(res.data)

      }catch(error){
console.log(error)
      }
    }
    getform();
  },[])

    const filterData=up.filter((data)=>data.Button==="BUY NOW");
    
    var settings = {
        dots: true,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 2000,
        cssEase: "linear",
        responsive:[
          {
            breakpoint:1024,
            settings:{
              slidesToShow:3,slidesToShow:1,infinite:true,dots:true,
            },
          },
          {
            breakpoint:600,
            settings:{
              slidesToShow:2,slidesToShow:1,infinite:true,dots:true,
            },
          },
        ]
      };
  return (
   <>
   <div className='max-w-screen-2xl container mx-auto mx:px-20 px-4 mt-14 ' >
<div>
    <h1 className='font-bold text-xl pb-2 mt-23 px-23 py-34' >!SPECIAL OFFER!</h1></div>
   </div>
   <div className="slider-container max-w-screen-2xl container mx-auto mx:px-20 px-4 ">
      <Slider {...settings} className=''>
      {filterData.map((item)=>(
      <Offercard item={item} key={item.id}/>
     ))}
      </Slider>
    </div>
   </>
  );
}

export default Offer;
