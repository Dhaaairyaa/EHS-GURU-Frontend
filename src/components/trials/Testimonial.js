import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import './Carousel.css';
import { EffectCoverflow, Pagination, Navigation } from 'swiper/modules';
import { testimonialsData } from '../../data/TestimonialData';
import TestimonialCard from './TestimonialCard';
const Testimonial = () => {
    return(
        <div className="container text-black bg-richblack-50 pt-48">
            <h1 className="text-center text-[#0a2b14] playfair-display-headingfont text-5xl mb-16 mt-24">What our clients say about us</h1>
          {/* <h1 className="heading">Flower Gallery</h1> */}
          <Swiper
            effect={'coverflow'}
            grabCursor={true}
            centeredSlides={true}
            loop={true}
            slidesPerView={'auto'}
            coverflowEffect={{
              rotate: 5,
              stretch: 10,
              depth: 150,
              modifier: 2.5,
            }}
            pagination={{ el: '.swiper-pagination', clickable: true }}
            navigation={{
              nextEl: '.swiper-button-next',
              prevEl: '.swiper-button-prev',
              clickable: true,
            }}
            modules={[EffectCoverflow, Pagination, Navigation]}
            className="swiper_container"
          >

        {testimonialsData.map((item, index) => (
                <SwiperSlide>
                    <TestimonialCard description={item.description} name={item.name} star = {item.star} post = {item.Post} linkedin={item.Linkedin} />
                </SwiperSlide>
          ))}
            

              <img src="https://firebasestorage.googleapis.com/v0/b/ehsguru-10.appspot.com/o/HomePage%2F8_ehs.png?alt=media&token=1f475ca7-5d78-4067-989a-b1c7f50c5985" alt="slide_image" />

    
        <div className="slider-controler absolute top-1/2 transform -translate-y-1/2 flex">
            <div className="swiper-button-prev slider-arrow mr-2 bg-white p-2 rounded-full shadow-md">
                <ion-icon name="arrow-back-outline"></ion-icon>
                Prev
            </div>
            <div className="swiper-button-next slider-arrow bg-white p-2 rounded-full shadow-md">
                <ion-icon name="arrow-forward-outline"></ion-icon>
                Next
            </div>
        </div>

          </Swiper>
        </div>
      )
    };
export default Testimonial;


