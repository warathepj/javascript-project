import React, { useState } from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

function SliderCard({ images }) {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    variableWidth: true,
    responsive: [
      {
        breakpoint: 640, // mobile breakpoint
        settings: {
          variableWidth: false,
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="w-full">
      <Slider {...settings}>
        {images.length > 0 ? (
          images.map((image, index) => (
            <div className='mx-2' key={index}>
              <a href={image} target="_blank" rel="noopener noreferrer">
                <img
                  className="w-60 sm:w-full"
                  src={image}
                  alt="No image"
                />
              </a>
            </div>
          ))
        ) : (
          <pre>No images available</pre>
        )}
      </Slider>
    </div>
  );
}

export default SliderCard;
