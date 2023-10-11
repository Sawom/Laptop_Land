import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import asus from '../../../images/brands/Asus.png';
import apple from '../../../images/brands/apple.png';
import hp from '../../../images/brands/hps.png';
import lenovo from '../../../images/brands/lenovo.png';

const Brands = () => {
    return (
        <div className='container mx-auto my-10'>
            <h1 className='text-center lg:text-4xl md:text-3xl text-xl my-6 font-bold' >
                <span className=' py-4 border-y-4 uppercase' >Our Brands </span> 
            </h1>
           <Swiper
        slidesPerView={3}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper my-10"
      >
        <SwiperSlide> <img className='max-w-full h-auto' src={asus} alt="asus" /> </SwiperSlide>
        <SwiperSlide> <img className='max-w-full h-auto' src={apple} alt="apple" /> </SwiperSlide>
        <SwiperSlide> <img className='max-w-full h-auto' src={hp} alt="hp" /> </SwiperSlide>
        <SwiperSlide> <img className='max-w-full h-auto' src={lenovo} alt="lenovo" /> </SwiperSlide>
        
      </Swiper> 
        </div>
    );
};

export default Brands;