import React from 'react'

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css"; 
import Slider from "react-slick";


import list from "../../public/list.json"
import Cards from './Cards';

function Freebook() {
    const filterData=list.filter((data)=>data.category==="Free")

    var settings = {
      dots: true,
      infinite: false,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 3,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
          }
        },
        {
          breakpoint: 768,   // ALL PHONES
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          }
        }
      ]
    };
    
    
          
  return (
    <>
    <div className='max-w-screen-2xl container mx-auto md:px-20 px-4 mt-10 overflow-hidden'>
    <h1 className='font-semibold text-xl pb-2'>Free Offered Courses</h1>
    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odio atque totam quod commodi molestias impedit laudantium, recusandae optio quibusdam. Quam quod corporis assumenda ipsum magnam sint est molestiae nisi? Ipsum hic aliquam culpa nihil esse labore alias quo quae ipsam dolorum, voluptate a voluptas quam.</p>

<div className=" overflow-hidden mt-5 my-3 gap-6 ">
<Slider {...settings}>
  {filterData.map((list) => (
    <div key={list.id} className="px-3 "> {/* left-right spacing for gap */}
      <Cards list={list} />
    </div>
  ))}
</Slider>

</div>
</div>


    </>
  )
}

export default Freebook