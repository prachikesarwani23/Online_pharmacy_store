
import React from 'react';
import list from '../../public/list.json';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Card from './Card';
function Categories() {
  const filterData=list.filter((data)=>data.Rowmaterial===15);


  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  return (
    <>
    <div className='max-w-screen-2xl container mx-auto mx:px-20 px-4 mt-14 ' id='Category'>
     
      <div><h1 className='font-bold text-xl pb-2 mt-23 px-23 py-34' > Shop by Categories!</h1>
    </div>

    <div className='max-w-screen-2xl container mx-auto mx:px-20 px-4'>
    <Slider {...settings}>
     {filterData.map((item)=>(
      <Card item={item} key={item.id}/>
     ))}
      </Slider>
    </div>
    </div>
    </>
  );
}

export default Categories;

