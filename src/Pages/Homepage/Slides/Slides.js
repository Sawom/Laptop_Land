import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import pic1 from '../../../images/slide/pic1.png';
import pic2 from '../../../images/slide/pic2.png';
import pic3 from '../../../images/slide/pic3.png';
import pic4 from '../../../images/slide/pic4.png';
import pic5 from '../../../images/slide/pic5.png';
import pic6 from '../../../images/slide/pic6.png';
import './Slides.css';

const Slides = () => {
    return (
        <div className='container mx-auto'>
            <Carousel showArrows={true} autoPlay={true} loop={true} >
                {/* 1 */}
                <div className='grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1' >
                    <div >
                       <p className='text-xl mt-10 text-left px-5'>
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
                        
                    </div>
                    <div >
                        <img alt='pic2' src={pic2} className='w-full' />
                    </div>
                </div>
                {/* 3 */}
                <div className='grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 ' >
                    <div >
                        
                    </div>
                    <div >
                        <img alt='pic3' src={pic3} className='w-full' />
                    </div>
                </div>
                {/* 4 */}
                <div className='grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 ' >
                    <div >
                        
                    </div>
                    <div >
                        <img alt='pic4' src={pic4} className='w-full' />
                    </div>
                </div>
                {/* 5 */}
                <div className='grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 ' >
                    <div  >
                        <p>
                            
                        </p>
                    </div>
                    <div >
                        <img alt='pic5' src={pic5} className='w-full' />
                    </div>
                </div>
                {/* 6 */}
                <div className='grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 ' >
                    <div >
                        dsgsrurururururutrrurururrrrrrr
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