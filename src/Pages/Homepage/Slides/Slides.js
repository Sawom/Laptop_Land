import React  from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import pic1 from '../../../images/slide/pic1.png';
import pic2 from '../../../images/slide/pic2.png';
import pic3 from '../../../images/slide/pic3.png';
import pic4 from '../../../images/slide/pic4.png';
import pic5 from '../../../images/slide/pic5.png';
import pic6 from '../../../images/slide/pic6.png';
import './Slides.css';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';

const Slides = () => {
   

    return (
        <div className='container mx-auto'>
           <Carousel 
           className='backColor mySwiper p-5'
           pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
            infiniteLoop showArrows={true} autoPlay={true} loop={true} >
                {/* 1 */}
                <div className='grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1' >
                    <div >
                       <p className='text-2xl mt-10 text-left p-2 font-bold'>
                        Laptop Land: Your One-Stop Destination for Cutting-Edge Laptops!
                        </p> 
                    </div>
                    <div >
                        <img alt='pic1' src={pic1} className='w-full' />
                    </div>
                </div>
                {/* 2 */}
                <div className='grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 ' >
                    <div >
                        <p className='text-2xl mt-10 text-left px-5 font-bold'>
                            Discover the Future of Computing at Laptop Land. Visit Us Today!
                        </p>
                    </div>
                    <div >
                        <img alt='pic2' src={pic2} className='w-full' />
                    </div>
                </div>
                {/* 3 */}
                <div className='grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 ' >
                    <div >
                        <p className='text-2xl mt-10 text-left px-5 font-bold'>
                            Upgrade Your Tech Game with Laptop Land - Quality Laptops at Unbeatable Prices!
                        </p>
                    </div>
                    <div >
                        <img alt='pic3' src={pic3} className='w-full' />
                    </div>
                </div>
                {/* 4 */}
                <div className='grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 ' >
                    <div >
                        <p className='text-2xl mt-10 text-left px-5 font-bold'>
                            Laptop Land - Your Trusted Source for Top Brands and Exceptional Service. Visit Us Today!
                        </p>
                    </div>
                    <div >
                        <img alt='pic4' src={pic4} className='w-full' />
                    </div>
                </div>
                {/* 5 */}
                <div className='grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 ' >
                    <div  >
                        <p className='text-2xl mt-10 text-left px-5 font-bold'>
                            Experience the Laptop Land Difference - Quality, Value, and Expertise Combined!
                        </p>
                    </div>
                    <div >
                        <img alt='pic5' src={pic5} className='w-full' />
                    </div>
                </div>
                {/* 6 */}
                <div className='grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 ' >
                    <div >
                        <p className='text-2xl mt-10 text-left px-5 font-bold'>
                            Your Laptop Dreams Come True at Laptop Land - Visit Us Today!
                        </p>
                    </div>
                    <div >
                        <img alt='pic6' src={pic6} className='w-full' />
                    </div>
                </div>
            </Carousel>
            
        </div>
    );
};

export default Slides;