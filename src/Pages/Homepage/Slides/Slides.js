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
                <div className='flex' >
                    <div style={{width: '50%'}}>
                       <p className='text-xl mt-10'>
                        Laptop Land: Your One-Stop Destination for Cutting-Edge Laptops!
                        </p> 
                    </div>
                    <div style={{width: '50%'}}>
                        <img alt='pic1' src={pic1} className='w-full' />
                    </div>
                </div>
                {/* 2 */}
                <div className='flex' >
                    <div style={{width: '50%'}}>
                        
                    </div>
                    <div style={{width: '50%'}}>
                        <img alt='pic2' src={pic2} className='w-full' />
                    </div>
                </div>
                {/* 3 */}
                <div className='flex' >
                    <div style={{width: '50%'}}>
                        
                    </div>
                    <div style={{width: '50%'}}>
                        <img alt='pic1' src={pic3} className='w-full' />
                    </div>
                </div>
                {/* 4 */}
                <div className='flex' >
                    <div style={{width: '50%'}}>
                        
                    </div>
                    <div style={{width: '50%'}}>
                        <img alt='pic1' src={pic4} className='w-full' />
                    </div>
                </div>
                {/* 5 */}
                <div className='flex' >
                    <div style={{width: '50%'}} >
                        <p>
                            
                        </p>
                    </div>
                    <div style={{width: '50%'}}>
                        <img alt='pic5' src={pic5} className='w-full' />
                    </div>
                </div>
                {/* 6 */}
                <div className='flex' >
                    <div style={{width: '50%'}}>
                        dsgs
                    </div>
                    <div style={{width: '50%'}}>
                        <img alt='pic6' src={pic6} className='w-full' />
                    </div>
                </div>
            </Carousel>
        </div>
    );
};

export default Slides;