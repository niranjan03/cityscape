import React from 'react'
import Slider from "react-slick";
import { sildegallery, sildegallerys } from '../data/HomeTwoData/HomeTwoData';

const GallerySlider = () => {
    const settings = {
        slidesToShow: 2,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        speed: 1500,
        dots: false,
        pauseOnHover: false,
        arrows: false,
        centerMode: true,
        variableWidth: true,
        adaptiveHeight: true,
        responsive: [
            {
              breakpoint: 991,
              settings: {
                slidesToShow: 2
              }
            },
            {
              breakpoint: 530,
              settings: {
                slidesToShow: 1
              }
            }
          ]
      };
  return (
    <section className='gallery-section overflow-hidden '>
        <div className='container container-two'>
            <div className='row gy-4 padding-y-60'>
            <Slider {...settings}>
                {
                    sildegallery.map((gallery,galleryIndex)  =>{
                        return (
                            <img src={gallery.image} alt="" key={galleryIndex} />
                        )
                    }
                )
                }
                
            </Slider>
            </div>
            <div className='row gy-4 padding-y-60'>
            <Slider {...settings}>
            {
                    sildegallerys.map((gallery,galleryIndex)  =>{
                        return (
                            <img src={gallery.image} alt="" key={galleryIndex} />
                        )
                    }
                )
                }
            </Slider>
            </div>
        </div>
    </section>
    
  )
}

export default GallerySlider
